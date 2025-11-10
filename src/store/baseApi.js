import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// CSRF Cookie setup - call this on app init
export const setupCsrfCookie = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/sanctum/csrf-cookie`, {
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });
  } catch (error) {
    console.error('Failed to set CSRF cookie:', error);
  }
};

// Base query with 401/419 interceptor
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    credentials: 'include', // Important for Sanctum SPA auth
    prepareHeaders: (headers, { getState }) => {
      headers.set('X-Requested-With', 'XMLHttpRequest');
      headers.set('Accept', 'application/json');
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  // Handle 401 (Unauthenticated) or 419 (CSRF Token Mismatch)
  // Skip interceptor for auth endpoints, public endpoints, and /api/me (handled by ProtectedRoute)
  const url = typeof args === 'string' ? args : args?.url || '';
  const method = typeof args === 'string' ? 'GET' : (args?.method || 'GET');
  const isAuthEndpoint = url.includes('/auth/') || url.includes('/sanctum/');
  // Public listing endpoints: GET /api/listings (index) and GET /api/listings/{slug} (show)
  // Exclude protected endpoints like /listings/{id}/variants, /listings/{id}/options, etc.
  const isPublicListingEndpoint = url.includes('/listings') && method === 'GET' && 
    !url.match(/\/listings\/\d+\/(variants|options|option-values|publish|archive)/);
  // Public shop endpoints: GET /api/shops/{slug} (show)
  // Exclude protected endpoints like /shops/{id}/settings, /shops/{slug}/listings (protected), etc.
  const isPublicShopEndpoint = url.includes('/shops/') && method === 'GET' && 
    !url.includes('/settings') && !url.includes('/listings');
  const isMeEndpoint = url.includes('/me');
  
  // Only intercept 401/419 for protected endpoints that are not /api/me
  // /api/me 401 is expected when not logged in and is handled by ProtectedRoute
  if (
    result.error && 
    (result.error.status === 401 || result.error.status === 419) && 
    !isAuthEndpoint && 
    !isPublicListingEndpoint && 
    !isPublicShopEndpoint &&
    !isMeEndpoint
  ) {
    // Clear auth state
    api.dispatch(baseApi.util.resetApiState());

    // Get current location for intended URL
    const currentPath = window.location.pathname + window.location.search;
    
    // Only redirect if not already on login/register page
    if (!currentPath.includes('/login') && !currentPath.includes('/register')) {
      // Store intended URL and redirect to login
      // Use setTimeout to avoid interfering with current request
      setTimeout(() => {
        const loginPath = `/login?redirect=${encodeURIComponent(currentPath)}`;
        window.location.href = loginPath;
      }, 100);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});