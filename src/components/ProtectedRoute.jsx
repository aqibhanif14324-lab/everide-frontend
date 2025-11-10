import { Navigate, useLocation } from 'react-router-dom';
import { useMeQuery } from '../store/services/authApi';

function ProtectedRoute({ children, requiredRoles = null }) {
  const location = useLocation();
  const { data, isLoading, isError } = useMeQuery();

  // Show loading state while checking authentication (only on initial load)
  if (isLoading && !data) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ fontSize: '1rem', color: '#6b7280' }}>Loading...</div>
      </div>
    );
  }

  // Check if user is authenticated
  const user = data?.data?.user;
  const isAuthenticated = !!user;

  // Redirect to login if not authenticated
  if (!isLoading && (!isAuthenticated || isError)) {
    // Store intended URL in query params
    const redirectPath = location.pathname + location.search;
    const loginPath = `/login?redirect=${encodeURIComponent(redirectPath)}`;
    return <Navigate to={loginPath} replace />;
  }

  // Check role requirements if specified
  if (isAuthenticated && requiredRoles && requiredRoles.length > 0) {
    const userRole = user?.role?.slug || (user?.role_id === 1 ? 'admin' : user?.role_id === 2 ? 'moderator' : 'user');
    const hasRequiredRole = requiredRoles.includes(userRole) || 
                           (requiredRoles.includes('admin') && user?.role_id === 1) ||
                           (requiredRoles.includes('moderator') && user?.role_id === 2) ||
                           (requiredRoles.includes('user') && user?.role_id === 3);

    if (!hasRequiredRole) {
      // Redirect to dashboard home if user doesn't have required role
      return <Navigate to="/user/dashboard/1" replace />;
    }
  }

  // User is authenticated and authorized - render children
  return children;
}

export default ProtectedRoute;
