# SDI Blended Weekly Workshop: React

For this activity, you will fulfill the following requirements:

## FIRST STEP:
Fork & clone this repository

## Repo Directions
- Create a new React application using `create-react-app`
- Navigate into your newly created directory and run the command `rm -rf .git/` to remove the `git` repo that `create-react-app` automatically creates
- Run the command `npm start` to start the React server on port 3000
- Open a new terminal in the root directory and navigate to the `server` directory
- From there, run the command `npm install`. Once the installation has completed, run the command `npm start` to start the API server on port 3001. (You will not have to change any of the files in the server. The server exists simply to serve up some data from `thecocktaildb`. Make sure you don't close this terminal or end the process prematurely)

## Project Specs

You will be creating an application that will display a list of cocktails made with a searched ingredient. Your application should do the following at a bare minimum:
- Render a default list of cocktails
- Add cocktails to a favorites list
- Remove cocktails from a favorites list
- Search for new cocktails by ingredient
- Apply styling to the page

Your application should consist of multiple modular React components. Use what you have learned (React component lifecycles, when/how to send HTTP requests, passing props, prop drilling, lifting state, and handling events) to complete this project. Below is a list of API endpoints you can use to retrieve data from the server:
- `GET` `http://localhost:3001/` returns an object with property `drinks` that is an array of drink objects
- `GET` `http://localhost:3001/search/{Your ingredient search query here}` returns an object with property `drinks` that is an array of drink objects that match the search query.

## Stretch Goals
- Create an "Add a Drink" function that adds a drink to your list. This drink should be stored "in-memory", so changes should not be posted to the API.
- Refactor code to utilize React Hooks
- Implement testing using the `React Testing Library`
