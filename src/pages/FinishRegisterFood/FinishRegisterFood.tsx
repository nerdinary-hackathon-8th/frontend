import NNangGGom from "../../assets/nnangGGom.png";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
    display: flex;
    height: 100%;
    padding-top: 120px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-color: #f8f8f8;
`;
const Image = styled.img`
    width: 430px;
    margin-right: 80px;
`;

const Title = styled.p`
    font-weight: 700;
    font-size: 30px;
    margin: 0 0 12px 0;
    color: black;
`;

const Highlight = styled.span`
    color: #00a400;
`;

const Subtitle = styled.p`
    padding-top: 10px;
    font-weight: 500;
    font-size: 16px;
    color: #6b6b6b;
    margin: 0 0 -40px 0;
    text-align: center;
    line-height: 1.4;
`;

const Button = styled.button`
    flex: 1;
    width: 100%;
    padding: 15px;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -1.5%;
    background-color: #00a400;
    border-radius: 10px;
    color: white;
    border: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 13px;
    margin-top: 30px;
`;

export default function FinishRegisterFood() {
    const navigate = useNavigate();

    return (
        <Page>
            <Title>
                식품이 <Highlight>추가</Highlight> 되었어요
            </Title>
            <Subtitle>
                냉꼼이가 이제부터
                <br /> 냉장고 관리를 열심히 도와드릴게요!
            </Subtitle>
            <Image src={NNangGGom} />
            <ButtonContainer>
                <Button onClick={() => navigate("/addfood")}>식품 더 넣기</Button>
                <Button onClick={() => navigate("/home")}>다 넣었어요</Button>
            </ButtonContainer>
        </Page>
    );
}
