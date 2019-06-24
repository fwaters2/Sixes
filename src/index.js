import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/App/App.css';
import PreApp from './Components/PreApp'
import * as serviceWorker from './serviceWorker';
import App from './Components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
