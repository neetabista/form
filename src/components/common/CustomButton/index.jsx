import React from "react";
import { CustomButtonContainer, CustomButtonLink } from "./style";

const CustomButton = ({ title, type, display, onClick }) => {
      return (
            <>
                  <CustomButtonContainer display={display}>
                        <CustomButtonLink
                              type={type}
                              onClick={onClick}
                              className="button__link"
                        >
                              {title}
                        </CustomButtonLink>
                  </CustomButtonContainer>
            </>
      );
};

export default CustomButton;
