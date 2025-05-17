import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
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
  
  /* 날짜 구분자를 점에서 하이픈으로 변경하는 스타일 */
  /* 참고: 이 방법은 브라우저에 따라 작동하지 않을 수 있음 */
  &::-webkit-datetime-edit-text {
    content: "-";
  }
  
  /* 밑줄 추가 */
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field {
    text-decoration: underline;
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


// import styled from "@emotion/styled";
// import { useEffect, useRef } from "react";
// import Calender from "../../assets/addfood/calendar.svg";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
// `;

// const Label = styled.label`
//     font-weight: 700;
//     font-size: 15px;
//     color: black;
// `;

// const PlaceHolder = styled.p`
//     font-weight: 500;
//     font-size: 12px;
//     color: #c5c5c5;
//     margin-top: 5px;
// `;

// const InputWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     padding-bottom: 4px;
//     margin-top: 1px;
// `;

// const DateInput = styled.input`
//     border: none;
//     outline: none;
//     background: transparent;
//     font-size: 14px;
//     text-align: center;
//     width: 30px;
//     border-bottom: 1px solid black;
//     &::-webkit-calendar-picker-indicator {
//         display: none;
//         -webkit-appearance: none;
//     }
// `;

// const CalendarIcon = styled.img`
//     width: 24px;
//     height: 24px;
//     margin-right: 3px;
//     &::-webkit-calendar-picker-indicator {
//         display: none;
//         -webkit-appearance: none;
//     }
// `;

// const CheckboxWrapper = styled.label`
//     display: flex;
//     align-items: center;
//     gap: 6px;
//     font-size: 11px;
//     font-weight: 500;
//     color: #444;
//     cursor: pointer;
//     user-select: none;
// `;
// const HiddenDateInput = styled.input`
//     position: absolute;
//     left: -9999px;
//     opacity: 0;
// `;

// interface DateSelect {
//     label: string;
//     year: string;
//     month: string;
//     day: string;
//     onYearChange: (v: string) => void;
//     onMonthChange: (v: string) => void;
//     onDayChange: (v: string) => void;
//     dateValue: string;
//     onDateChange: (value: string) => void;
//     showCheckbox?: boolean;
//     checkboxLabel?: string;
//     onCheckboxChange?: (checked: boolean) => void;
//     checkboxChecked?: boolean;
//     placeholder: string;
// }

// export default function DateSelect({
//     label, // 구매일 or 판매일
//     year,
//     month,
//     day,
//     onYearChange,
//     onMonthChange,
//     onDayChange,
//     dateValue,
//     onDateChange,
//     showCheckbox = false,
//     checkboxLabel = "소비기한이 안적혀있어요.",
//     onCheckboxChange,
//     checkboxChecked = false,
//     placeholder,
// }: DateSelect) {
//     const inputRef = useRef<HTMLInputElement>(null);
//     const iconRef = useRef<HTMLImageElement>(null);

//     const getTodayDateString = () => {
//         const today = new Date();
//         const yyyy = today.getFullYear();
//         const mm = String(today.getMonth() + 1).padStart(2, "0");
//         const dd = String(today.getDate()).padStart(2, "0");
//         return `${yyyy}-${mm}-${dd}`;
//     };

//     useEffect(() => {
//         if (label === "구매일" && !dateValue) {
//             onDateChange(getTodayDateString());
//         }
//     }, [label, dateValue, onDateChange]);

//     return (
//         <Container>
//             <Label>{label}</Label>
//             <PlaceHolder>{placeholder}</PlaceHolder>
//             <InputWrapper>
//                 <CalendarIcon
//                     ref={iconRef}
//                     src={Calender}
//                     onClick={() => inputRef.current?.showPicker()}
//                 />
//                 <DateInput
//                     type="date"
//                     ref={inputRef}
//                     maxLength={4}
//                     value={year}
//                     placeholder="yyyy"
//                     onChange={(e) => onYearChange(e.target.value.replace(/[^0-9]/g, ""))}
//                     onClick={() => inputRef.current?.showPicker()}
//                 />
//                 <span>-</span>
//                 <DateInput
//                     type="date"
//                     ref={inputRef}
//                     maxLength={2}
//                     value={month}
//                     // placeholder="mm"
//                     onChange={(e) => onMonthChange(e.target.value.replace(/[^0-9]/g, ""))}
//                     onClick={() => inputRef.current?.showPicker()}
//                 />
//                 <span>-</span>
//                 <DateInput
//                     type="date"
//                     ref={inputRef}
//                     maxLength={2}
//                     value={day}
//                     placeholder="dd"
//                     onChange={(e) => onDayChange(e.target.value.replace(/[^0-9]/g, ""))}
//                     onClick={() => inputRef.current?.showPicker()}
//                 />
//             </InputWrapper>
//             {showCheckbox && (
//                 <CheckboxWrapper>
//                     <input
//                         type="checkbox"
//                         checked={checkboxChecked}
//                         onChange={(e) => onCheckboxChange && onCheckboxChange(e.target.checked)}
//                     />
//                     {checkboxLabel}
//                 </CheckboxWrapper>
//             )}
//         </Container>
//     );
// }
