import styled from '@emotion/styled';
import { theme } from '@styles/themes';
import { useState, useEffect } from 'react';

const Container = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 2px;
`;

const Title = styled.p`
	font-weight: 700;
	color: #1a1a1a;
	font-size: 15px;
	margin-bottom: 18px;
	margin-top: 0px;
`;

const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	gap: 12px;
	flex-direction: row;
	justify-content: center;
	margin-top: 20px;
`;

const Button = styled.button<{ selected: boolean }>`
	padding: 8px 24px;
	width: 100%;
	border-radius: 15px;
	border: 1.5px solid #959595;
	background-color: ${({ selected }) => (selected ? '#def2de' : 'white')};
	color: ${({ selected }) => (selected ? '#00a36c' : 'black')};
	font-weight: ${({ selected }) => (selected ? '800' : '500')};
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #def2de;
	}
	&:disabled {
		background-color: #f1f1f1;
		color: #bcbcbc;
		border: 1.5px solid ${theme.colors.gray2}};
		cursor: not-allowed;
	}
	&:hover:disabled {
		background-color: #f1f1f1;
	}
`;

const options = [
	{ label: '실온', value: 1 },
	{ label: '냉장', value: 2 },
	{ label: '냉동', value: 3 },
];

interface StorageSelectorProps {
	onChange?: (value: string) => void;
	category: string;
}

export default function StorageSelector({ onChange, category }: StorageSelectorProps) {
	const [selected, setSelected] = useState<string>('');

	useEffect(() => {
		const selectedOption = options.find((opt) => opt.label === selected);
		if (selectedOption && onChange) {
			onChange(selectedOption.label);
		}
	}, [selected, onChange]);

	// Logic to determine which buttons should be disabled
	const getDisabledIndexes = (category: string): number[] => {
		switch (category) {
			case '해산물':
			case '축산/계란':
			case '유제품':
			case '간편식/밀키트':
				return [0]; // 실온 X
			case '조미료/향신료':
			case '건강식품':
				return [1]; // 냉동 X
			case '과자/시리얼':
				return [1, 2]; // 냉장, 냉동 X
			default:
				return [];
		}
	};

	const disabled = getDisabledIndexes(category);

	return (
		<Container>
			<Title>보관방식</Title>
			<ButtonContainer>
				{options.map((option, index) => (
					<Button key={option.label} selected={selected === option.label} onClick={() => setSelected(option.label)} disabled={disabled.includes(index)}>
						{option.label}
					</Button>
				))}
			</ButtonContainer>
		</Container>
	);
}
