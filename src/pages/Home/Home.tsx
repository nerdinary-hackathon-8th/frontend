import { useMemo } from 'react';
import styled from '@emotion/styled';
import MyFridge from '../../components/MyFridge/MyFridge';
import ProfileSVG from '@assets/profile.svg?react';
import SpeedSVG from '@assets/speed.svg?react';
import FloatingButtonSVG from '@assets/floatingButton.svg?react';
import { useNavigate } from 'react-router-dom';

const recommendations = [
	'두부는 3일 안에 소비해야 탄소를 줄일 수 있어요.',
	'채소는 일주일 안에 다 먹으면 탄소 낭비가 없어요.',
	'냉장고 속 재료 1개 소비 = 플라스틱 컵 2개 절약!',
	'냉동실 털기 = 숨은 탄소 줄이기!',
];

const Home = () => {
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/addfood');
	};
	const handleLogout = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		window.location.href = '/';
	};

	const randomRecommendation = useMemo(() => {
		return recommendations[Math.floor(Math.random() * recommendations.length)];
	}, []);

	return (
		<Container>
			<LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
			<Header>
				<LeftText>
					<BoldText>안녕하세요!</BoldText>
					<RegularText>
						나는 당신을 도와줄 <strong>냉곰</strong>이에요!
					</RegularText>
					<StrongText>
						냉장고만 잘 챙겨도,
						<br />
						탄소가 쑥쑥 줄어들어요!💨💚
					</StrongText>
				</LeftText>
				<CharacterCircle>
					<StyledProfileSVG />
				</CharacterCircle>
			</Header>
			<RecommendationCard>
				<RecommendationTitle>
					<SpeedSVG /> 오늘의 탄소 배출 습관 추천
				</RecommendationTitle>
				<RecommendationText>{randomRecommendation}</RecommendationText>
			</RecommendationCard>
			<MyFridge />
			<FloatingButton onClick={handleButtonClick} />
		</Container>
	);
};

export default Home;

const Container = styled.div`
	background: linear-gradient(180deg, #9aeb6f 0%, #4da723 100%);
	display: flex;
	flex-direction: column;
	min-height: 60vh;
`;

const LogoutButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	background-color: white;
	color: #00a000;
	border: 1px solid #00a000;
	border-radius: 20px;
	padding: 4px 12px;
	font-size: 12px;
	font-weight: bold;
	cursor: pointer;
	z-index: 100;
`;

const Header = styled.div`
	padding: 24px 16px 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LeftText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: white;
`;

const BoldText = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

const RegularText = styled.div`
	font-size: 14px;
	line-height: 1.4;
`;
const StrongText = styled.div`
	font-size: 14px;
	font-weight: 700;
	line-height: 1.4;
`;
const CharacterCircle = styled.div`
	width: 96px;
	height: 96px;
	border-radius: 36px;
	background-color: white;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledProfileSVG = styled(ProfileSVG)`
	width: 80px;
	height: 80px;
	object-fit: contain;
`;

const RecommendationCard = styled.div`
	background-color: white;
	border-radius: 16px;
	padding: 16px;
	margin: 50px 16px 16px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

const RecommendationTitle = styled.div`
	font-weight: bold;
	margin-bottom: 8px;
	font-size: 16px;
	color: #00a400;
	display: flex;
	align-items: center;
	gap: 8px;
`;

const RecommendationText = styled.div`
	font-size: 14px;
	color: #333;
`;

const FloatingButton = styled(FloatingButtonSVG)`
	position: fixed;
	right: 24px;
	bottom: 24px;
`;
