import { useMemo } from "react";
import styled from "@emotion/styled";
import MyFridge from "@components/MyFridge/MyFridge";

import SpeedSVG from "@assets/speed.svg?react";
import FloatingButtonSVG from "@assets/floatingButton.svg?react";
import backgroundImage from "@assets/homeBackScreen.png";
import profileSVG from "@assets/profile.svg?react";

import { useNavigate } from "react-router-dom";
import { theme } from "@styles/themes";

const recommendations = [
    "냉장고 속 반찬 1개만 꺼내 먹기",
    "유통기한 임박한 재료 1개 사용하기",
    "오늘은 장보지 않기 (있는 재료로 요리하기)",
    "고기 대신 식물성 재료로 한 끼 요리하기",
];

const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/addfood");
    };

    // const handleLogout = () => {
    // 	localStorage.removeItem('accessToken');
    // 	localStorage.removeItem('refreshToken');
    // 	window.location.href = '/';
    // };

    const randomRecommendation = useMemo(() => {
        return recommendations[Math.floor(Math.random() * recommendations.length)];
    }, []);

    return (
        <Container>
            {/* <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton> */}
            <Header>
                <LeftText>
                    <BoldText>냉집사의 환영인사</BoldText>
                    <RegularText>
                        당신의 냉장고를 대신 관리해줄 <strong>냉꼼</strong>이에요!
                    </RegularText>
                    <StrongText>
                        내 냉장고도 쉽게 챙기고,
                        <br />
                        지구 탄소 배출도 쑥쑥 줄여요!
                    </StrongText>
                </LeftText>
                <CharacterCircle>
                    <StyledProfile
                        onClick={() =>
                            navigate("/fridge-management", { state: randomRecommendation })
                        }
                    />
                </CharacterCircle>
            </Header>
            <RecommendationCard>
                <RecommendationTitle>
                    <SpeedSVG /> 오늘의 탄소 배출 습관 추천
                </RecommendationTitle>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <RecommendationText>{randomRecommendation}</RecommendationText>
                    <AssistantText>냉꼼이는 수행중...</AssistantText>
                </div>
            </RecommendationCard>
            <MyFridge />
            <FloatingButton onClick={handleButtonClick} />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    background: url(${backgroundImage}) no-repeat center 0px,
        linear-gradient(180deg, #9aeb6f 0%, #4da723 100%);
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
`;

// const LogoutButton = styled.button`
// 	position: absolute;
// 	top: 16px;
// 	right: 16px;
// 	background-color: white;
// 	color: ${theme.colors.main};
// 	border: 2px solid ${theme.colors.main};
// 	border-radius: 20px;
// 	padding: 4px 12px;
// 	font-size: 12px;
// 	font-weight: bold;
// 	cursor: pointer;
// 	z-index: 100;
// `;

const Header = styled.div`
    padding: 24px 16px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 11px;
    color: white;
`;

const BoldText = styled.div`
	font-size: 25px;
	font-weight: bold;
	line-sp
`;

const RegularText = styled.div`
    font-size: 12px;
    line-height: 1.4;
`;
const StrongText = styled.div`
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 5px;
`;
const CharacterCircle = styled.div`
    width: auto;
    height: 24vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 4vh;
    min-height: 100px;
`;

const StyledProfile = styled(profileSVG)`
    width: 150%;
    height: auto;
    object-fit: contain;
`;

const RecommendationCard = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 10px;
    margin: 0 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const RecommendationTitle = styled.div`
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 16px;
    color: ${theme.colors.main};
    display: flex;
    align-items: center;
    gap: 8px;
`;

const RecommendationText = styled.div`
    font-size: 12px;
    color: #333;
`;

const FloatingButton = styled(FloatingButtonSVG)`
    position: fixed;
    right: 15px;
    bottom: 15px;
`;

const AssistantText = styled.div`
    font-size: 12px;
    color: ${theme.colors.gray3};
`;
