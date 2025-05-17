import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Root() {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	const token = localStorage.getItem('accessToken');
	// 	if (!token) {
	// 		navigate('/login');
	// 	}
	// }, [navigate]);

	return (
		<div>
			<Outlet />
		</div>
	);
}
