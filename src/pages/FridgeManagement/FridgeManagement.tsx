import styled from "@emotion/styled";
import BackButtonImg from "../../assets/BlackBackButon.png";
import UseRatio from "../../components/FridgeManage/UseRatio";
import ExpiredProduct from "@components/FridgeManage/ExpiredProduct";
import Mission from "@components/FridgeManage/Mission";
import SpendType from "@components/FridgeManage/SpendType";
import { getMyMbti } from "@controllers/api";
import type { getMyMbtiResponse } from "@controllers/api.Prop";
import { useState, useEffect } from "react";

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

const Divider = styled.div`
    border-bottom: 1.5px solid #f2f2f2;
`;

// consumptionRate: string; -> 확률
// fridgeComment: string; -> 코멘트 (안씀)
// nearExpiredCount: number; -> 개수
// level: number;
// typeName: string;
// foodBTI: string;
// foodBTIDetail: string;
// description: string;

export default function FridgeManagement() {
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
                <BackButton src={BackButtonImg} />
                <Title>냉꼼이가 대신하는 냉장고 관리</Title>
            </Header>
            <UseRatio consumptionRate={data?.consumptionRate ?? ""} />
            <Divider style={{ marginTop: "13px", marginBottom: "13px" }} />
            <ExpiredProduct count={data?.nearExpiredCount || 0} />
            <Divider style={{ marginTop: "13px", marginBottom: "13px" }} />
            <Mission />
            <Divider style={{ marginTop: "13px", marginBottom: "13px" }} />
            <SpendType level={data?.level || 0} mbti={data?.foodBTI || ""} />
        </Page>
    );
}
