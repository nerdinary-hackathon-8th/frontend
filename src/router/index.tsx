import { createBrowserRouter } from 'react-router-dom';

import Root from './Root';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Signup from '../pages/signup/signup';

const webPath = {
	login: () => '/login',
	signup: () => '/signup',
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
	{
		path: webPath.signup(),
		element: <Signup />,
	},
];

export const router = createBrowserRouter(routes);
