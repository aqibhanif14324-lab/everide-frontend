
import React from 'react'
import "./WalletContent.css"
function WalletContent() {
  return (
    <div className="content-page">
 <div className="wallet-content">
        {/* Balance Card */}
        <div className="wallet-balance-card">
          <span className="wallet-balance-label">
            Available Amount
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="wallet-info-icon">
              <path d="M10 0C4.4823 0 0 4.4823 0 10C0 15.5177 4.4823 20 10 20C15.5177 20 20 15.5177 20 10C20 4.4823 15.5177 0 10 0ZM10 0.869565C15.0477 0.869565 19.1304 4.95225 19.1304 10C19.1304 15.0477 15.0477 19.1304 10 19.1304C4.95225 19.1304 0.869565 15.0477 0.869565 10C0.869565 4.95225 4.95225 0.869565 10 0.869565ZM10.1257 4.56861C8.50394 4.56861 7.42864 5.55128 7.19429 7.04823C7.17908 7.14215 7.22521 7.20412 7.31912 7.21977L8.30163 7.39215C8.39554 7.40781 8.45751 7.3608 8.47317 7.26732C8.66012 6.31602 9.22122 5.7855 10.0943 5.7855C10.9834 5.7855 11.6067 6.34721 11.6067 7.2359C11.6067 7.76634 11.4199 8.12487 10.8747 8.87313L9.82931 10.3074C9.50192 10.76 9.36226 11.0876 9.36226 11.712V12.3505C9.36226 12.444 9.42418 12.5068 9.51766 12.5051H10.5469C10.6404 12.5051 10.7023 12.4432 10.7023 12.3497V11.8512C10.7023 11.3212 10.7964 11.1028 11.1082 10.6819L12.1527 9.24677C12.6831 8.51373 12.9475 7.96846 12.9475 7.21977C12.9475 5.67586 11.8092 4.56861 10.1257 4.56861ZM9.44039 13.6923C9.34647 13.6923 9.28414 13.755 9.28414 13.8485V15.1894C9.28414 15.2828 9.34604 15.3448 9.44039 15.3448H10.6258C10.7189 15.3448 10.7812 15.2833 10.7812 15.1894V13.8485C10.7812 13.7555 10.7193 13.6923 10.6258 13.6923H9.44039Z" fill="currentColor"></path>
            </svg>
          </span>
          <span className="wallet-balance-amount">0&nbsp;€</span>
          <button className="wallet-add-account-btn">
            Add an account
          </button>
        </div>

        {/* Payment Options */}
        <div className="wallet-payment-options">
          <h3 className="wallet-payment-title">Receive my payments</h3>
          
          {/* IBAN Option */}
          <div className="wallet-option-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="3.92749" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2"></rect>
              <rect x="1.81018" y="7.48761" width="20.2059" height="1" fill="currentColor"></rect>
              <circle cx="16.4836" cy="16.1511" r="1.31799" fill="currentColor"></circle>
              <circle cx="19.1196" cy="16.1511" r="1.31799" fill="currentColor"></circle>
            </svg>
            <div className="wallet-option-details">
              <div className="wallet-option-header">
                <span className="wallet-option-name">Enter your IBAN</span>
              </div>
              <p className="wallet-option-description">To make transfers to your account</p>
            </div>
          </div>
          
          {/* ID Option */}
          <div className="wallet-option-item">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1269 13.4994V17.9863H4.177C2.52015 17.9863 1.177 16.6432 1.177 14.9863V4.9863C1.177 3.32948 2.52015 1.98633 4.17701 1.98633L16.1264 1.98635C17.7832 1.98635 19.1264 3.32949 19.1264 4.98635V8.60097" stroke="currentColor" strokeWidth="2"></path>
              <path d="M4.46729 5.5C4.19114 5.5 3.96729 5.72386 3.96729 6C3.96729 6.27614 4.19114 6.5 4.46729 6.5L4.46729 5.5ZM20.1249 5.5L4.46729 5.5L4.46729 6.5L20.1249 6.5L20.1249 5.5Z" fill="currentColor"></path>
              <path d="M12.4584 10.9655L13.8364 9.09961H19.6251V13.0996H13.8545L12.4584 10.9655Z" stroke="currentColor"></path>
            </svg>
            <div className="wallet-option-details">
              <div className="wallet-option-header">
                <span className="wallet-option-name">Download your ID</span>
              </div>
              <p className="wallet-option-description">To confirm your identity</p>
            </div>
          </div>
          
          {/* Transfer Option */}
          <div className="wallet-option-item">
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5834 8.37228L16.5834 6.60551C16.5834 4.94866 15.2402 3.60551 13.5834 3.60551L4.91671 3.60551C3.25985 3.60551 1.91671 4.94866 1.91671 6.60552L1.91671 15.2557C1.91671 16.9125 3.25986 18.2557 4.91671 18.2557L13.5834 18.2557C15.2402 18.2557 16.5834 16.9125 16.5834 15.2557L16.5834 13.4881" stroke="#2C2C2C" strokeWidth="2"></path>
              <path d="M20.0208 7.99725V10.1973H14.0625V11.6639H20.0208V13.8639L23 10.9306L20.0208 7.99725Z" fill="#2C2C2C"></path>
              <rect x="9.78833" y="10.2164" width="3.17074" height="1.40918" fill="#2C2C2C"></rect>
            </svg>
            <div className="wallet-option-details">
              <div className="wallet-option-header">
                <span className="wallet-option-name">Transfer your money</span>
              </div>
              <p className="wallet-option-description">In one click to your bank account</p>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <button className="wallet-help-link">
          Any issue ? <u>contact our customer service</u>
        </button>
      </div>
    </div>
  )
}

export default WalletContent


