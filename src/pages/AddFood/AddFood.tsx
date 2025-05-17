import styled from "@emotion/styled";
import FoodList from "../../components/FoodList/FoodList";

const Header = styled.div`
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

const AddFood = () => {
    return (
        <div>
            <Header>음식추가</Header>
            <FoodList />
        </div>
    );
};

export default AddFood;
