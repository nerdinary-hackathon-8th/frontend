import styled from "@emotion/styled";
import CMST from "../../assets/mbti/CMST.png";
import CWDW from "../../assets/mbti/CWDW.png";
import ECST from "../../assets/mbti/ECST.png";
import ECTT from "../../assets/mbti/ECTT.png";
import EFFS from "../../assets/mbti/EFFS.png";
import FRGV from "../../assets/mbti/FRGV.png";
import LCTS from "../../assets/mbti/LCTS.png";
import WASF from "../../assets/mbti/WASF.png";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    background-color: #399128;
    border-radius: 20px;
    padding: 18px 16px;
    color: white;
    text-align: center;
    font-family: "Pretendard", sans-serif;
`;

const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.5%;
    margin-top: 16px;
`;

const Level = styled.p`
    font-size: 16.48px;
    font-weight: bold;
    margin-top: 4.3px;
`;

const NickName = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-top: 4.3px;
    margin-bottom: 10px;
`;
const Code = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 16px 0;
`;

const CharacterImg = styled.img`
    width: 230px;
    margin-bottom: 16px;
    margin-top: -10px;
    margin-bottom: 0px;
`;

const Description = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin-top: -10px;
    letter-spacing: -0.5%;
    padding-left: 29px;
    padding-right: 29px;
    line-height: 19px;
`;

interface SpendTypeProps {
    level: number;
    mbti: string;
}

interface ConsumptionRateMessage {
    mbti: string;
    typeName: string;
    imgSrc: string;
    message: string;
}

export const consumptionRateMessages: ConsumptionRateMessage[] = [
    {
        mbti: "EFFS",
        typeName: "냉장고 마스터형",
        imgSrc: EFFS,
        message:
            "재료 하나도 안 놓치는 완벽 소비자! \n 탄소 절감력 만렙, 실천력도 최고예요! 정말 대단해요!",
    },
    {
        mbti: "ECST",
        typeName: "순삭 소비형",
        imgSrc: ECST,
        message:
            "넣자마자 바로 사라지는 마법의 손! \n 탄소가 쌓일 틈도 없어요. 속도감 있는 멋진 생활습관이에요!",
    },
    {
        mbti: "ECTT",
        typeName: "타이밍 만렙형",
        imgSrc: ECTT,
        message:
            "기한 딱 맞춰 소비하는 계획형 똑똑이! \n 냉장고도, 지구도 당신의 타이밍에 박수 보내고 있어요!",
    },
    {
        mbti: "CMST",
        typeName: "균형 소비형",
        imgSrc: CMST,
        message:
            "조금 남기긴 해도 대부분 알차게 소비 중! \n 탄소 절감도, 삶의 균형도 챙기는 타입! 아주 멋져요!",
    },
    {
        mbti: "LCTS",
        typeName: "느긋한 구조대형",
        imgSrc: LCTS,
        message:
            "조금 늦긴 했지만 끝까지 살려낸 따뜻한 소비! \n 느리지마 꾸준한 당신의 실천, 지구가 기억할 거예요",
    },
    {
        mbti: "CWDW",
        typeName: "냉장고 혼돈형",
        imgSrc: CWDW,
        message:
            "뭐가 들었는지 모르겠지만 가끔은 잘 건져내요! \n 탄소는 살짝 걱정 중... 지금이 정리의 타이밍이에요!",
    },
    {
        mbti: "WASF",
        typeName: "방치 마스터형",
        imgSrc: WASF,
        message:
            "많이 남기고 자주 잊어버리는 타입이네요! \n 조금만 신경 쓰면 탄소 감축에도 큰 변화가 생길 수 있어요!",
    },
    {
        mbti: "FRGV",
        typeName: "식재료 부활술사형",
        imgSrc: FRGV,
        message:
            "기한 지나도 끝까지 챙겨 먹는 집념의 소비자! \n 탄소도 감탄한 재생력! 근데 가끔은 건강도 챙겨주세요",
    },
];

export default function SpendType({ level, mbti }: SpendTypeProps) {
    const mbtiData = consumptionRateMessages.find((item) => item.mbti === mbti);

    if (!mbtiData) {
        return <Wrapper>소비 유형 정보를 불러올 수 없습니다.</Wrapper>;
    }

    const { typeName, message, imgSrc } = mbtiData;

    // {
    //     mbti: "EFFS",
    //     typeName: "냉장고 마스터형",
    //     imgSrc: EFFS,
    //     message:
    //         "재료 하나도 안 놓치는 완벽 소비자! 탄소 절감력 만렙, 실천력도 최고예요! 정말 대단해요!",
    // },
    // console.log(EFFS);

    return (
        <Wrapper>
            <Subtitle>냉꼼이가 분석한 당신의 소비 유형</Subtitle>
            <Level>Level {level}</Level>
            <NickName>{typeName}</NickName>
            <Code>{mbti}</Code>
            <CharacterImg src={imgSrc} />
            <Description>{message}</Description>
        </Wrapper>
    );
}
