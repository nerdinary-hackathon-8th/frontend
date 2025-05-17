import { useMemo } from 'react';
import styled from '@emotion/styled';
import MyFridge from '../../components/MyFridge/MyFridge';
import ProfileSVG from '@assets/profile.svg?react';
import SpeedSVG from '@assets/speed.svg?react';
import FloatingButtonSVG from '@assets/floatingButton.svg?react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/addfood');
	};
	const recommendations = [
		'두부는 3일 안에 소비해야 탄소를 줄일 수 있어요.',
		'채소는 일주일 안에 다 먹으면 탄소 낭비가 없어요.',
		'냉장고 속 재료 1개 소비 = 플라스틱 컵 2개 절약!',
		'냉동실 털기 = 숨은 탄소 줄이기!',
	];

	const randomRecommendation = useMemo(() => {
		return recommendations[Math.floor(Math.random() * recommendations.length)];
	}, []);

	return (
		<Container>
			<Header>
				<LeftText>
					<BoldText>안녕하세요!</BoldText>
					<RegularText>
						나는 당신을 도와줄 <strong>냉곰</strong>이에요!
					</RegularText>
					<RegularText>
						냉장고만 잘 챙겨도,
						<br />
						탄소가 쑥쑥 줄어들어요!💨💚
					</RegularText>
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
	background: linear-gradient(180deg, #8fe26a 0%, #60c24b 100%);
	display: flex;
	flex-direction: column;
	min-height: 100vh;
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
	margin: 0 16px 16px;
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
