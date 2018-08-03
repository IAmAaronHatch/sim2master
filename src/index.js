import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'

// import Dashboard from './component/Dashboard'
// import Wizard from './component/Wizard'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
            <App />
    </HashRouter>
    , document.getElementById('root'));
// registerServiceWorker();
