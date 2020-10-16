import React from 'react';
import Header from './Header'

const NoMatch = () => {
  let header = <Header />
  return(
    <div>
      {header}
      No Match
    </div>
  )
}

export default NoMatch;