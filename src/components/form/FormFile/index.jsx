import React from "react";
import { Col, FormControl, FormLabel } from "react-bootstrap";

const FormFile = ({ title, required, classes, handleChange }) => {
  return (
    <>
      <Col lg={classes || 6}>
        <div className="form__group">
          <FormLabel>
            {title} {required && <span className="text-danger">*</span>}{" "}
          </FormLabel>
          <FormControl
            type="file"
            // onChange={(event) => handleChange(event.target.files[0])}
            required={required}
          />
        </div>
      </Col>
    </>
  );
};

export default FormFile;
