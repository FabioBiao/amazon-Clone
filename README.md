This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




## NOTES ON PROJECT
# es7 snippets
# install firebase 
npm i firebase
npm install -g firebase-tools


firebase login
firebase init
    Hosting: Configure and deploy Firebase Hosting sites
    use existing project
    unique page build
npm build  (same as in angular)
firebase deploy

# not able to run scripts?
Commands to run above command

Get-ExecutionPolicy -List    #list all 
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Set-ExecutionPolicy Restricted -Scope CurrentUser 


# State provider
wrapp app in index.js with state provider, so that all components have access to the state
initialState -> como e que a dataLayer é no inicio
reducer -> how we manipulate the data

reducer is always listening for a dispatch
 basket: [...state.basket, action.item],   -->  state.basket o que era antes, mais o action.item

# STRIPE
npm i @stripe/stripe-js
npm i @stripe/react-stripe-js

# backend server
firebase init 
- functions
- javascript
- eslint - y
- npm dependancies - y

above command creates, the functions folder, firebase backend

firebase deploy --only functions   <- Deploy only backend
firebase deploy --only hosting    <- Deploy frontend
firebase deploy                 <- Deploy everything

# to start function backend server
firebase  emulators:start


# orders
to make orders work, create a DB on firestorm... 
Cloud firestorm
test mode....

when checkout use 4242424... combination on card /date


# usefull links.
To check firebase DBs
https://console.firebase.google.com/project/challenge-35e86/firestore/data~2Fusers~2FdtOGSUG8UuMGgWflapB2olITyQl1~2Forders~2Fpi_1HS2RwLm28zo9x0sIIkrrSaj

to validate orders
https://dashboard.stripe.com/test/payouts 



update to Blaze / Spark on fireblaze if you want to deploy functions to firebase