import styled from '@emotion/styled';
import { useState } from 'react';
import { login, join } from '../../controllers/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async () => {
		const handleSuccess = (res: { accessToken: string; refreshToken: string }) => {
			localStorage.setItem('accessToken', res.accessToken);
			localStorage.setItem('refreshToken', res.refreshToken);
			navigate('/');
		};

		const tryLoginOrJoin = async () => {
			try {
				const res = await login({ email, password });
				handleSuccess(res);
			} catch (loginError) {
				console.warn('로그인 실패:', loginError);
				try {
					const res = await join({ email, password });
					handleSuccess(res);
				} catch (joinError) {
					console.error('회원가입 실패:', joinError);
					alert('회원가입에 실패했습니다.');
				}
			}
		};

		tryLoginOrJoin();
	};

	return (
		<Container>
			<LoginBox>
				<ProfileCircle>로고</ProfileCircle>
				<Label>이메일</Label>
				<InputBox value={email} onChange={(e) => setEmail(e.target.value)} />
				<Label>비밀번호</Label>
				<InputBox type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<SubmitButton onClick={handleSubmit}>완료</SubmitButton>
				<Footer>탄소절감단체 너디너디8th Corp.</Footer>
			</LoginBox>
		</Container>
	);
};

export default Signup;

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
`;

const LoginBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 150px;
	box-sizing: border-box;
`;

const ProfileCircle = styled.div`
	width: 120px;
	height: 120px;
	background-color: #d3d3d3;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #218c2c;
	font-weight: bold;
`;

const Label = styled.label`
	width: 80%;
	margin-top: 20px;
	margin-bottom: 6px;
	color: #009b00;
	font-weight: bold;
	font-size: 14px;
`;

const InputBox = styled.input`
	width: 75%;
	padding: 12px 16px;
	border: none;
	border-radius: 10px;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	outline: none;
`;

const SubmitButton = styled.button`
	margin-top: 30px;
	width: 70%;
	padding: 14px 0;
	background-color: #00a000;
	color: white;
	font-weight: bold;
	font-size: 15px;
	border: none;
	border-radius: 8px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
const Footer = styled.div`
	position: absolute;
	bottom: 16px;
	font-size: 10px;
	color: #bcbcbc;
	text-align: center;
	width: 100%;
`;
