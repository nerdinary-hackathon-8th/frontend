import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import FoodExample from "../../assets/foodExample.png";
const FoodBox = styled.div `
    width: 98px;
    height: 91px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    background-color: gra;
`;
const FoodImage = styled.img `
    width: 45px;
    height: 45px;
    background-color: gray;
    border-radius: 4px;
    object-fit: cover;
    margin-bottom: 8px;
`;
const FoodName = styled.p `
    font-size: 13px;
    color: black;
    margin: 0;
`;
export default function FoodCard({ id, name, icon, isSelected, onClick }) {
    return (_jsxs(FoodBox, { onClick: onClick, children: [_jsx(FoodImage, { src: FoodExample }), _jsx(FoodName, { children: name })] }));
}
