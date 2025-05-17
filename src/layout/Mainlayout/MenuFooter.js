import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Fridge from "../../assets/fridge.png";
const Footer = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 61px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 0.8rem 0.8rem 0 0;
    border-top: 1px solid #646464;
    padding: 0 3rem;
    box-sizing: border-box;
    z-index: 10;
`;
// 기존 메뉴 영역 스타일 (좌우 끝에 메뉴들 배치)
const MenusWrapper = styled.div `
    display: flex;
    flex: 1;
    justify-content: space-between;
`;
// 개별 메뉴
const Menu = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1; /* 너비 균등 분배 */
    max-width: 6rem; /* 최대 너비 제한 */
     overflow: hidden;
    margin-top: 20px;
`;
// 아이콘
const Icon = styled.img `
    height: 22px;
`;
// 텍스트
const Text = styled.p `
    font-size: 1rem;
    margin-top: 1px;
`;
const AddButton = styled.button `
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    width: 68px;
    height: 68px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(180deg, #90ee90, #32cd32);
    color: white;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 20;
    /* 아래 추가 */
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 8px;
    margin: 0;
    appearance: none;
`;
export default function MenuFooter({ currentMenuIndex }) {
    const navigate = useNavigate();
    const menus = [
        {
            text: "홈",
            icon: Fridge,
            // iconSelected: MenuHomeIconSelectedImage,
        },
        {
            text: "냉장고",
            icon: Fridge,
            // iconSelected: MenuViewIconSelected,
        },
        // {
        //     text: '찜 목록',
        //     icon: MenuFavoriteIcon,
        //     iconSelected: MenuFavoriteIconSelected,
        // },
        // {
        //     text: '판매',
        //     icon: MenuSellIconImage,
        //     iconSelected: MenuSellIconSelectedImage,
        // },
        // {
        //     text: '프로필',
        //     icon: MenuProfileIcon,
        //     iconSelected: MenuProfileIconSelected,
        // },
    ];
    const handleClick = (currentIndex) => {
        let path = "";
        if (currentIndex === 0) {
            path = "/";
        }
        else if (currentIndex === 1) {
            path = "/home";
        }
        else if (currentIndex === 2) {
            path = "/wishlist";
        }
        else if (currentIndex === 3) {
            path = "/seller-saleslist";
        }
        else if (currentIndex === 4) {
            path = "/profile";
        }
        navigate(path);
    };
    const handleAddClick = () => {
        console.log("+ 버튼 클릭됨");
        // navigate("/add");
    };
    return (_jsxs(Footer, { children: [_jsx(MenusWrapper, { children: menus.map((menu, index) => (_jsxs(Menu, { onClick: () => handleClick(index), children: [_jsx(Icon, { src: index == currentMenuIndex ? menu.icon : menu.icon }), _jsx(Text, { children: menu.text })] }, index))) }), _jsx(AddButton, { onClick: handleAddClick, children: "+" })] }));
}
