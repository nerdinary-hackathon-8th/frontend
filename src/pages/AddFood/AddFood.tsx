import FoodList from "../../components/FoodList/FoodList";

const AddFood = () => {
    return (
        <div>
            <div
                style={{
                    position: "relative",
                    height: "120px", // 사진에 맞춰 높이 조정
                    color: "white",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "120px", // 수직 가운데 정렬용 (height와 같게)
                    textAlign: "center",
                    userSelect: "none",
                    background: "linear-gradient(180deg, #9aeb70 0%, #54a731 100%)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                음식추가
            </div>
            <FoodList />
        </div>
    );
};

export default AddFood;
