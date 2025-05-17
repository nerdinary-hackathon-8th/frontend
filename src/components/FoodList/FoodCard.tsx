import styled from "@emotion/styled";

const FoodBox = styled.div`
    width: 98px;
    height: 91px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    background-color: gra;
`;

const FoodImage = styled.img`
    width: 60px;
    height: 60px;
    background-color: gray;
    border-radius: 4px;
    object-fit: cover;
    margin-bottom: 8px;
`;

const FoodName = styled.p`
    font-size: 13px;
    color: black;
    margin: 0;
`;

interface FoodCardProps {
    id: number;
    name: string;
    icon: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function FoodCard({ id, name, icon, isSelected, onClick }: FoodCardProps) {
    console.log(id, icon, isSelected);
    return (
        <FoodBox onClick={onClick}>
            <FoodImage src={icon} />
            <FoodName>{name}</FoodName>
        </FoodBox>
    );
}
