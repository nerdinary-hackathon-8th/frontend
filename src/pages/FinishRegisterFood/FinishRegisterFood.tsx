import NNangGGom from "../../assets/addfood/NGE.png";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
    display: flex;
    height: 100vh;
    padding-top: 30px;
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
    font-weight: 500;
    font-size: 16px;
    color: #6b6b6b;
    margin: 0 0 -40px 0;
    text-align: center;
    line-height: 1.5;
`;

const Button = styled.button`
    width: 153px;
    padding: 15px;
    margin-left: 10px;
    font-size: 15px;
    font-weight: 700;
    background-color: #00a400;
    border-radius: 10px;
    color: white;
    border: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: 0px;
`;

export default function FinishRegisterFood() {
    const navigate = useNavigate();

    return (
        <Page>
            <Title>
                음식이 <Highlight>추가</Highlight> 되었어요
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
