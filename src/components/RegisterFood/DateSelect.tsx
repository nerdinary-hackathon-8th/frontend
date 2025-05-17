import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;

const Label = styled.label`
    font-weight: 700;
    font-size: 18px;
    color: black;
    margin-bottom: 4px;
`;

const PlaceHolder = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #c5c5c5;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 4px;
`;

const DateInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-size: 18px;
    text-align: center;
    width: 140px;
`;

const CalendarIcon = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url("/icons/calendar.svg") no-repeat center center;
    background-size: contain;
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
    return (
        <Container>
            <Label>{label}</Label>
            <PlaceHolder>{placeholder}</PlaceHolder>
            <InputWrapper>
                <DateInput
                    type="date"
                    value={dateValue}
                    onChange={(e) => onDateChange(e.target.value)}
                />
                <CalendarIcon />
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
