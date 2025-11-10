import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Login.css';
import Layout from '../../components/Layout/Layout';
import { useLoginMutation, useMeQuery } from '../../store/services/authApi';

const Login = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [login, { isLoading }] = useLoginMutation();
  const { data: userData } = useMeQuery();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/user/dashboard/1';

  // Redirect if already logged in
  useEffect(() => {
    if (userData?.data?.user) {
      navigate(redirectTo, { replace: true });
    }
  }, [userData, navigate, redirectTo]);

  // Function to check screen width
  const checkScreenWidth = () => {
    setHideHeader(window.innerWidth <= 1021.008);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const result = await login({ email, password }).unwrap();
      
      if (result?.data?.user) {
        // Redirect to intended URL or default dashboard
        navigate(redirectTo, { replace: true });
      }
    } catch (error) {
      if (error?.data?.errors) {
        setErrors(error.data.errors);
      } else {
        setErrors({ email: ['Login failed. Please check your credentials.'] });
      }
    }
  };

  return (
    <div className="login-page-container">
      <Layout hideHeader={hideHeader}>
        <div className="login-container single-store-container">
          <div className="login-sidebar">
            <nav className="login-nav">
              <div className="login-content">
                <span className="login-title">Log in to get your next outdoor gear</span>
                
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '0.5rem',
                        border: errors.email ? '1px solid red' : '1px solid #ccc',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                      }}
                    />
                    {errors.email && (
                      <div style={{ color: 'red', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                        {errors.email[0]}
                      </div>
                    )}
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        marginBottom: '0.5rem',
                        border: errors.password ? '1px solid red' : '1px solid #ccc',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                      }}
                    />
                    {errors.password && (
                      <div style={{ color: 'red', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                        {errors.password[0]}
                      </div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="login-button"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </button>
                </form>

                <div className="login-divider"></div>
                <a href="/en/content/mon-guide-everide" className="login-link">
                  <div className="login-card login-card-warning">
                    <div className="login-card-content">
                      <div className="login-card-text">
                        <span className="login-card-title">My Everide guide</span>
                        <p className="login-card-description">FAQ, all the tips to buy & sell my items easily</p>
                      </div>
                    </div>
                    <div className="login-card-image">
                      <img alt="guide" src="https://static.everide.app/build/1674/img/guide.8123f65.png" className="login-image" />
                    </div>
                  </div>
                </a>
                <div className="login-card login-card-indigo">
                  <div className="login-card-content">
                    <div className="login-card-text">
                      <span className="login-card-title">Need help ?</span>
                      <p className="login-card-description">Ask a question, our customer service gets back to you in less than a day</p>
                    </div>
                  </div>
                  <div className="login-card-image">
                    <img alt="sav" src="https://static.everide.app/build/1674/img/sav.88443fb.png" className="login-image" />
                  </div>
                </div>
                <div className="login-footer">
                  <a href="/en/page/cgv" className="login-footer-link">
                    <div className="login-footer-item">
                      <svg className="login-footer-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.21811C1 3.66583 1.44772 3.21811 2 3.21811H5.13158C6.24321 3.21811 7.20875 2.45328 7.46321 1.37117C7.5052 1.19261 7.66452 1.06641 7.84795 1.06641H9.74875L11.7206 1.06643C11.985 1.06644 12.2209 1.23226 12.3105 1.48098L13.2513 1.14227L12.3105 1.48098C12.6857 2.52323 13.6743 3.21811 14.7821 3.21811H18C18.5523 3.21811 19 3.66583 19 4.21811V17.92C19 18.4723 18.5523 18.92 18 18.92H10H2C1.44772 18.92 1 18.4723 1 17.92V4.21811Z" stroke="currentColor" strokeWidth="2" />
                        <circle cx="9.83405" cy="4.35504" r="1.03766" fill="currentColor"></circle>
                        <rect x="3.81567" y="8" width="12" height="1" fill="currentColor"></rect>
                        <rect x="3.81567" y="10" width="8" height="1" fill="currentColor"></rect>
                        <rect x="3.81567" y="12" width="6" height="1" fill="currentColor"></rect>
                        <rect x="3.81567" y="14" width="3" height="1" fill="currentColor"></rect>
                      </svg>
                      <span>GTC/GTU</span>
                    </div>
                  </a>
                  <a href="/en/page/legals" className="login-footer-link">
                    <div className="login-footer-item">
                      <svg className="login-footer-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.51472" y="9.29297" width="3" height="7.00061" transform="rotate(-45 1.51472 9.29297)" stroke="currentColor"></rect>
                        <rect x="7.17146" y="3.63574" width="3" height="7.00061" transform="rotate(-45 7.17146 3.63574)" stroke="currentColor"></rect>
                        <path d="M5.05029 5.05078L19.1924 19.1929" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      <span>Legal Notices</span>
                    </div>
                  </a>
                  <a href="/en/page/cookies" className="login-footer-link">
                    <div className="login-footer-item">
                      <svg className="login-footer-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.989 9.48633C11.989 9.22368 11.9373 8.96361 11.8368 8.72096C11.7363 8.47831 11.5889 8.25783 11.4032 8.07211C11.2175 7.8864 10.997 7.73908 10.7544 7.63857C10.5117 7.53806 10.2517 7.48633 9.98901 7.48633C9.72637 7.48633 9.4663 7.53806 9.22365 7.63857C8.981 7.73908 8.76052 7.8864 8.5748 8.07211C8.38908 8.25783 8.24176 8.47831 8.14125 8.72096C8.04075 8.96361 7.98901 9.22368 7.98901 9.48633L9.98901 9.48633H11.989Z" stroke="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 9.98633H7.5V11.9022H12.5V9.98633ZM9.98901 11.4443C10.2652 11.4443 10.489 11.2204 10.489 10.9443C10.489 10.6681 10.2652 10.4443 9.98901 10.4443C9.71287 10.4443 9.48901 10.6681 9.48901 10.9443C9.48901 11.2204 9.71287 11.4443 9.98901 11.4443Z" fill="currentColor"></path>
                        <path d="M16.4533 8.27063V3.9494C14.5606 3.9494 11.7102 2.64963 9.99994 1.49805C9.99994 1.49805 5.43928 3.9494 3.54663 3.938V11.999C3.54663 12.2612 4.0027 15.6019 10.0114 18.6233C10.0114 18.6233 16.4533 15.4081 16.4533 11.6455V8.01864" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
                      </svg>
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="login-overlay"></div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;