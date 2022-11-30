import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const StartButton = styled.div<{ isStarted: boolean }>`
  background-color: ${({ isStarted }) => (isStarted ? "#f31260" : "#19c964")};
  box-shadow: 0 0 3px ${({ isStarted }) => (isStarted ? "#f31260" : "#19c964")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  height: 30px;
  width: 80px;
  border-radius: 50px;
  cursor: pointer;
  :active {
    height: 28px;
    width: 78px;
  }
`;

export const SizeSelector = styled.div`
  height: 30px;
  width: 120px;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfc0c2;
  box-shadow: 0 0 3px #bfc0c2;
`;

export const SizeButton = styled.div<{
  isSelected: boolean;
  isStarted: boolean;
}>`
  background-color: ${({ isSelected, isStarted }) => {
    if (isSelected && isStarted) return "#939598";
    else if (isSelected) return "#0172f5";
    else return "transparent";
  }};
  cursor: ${({ isStarted }) => (isStarted ? "default" : "pointer")};
  height: 30px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  :first-child {
    border-radius: 50px 0 0 50px;
  }
  :last-child {
    border-radius: 0 50px 50px 0;
  }
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  height: 30px;
  width: 70px;
  border-radius: 50px;
  background-color: #f5a424;
  box-shadow: 0 0 3px #f5a424;
`;

export const Minutes = styled.div`
  display: flex;
  justify-content: right;
  width: 30px;
`;
export const Colons = styled.div`
  display: flex;
  justify-content: center;
  width: 10px;
`;
export const Seconds = styled.div`
  display: flex;
  justify-content: left;
  width: 30px;
`;
