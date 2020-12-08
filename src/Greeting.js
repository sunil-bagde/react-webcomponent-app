import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { ReactCustomElement,ReactCustomElementWithProps } from 'web-components-with-react';
import myElementStyles from './pane.css';
let c  =       require('./pane.css');
console.log("c", c);


class Greeting extends React.Component {

  render() {
    console.log("props",   this.props);
    return <>
   <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />{

   }
      <style>{""}</style>
     <div className="app-drawer text-2xl text-gray-500">
       <ul className="app-panel">
           <li className="panel-item"> Hello, {this.props.email}</li>
       </ul>
     </div>

    </>;
  }
}

if (!customElements.get('test-app')) {
 customElements.define('test-app', ReactCustomElementWithProps(Greeting, ['app-config', 'app-state',"email"]));
}

export default Greeting;
