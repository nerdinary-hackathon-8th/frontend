import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import Calender from "../../assets/addfood/calendar.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    font-weight: 700;
    font-size: 15px;
    color: black;
`;

const PlaceHolder = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #c5c5c5;
    margin-top: 5px;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 4px;
    margin-top: 1px;
`;

const DateInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    text-align: center;
    width: 140px;

    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

const CalendarIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: -10px;
    margin-bottom: 2px;
    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 500;
    color: #444;
    cursor: pointer;
    user-select: none;
`;

interface DateSelect {
    label: string;
    dateValue: string;
    onDateChange: (value: string) => void;
    showCheckbox?: boolean;
    checkboxLabel?: string;
    onCheckboxChange?: (checked: boolean) => void;
    checkboxChecked?: boolean;
    placeholder: string;
}

export default function DateSelect({
    label, // 구매일 or 판매일
    dateValue,
    onDateChange,
    showCheckbox = false,
    checkboxLabel = "소비기한이 안적혀있어요.",
    onCheckboxChange,
    checkboxChecked = false,
    placeholder,
}: DateSelect) {
    const inputRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLImageElement>(null);

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

    return (
        <Container>
            <Label>{label}</Label>
            <PlaceHolder>{placeholder}</PlaceHolder>
            <InputWrapper>
                <CalendarIcon
                    ref={iconRef}
                    src={Calender}
                    onClick={() => inputRef.current?.showPicker()}
                />
                <DateInput
                    ref={inputRef}
                    type="date"
                    min="1900-01-01"
                    max="2099-12-31"
                    value={dateValue}
                    onChange={(e) => onDateChange(e.target.value)}
                    onClick={() => inputRef.current?.showPicker()}
                />
            </InputWrapper>
            {showCheckbox && (
                <CheckboxWrapper>
                    <input
                        type="checkbox"
                        checked={checkboxChecked}
                        onChange={(e) => onCheckboxChange && onCheckboxChange(e.target.checked)}
                    />
                    {checkboxLabel}
                </CheckboxWrapper>
            )}
        </Container>
    );
}
