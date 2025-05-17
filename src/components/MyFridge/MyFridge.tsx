import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import FridgeSVG from '@assets/Refrigenerator.svg?react';
import CheckSVG from '@assets/check.svg?react';
import CarrotSVG from '@assets/carrot.svg?react';
import SearchSVG from '@assets/search.svg?react';
import { getFoods } from '../../controllers/api';

type Item = {
	foodName: string;
	foodCategory: string;
	expirationDate: string;
	storageMethod?: string;
	daysLeft: number;
};

// const mockItems: Item[] = [
// 	{
// 		foodName: '대파',
// 		foodCategory: '채소',
// 		purchaseDate: '2025-05-01',
// 		expirationDate: '2025-05-17',
// 		storageMethod: '실외',
// 		isSoon: true,
// 	},
// 	{
// 		foodName: '달걀',
// 		foodCategory: '계란/유제품',
// 		purchaseDate: '2025-05-05',
// 		expirationDate: '2025-06-10',
// 		storageMethod: '실외',
// 		isSoon: true,
// 	},
// 	{
// 		foodName: '우유',
// 		foodCategory: '계란/유제품',
// 		purchaseDate: '2025-05-10',
// 		expirationDate: '2025-05-10',
// 		storageMethod: '냉장',
// 		isSoon: true,
// 	},
// 	{
// 		foodName: '만두',
// 		foodCategory: '냉동식품',
// 		purchaseDate: '2025-05-02',
// 		expirationDate: '2025-05-31',
// 		storageMethod: '냉동',
// 		isSoon: false,
// 	},
// 	{
// 		foodName: '소고기',
// 		foodCategory: '육류',
// 		purchaseDate: '2025-05-03',
// 		expirationDate: '2025-05-25',
// 		storageMethod: '냉동',
// 		isSoon: false,
// 	},
// ];
// const calculateDday = (expirationDate: string) => {
// 	const today = new Date();
// 	const expiry = new Date(expirationDate);
// 	const diffTime = today.getTime() - expiry.getTime();
// 	const result = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

// 	return result;
// };
const MyFridge = () => {
	const [expanded, setExpanded] = useState(false);
	const [selectedTab, setSelectedTab] = useState('전체');
	const [searchTerm, setSearchTerm] = useState('');
	const [showOnlyExpiring, setShowOnlyExpiring] = useState(false);
	const startYRef = useRef<number | null>(null);
	const [items, setItems] = useState<Item[]>([]);

	useEffect(() => {
		(async () => {
			const data = await getFoods();
			setItems(data);
		})();
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

	const handleConsume = (index: number) => {
		setItems((prev) => prev.filter((_, i) => i !== index));
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
								(!showOnlyExpiring || item.daysLeft <= 7)
						)
						.map((item, idx) => {
							const displayDday = item.daysLeft === 0 ? 'D-DAY' : `D${item.daysLeft > 0 ? `+${item.daysLeft}` : item.daysLeft}`;

							return (
								<ItemCard key={idx}>
									<CardHeader>
										<CarrotContainer>
											<CarrotSVG />
										</CarrotContainer>
										<TitleContainer>
											<Title>{item.foodName}</Title>
										</TitleContainer>
										<CheckContainer onClick={() => handleConsume(idx)}>
											<CheckSVG width={18} />
										</CheckContainer>
									</CardHeader>
									<Expiry>소비기한 : {item.expirationDate}</Expiry>
									<Countdown imminent={item.daysLeft >= -7}>{displayDday}</Countdown>
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
	background-color: #ccc;
	border-radius: 3px;
	margin: 8px auto 0 auto;
`;

const ScrollContainer = styled.div`
	height: 100%;
	overflow-y: auto;
`;

const ItemCard = styled.div`
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 12px 12px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
	position: relative;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin: 0;
`;

const Expiry = styled.div`
	font-size: 10px;
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
	color: ${({ active }) => (active ? '#00a000' : '#d1d1d1')};
	font-size: ${({ active }) => (active ? '16px' : '15px')};
	border-bottom: 2px solid ${({ active }) => (active ? '#00a000' : 'transparent')};
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
	color: #c5c5c5;
	box-sizing: border-box;
	background-color: #eee;

	&::placeholder {
		color: #c5c5c5;
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
	align-items: center; /* vertical center */
	justify-content: space-between; /* horizontal space between */
	margin-bottom: 8px;
`;

const CarrotContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const TitleContainer = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
`;

const CheckContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
	background-color: ${({ active }) => (active ? '#FF9D79' : '#FFFFFF')};
	border: 1px solid #ff9d79;
	color: ${({ active }) => (active ? '#FFFFFF' : '#FF9D79')};
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
