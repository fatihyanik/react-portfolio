import styled from "styled-components";

export const StyledHome = styled.section`
  background-color: ${({ theme }) => theme.backgroundColor.dark};
  color: ${({ theme }) => theme.color.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8rem;
  height: 100vh;
`;

export const Name = styled.h2`
  font-size: 2.1875rem;
  position: relative;
  color: #fff9f9;
`;

export const Title = styled.h1`
  font-size: 3.375rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem 0;
  color: #f7f7f7;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const Line = styled.hr`
  width: 5rem;
  position: absolute;
  bottom: 6rem;
  background: ${({ theme }) => theme.backgroundColor.orange};
  border: none;
  height: 0.125rem;
  border-radius: 2.8125rem;
`;

export const Greeting = styled.p`
  position: absolute;
  bottom: 3rem;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;
`;

export const Social = styled.a`
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;
  color: ${({ theme }) => theme.color.light};
  &:hover {
    transform: translateY(-5px);
    color: ${({ theme }) => theme.backgroundColor.orange};
  }
  &::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    left: -1rem;
    top: 50%;
    height: 8px;
    width: 8px;
    background: ${({ theme }) => theme.backgroundColor.orange};
    border-radius: 45px;
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const Quote = styled.span`
  position: absolute;
  right: 25%;
  bottom: 30%;
  color: #94929d;
  font-size: 10px;
  letter-spacing: 2px;
`;