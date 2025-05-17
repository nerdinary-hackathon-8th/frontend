import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
const Container = styled.div `
    padding: 20px;
`;
const Title = styled.p `
    font-weight: 700;
    color: #1a1a1a;
    font-size: 15px;
    margin-bottom: 18px;
`;
const ButtonContainer = styled.div `
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;
const Button = styled.button `
    padding: 8px 24px;
    border-radius: 15px;
    border: 1.5px solid #00a36c;
    background-color: ${({ selected }) => (selected ? "#def2de" : "white")};
    color: ${({ selected }) => (selected ? "#00a36c" : "black")};
    font-weight: ${({ selected }) => (selected ? "800" : "500")};
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #def2de;
    }
`;
const options = [
    { label: "실온", value: 1 },
    { label: "냉장", value: 2 },
    { label: "냉동", value: 3 },
];
export default function StorageSelector({ onChange }) {
    const [selected, setSelected] = useState("");
    useEffect(() => {
        const selectedOption = options.find((opt) => opt.label === selected);
        if (selectedOption && onChange) {
            onChange(selectedOption.value);
        }
    }, [selected, onChange]);
    return (_jsxs(Container, { children: [_jsx(Title, { children: "\uBCF4\uAD00\uBC29\uC2DD" }), _jsx(ButtonContainer, { children: options.map((option) => (_jsx(Button, { selected: selected === option.label, onClick: () => setSelected(option.label), children: option.label }, option.label))) })] }));
}
