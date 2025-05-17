import styled from "@emotion/styled";

const Page = styled.div`
    background-color: #57aa33;
    height: 100%;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    border-radius: 20px 20px 0 0;
    background-color: white;
`;

const ImageWrapper = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: #f0f0f0; /* 연한 회색 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
`;

// const Label = styled.label`
//   width: 100%;
//   font-weight: 700;
//   font-size: 18px;
//   margin-bottom: 0.5rem;
//   color: black;
//   align-self: flex-start;
// `;

const Input = styled.input`
    width: 100%;
    height: 44px;
    border-radius: 12px;
    border: none;
    background-color: #f5f5f5;
    padding: 0 1rem;
    font-size: 14px;
    color: #999;
    box-sizing: border-box;

    &::placeholder {
        color: #ccc;
    }
`;

interface FoodItemProps {
    imgSrc: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FoodName({ imgSrc, value, onChange }: FoodItemProps) {
    return (
        <Page>
            <Container>
                <ImageWrapper>
                    <Img src={imgSrc} />
                </ImageWrapper>
                {/* <Label>{label}</Label> */}
                <Input
                    placeholder="식품의 자세한 이름을 적어주세요 (ex. 대파)"
                    value={value}
                    onChange={onChange}
                />
            </Container>
        </Page>
    );
}
