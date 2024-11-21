import React from "react";
import { Col, FormControl, FormLabel } from "react-bootstrap";

const FormInput = ({ type, title, required, handleChange, value, classes }) => {
  return (
    <>
      <Col lg={classes || "6"}>
        <div className="form__group">
          <FormLabel>
            {title} {required && <span className="text-danger">*</span>}
          </FormLabel>
          <FormControl
            type={type || "text"}
            required={required}
            // onChange={(event) => handleChange(event.target.value)}
            value={value}
          />
        </div>
      </Col>
    </>
  );
};

export default FormInput;
