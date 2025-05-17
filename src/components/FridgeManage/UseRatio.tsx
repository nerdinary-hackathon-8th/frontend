import styled from "@emotion/styled";

const Wrapper = styled.div`
    border-radius: 10px;
    width: 100%;
    height: 123px;
    margin-top: 76px;
    background-color: white;
    padding-left: 18px;
`;

const Title = styled.p`
    font-size: 17px;
    font-weight: bold;
    letter-spacing: -1.5%;
    padding-top: 16px;
`;

const Text = styled.p`
    font-size: 13px;
    font-weight: medium;
    letter-spacing: 0%;
    margin-top: 5px;
`

const Ratio = styled.p`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -1.5%;
`

export default function UseRatio() {
    return (
        <Wrapper>
            <Title>현재 냉장고 활용 비율</Title>
            <Text>냉꼼이 뿌듯! 완벽한 냉장고 관리에요!</Text>
            {/* TODO 하드코딩 해결 */}
            <Ratio>90%</Ratio>
        </Wrapper>
    );
}
