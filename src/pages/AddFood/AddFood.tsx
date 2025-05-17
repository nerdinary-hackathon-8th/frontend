import styled from "@emotion/styled";
import FoodList from "../../components/FoodList/FoodList";
import FoodAddIcon from "../../assets/wewewewe.png";
import BackButtonImg from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
`;

const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 140px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    line-height: 120px;
    text-align: center;
    user-select: none;
    background: linear-gradient(180deg, #9aeb70 0%, #54a731 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
`;

const BackButton = styled.img`
    position: absolute;
    left: 20px;
    height: 20px;
    cursor: pointer;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 900;
    color: white;
    /* 가운데 정렬은 flex의 justify-content: center에서 처리 */
`;

const Icon = styled.img`
    position: absolute;
    left: 50px;
    width: 330px;
`;

const AddFood = () => {
    const navigate = useNavigate();

    return (
        <Page>
            <Header>
                <HeaderTop>
                    <BackButton src={BackButtonImg} onClick={() => navigate(-1)} />
                    <Title>음식추가</Title>
                </HeaderTop>
                <Icon src={FoodAddIcon} />
            </Header>
            <FoodList />
        </Page>
    );
};


export default AddFood;
