import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomButtonContainer = styled.div`
      margin-top: ${(props) => (props.marginTop ? "0" : "2rem")};
      display: ${(props) => (props.display ? "block" : " inline-block")};
`;

export const CustomButtonLink = styled.button`
      cursor: pointer;
      display: ${(props) => (props.display ? "block" : " inline-block")};

      color: ${(props) => props.theme.textColor};

      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};

      text-decoration: none;
      padding: 7px 15px;
      font-size: 16px;
      border-radius: 5px;
      transition: all 0.3s ease;
      text-transform: capitalize;
      text-align: center;
      min-width: 140px;
      &:hover {
            background-color: ${(props) => props.theme.secondary};
      }
`;
