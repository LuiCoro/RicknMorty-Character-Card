import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styling/App.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';

render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
