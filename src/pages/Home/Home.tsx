import styled from '@emotion/styled';
import MyFridge from '../../components/MyFridge/MyFridge';
import ProfileSVG from '@assets/profile.svg?react';
import SpeedSVG from '@assets/speed.svg?react';

const Home = () => {
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
				<RecommendationText>먹다 남긴 반찬, 다음 날 안 먹으면 그대로 폐기하기</RecommendationText>
			</RecommendationCard>
			<MyFridge />
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
