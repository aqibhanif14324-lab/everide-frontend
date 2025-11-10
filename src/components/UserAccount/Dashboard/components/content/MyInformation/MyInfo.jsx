import React from "react";
import "./MyInfo.css";
import "./GenderSelector.css";
import Input from "../../Input/Input";
import TextArea from "../../Input/TextArea";
import CountrySelect from "../../Input/Dropdown";

const MyInfo = () => {
  return (
    <div className="my-info-main-container">
      <div className="contact-form-container">
        <div className="contact-details-container">
          <div className="contact-details-header">
            <span className="contact-title">
              <span className="contact-label">Contact details</span>
              <div className="badge">
                <span>Not shown to other users</span>
              </div>
            </span>
          </div>
        </div>
      </div>

      <GenderSelector />
      <div className="my-info-inputs-container">
        <div className="my-info-inputs">
          <Input name="first-name" label="First Name" />
          <Input name="first-name" label="Last Name" />
        </div>
        <div className="my-info-inputs-two">
          <Input name="Country" label="Country" />
          <Input className="cols-2" name="first-name" label="Phone number" />
        </div>
      </div>
      <SecurityMessage />
      <div className="contact-form-container">
        <div className="contact-details-container">
          <div className="contact-details-header">
            <span className="contact-title">
              <span className="contact-label">Your address               </span>
              <div className="badge">
                <span>Not shown to other users</span>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="my-info-inputs-container">
      <Input name="Enter your address" label="Enter your address" labelClasses={"email-label"} type={"email"} emailClassess={"email-input-class"}  />
        <TextArea name="first-name" label="First Name"/>
      </div>
      <div className="my-info-inputs-two">
          <Input name="No." label="No." />
          <Input className="cols-2" name="address" label="Address" />
          
        </div>
        <div className="my-info-inputs-container">
      <Input name="address-supplement" label="Address supplement"  type={"text"}  />
       
      </div>
      <div className="my-info-inputs-two">
          <Input name="Postal code" label="Postal code" />
          <Input className="cols-2" name="city" label="City" />
          
        </div>
      <div className="my-info-inputs-container">
      <CountrySelect />
      </div>
      <SubmitButton />
    </div>
  );
};

export default MyInfo;

const genders = [
  {
    id: "gender_M",
    value: "M",
    label: "Sir",
    imgSrc:
      "https://static.everide.app/nglwKK2e9YPMBex2qzF6Tmol5duqT6OBLU0aISQBY48/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL00ucG5n.png",
  },
  {
    id: "gender_F",
    value: "F",
    label: "Madam",
    imgSrc:
      "https://static.everide.app/fA8RLvTCYXhTpFPCDT91IWFhR3tZI-OQmKpfPEqZ6jc/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0YucG5n.png",
  },
  {
    id: "gender_N",
    value: "N",
    label: "Neutral",
    imgSrc:
      "https://static.everide.app/lcXAL04W7MFbXijXVmVqaZo4CQ2g-TnwFy12ti3TNYw/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL04ucG5n.png",
  },
];

const GenderSelector = () => {
  return (
    <div className="my-info-wrapper">
      <div className="my-info-container">
        {genders.map(({ id, value, label, imgSrc }) => (
          <div key={id} className="my-info-slide">
            <input
              type="radio"
              id={id}
              name="gender"
              value={value}
              className="my-info-radio"
            />
            <label htmlFor={id} className="my-info-label">
              <img src={imgSrc} alt={label} className="my-info-image" />
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const SecurityMessage = () => {
  return (
    <p className="security-message">
      For added security, please provide a valid phone number.
    </p>
  );
};


import "./Button.css";

const SubmitButton = ({ label = "To validate", onClick }) => {
  return (
    <button type="submit" className="btn-primary-profile" onClick={onClick}>
      {label}
    </button>
  );
};

