import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useLocation, useParams } from "react-router-dom";
import FoodName from "../../components/RegisterFood/FoodName";
import FoodExample from "../../assets/foodExample.png";
import { useState } from "react";
import DateSelect from "../../components/RegisterFood/DateSelect";
import StorageSelector from "../../components/RegisterFood/StorageSelector";
import { useNavigate } from "react-router-dom";
const Page = styled.div `
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;
const Divider = styled.div `
    border-bottom: 1.5px solid #f2f2f2;
    margin: 10px;
`;
const Header = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    height: 120px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    line-height: 120px;
    text-align: center;
    user-select: none;
    background: linear-gradient(180deg, #9aeb70 0%, #54a731 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const DateWrapper = styled.div `
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-left: 10px;
    justify-content: center;
`;
const RegisterButton = styled.button `
    background-color: #00a400;
    font-size: 17px;
    width: 320px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 18px;
    border-radius: 10px;
    color: white;
    border: none;
    margin-top: 25px;
`;
export default function RegisterFood() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state;
    const [foodName, setFoodName] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [isExpiryUnknown, setIsExpiryUnknown] = useState(false);
    const handleStorageChange = (value) => {
        console.log("보관 id값:", value);
    };
    return (_jsxs(Page, { children: [_jsx(Header, { children: name }), _jsx(FoodName, { imgSrc: FoodExample, onChange: (e) => setFoodName(e.target.value) }), _jsx(Divider, {}), _jsxs(DateWrapper, { children: [_jsx(DateSelect, { label: "\uAD6C\uB9E4\uC77C", dateValue: purchaseDate, onDateChange: setPurchaseDate, placeholder: "오늘 기준으로 자동 설정돼요." }), _jsx(DateSelect, { label: "\uC18C\uBE44\uAE30\uD55C", dateValue: expiryDate, onDateChange: setExpiryDate, showCheckbox: true, checkboxLabel: "\uC18C\uBE44\uAE30\uD55C\uC774 \uC548\uC801\uD600\uC788\uC5B4\uC694.", checkboxChecked: isExpiryUnknown, onCheckboxChange: setIsExpiryUnknown, placeholder: "(구)유통기한을 입력해요." })] }), _jsx(StorageSelector, { onChange: handleStorageChange }), _jsx(RegisterButton, { onClick: () => navigate("/finish-register-food"), children: "\uC74C\uC2DD \uCD94\uAC00" })] }));
}
