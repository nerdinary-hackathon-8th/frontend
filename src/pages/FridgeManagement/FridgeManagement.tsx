import styled from "@emotion/styled";
import BackButtonImg from "../../assets/BlackBackButon.png";
import UseRatio from "../../components/FridgeManage/UseRatio";

const Page = styled.div`
    background-color: #f8f8f8;
    height: 100%;
    min-height: 100vh;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

const Header = styled.div`
    position: fixed;
    left: 0;
    width: 100%;
    height: 56px; /* 헤더 높이 지정 */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: 0 56px; /* 양쪽 여백 확보 (백버튼 공간 포함) */
    z-index: 100;
`;
const BackButton = styled.img`
    position: absolute;
    left: 20px;
    height: 20px;
`;

const Title = styled.p`
    position: absolute;
    color: black;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: -1.5%;
`;

export default function FridgeManagement() {
    return (
        <Page>
            <Header>
                <BackButton src={BackButtonImg} />
                <Title>냉꼼이가 대신하는 냉장고 관리</Title>
            </Header>
            <UseRatio />
        </Page>
    );
}
