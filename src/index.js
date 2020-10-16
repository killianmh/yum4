import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data = {
  "accounts" : {
    "account1" : {
      "members" : {
        "user1" : true,
        "user2" : true
      },
      "menus" : {
        "menu1" : {
          "endDate" : "10/20/2020",
          "list" : [ "boxes", "2 cans meat", "seaweed", "toys", "wheelbarrow" ],
          "meals" : [ "recipe1", "recipe2", "recipe1", "recipe2", "recipe1", "recipe2", "recipe1", "recipe2" ],
          "startDate" : "10/10/2020"
        },
        "menu2" : {
          "endDate" : "10/27/2020",
          "list" : [ "bandaids", "2 cans corn", "cucumbers", "hammer", "shakes" ],
          "meals" : [ "recipe1", "recipe1", "recipe1", "recipe1", "recipe2" ],
          "startDate" : "10/21/2020"
        }
      },
      "recipes" : {
        "recipe1" : {
          "image" : "cloudinaryUID1",
          "ingredients" : [ "milk", "2 eggs", "sugar" ],
          "instructions" : [ "Add milk and eggs to a pot.", "Boil, stirring constantly", "Add flavoring" ],
          "name" : "mac and cheese"
        },
        "recipe2" : {
          "image" : "cloudinaryUID2",
          "ingredients" : [ "milk", "2 eggs", "sugar" ],
          "instructions" : [ "Add milk and eggs to a pot.", "Boil, stirring constantly", "Add flavoring" ],
          "name" : "noodles"
        }
      }
    },
    "account2" : {
      "members" : {
        "user1" : true,
        "user3" : true,
        "user4" : true
      },
      "menus" : {
        "menu3" : {
          "endDate" : "10/27/2020",
          "meals" : [ "recipe3", "recipe3", "recipe3", "recipe3", "recipe3" ],
          "startDate" : "10/21/2020"
        }
      },
      "recipes" : {
        "recipe3" : {
          "image" : "cloudinaryUID3",
          "ingredients" : [ "milk", "2 eggs", "sugar" ],
          "instructions" : [ "Add milk and eggs to a pot.", "Boil, stirring constantly", "Add flavoring" ],
          "name" : "mac and cheese"
        }
      }
    }
  },
  "users" : {
    "user1" : {
      "accounts" : {
        "account1" : true,
        "account2" : true
      },
      "name" : "matt killian"
    },
    "user2" : {
      "accounts" : {
        "account1" : true
      },
      "name" : "ellie killian"
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
