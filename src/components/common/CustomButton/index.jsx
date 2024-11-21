import React from "react";
import { CustomButtonContainer, CustomButtonLink } from "./style";

const CustomButton = ({ title, type, display }) => {
  return (
    <>
      <CustomButtonContainer display={display}>
        <CustomButtonLink type={type} className="button__link">
          {title}
        </CustomButtonLink>
      </CustomButtonContainer>
    </>
  );
};

export default CustomButton;
