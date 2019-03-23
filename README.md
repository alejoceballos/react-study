# React Study

## New React Application

+ [Official site](https://facebook.github.io/create-react-app/ "Create React App")
+ [Github](https://github.com/facebook/create-react-app "facebook/create-react-app")


#### npx create-react-app `<name of application>`:

```bash
npx create-react-app my--new-app
```

## Updating

+ npm install `lib@version`:

```bash
npm install react-scripts@latest
```

## Basic commands:

Inside project's directory...


Starts the development server:

```bash
npm start
```

Bundles the app into static files for production:

```bash
npm run build
```

Starts the test runner:

```bash
npm test
```
    
Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, 
you can’t go back!

```bash
npm run eject
```

## JSX

+ JSX is NOT HTML;
+ Just syntactic sugar for JavaScript;
+ Have keyword limitations (ex: cannot use "class" for CSS classes, use "className" since
  "class" is a Javascript keyword);
+ Must have only one root element, all the others must be nested inside it; 

## New component structure

+ Core building block of React apps;
+ React app could be depicted as a component tree;

#### Basic

```
.
.
+- public
+- src
  +- ComponentName
    +- ComponentName.js
.
.  
```

#### Component from a class (class-based components)

```js
import React, { Component } from 'react';

class ComponentName extends Component {
  render() {
    return (
      <div className="...">
          . . .
      </div>
    );
  }
}

export default ComponentName;

```

#### Component from a function (Functional components)

```js
import React from 'react';

const componentName = () => {
    return (
        <div className="...">
            . . .
        </div>
    );
}

export default componentName;

```
**NOTE:** functional components is the best practice (according Maximilian Schwarzmüller)

#### Using a custom component:

```js
. . .
import React, { Component } from 'react';
import ComponentName form './ComponentName/ComponentName'
. . .
class AnotherComponent extends Component {
  render() {
    return (
      <div className="...">
         . . .
         <ComponentName>
            . . .
         </ComponentName>            
         . . .
      </div>
    );
  }
}
. . .

```

## Dynamic content

Use curly braces ( "{" and "}" ).

```js
. . .
const componentName = () => {
    return (
        <div className="...">
            A random number would be: { Math.random() }!
        </div>
    );
}
. . .
```

#### Passing arguments to a component:

Declaring...

```js
. . .
const componentName = (props) => {
    return (
        <div className="...">
            A random number would be: { props.randomNumber }!
        </div>
    );
}
. . .
```
... And using it...

```js
. . .
class AnotherComponent extends Component {
  render() {
    return (
      <div className="...">
         . . .
         <ComponentName randomNumber="44" />
      </div>
    );
  }
}
. . .

```

#### Passing components to a component:

+ App:

```js
import React, {Component} from 'react';
import './App.css';
import Person from './Family/Parent';
import Child from './Family/Child';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person pAttr="whatever">
                    <Child cAttr="whoever"/>
                </Person>
            </div>
        );
    }
}

export default App;
```

+ Parent:

```js
import React from 'react';

const parent = (props) => {
    return (
        <div>
            <p>What? {props.pAttr}. {props.children}</p>
        </div>
    )
};

export default parent;
```

+ Child:

```js
import React from 'react';

const child = (props) => {
    return (
        <span>Who? {props.cAttr}.</span>
    )
};

export default child;
```

+ Result (displayed):

```
What? whatever. Who? whoever.
```

+ Result (HTML):

```html
<div id="root">
    <div class="App">
        <div>
            <p>What? whatever. <span>Who? whoever.</span></p>
        </div>
    </div>
</div>
```
