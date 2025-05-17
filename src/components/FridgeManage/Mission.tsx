import styled from "@emotion/styled";

const Wrapper = styled.div`
    position: relative;
    border-radius: 10px;
    background-color: white;
    padding-left: 22px;
    padding-right: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 5px;
    color: black;
    text-align: center;
    letter-spacing: -1.5%;
`;

const Subtitle = styled.p`
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #b0b0b0; /* 연한 회색 */
    text-align: center;
    letter-spacing: -0.5%;
`;

const Button = styled.button`
    margin-top: 12px;
    padding: 8px 16px;
    border: 0.4px solid #00a400;
    border-radius: 10px;
    background-color: #f8f8f8;
    color: #00a400;
    font-weight: bold;
    font-size: 15px;
    margin-top: 0px;
    margin-bottom: 17px;
    /* 터치 영역 넓히기 등 */
    outline: none;
    letter-spacing: -2%;
`;

interface MissionProps {
    text: string;
}

export default function Mission({ text }: MissionProps) {
    return (
        <Wrapper>
            <Title>오늘의 탄소 줄이기 미션 함께하실래요?</Title>
            <Subtitle>완료하면, 탄소 배출을 평균 탄소 0.25kg 절감해요</Subtitle>
            {/* TODO props 로 미션 받고 렌더링 */}
            <Button>{text}</Button>
        </Wrapper>
    );
}
