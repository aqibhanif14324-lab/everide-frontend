import React, { useState } from 'react';
import './SendModeForm.css';

const SendModeForm = () => {
  // State for selected package
  const [selectedPackage, setSelectedPackage] = useState('2'); // Default to 'M'
  
  // State for selected transporter
  const [selectedTransporter, setSelectedTransporter] = useState(null);
  
  // Package options data
  const packageOptions = [
    { id: '2', size: 'M', details: '1kg-3kg 1m', recommended: true },
    { id: '3', size: 'L', details: '3kg-5kg 1m', recommended: false },
    { id: '4', size: 'XL', details: '5kg-10kg 1m', recommended: false }
  ];
  
  // Transporter options data
  const transporterOptions = [
    { 
      id: '1', 
      name: 'Mondial Relay', 
      description: 'Drop off the package at a relay point 120cm | 20kg max',
      image: 'https://static.everide.app/1HLKihTvcwK0mpm_6oDC5P2gLVGwJN1GTKelz5-kxNU/rs:fit:200:200:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS90cmFuc3BvcnRlcnMvMS5wbmc.png'
    },
    { 
      id: '2', 
      name: 'Chronopost S2S', 
      description: 'Drop off the package at a relay point 120cm | 20kg max',
      image: 'https://static.everide.app/RnncIia4V7c8FTxpHt7bQ84okAm6ahaSJdCQh8XgOyY/rs:fit:200:200:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS90cmFuc3BvcnRlcnMvMi5wbmc.png'
    },
    { 
      id: '3', 
      name: 'Colissimo', 
      description: 'Drop off the package at the post office 180cm | 25kg max',
      image: 'https://static.everide.app/72PNRBUUxn87nSlFX6Vk7twbJI2V0mjrtr51q7mnX3M/rs:fit:200:200:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS90cmFuc3BvcnRlcnMvMy5wbmc.png'
    },
    { 
      id: '4', 
      name: 'Hand delivery', 
      description: 'Secure collection at your address The most ecological',
      image: 'https://static.everide.app/MhNdm5MbICJENN9TxiioTC8PKwDbWKOdNPWgkIq8Eok/rs:fit:200:200:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS90cmFuc3BvcnRlcnMvNC5wbmc.png'
    }
  ];

  // Handle package selection
  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  // Handle transporter selection
  const handleTransporterSelect = (transporterId) => {
    setSelectedTransporter(transporterId);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedTransporter) {
      alert('Please select a delivery method');
      return;
    }
    
    // Here you would typically send the data to your backend
    const formData = {
      packageSize: selectedPackage,
      transporter: selectedTransporter
    };
    
    console.log('Form submitted:', formData);
    alert(`Package ${selectedPackage} selected with transporter ${selectedTransporter}`);
    
    // You can add your API call here
    // Example:
    // fetch('/api/send-mode', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <div className="send-mode__container">
      <form className="send-mode__form" onSubmit={handleSubmit}>
        {/* Package Format Section */}
        <div className="send-mode__section">
          <h2 className="send-mode__section-title">Package format</h2>
          
          {/* Package Size Selector */}
          <div className="send-mode__package-selector">
            <div className="send-mode__swiper-container">
              <div className="send-mode__swiper-wrapper">
                {packageOptions.map((pkg) => (
                  <div 
                    key={pkg.id} 
                    className={`send-mode__package-option ${selectedPackage === pkg.id ? 'send-mode__package-option--active' : ''}`}
                    onClick={() => handlePackageSelect(pkg.id)}
                  >
                    <input 
                      type="radio" 
                      id={`package_${pkg.id}`} 
                      name="package" 
                      className="send-mode__radio-input" 
                      value={pkg.id}
                      checked={selectedPackage === pkg.id}
                      onChange={() => handlePackageSelect(pkg.id)}
                    />
                    <label 
                      htmlFor={`package_${pkg.id}`} 
                      className={`send-mode__package-label ${pkg.recommended ? 'send-mode__package-label--recommended' : ''}`}
                    >
                      {pkg.recommended && (
                        <span className="send-mode__package-badge">
                          <span>Recommended</span>
                        </span>
                      )}
                      <span className="send-mode__package-size">{pkg.size}</span>
                      <span className="send-mode__package-details">{pkg.details}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="send-mode__package-hint">
            Suitable for jacket, pants, trail running shoes or climbing shoes.
          </p>
        </div>
        
        <div className="send-mode__divider"></div>
        
        {/* Transporter Options Section */}
        <div className="send-mode__section send-mode__section--transporters">
          <div className="send-mode__transporter-options">
            {transporterOptions.map((transporter) => (
              <label 
                key={transporter.id} 
                htmlFor={`transporter_${transporter.id}`} 
                className="send-mode__transporter-label"
              >
                <div className="send-mode__transporter-card">
                  <div className="send-mode__transporter-image">
                    <img 
                      src={transporter.image} 
                      alt={transporter.name} 
                      className="send-mode__transporter-img"
                    />
                  </div>
                  <div className="send-mode__transporter-info">
                    <div className="send-mode__transporter-header">
                      <span className="send-mode__transporter-name">{transporter.name}</span>
                    </div>
                    <div className="send-mode__transporter-description">
                      {transporter.description}
                    </div>
                  </div>
                  <span className={`send-mode__transporter-checkmark ${selectedTransporter === transporter.id ? 'send-mode__transporter-checkmark--selected' : ''}`}>
                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none">
                      <path d="M3.30615 21.0032L19.9903 38.5303L47.7971 9.31836" stroke="currentColor" strokeWidth="5"></path>
                    </svg>
                  </span>
                  <input 
                    type="radio" 
                    id={`transporter_${transporter.id}`} 
                    name="transporter" 
                    className="send-mode__checkbox-input" 
                    value={transporter.id}
                    checked={selectedTransporter === transporter.id}
                    onChange={() => handleTransporterSelect(transporter.id)}
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="send-mode__footer">
          <button type="submit" className="send-mode__submit-button">
            To validate
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendModeForm;