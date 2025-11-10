// DialogComponent.jsx
import * as Dialog from "@radix-ui/react-dialog";
import "./ContactDialog.css"; // Your custom CSS styles
import { FaMessage } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function ContactDialog({text,type}) {
  const [purpose, setPurpose] = useState("");
  const [subject, setSubject] = useState("");
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [message, setMessage] = useState("");
  const [charsRemaining, setCharsRemaining] = useState(1500);

  const purposeOptions = ["My order", "My wallet", "Other"];
  const subjectOptions = {
    "My order": ["Order error", "Product not received", "Payment", "Other"],
    "My wallet": [
      "Payment updation error",
      "Balance discrepancy",
      "Transaction issue",
      "Other",
    ],
    Other: ["General inquiry", "Technical issue", "Feedback", "Other"],
  };

  const purposeRef = useRef(null);
  const subjectRef = useRef(null);

  // Handle outside clicks for purpose dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (purposeRef.current && !purposeRef.current.contains(event.target)) {
        setShowPurposeDropdown(false);
      }
      if (subjectRef.current && !subjectRef.current.contains(event.target)) {
        setShowSubjectDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePurposeSelect = (selectedPurpose) => {
    setPurpose(selectedPurpose);
    setShowPurposeDropdown(false);
    setSubject("");
  };

  const handleSubjectSelect = (selectedSubject) => {
    setSubject(selectedSubject);
    setShowSubjectDropdown(false);
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setCharsRemaining(1500 - value.length);
  };

  return (
    <Dialog.Root>
     {
        type==="button" ? <>
         <Dialog.Trigger className="dashboard-contact-dialog_button menu-item">
        <div className="menu-item-left">
          <span className={`menu-icon`}>{<FaMessage />}</span>
          <div className="menu-text">
            <span className={`menu-title `}>Contact</span>
          </div>
        </div>

        <div className="menu-item-right">
          <span className={`menu-arrow `}>›</span>
        </div>
      </Dialog.Trigger>
        </> :  <Dialog.Trigger className="dashboard-contact-dialog_button button">
        {text}
      </Dialog.Trigger>
     }

      <Dialog.Portal>
        <Dialog.Overlay className="dashboard-contact-dialog_overlay" />
        <Dialog.Content className="dashboard-contact-dialog_content">
          <Dialog.Title className="dashboard-contact-dialog_title">
            <div className="dashboard-contact-container">
              <Dialog.Close className="dashboard-contact-close-button">
                <svg
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dashboard-contact-close-icon"
                >
                  <path
                    d="M42.5 37.9146L19.5791 15L15 19.5854L37.9146 42.4937L15 65.4083L19.5854 69.9937L42.4937 47.0791L47.0791 42.4937L42.5 37.9146Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M44.2661 47.0791L67.187 70L71.7724 65.4146L48.8515 42.5L71.7661 19.5854L67.1806 15L44.2724 37.9146L39.687 42.5L44.2661 47.0791Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Dialog.Close>
              <span className="dashboard-contact-title">Contact Support</span>
            </div>
          </Dialog.Title>
          <Dialog.Description className="dashboard-contact-dialog_description">
            <p className="dashboard-contact-message">
              A question or a problem? Do not hesitate to contact customer
              service
            </p>

            <form
              className="dashboard-contact-form"
              noValidate
              autoComplete="on"
            >
              <>
                {/* Purpose of Request Dropdown */}
                <span
                  className="dashboard-contact-field-relative"
                  ref={purposeRef}
                >
                  <div className="dashboard-contact-field" required>
                    <button
                      type="button"
                      className={`dashboard-contact-dropdown-button ${
                        purpose ? "has-value" : ""
                      }`}
                      onClick={() => {
                        setShowPurposeDropdown(!showPurposeDropdown);
                        setShowSubjectDropdown(false);
                      }}
                    >
                      <span className="dashboard-contact-dropdown-label">
                        Purpose of the request
                      </span>
                      <span className="dashboard-contact-dropdown-value">
                        {purpose || "Other"}
                      </span>
                      <div className="dashboard-contact-dropdown-arrow">
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </button>

                    {showPurposeDropdown && (
                      <div className="dashboard-contact-dropdown-list-container">
                        <ul className="dashboard-contact-dropdown-list">
                          {purposeOptions.map((option, index) => (
                            <li
                              key={index}
                              className={`dashboard-contact-dropdown-item ${
                                purpose === option ? "selected" : ""
                              }`}
                              onClick={() => handlePurposeSelect(option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </span>

                {/* Subject Dropdown (only shown when purpose is selected) */}
                {purpose && (
                  <span
                    className="dashboard-contact-field-relative dashboard-contact-subject-field"
                    ref={subjectRef}
                  >
                    <div className="dashboard-contact-field" required>
                      <button
                        type="button"
                        className={`dashboard-contact-dropdown-button ${
                          subject ? "has-value" : ""
                        }`}
                        onClick={() => {
                          setShowSubjectDropdown(!showSubjectDropdown);
                          setShowPurposeDropdown(false);
                        }}
                      >
                        <span className="dashboard-contact-dropdown-label">
                          Subject
                        </span>
                        <span className="dashboard-contact-dropdown-value">
                          {subject || "Select subject"}
                        </span>
                        <div className="dashboard-contact-dropdown-arrow">
                          <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>

                      {showSubjectDropdown && (
                        <div className="dashboard-contact-dropdown-list-container">
                          <ul className="dashboard-contact-dropdown-list">
                            {subjectOptions[purpose]?.map((option, index) => (
                              <li
                                key={index}
                                className={`dashboard-contact-dropdown-item ${
                                  subject === option ? "selected" : ""
                                }`}
                                onClick={() => handleSubjectSelect(option)}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </span>
                )}

                {/* Message Textarea */}
                <div className="dashboard-contact-textarea-field">
                  <div className="dashboard-contact-textarea-container">
                    <textarea
                      spellCheck="false"
                      rows="4"
                      placeholder=" "
                      name="content"
                      className="dashboard-contact-textarea"
                      value={message}
                      onChange={handleMessageChange}
                      maxLength="1500"
                    ></textarea>
                    <label className="dashboard-contact-textarea-label">
                      Write a message
                    </label>
                  </div>
                  <span className="dashboard-contact-char-count">
                    {charsRemaining} characters remaining
                  </span>
                </div>
              </>

              {/* Form Buttons */}
              <div className="dashboard-contact-form-buttons">
                <button
                  type="button"
                  className="dashboard-contact-cancel-button"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="dashboard-contact-submit-button"
                >
                  Send
                </button>
              </div>
            </form>
          </Dialog.Description>

          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
