import React from "react";

const Step7 = ({ currentStep }) => {
  return (
    <>
      <h3>Step-{currentStep}: Final Step</h3>
      <h5>Personal data:</h5>
      <ul>
        <li>Name</li>
        <li>Date of birth</li>
        <li>
          Contact details, including telephone number, email address and postal
          address
        </li>
        <li>Experience, training and qualifications</li>
        <li>CV</li>
        <li>National insurance number</li>
      </ul>

      <h5>Sensitive personal data:</h5>
      <ul>
        <li>Disability/health condition relevant to the role</li>
        <li> Criminal conviction</li>
        <li>Include any other relevant sensitive personal data</li>
        <li>Experience, training and qualifications</li>
        <li>CV</li>
      </ul>

      <p>
        I, undersigned, that all the statements above are true and complete to
        the best of my knowledge. I understand that if I have given untrue or
        misleading information this may result in disciplinary action and/or
        dismissal. I also hereby confirin that I will notify AESN in writing
        should there be any changes on my situation in the future.
      </p>
    </>
  );
};

export default Step7;
