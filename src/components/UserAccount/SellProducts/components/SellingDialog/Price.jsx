import React, { useState } from 'react';
import './PriceForm.css';

const PriceFormContent = () => {
  const [price, setPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [negotiate, setNegotiate] = useState(false);
  const [smartPrice, setSmartPrice] = useState(false);
  const [showSmartPriceInfo, setShowSmartPriceInfo] = useState(false);

  return (
    <div className="pricing-container">
      <form autoComplete="on" noValidate className="pricing-form">
        {/* Price Section */}
        <fieldset className="pricing-section new-pricing">
         <div>
             <div className="pricing-section-header">
            <span className="pricing-title">Enter the new price</span>
          </div>
          <p className="pricing-subtitle">Our integrated Argus advises you on the sale price</p>
         </div>
          <div className="pricing-input-wrapper">
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0€"
              className="pricing-input"
            />
          </div>
        </fieldset>

        {/* Selling Price Section */}
        <fieldset className="pricing-section pricing-highlight">
          <div className="pricing-section-header">
            <span className="pricing-title">
              Selling price
              <span className="pricing-badge">Zero fees</span>
            </span>
          </div>
          <p className="pricing-subtitle">You will receive 100% of the sale price</p>
          <div className="pricing-input-wrapper">
            <input
              type="number"
              name="sellingPrice"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              placeholder="0€"
              className="pricing-input"
            />
          </div>
          <span className="pricing-tip">Choose an attractive price to sell quickly</span>
        </fieldset>

        {/* Sell Faster Options */}
        <fieldset className="pricing-section">
          <div className="pricing-section-header">
            <span className="pricing-title">Sell faster</span>
          </div>

          {/* Negotiate Option */}
          <div className="pricing-option">
            <div className="pricing-option-text">
              I agree to negotiate
              <span className="pricing-badge">+ 30% sales</span>
              <p className="pricing-subtext">Receive offers from buyers</p>
            </div>
            <label className="pricing-switch">
              <input
                type="checkbox"
                checked={negotiate}
                onChange={() => setNegotiate(!negotiate)}
              />
              <span className="pricing-slider"></span>
            </label>
          </div>

          {/* Smart Price Option */}
          <div className="pricing-option">
            <div className="pricing-option-text">
              Smart Price
              <button
                type="button"
                onClick={() => setShowSmartPriceInfo(!showSmartPriceInfo)}
                className="pricing-learn-more"
              >
                Learn more
              </button>
            </div>
            <label className="pricing-switch">
              <input
                type="checkbox"
                checked={smartPrice}
                onChange={() => setSmartPrice(!smartPrice)}
              />
              <span className="pricing-slider"></span>
            </label>
            {showSmartPriceInfo && (
              <p className="pricing-info">
                If my product is not sold after 10 days I authorize Everide to reduce the price by 5% each week without ever exceeding -30%.
              </p>
            )}
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="pricing-submit-container">
          <button type="submit" className="pricing-submit-button">
            To validate
          </button>
        </div>
      </form>
    </div>
  );
};

export default PriceFormContent;
