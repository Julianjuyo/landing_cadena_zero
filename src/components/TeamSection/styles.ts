import styled from "styled-components";

export const TeamContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  text-align: center;
  color: white;
`;

export const TeamTitle = styled("h2")`
  font-size: 62px;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #378233;
`;

export const TeamText = styled("p")`
  font-size: 38px;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const MemberCard = styled("div")`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const MemberImage = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid #378233;
`;

export const MemberName = styled("h3")`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
`;

export const MemberPosition = styled("h4")`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #378233;
`;

export const MemberDescription = styled("p")`
  font-size: 14px;
  line-height: 1.5;
  margin-top: 1rem;
  background-color: #3393c6;
  color: #FFFFFF;
  padding: 15px;
  border-radius: 20px;
  font-weight: 600;
`; 