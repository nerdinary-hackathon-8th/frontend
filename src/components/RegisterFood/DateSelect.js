import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useEffect } from "react";
const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;
const Label = styled.label `
    font-weight: 700;
    font-size: 15px;
    color: black;
    margin-bottom: 4px;
`;
const PlaceHolder = styled.p `
    font-weight: 500;
    font-size: 12px;
    color: #c5c5c5;
`;
const InputWrapper = styled.div `
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 4px;
`;
const DateInput = styled.input `
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    text-align: center;
    width: 140px;
`;
const CalendarIcon = styled.span `
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("/icons/calendar.svg") no-repeat center center;
    background-size: contain;
`;
const CheckboxWrapper = styled.label `
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 500;
    color: #444;
    cursor: pointer;
    user-select: none;
`;
export default function DateSelect({ label, // 구매일 or 판매일
dateValue, onDateChange, showCheckbox = false, checkboxLabel = "소비기한이 안적혀있어요.", onCheckboxChange, checkboxChecked = false, placeholder, }) {
    const getTodayDateString = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
    };
    useEffect(() => {
        if (label === "구매일" && !dateValue) {
            onDateChange(getTodayDateString());
        }
    }, [label, dateValue, onDateChange]);
    return (_jsxs(Container, { children: [_jsx(Label, { children: label }), _jsx(PlaceHolder, { children: placeholder }), _jsxs(InputWrapper, { children: [_jsx(DateInput, { type: "date", min: "1900-01-01", max: "2099-12-31", value: dateValue, onChange: (e) => onDateChange(e.target.value) }), _jsx(CalendarIcon, {})] }), showCheckbox && (_jsxs(CheckboxWrapper, { children: [_jsx("input", { type: "checkbox", checked: checkboxChecked, onChange: (e) => onCheckboxChange && onCheckboxChange(e.target.checked) }), checkboxLabel] }))] }));
}
