import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Core/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
