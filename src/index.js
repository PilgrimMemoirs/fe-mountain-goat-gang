import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GroupLookup from './group-lookup.js'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GroupLookup />, document.getElementById('group-lookup'));
registerServiceWorker();
