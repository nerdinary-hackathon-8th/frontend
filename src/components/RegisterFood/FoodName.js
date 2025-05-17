import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
const Page = styled.div `
    background-color: #57aa33;
    height: 100%;
`;
const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    border-radius: 20px 20px 0 0;
    background-color: white;
`;
const ImageWrapper = styled.div `
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
`;
const Img = styled.img `
    width: 50px;
    height: 50px;
`;
const Input = styled.input `
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: none;
    background-color: #f5f5f5;
    padding: 0 1rem;
    font-size: 14px;
    color: black;
    box-sizing: border-box;

    &::placeholder {
        color: #ccc;
    }
`;
export default function FoodName({ imgSrc, value, onChange }) {
    return (_jsx(Page, { children: _jsxs(Container, { children: [_jsx(ImageWrapper, { children: _jsx(Img, { src: imgSrc }) }), _jsx(Input, { placeholder: "\uC2DD\uD488\uC758 \uC790\uC138\uD55C \uC774\uB984\uC744 \uC801\uC5B4\uC8FC\uC138\uC694 (ex. \uB300\uD30C)", value: value, onChange: onChange })] }) }));
}
