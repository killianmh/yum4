import React from 'react';
import Header from './Header'
import Search from './Search'
import Menu from './Menu'

const Dashboard = () => {
  const links = [
    {
      path: "/recipes",
      name: "Recipes"
    },
    {
      path: "/mealPlan",
      name: "Meal Plan",
      modalLink: true
    },
    {
      path: "/groceryList",
      name: "Grocery List",
      modalLink: true
    },
    {
      path: "/account",
      name: "Account",
      modalLink: true
    },
    {
      path: "/logout",
      name: "Logout"
    }
  ]
  return(
    <div>
      <Header>
        <Menu links={links} />
        <Search />
      </Header>
      Dashboard
    </div>
  )
}

export default Dashboard;