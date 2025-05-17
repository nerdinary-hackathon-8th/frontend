import styled from "@emotion/styled";
import { useLocation, useParams } from "react-router-dom";
import FoodName from "../../components/RegisterFood/FoodName";
import FoodExample from "../../assets/foodExample.png";
import { useState } from "react";
import DateSelect from "../../components/RegisterFood/DateSelect";

const Page = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Divider = styled.div`
    border-bottom: 1.5px solid #f2f2f2;
    margin: 10px;
`;

const Header = styled.div`
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

const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-left: 10px;
    justify-content: center;
`;
export default function RegisterFood() {
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const name = location.state as string;
    const [foodName, setFoodName] = useState<string>("");
    const [purchaseDate, setPurchaseDate] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [isExpiryUnknown, setIsExpiryUnknown] = useState<boolean>(false);
    console.log(foodName);
    return (
        <Page>
            <Header>{name}</Header>
            <FoodName imgSrc={FoodExample} onChange={(e) => setFoodName(e.target.value)} />
            <Divider />
            <DateWrapper>
                <DateSelect
                    label="구매일"
                    dateValue={purchaseDate}
                    onDateChange={setPurchaseDate}
                    placeholder={"오늘 기준으로 자동 설정돼요."}
                />

                <DateSelect
                    label="소비기한"
                    dateValue={expiryDate}
                    onDateChange={setExpiryDate}
                    showCheckbox={true}
                    checkboxLabel="소비기한이 안적혀있어요."
                    checkboxChecked={isExpiryUnknown}
                    onCheckboxChange={setIsExpiryUnknown}
                    placeholder={"(구)유통기한을 입력해요."}
                />
            </DateWrapper>

        </Page>
    );
}
