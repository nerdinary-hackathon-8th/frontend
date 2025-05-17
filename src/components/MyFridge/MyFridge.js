import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import FridgeSVG from '@assets/Refrigenerator.svg?react';
import CheckSVG from '@assets/check.svg?react';
import CarrotSVG from '@assets/carrot.svg?react';
const DraggableContainer = styled.div `
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
const TopBar = styled.div `
	width: 40px;
	height: 5px;
	background-color: #ccc;
	border-radius: 3px;
	margin: 8px auto 0 auto;
`;
const ScrollContainer = styled.div `
	height: 100%;
	overflow-y: auto;
	padding: 12px;
`;
const ItemCard = styled.div `
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 12px;
	padding: 12px 12px;
	margin-bottom: 12px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
	position: relative;
`;
const Title = styled.div `
	font-weight: bold;
	font-size: 16px;
	margin: 0;
`;
const Expiry = styled.div `
	font-size: 10px;
	color: #666;
`;
const Countdown = styled.div `
	font-size: 16px;
	color: #00a000;
	font-weight: bold;
	text-align: right;
`;
const Tab = styled.div `
	font-weight: bold;
	color: ${({ active }) => (active ? '#00a000' : '#d1d1d1')};
	border-bottom: 2px solid ${({ active }) => (active ? '#00a000' : 'transparent')};
	padding: 8px 12px;
	cursor: pointer;
`;
const TabList = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 8px 16px;
`;
const TabButtons = styled.div `
	display: flex;
	gap: 10px;
`;
const SearchInput = styled.input `
	margin: 0 16px 16px;
	padding: 12px 16px;
	width: calc(100% - 32px);
	border-radius: 12px;
	border: 1px solid #ccc;
	font-size: 14px;
	box-sizing: border-box;
`;
const Grid = styled.div `
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
	padding: 0 16px 16px;
`;
const CardHeader = styled.div `
	display: flex;
	align-items: center; /* vertical center */
	justify-content: space-between; /* horizontal space between */
	margin-bottom: 8px;
`;
const CarrotContainer = styled.div `
	flex: 1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const TitleContainer = styled.div `
	flex: 2;
	display: flex;
	align-items: center;
`;
const CheckContainer = styled.div `
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const CheckboxRow = styled.div `
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
    const startYRef = useRef(null);
    const [items, setItems] = useState([]);
    const fetchData = async () => {
        const data = await mockItems;
        setItems(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleTouchStart = (e) => {
        startYRef.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
        if (startYRef.current === null)
            return;
        const endY = e.changedTouches[0].clientY;
        const deltaY = endY - startYRef.current;
        if (deltaY < -50)
            setExpanded(true);
        else if (deltaY > 50)
            setExpanded(false);
        startYRef.current = null;
    };
    const handleConsume = (index) => {
        const updated = items.filter((_, i) => i !== index);
        setItems(updated);
        setTimeout(fetchData, 500); // simulate re-fetch
    };
    const filtered = items.filter((item) => (selectedTab === '전체' || item.type === selectedTab) && item.name.includes(searchTerm) && (!showOnlyExpiring || item.isSoon));
    return (_jsxs(DraggableContainer, { expanded: expanded, onTouchStart: handleTouchStart, onTouchEnd: handleTouchEnd, children: [_jsx(TopBar, {}), _jsxs(ScrollContainer, { children: [_jsxs(Header, { children: [_jsx(FridgeIcon, {}), _jsx(TitleText, { children: "\uB098\uB9CC\uC758 \uB0C9\uC7A5\uACE0" })] }), _jsx(SearchInput, { type: "text", placeholder: "\uB0C9\uC7A5\uACE0\uC5D0 \uC800\uC7A5\uB41C \uC2DD\uD488\uC744 \uAC80\uC0C9\uD574\uBCF4\uC138\uC694", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }), _jsxs(TabList, { children: [_jsx(TabButtons, { children: ['전체', '실외', '냉장', '냉동'].map((tab) => (_jsx(Tab, { active: selectedTab === tab, onClick: () => setSelectedTab(tab), children: tab }, tab))) }), _jsxs(CheckboxRow, { children: [_jsx("input", { type: "checkbox", checked: showOnlyExpiring, onChange: () => setShowOnlyExpiring((prev) => !prev) }), "\uC18C\uBE44\uAE30\uD55C\uC784\uBC15"] })] }), _jsx(Grid, { children: filtered.map((item, idx) => (_jsxs(ItemCard, { children: [_jsxs(CardHeader, { children: [_jsx(CarrotContainer, { children: _jsx(CarrotSVG, {}) }), _jsx(TitleContainer, { children: _jsx(Title, { children: item.name }) }), _jsx(CheckContainer, { onClick: () => handleConsume(idx), children: _jsx(CheckSVG, { width: 18 }) })] }), _jsxs(Expiry, { children: ["\uC18C\uBE44\uAE30\uD55C : ", item.expiry] }), _jsx(Countdown, { children: "D-3" })] }, idx))) })] })] }));
};
export default MyFridge;
const Header = styled.div `
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 16px;
`;
const FridgeIcon = styled(FridgeSVG) `
	width: 18px;
	height: 18px;
`;
const TitleText = styled.h2 `
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
