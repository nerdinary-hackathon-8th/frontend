import styled from "@emotion/styled";
import FoodList from "../../components/FoodList/FoodList";
import FoodAddIcon from "../../assets/wewewewe.png";

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
    font-size: 20px;
    line-height: 120px;
    text-align: center;
    user-select: none;
    background: linear-gradient(180deg, #9aeb70 0%, #54a731 100%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const Icon = styled.img`
    position: absolute;
    left: 50px;
    width: 330px;
`;

const Title = styled.div`
    flex: 1;
    text-align: center;
`;

const AddFood = () => {
    return (
        <Page>
            <Header>
                <Icon src={FoodAddIcon} />
                <Title>음식추가</Title>
            </Header>
            <FoodList />
        </Page>
    );
};

export default AddFood;
