import React from 'react';
import './dialogInfo.css';

const DialogInfo = () => {
  const technicalInfoList = [
    { title: 'Delivery', value: 'Hand delivery only' },
    { title: 'Returns and Cancellations', value: 'Possible' },
    { title: 'Payment', value: 'Secure' },
    { title: 'Carbon impact', value: 'Value, economy' },
  ];

  return (
    <div>
      {technicalInfoList.map((item, index) => (
        <TechnicalInfoCard key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default DialogInfo;

// Make the card accept props and render dynamic data
const TechnicalInfoCard = ({ title, value }) => {
  return (
    <div className="card-container">
      <div className="content-wrapper">
        <div className="header">
          <span className="title">{title}</span>
        </div>
        <p className="description">{value}</p>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
        >
          <path
            d="M4.35803 0.738281L11.6418 8.02209L4.35803 15.3059"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};


