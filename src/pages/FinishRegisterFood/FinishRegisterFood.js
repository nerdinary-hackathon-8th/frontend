import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NNangGGom from "../../assets/nnangGGom.png";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
const Page = styled.div `
    display: flex;
    height: 100vh;
    padding-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img `
    width: 252px;
`;
const Title = styled.p `
    font-weight: 700;
    font-size: 28px;
    margin: 0 0 12px 0;
    color: black;
`;
const Highlight = styled.span `
    color: #00a400;
`;
const Subtitle = styled.p `
    font-weight: 500;
    font-size: 16px;
    color: #6b6b6b;
    margin: 0 0 24px 0;
    text-align: center;
    line-height: 1.5;
`;
const Button = styled.button `
    width: 153px;
    padding: 15px;
    margin-left: 10px;
    font-size: 15px;
    font-weight: 700;
    background-color: #00a400;
    border-radius: 10px;
    color: white;
    border: none;
`;
const ButtonContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: 110px;
`;
export default function FinishRegisterFood() {
    const navigate = useNavigate();
    return (_jsxs(Page, { children: [_jsxs(Title, { children: ["\uC74C\uC2DD\uC774 ", _jsx(Highlight, { children: "\uCD94\uAC00" }), " \uB418\uC5C8\uC5B4\uC694"] }), _jsxs(Subtitle, { children: ["\uB0C9\uAF3C\uC774\uAC00 \uC774\uC81C\uBD80\uD130", _jsx("br", {}), " \uB0C9\uC7A5\uACE0 \uAD00\uB9AC\uB97C \uC5F4\uC2EC\uD788 \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694!"] }), _jsx(Image, { src: NNangGGom }), _jsxs(ButtonContainer, { children: [_jsx(Button, { onClick: () => navigate("/addfood"), children: "\uC2DD\uD488 \uB354 \uB123\uAE30" }), _jsx(Button, { onClick: () => navigate("/home"), children: "\uB2E4 \uB123\uC5C8\uC5B4\uC694" })] })] }));
}
