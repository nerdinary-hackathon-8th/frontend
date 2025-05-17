import styled from "@emotion/styled";
import BackButtonImg from "../../assets/BlackBackButon.png";
import UseRatio from "../../components/FridgeManage/UseRatio";
import ExpiredProduct from "@components/FridgeManage/ExpiredProduct";
import Mission from "@components/FridgeManage/Mission";
import SpendType from "@components/FridgeManage/SpendType";
import { getMyMbti } from "@controllers/api";
import type { getMyMbtiResponse } from "@controllers/api.Prop";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
    background-color: #f8f8f8;
    height: 100%;
    min-height: 100vh;
    padding: 20px 20px 10px 20px;
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px; /* 헤더 높이 지정 */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: 50px 56px 24px 56px;
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

const Divider = styled.div`
    border-bottom: 1.5px solid #f2f2f2;
`;

const TextBox = styled.div`
    gap: 4px;
    padding: 24px;
`;
const LastText = styled.p`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.5%;
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
    margin-top: 0px;
`;

export default function FridgeManagement() {
    const navigate = useNavigate();

    const [data, setData] = useState<getMyMbtiResponse | null>(null);
    const [, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMyMbti() {
            try {
                setLoading(true);
                const data = await getMyMbti();
                setData(data);
            } catch (err: any) {
                console.error(err.message || "알 수 없는 오류 발생");
            } finally {
                setLoading(false);
            }
        }
        fetchMyMbti();
    }, []);

    return (
        <Page>
            <Header>
                <BackButton src={BackButtonImg} onClick={() => navigate(-1)} />
                <Title>냉꼼이가 대신하는 냉장고 관리</Title>
            </Header>
            <UseRatio consumptionRate={data?.consumptionRate ?? "00"} />
            <Divider style={{ marginTop: "13px", marginBottom: "13px" }} />
            <ExpiredProduct count={data?.nearExpiredCount || -1} />
            <Divider style={{ marginTop: "13px", marginBottom: "13px" }} />
            <Mission />
            <div style={{ marginTop: "13px", marginBottom: "13px" }}></div>
            <SpendType level={data?.level || 0} mbti={data?.foodBTI || ""} />
            <TextBox>
                <LastText>다음 레벨로 업그레이드할 수 있어요</LastText>
                <LastText>지구를 사랑하는 꼼꼼 살림왕이 되어봐요!</LastText>
            </TextBox>
        </Page>
    );
}
