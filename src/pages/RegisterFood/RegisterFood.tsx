import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import FoodName from "../../components/RegisterFood/FoodName";
import { useState } from "react";
import DateSelect from "../../components/RegisterFood/DateSelect";
import StorageSelector from "../../components/RegisterFood/StorageSelector";
import { useNavigate } from "react-router-dom";
import BackButtonImg from "../../assets/back.png";
import Bubble from "../../assets/addfood/Bubble.png";
import { registerFood } from "../../controllers/api";
import type { RegisterFoodRequest } from "../../controllers/api.Prop";

const Page = styled.div`
    width: 100%;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
`;

const Divider = styled.div`
    border-bottom: 1.5px solid #f2f2f2;
    margin: 20px;
`;

const Header = styled.div`
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 270px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    user-select: none;
    background: linear-gradient(180deg, #9aeb70 0%, #54a731 100%);
`;

const Icon = styled.img`
    position: absolute;
    left: 25px;
    top: 45px;
    width: 300px;
`;

const BackButton = styled.img`
    position: absolute;
    left: 20px;
    height: 20px;
`;

const Title = styled.p`
    position: absolute;
    top: 20px;
    color: white;
    width: 100%;
    font-size: px;
    font-weight: 900;
`;

const Image = styled.img`
    margin-bottom: 0px;
    width: 240px;
    margin-top: 80px;
`;
const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-left: 10px;
    justify-content: center;
`;

const RegisterButton = styled.button`
    background-color: #00a400;
    font-size: 17px;
    font-weight: bold;
    width: 100%;
    padding: 18px;
    border-radius: 10px;
    color: white;
    border: none;
    margin-top: 25px;
    margin-bottom: 20px;
`;

export default function RegisterFood() {
    const navigate = useNavigate();

    const location = useLocation();
    const { category, icon } = location.state as { category: string; icon: string };

    const [foodName, setFoodName] = useState<string>("");
    const [purchaseDate, setPurchaseDate] = useState<string>("");
    const [expirationDate, setExpirationDate] = useState<string | null>(null);
    const [isExpiryUnknown, setIsExpiryUnknown] = useState<boolean>(false);
    const [storageMethod, setStorageMethod] = useState<string>("");

    const data: RegisterFoodRequest = {
        foodName: foodName,
        foodCategory: category,
        purchaseDate,
        expirationDate: isExpiryUnknown ? null : expirationDate,
        storageMethod,
    };

    console.log(data);

    const handleStorageChange = (value: string) => {
        setStorageMethod(value);
    };

    const handleFoodSubmit = async () => {
        if ((!expirationDate || expirationDate === "") && !isExpiryUnknown) {
            alert("소비기한을 입력해주세요");
            return;
        }

        if (!foodName || !category || !purchaseDate || !storageMethod) {
            alert("입력사항을 모두 입력해주세요");
            return;
        }

        try {
            await registerFood(data);
            navigate("/finish-register-food");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("등록 중 알 수 없는 오류가 발생했습니다.");
            }
            return;
        }
    };

    return (
        <Page>
            <Header>
                <Title>
                    <BackButton src={BackButtonImg} onClick={() => navigate(-1)} />
                    {category}
                    <Icon src={Bubble} />
                </Title>
                <Image src={icon} />
            </Header>
            <FoodName onChange={(e) => setFoodName(e.target.value)} />
            <Divider style={{ marginTop: "20px", marginBottom: "10px" }} />
            <DateWrapper>
                <DateSelect
                    label="구매일"
                    dateValue={purchaseDate}
                    onDateChange={setPurchaseDate}
                    placeholder={"오늘 기준으로 자동 설정돼요."}
                />

                <DateSelect
                    label="소비기한"
                    dateValue={expirationDate ?? ""}
                    onDateChange={setExpirationDate}
                    showCheckbox={true}
                    checkboxLabel="소비기한이 안적혀있어요."
                    checkboxChecked={isExpiryUnknown}
                    onCheckboxChange={setIsExpiryUnknown}
                    placeholder={"(구)유통기한을 입력해요."}
                />
            </DateWrapper>
            <Divider style={{ marginTop: "15px" }} />
            <StorageSelector onChange={handleStorageChange} category={category} />
            {/* TODO : 입력 완료 체크 */}
            <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px" }}>
                <RegisterButton onClick={handleFoodSubmit}>식품 추가하기</RegisterButton>
            </div>
        </Page>
    );
}
