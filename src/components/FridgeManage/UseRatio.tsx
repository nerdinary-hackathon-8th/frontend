import styled from "@emotion/styled";

const Wrapper = styled.div`
    position: relative;
    border-radius: 10px;
    height: 123px;
    margin-top: 76px;
    background-color: white;
    padding-left: 18px;
    padding-right: 18px;
`;

const Title = styled.p`
    font-size: 17px;
    font-weight: bold;
    letter-spacing: -1.5%;
    padding-top: 16px;
    margin-bottom: 8px;
`;

const Text = styled.p`
    font-size: 13px;
    font-weight: medium;
    letter-spacing: 0%;
    margin-top: 5px;
`;

const Ratio = styled.p`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -1.5%;
    color: #00a400;
    padding-left: 75%;
    margin-bottom: 20px;
`;

const consumptionRateMessages = [
    { min: 90, max: 100, message: "탄소 낭비 없이 완벽한 순환! 냉장고가 숨 쉬고 있어요!" },
    { min: 70, max: 89, message: "좋은 흐름이에요! 탄소 절감하는 착한 냉장고!" },
    { min: 50, max: 69, message: "탄소 살짝 발생 중… 냉장고를 좀 더 비워봐요!" },
    { min: 0, max: 49, message: "냉장고에서 탄소 뿜뿜! 냉꼼이가 더 도와줄게요!" },
];

interface UseRatioProps {
    consumptionRate: string;
}

export default function UseRatio({ consumptionRate }: UseRatioProps) {

    function getMessageByConsumptionRate(rate: number): string {
        const found = consumptionRateMessages.find(({ min, max }) => rate >= min && rate <= max);
        return found ? found.message : "냉장고 활용 비율 정보를 찾을 수 없습니다.";
    }

    return (
        <Wrapper>
            <Title>현재 냉장고 활용 비율</Title>
            <Text>{getMessageByConsumptionRate(Number(consumptionRate))}</Text>
            <Ratio>{consumptionRate}%</Ratio>
        </Wrapper>
    );
}
