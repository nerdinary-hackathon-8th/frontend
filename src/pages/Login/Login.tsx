import styled from '@emotion/styled';

const Login = () => {
	return (
		<Container>
			<LoginBox>
				<ProfileCircle>로고</ProfileCircle>
				<LoginButton>로그인/회원가입</LoginButton>
				<SubText>냉곰이 키우고, 냉장고도 관리하자!</SubText>
				<Footer>탄소절감단체 너디너디8th Corp.</Footer>
			</LoginBox>
		</Container>
	);
};

export default Login;

const Container = styled.div`
	background: linear-gradient(180deg, #8fe26a 0%, #60c24b 100%);
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
	color: #218c2c;
	font-weight: bold;
`;

const LoginButton = styled.button`
	margin-top: 40px;
	padding: 16px 80px;
	background-color: white;
	color: #218c2c;
	font-weight: bold;
	border: none;
	border-radius: 12px;
	font-size: 18px;
`;

const SubText = styled.div`
	margin-top: 12px;
	color: white;
	font-size: 12px;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 16px;
	font-size: 10px;
	color: white;
	text-align: center;
	width: 100%;
`;
