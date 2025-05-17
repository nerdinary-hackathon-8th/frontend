import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const handleLogin = () => {
		navigate('/signup');
	};
	return (
		<Container>
			<LoginBox>
				<SubText>
					냉곰이 키우고,
					<br /> 냉장고도 관리하자!
				</SubText>
				<ProfileCircle>로고</ProfileCircle>
				<LoginButton onClick={handleLogin}>로그인/회원가입</LoginButton>
				<Footer>탄소절감단체 너디너디8th Corp.</Footer>
			</LoginBox>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoginBox = styled.div`
	width: 100%;
	max-width: 420px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 150px;
	box-sizing: border-box;
	position: relative;
`;

const ProfileCircle = styled.div`
	width: 120px;
	height: 120px;
	background-color: #d3d3d3;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #00a400;
	font-weight: bold;
`;

const LoginButton = styled.button`
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

const SubText = styled.h2`
	margin-top: 12px;
	color: black;
	text-align: center;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 16px;
	font-size: 10px;
	color: #bcbcbc;
	text-align: center;
	width: 100%;
`;
