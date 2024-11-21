import React from "react";
import { Form, Row } from "react-bootstrap";
import { FormInput } from "../../../../components/form";

const Step2 = () => {
  return (
    <>
      <Form>
        <h3>Equal Opportunity</h3>
        <Row className="g-4">
          <FormInput title="full Name" type="text" required={true} />
          <FormInput title="Email" type="email" required={true} />
        </Row>
      </Form>
    </>
  );
};

export default Step2;
