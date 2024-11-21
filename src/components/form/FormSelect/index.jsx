import React from "react";
import { Col, Form, FormLabel } from "react-bootstrap";

const FormSelect = ({
  title,
  required,
  handleChange,
  value,
  classes,
  options,
}) => {
  return (
    <>
      <Col lg={classes || "6"}>
        <div className="form__group">
          <FormLabel>
            {title} {required && <span className="text-danger">*</span>}
          </FormLabel>
          <Form.Select>
            <option>Select One</option>
            {options.map((option, index) => (
              <option key={index} value={option.id}>
                {option.title}
              </option>
            ))}
          </Form.Select>
        </div>
      </Col>
    </>
  );
};

export default FormSelect;
