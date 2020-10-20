import React, {
  useState,
  useEffect,
  createContext,
  useContext} from 'react';

const defaultValue = {}

const BreakpointContext = createContext(defaultValue)

const BreakpointProvider = ({children, mediaQueries}) => {
  const [queryMatch, setQueryMatch] = useState({})

  useEffect(() => {
    const mediaQueryList = {}
    const keys = Object.keys(mediaQueries)

    // boolean for cleanup
    let isAttached = false

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce((acc, mediaQuery) => {
        acc[mediaQuery] = !!(mediaQueryList[mediaQuery] && mediaQueryList[mediaQuery].matches)
        return acc
      }, {})
      // set state to updated matches
      setQueryMatch(updatedMatches)
    }

    // if window and matchMedia are supported:
    if (window && window.matchMedia) {
      const matches = {}
      keys.forEach(mediaQuery => {
        if (typeof mediaQueries[mediaQuery] === 'string'){
          // console.log(mediaQuery)
          mediaQueryList[mediaQuery] = window.matchMedia(mediaQueries[mediaQuery])
      
          // get initial match for each query
          matches[mediaQuery] = mediaQueryList[mediaQuery].matches
        } else {
          matches[mediaQuery] = false
        }
        // set initial state
        setQueryMatch(matches)

        isAttached = true
        keys.forEach(mediaQuery => {
          if (typeof mediaQueries[mediaQuery] === 'string'){
            mediaQueryList[mediaQuery].addListener(handleQueryListener)
          }
        })
      })
    }

    // cleanup function
    return () => {
      if(isAttached) {
        keys.forEach(mediaQuery => {
          if (typeof mediaQueries[mediaQuery] === 'string'){
            mediaQueryList[mediaQuery].removeListener(handleQueryListener)
          }
        })
      }
    }
  }, [mediaQueries] )

  return(
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  )
}

const useBreakpoint = () => {
  const context = useContext(BreakpointContext)
  if(context === defaultValue) {
    throw new Error('useBreakpoint must be used inside BreakpointProvider')
  } 
  return context
}

export {useBreakpoint, BreakpointProvider}