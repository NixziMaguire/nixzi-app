import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
<BrowserRouter>
    <App />
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
