import styled from '@emotion/styled';
import { useState, useRef, useEffect, type JSX } from 'react';
import FridgeSVG from '@assets/Refrigenerator.svg?react';
import CheckSVG from '@assets/check.svg?react';
import SearchSVG from '@assets/search.svg?react';
import CondimentSVG from '@assets/foodCategories/condiment.svg?react';
import FishSVG from '@assets/foodCategories/fish.svg?react';
import FruitSVG from '@assets/foodCategories/fruit.svg?react';
import MealkitSVG from '@assets/foodCategories/mealkit.svg?react';
import MeatSVG from '@assets/foodCategories/meat.svg?react';
import MilkSVG from '@assets/foodCategories/milk.svg?react';
import ProcessedFoodSVG from '@assets/foodCategories/processedFood.svg?react';
import SnackSVG from '@assets/foodCategories/snack.svg?react';
import VegetableSVG from '@assets/foodCategories/vegetable.svg?react';
import ZomiryoSVG from '@assets/foodCategories/zomiryo.svg?react';
import NutSVG from '@assets/foodCategories/nut.svg?react';

import { consumeFood, getFoods } from '@controllers/api';
import { theme } from '@styles/themes';
import type { getFoodResponse } from '@controllers/api.Prop';

const iconMapper = (category: string): JSX.Element => {
	const map: Record<string, JSX.Element> = {
		유제품: <MilkSVG />,
		채소: <VegetableSVG />,
		'축산/계란': <MeatSVG />,
		과일: <FruitSVG />,
		해산물: <FishSVG />,
		'과자/시리얼': <SnackSVG />,
		'조미료/향신료': <ZomiryoSVG />,
		가공식품: <ProcessedFoodSVG />,
		건강식품: <CondimentSVG />,
		'간편식/밀키트': <MealkitSVG />,
		견과류: <NutSVG />,
	};

	return map[category] || <VegetableSVG />;
};

const MyFridge = () => {
	const [expanded, setExpanded] = useState(false);
	const [selectedTab, setSelectedTab] = useState('전체');
	const [searchTerm, setSearchTerm] = useState('');
	const [showOnlyExpiring, setShowOnlyExpiring] = useState(false);
	const startYRef = useRef<number | null>(null);
	const [items, setItems] = useState<getFoodResponse[]>([]);

	const fetchItems = async () => {
		const data = await getFoods();
		setItems(data);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const handleTouchStart = (e: React.TouchEvent) => {
		startYRef.current = e.touches[0].clientY;
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (startYRef.current === null) return;
		const endY = e.changedTouches[0].clientY;
		const deltaY = endY - startYRef.current;
		if (deltaY < -50) setExpanded(true);
		else if (deltaY > 50) setExpanded(false);
		startYRef.current = null;
	};

	const handleConsume = async (foodRegisterId: number) => {
		await consumeFood(foodRegisterId);
		fetchItems();
	};

	return (
		<DraggableContainer expanded={expanded} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
			<TopBar />
			<ScrollContainer>
				<Header>
					<FridgeIcon />
					<TitleText>나만의 냉장고</TitleText>
				</Header>
				<SearchWrapper>
					<StyledSearchInput type="text" placeholder="냉장고에 저장된 식품을 검색해보세요" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
					<StyledSearchIcon />
				</SearchWrapper>
				<TabList>
					<TabRow>
						<TabButtons>
							{['전체', '실외', '냉장', '냉동'].map((tab) => (
								<Tab key={tab} active={selectedTab === tab} onClick={() => setSelectedTab(tab)}>
									{tab}
								</Tab>
							))}
						</TabButtons>
						<FilterButton active={showOnlyExpiring} onClick={() => setShowOnlyExpiring((prev) => !prev)}>
							소비기한임박
						</FilterButton>
					</TabRow>
				</TabList>
				<Grid>
					{items
						.filter(
							(item) =>
								(selectedTab === '전체' || item.storageMethod === selectedTab) &&
								item.foodName.includes(searchTerm) &&
								item.isCompleted === '보관' &&
								(!showOnlyExpiring || item.daysLeft <= 7)
						)
						.map((item, idx) => {
							const dayLeft = -item.daysLeft;
							const displayDday = dayLeft === 0 ? 'D-DAY' : `D${dayLeft > 0 ? `+${dayLeft}` : dayLeft}`;

							return (
								<ItemCard key={idx}>
									<CardHeader>
										<IconContainer>{iconMapper(item.foodCategory)}</IconContainer>
										<TitleContainer>
											<Title>{item.foodName}</Title>
										</TitleContainer>
										<CheckContainer onClick={() => handleConsume(item.foodRegisterId)}>
											<CheckSVG width={18} />
										</CheckContainer>
									</CardHeader>
									<Expiry>소비기한 : {item.expirationDate} </Expiry>
									<Countdown imminent={dayLeft >= -7}>{displayDday}</Countdown>
								</ItemCard>
							);
						})}
				</Grid>
			</ScrollContainer>
		</DraggableContainer>
	);
};

export default MyFridge;

const DraggableContainer = styled.div<{ expanded: boolean }>`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: ${({ expanded }) => (expanded ? '100vh' : '55vh')};
	background-color: #fff;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	transition: height 0.3s ease;
	overflow: hidden;
	padding: 8x 0 0 0;
`;

const TopBar = styled.div`
	width: 60px;
	height: 3px;
	background-color: ${theme.colors.gray1};
	border-radius: 3px;
	margin: 8px auto 0 auto;
`;

const ScrollContainer = styled.div`
	height: 100%;
	overflow-y: auto;
`;

const ItemCard = styled.div`
	background-color: white;
	border: 1px solid #c1c1c1;
	border-radius: 12px;
	padding: 10px 12px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
	position: relative;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 14px;
	margin: 0;
`;

const Expiry = styled.div`
	font-size: 11px;
	color: #666;
`;

const Countdown = styled.div<{ imminent: boolean }>`
	font-size: 16px;
	color: ${({ imminent }) => (imminent ? '#ff703c' : '#00A400')};
	font-weight: bold;
	text-align: right;
	margin-top: 12px;
`;

const Tab = styled.div<{ active: boolean }>`
	font-weight: ${({ active }) => (active ? '700' : '400')};
	color: ${({ active }) => (active ? theme.colors.main : theme.colors.gray2)};
	font-size: ${({ active }) => (active ? '16px' : '15px')};
	border-bottom: 2px solid ${({ active }) => (active ? theme.colors.main : 'transparent')};
	padding-top: 16px;
	cursor: pointer;
`;

const TabList = styled.div`
	margin: 8px 16px;
	display: flex;
	flex-direction: column;
`;

const TabRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
`;

const TabButtons = styled.div`
	display: flex;
	gap: 16px;
`;

const SearchWrapper = styled.div`
	position: relative;
	margin: 0 16px 12px;
`;

const StyledSearchIcon = styled(SearchSVG)`
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);
	width: 16px;
	height: 16px;
	stroke: none;
`;

const StyledSearchInput = styled.input`
	padding: 12px 16px;
	width: 100%;
	border-radius: 12px;
	border: 1px solid #c1c1c1;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 15px;
	color: ${theme.colors.gray1};
	box-sizing: border-box;
	background-color: #eee;

	&::placeholder {
		color: ${theme.colors.gray1};
	}
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	padding: 12px 20px 16px;
`;

const CardHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`;

const IconContainer = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const TitleContainer = styled.div`
	flex: 8;
	display: flex;
	align-items: center;
`;

const CheckContainer = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
	background-color: ${({ active }) => (active ? theme.colors.point : '#FFFFFF')};
	border: 1px solid ${theme.colors.point};
	color: ${({ active }) => (active ? '#FFFFFF' : theme.colors.point)};
	border-radius: 16px;
	padding: 4px 12px;
	font-size: 13px;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 2px;
	padding: 12px 12px 0 12px;
`;

const FridgeIcon = styled(FridgeSVG)`
	width: 18px;
	height: 18px;
`;

const TitleText = styled.h2`
	font-size: 15px;
	font-weight: bold;
`;
