import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import App from '../App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <App />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
