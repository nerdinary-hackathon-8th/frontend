import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 20px;
`;

const Title = styled.p`
    font-weight: 700;
    color: #1a1a1a;
    font-size: 15px;
    margin-bottom: 18px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;

const Button = styled.button<{ selected: boolean }>`
    padding: 8px 24px;
    border-radius: 15px;
    border: 1.5px solid #00a36c;
    background-color: ${({ selected }) => (selected ? "#def2de" : "white")};
    color: ${({ selected }) => (selected ? "#00a36c" : "black")};
    font-weight: ${({ selected }) => (selected ? "800" : "500")};
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #def2de;
    }
`;

const options = [
    { label: "실온", value: 1 },
    { label: "냉장", value: 2 },
    { label: "냉동", value: 3 },
];

interface StorageSelectorProps {
    onChange?: (value: number) => void;
}

export default function StorageSelector({ onChange }: StorageSelectorProps) {
    const [selected, setSelected] = useState<string>("");

    useEffect(() => {
        const selectedOption = options.find((opt) => opt.label === selected);
        if (selectedOption && onChange) {
            onChange(selectedOption.value);
        }
    }, [selected, onChange]);

    return (
        <Container>
            <Title>보관방식</Title>
            <ButtonContainer>
                {options.map((option) => (
                    <Button
                        key={option.label}
                        selected={selected === option.label}
                        onClick={() => setSelected(option.label)}
                    >
                        {option.label}
                    </Button>
                ))}
            </ButtonContainer>
        </Container>
    );
}
