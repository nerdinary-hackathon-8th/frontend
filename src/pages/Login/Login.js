import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/signup');
    };
    return (_jsx(Container, { children: _jsxs(LoginBox, { children: [_jsxs(SubText, { children: ["\uB0C9\uACF0\uC774 \uD0A4\uC6B0\uACE0,", _jsx("br", {}), " \uB0C9\uC7A5\uACE0\uB3C4 \uAD00\uB9AC\uD558\uC790!"] }), _jsx(ProfileCircle, { children: "\uB85C\uACE0" }), _jsx(LoginButton, { onClick: handleLogin, children: "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785" }), _jsx(Footer, { children: "\uD0C4\uC18C\uC808\uAC10\uB2E8\uCCB4 \uB108\uB514\uB108\uB5148th Corp." })] }) }));
};
export default Login;
const Container = styled.div `
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LoginBox = styled.div `
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
const ProfileCircle = styled.div `
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
const LoginButton = styled.button `
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
const SubText = styled.h2 `
	margin-top: 12px;
	color: black;
	text-align: center;
`;
const Footer = styled.div `
	position: absolute;
	bottom: 16px;
	font-size: 10px;
	color: white;
	text-align: center;
	width: 100%;
`;
