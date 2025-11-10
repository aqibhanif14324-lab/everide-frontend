import React from "react";
import "./PaymentMethodEmptyState.css";

const PaymentMethodEmptyState = () => {
  return (
    <div className="payment-empty-state">
      <div className="empty-state-content">
        <div className="empty-state-icon">
          <svg
            data-v-c1522958=""
            data-v-289b1a2d=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20"
          >
            <rect
              data-v-c1522958=""
              x="1"
              y="3.92749"
              width="22"
              height="16"
              rx="2"
              stroke="currentColor"
              stroke-width="2"
            ></rect>
            <rect
              data-v-c1522958=""
              x="1.81018"
              y="7.48761"
              width="20.2059"
              height="1"
              fill="currentColor"
            ></rect>
            <circle
              data-v-c1522958=""
              cx="16.4836"
              cy="16.1511"
              r="1.31799"
              fill="currentColor"
            ></circle>
            <circle
              data-v-c1522958=""
              cx="19.1196"
              cy="16.1511"
              r="1.31799"
              fill="currentColor"
            ></circle>
          </svg>
        </div>
        <span className="empty-state-title">
          You don't have a payment method yet
        </span>
        <span className="empty-state-description">
          Your card information will be encrypted
        </span>
      </div>
      <button type="button" className="add-card-button">
        Add a card
      </button>
    </div>
  );
};

export default PaymentMethodEmptyState;

const SubmitButton = ({ label = "To validate", onClick }) => {
    return (
      <button type="submit" className="btn-primary-profile" onClick={onClick}>
        {label}
      </button>
    );
  };