import styled from "@emotion/styled";

const Page = styled.div`
    background-color: #57aa33;
    height: 100%;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    border-radius: 20px 20px 0 0;
    background-color: white;
`;

const Title = styled.p`
    font-size: 15px;
    font-weight: 700;
`;

const Input = styled.input`
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: none;
    background-color: #f5f5f5;
    padding: 0 1rem;
    font-size: 14px;
    color: black;
    box-sizing: border-box;

    &::placeholder {
        color: #ccc;
    }
`;

interface FoodItemProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FoodName({ value, onChange }: FoodItemProps) {
    return (
        <Page>
            <Container>
                <Title>이름</Title>
                <Input
                    placeholder="식품의 자세한 이름을 적어주세요 (ex. 대파)"
                    value={value}
                    onChange={onChange}
                />
            </Container>
        </Page>
    );
}
