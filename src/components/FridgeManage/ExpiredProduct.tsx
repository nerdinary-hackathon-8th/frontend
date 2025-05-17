import styled from "@emotion/styled";
import fire from "../../assets/fire.png";
import ExternelLink from "../../assets/ExternalLink.png";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #eee;
    border-radius: 30px;
    padding: 7px 20px;
    background-color: white;
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    position: relative;
`;

const LeftGroup = styled.div`
    display: flex;
    margin-left: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #f57c40;
    font-weight: 500;
    font-size: 16px;
`;

const Image = styled.img`
    width: 24px;
`;

const Text = styled.p`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0%;
`;

const Count = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

const ExternalLink = styled.a`
    color: #f57c40;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
`;

interface ExpiredProductProps {
    count: number;
}

export default function ExpiredProduct({ count }: ExpiredProductProps) {
    return (
        <Container>
            <LeftGroup>
                <Image src={fire} />
                <Text>소비기한 임박한 제품</Text>
                <Count>{count}개</Count>
                <ExternalLink
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="자세히 보기"
                >
                    <img src={ExternelLink} style={{ width: "15px" }} />
                </ExternalLink>
            </LeftGroup>
        </Container>
    );
}
