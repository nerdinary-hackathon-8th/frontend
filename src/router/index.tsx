import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const webPath = {
	login: () => '/login',
};

const routes = [
	{ path: '*', element: <div>404 Not Found</div> },
	{
		path: '/',
		element: <Root />,
		children: [{ path: 'home', element: <Home /> }],
	},
	{
		path: webPath.login(),
		element: <Login />,
	},
];

export const router = createBrowserRouter(routes);
