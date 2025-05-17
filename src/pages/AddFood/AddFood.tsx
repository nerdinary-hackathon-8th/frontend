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
    /* padding-left: 20px;
    padding-right: 20px; */
`;

const Header = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
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
    margin-bottom: 10px;
    cursor: pointer;
    z-index: 100;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 900;
    color: white;
    margin-bottom: 10px;
`;

const Icon = styled.img`
    position: absolute;
    left: 0px;
    top: -20px;
    width: 390px;
`;

const AddFood = () => {
    const navigate = useNavigate();

    return (
        <Page>
            <Header>
                <HeaderTop>
                    <BackButton
                        src={BackButtonImg}
                        onClick={() => {
                            console.log("dfdf");
                            navigate(-1);
                        }}
                    />
                    <Title>음식추가</Title>
                </HeaderTop>
                <Icon src={FoodAddIcon} />
            </Header>
            <FoodList />
        </Page>
    );
};

export default AddFood;
