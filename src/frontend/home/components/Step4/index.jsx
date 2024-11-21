import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { FormInput } from "../../../../components/form";

const Step4 = ({ currentStep }) => {
  const [fields, setFields] = useState([
    { qualifications: "", institution: "", from: "", to: "" },
  ]);

  const handleAddFields = () => {
    setFields([
      ...fields,
      { qualifications: "", institution: "", from: "", to: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };
  return (
    <>
      <h3>
        <h3>Step-{currentStep}: Employment History</h3>
      </h3>

      <p>
        Please write your current and previous employment history.
        <strong> (most recent first- Click Add for Multiple Employment)</strong>
      </p>
      {fields.map((field, index) => (
        <Row className="g-4 " key={index}>
          <FormInput
            title="Qualifications"
            type="text"
            required={true}
            value={field.qualifications}
            classes="3"
          />
          <FormInput
            title="Institution"
            type="text"
            required={true}
            value={field.institution}
            classes="3"
          />

          <FormInput
            title="From"
            type="date"
            required={true}
            value={field.from}
            classes="3"
          />
          <FormInput
            title="To"
            type="date"
            required={true}
            value={field.to}
            classes="3"
          />

          <div className="col-md-12 text-end">
            {index > 0 && (
              <Button
                variant="danger"
                onClick={() => handleRemoveFields(index)}
              >
                Remove
              </Button>
            )}
          </div>
        </Row>
      ))}

      <Button variant="primary" onClick={handleAddFields}>
        Add More
      </Button>
    </>
  );
};

export default Step4;
