import styles from "./FoodList.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "./FoodCard";
import HaSanMull from "../../assets/addfood/해산물.png";
import MeetAndEgg from "../../assets/addfood/축산·계란.png";
import Vegetable from "../../assets/addfood/채소.png";
import Milk from "../../assets/addfood/유제품.png";
import Seasoning from "../../assets/addfood/조미료·향신료.png";
import Cookie from "../../assets/addfood/과자·시리얼.png";
import Fruit from "../../assets/addfood/과일.png";
import Nuts from "../../assets/addfood/견과류.png";
import EasyFood from "../../assets/addfood/간편식·밀키트.png";
import NotHealthyFood from "../../assets/addfood/가공식품.png";
import HealthyFood from "../../assets/addfood/건강식품.png";

export default function FoodList() {
    const navigate = useNavigate();
    const [currentId] = useState<number | null>(null);

    // 임시 더미 데이터 (FoodCard를 위한 아이디와 이름 등)
    // 필요하면 FoodCard prop에 맞게 수정하세요
    const foodCards = [
        { id: 1, name: "해산물", icon: HaSanMull },
        { id: 2, name: "축산/계란", icon: MeetAndEgg },
        { id: 3, name: "채소", icon: Vegetable },
        { id: 4, name: "과일", icon: Fruit },
        { id: 5, name: "유제품", icon: Milk },
        { id: 6, name: "조미료/향신료", icon: Seasoning },
        { id: 7, name: "과자/시리얼", icon: Cookie },
        { id: 8, name: "견과류", icon: Nuts },
        { id: 9, name: "간편식/밀키트", icon: EasyFood },
        { id: 10, name: "가공식품", icon: NotHealthyFood },
        { id: 11, name: "건강식품", icon: HealthyFood },
        // { id: 12, name: "기타", icon: "/path/to/seafood.png" },
    ];

    return (
        <div className={styles.page}>
            <p className={styles.title}>카테고리를 클릭하고, 음식을 추가해보세요!</p>
            <div className={styles.section}>
                <div className={styles.gridView}>
                    {foodCards.map((card) => (
                        <FoodCard
                            key={card.id}
                            id={card.id}
                            name={card.name}
                            icon={card.icon}
                            isSelected={card.id === currentId}
                            onClick={() => {
                                navigate(`/register-food/${card.id}`, { state: card.name });
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
