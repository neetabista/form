import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f3f3f3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
`;

// The actual progress bar indicating progress
export const Progress = styled.div`
  height: 20px;
  background-color: ${(props) => props.theme.primary};
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease-in-out;
`;

// Text displaying the percentage
export const ProgressText = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  color: #333;
`;

export const CareerApplyFormContainer = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 30px;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    text-align: start;
    text-transform: capitalize;
    &:first-child {
      margin-bottom: 1.5rem;
    }
  }
`;
