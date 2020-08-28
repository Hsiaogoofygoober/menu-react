This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Run `npm install` in the terminal first to download the npm libery

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

### `Versions`
node.js version: `v12.18.2`

### `Requirement`

"react": `^16.13.1`<br>
"react-dom": `^16.13.1`<br>
"react-router-dom": `^5.2.0`<br>
"react-scripts": `3.4.1`<br>

### `Usage`
#### `Config file`

```
const itemData =  
[
     {
        id:1,               *The id of the object*
        name:"home",        *Name of the icon button*
        function: Home,     *Fuction of the page*
        path:"/",           *Path of the page*
        icon:"fas fa-home", *The code used from Font Awesome to show the icon*
        exact:true,         *Let the user led to the path correctly*
        titleStyle: 'none', *Set to 'none' when initialize if you want the submenu invisible*
        color:'#4d4d00',    *The initial color of the icon and the name*
    }
    ...
] 

```
```
const itemConfig = {
    background: "#ffffb3",         *The color of menu background*
    fontColor: "#4d4d00",          *The color of icon and font*
    colorChange: "#99ccff"         *The color change to when we click icon or name*
}
```
```
const button={
    listButton:"fas fa-bars fa-2x", *The code used from Font Awesome to show the icon button--list*
    crossButton:"fas fa-times fa-2x"*The code used from Font Awesome to show the icon button--cross*
}
```
```
const screenSize={
    size: 500     *the width when does the screen change,set it to px*
}
```
#### `Change the width of the small-screen menu`
Go to `css` folder to find `background.css`, and then find class<br>
`smallbackground`, change the value of `width`