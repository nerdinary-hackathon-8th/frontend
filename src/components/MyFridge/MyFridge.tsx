import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import FridgeSVG from '@assets/Refrigenerator.svg?react';
import CheckSVG from '@assets/check.svg?react';
import CarrotSVG from '@assets/carrot.svg?react';

const DraggableContainer = styled.div<{ expanded: boolean }>`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: ${({ expanded }) => (expanded ? '100vh' : '55vh')};
	background-color: #fff;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
	transition: height 0.3s ease;
	overflow: hidden;
	padding: 24px 0 0 0;
`;

const TopBar = styled.div`
	width: 40px;
	height: 5px;
	background-color: #ccc;
	border-radius: 3px;
	margin: 8px auto 0 auto;
`;

const ScrollContainer = styled.div`
	height: 100%;
	overflow-y: auto;
	padding: 12px;
`;

const ItemCard = styled.div`
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 12px 12px;
	margin-bottom: 12px;
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

const Countdown = styled.div`
	font-size: 16px;
	color: #00a000;
	font-weight: bold;
	text-align: right;
`;

const Tab = styled.div<{ active: boolean }>`
	font-weight: bold;
	color: ${({ active }) => (active ? '#00a000' : '#d1d1d1')};
	border-bottom: 2px solid ${({ active }) => (active ? '#00a000' : 'transparent')};
	padding: 8px 12px;
	cursor: pointer;
`;

const TabList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 8px 16px;
`;

const TabButtons = styled.div`
	display: flex;
	gap: 10px;
`;

const SearchInput = styled.input`
	margin: 0 16px 16px;
	padding: 12px 16px;
	width: calc(100% - 32px);
	border-radius: 12px;
	border: 1px solid #ccc;
	font-size: 14px;
	box-sizing: border-box;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	padding: 0 16px 16px;
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

const CheckboxRow = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	margin: 0 16px 12px;
	font-size: 14px;
	color: #d1d1d1;
`;

const MyFridge = () => {
	const [expanded, setExpanded] = useState(false);
	const [selectedTab, setSelectedTab] = useState('전체');
	const [searchTerm, setSearchTerm] = useState('');
	const [showOnlyExpiring, setShowOnlyExpiring] = useState(false);
	const startYRef = useRef<number | null>(null);
	const [items, setItems] = useState<typeof mockItems>([]);

	const fetchData = async () => {
		const data = await mockItems;
		setItems(data);
	};

	useEffect(() => {
		fetchData();
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
		const updated = items.filter((_, i) => i !== index);
		setItems(updated);
		setTimeout(fetchData, 500); // simulate re-fetch
	};

	const filtered = items.filter(
		(item) => (selectedTab === '전체' || item.type === selectedTab) && item.name.includes(searchTerm) && (!showOnlyExpiring || item.isSoon)
	);

	return (
		<DraggableContainer expanded={expanded} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
			<TopBar />
			<ScrollContainer>
				<Header>
					<FridgeIcon />
					<TitleText>나만의 냉장고</TitleText>
				</Header>
				<SearchInput type="text" placeholder="냉장고에 저장된 식품을 검색해보세요" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

				<TabList>
					<TabButtons>
						{['전체', '실외', '냉장', '냉동'].map((tab) => (
							<Tab key={tab} active={selectedTab === tab} onClick={() => setSelectedTab(tab)}>
								{tab}
							</Tab>
						))}
					</TabButtons>
					<CheckboxRow>
						<input type="checkbox" checked={showOnlyExpiring} onChange={() => setShowOnlyExpiring((prev) => !prev)} />
						소비기한임박
					</CheckboxRow>
				</TabList>
				<Grid>
					{filtered.map((item, idx) => (
						<ItemCard key={idx}>
							<CardHeader>
								<CarrotContainer>
									<CarrotSVG />
								</CarrotContainer>
								<TitleContainer>
									<Title>{item.name}</Title>
								</TitleContainer>
								<CheckContainer onClick={() => handleConsume(idx)}>
									<CheckSVG width={18} />
								</CheckContainer>
							</CardHeader>
							<Expiry>소비기한 : {item.expiry}</Expiry>
							<Countdown>D-3</Countdown>
						</ItemCard>
					))}
				</Grid>
			</ScrollContainer>
		</DraggableContainer>
	);
};

export default MyFridge;

const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 16px;
`;

const FridgeIcon = styled(FridgeSVG)`
	width: 18px;
	height: 18px;
`;

const TitleText = styled.h2`
	font-size: 20px;
	font-weight: bold;
	margin: 0;
`;

const mockItems = [
	{ name: '대파', type: '전체', expiry: '2025-00-00', isSoon: true },
	{ name: '대파', type: '실외', expiry: '2025-00-00', isSoon: true },
	{ name: '대파', type: '냉장', expiry: '2025-00-00', isSoon: false },
	{ name: '대파', type: '냉동', expiry: '2025-00-00', isSoon: false },
	{ name: '대파', type: '냉동', expiry: '2025-00-00', isSoon: true },
];
