# Authentication & Protected Routes Documentation

## Overview
This document describes the authentication flow, protected routes, and intended URL restoration mechanism for the CasseCasse marketplace application.

## Authentication Flow

### App Initialization
1. On app boot, `setupCsrfCookie()` is called to fetch CSRF cookie from `/sanctum/csrf-cookie`
2. User data is prefetched via `/api/me` endpoint
3. If session exists, user is automatically hydrated in Redux store

### Login Flow
1. User visits protected route (e.g., `/user/dashboard/1`)
2. `ProtectedRoute` component checks authentication via `useMeQuery()`
3. If not authenticated, user is redirected to `/login?redirect=/user/dashboard/1`
4. User enters credentials and submits login form
5. On successful login:
   - User data is refetched
   - User is redirected to intended URL (from `redirect` query param)
   - If no intended URL, defaults to `/user/dashboard/1`

### Logout Flow
1. User clicks logout
2. `logout` mutation is called
3. Auth state is cleared from Redux
4. User is redirected to `/login`

## Protected Routes

### Routes Protected by Default
- `/user/dashboard/:id` - User dashboard
- `/user/messenger/:id` - Messaging
- `/sell/:id` - Sell products page

### Adding a New Protected Route
Wrap the route component with `ProtectedRoute`:

```jsx
import ProtectedRoute from './components/ProtectedRoute';

<Route 
  path="/your-protected-route" 
  element={
    <ProtectedRoute>
      <YourComponent />
    </ProtectedRoute>
  } 
/>
```

### Role-Based Protection
To protect a route with specific roles:

```jsx
<Route 
  path="/admin-only" 
  element={
    <ProtectedRoute requiredRoles={['admin']}>
      <AdminComponent />
    </ProtectedRoute>
  } 
/>
```

Available roles: `admin`, `moderator`, `user`

## Intended URL Restoration

### How It Works
1. When a user tries to access a protected route without authentication:
   - Current URL is captured (pathname + search params)
   - User is redirected to `/login?redirect=<encoded-url>`
   
2. After successful login:
   - `redirect` query parameter is read from URL
   - User is navigated to the intended URL
   - If no `redirect` param exists, defaults to `/user/dashboard/1`

### Implementation Details
- Intended URL is stored in query parameter: `?redirect=/user/dashboard/1`
- URL is encoded using `encodeURIComponent()` for safety
- After login, URL is decoded and user is navigated using React Router's `navigate()`

### Example Flow
```
1. User visits: /user/dashboard/1/orders/123
2. Not logged in → Redirect to: /login?redirect=%2Fuser%2Fdashboard%2F1%2Forders%2F123
3. User logs in successfully
4. Redirect to: /user/dashboard/1/orders/123 (decoded from redirect param)
```

## 401/419 Interceptor

### Behavior
- When a protected API endpoint returns 401 (Unauthenticated) or 419 (CSRF Token Mismatch):
  1. Auth state is cleared from Redux
  2. Current URL is captured as intended URL
  3. User is redirected to `/login?redirect=<current-url>`
  4. Redirect only happens if not already on `/login` or `/register`

### Excluded Endpoints
The interceptor does NOT trigger for:
- Auth endpoints (`/api/auth/*`, `/sanctum/*`)
- Public GET endpoints (`/api/listings`, `/api/shops/*`)
- `/api/me` endpoint (handled by ProtectedRoute)

## API Endpoints

### Protected Endpoints (require authentication)
All endpoints under `auth:sanctum` middleware:
- `GET /api/me` - Get current user
- `POST /api/auth/logout` - Logout
- `POST /api/listings` - Create listing
- `PUT /api/listings/{id}` - Update listing
- `DELETE /api/listings/{id}` - Delete listing
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/notifications` - Get notifications
- `GET /api/shops/{id}/settings` - Get shop settings
- All shop management endpoints
- All variant management endpoints
- All payment/shipping endpoints

### Public Endpoints
- `GET /api/listings` - List all published listings
- `GET /api/listings/{slug}` - Get listing details
- `GET /api/shops/{slug}` - Get shop details
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login
- `POST /api/auth/forgot-password` - Forgot password
- `POST /api/auth/reset-password` - Reset password

## Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:8000
```

### Backend (.env)
```
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:5173
SESSION_DOMAIN=localhost
SANCTUM_STATEFUL_DOMAINS=localhost,localhost:5173,127.0.0.1,127.0.0.1:5173
```

## Testing

### Test Cases
1. **Direct Dashboard Access (Logged Out)**
   - Visit `/user/dashboard/1` while logged out
   - Should redirect to `/login?redirect=/user/dashboard/1`
   - After login, should navigate to `/user/dashboard/1`

2. **Refresh on Protected Route (Logged In)**
   - Login and visit `/user/dashboard/1`
   - Refresh page
   - Should remain on `/user/dashboard/1` (no redirect)

3. **Deep Link (Logged Out)**
   - Visit `/user/dashboard/1/orders/123` while logged out
   - Should redirect to `/login?redirect=/user/dashboard/1/orders/123`
   - After login, should navigate to exact same URL

4. **Session Expiry**
   - Login and visit protected route
   - Wait for session to expire (or manually expire)
   - Make API call
   - Should redirect to login with intended URL preserved

5. **Role-Based Access**
   - Login as regular user
   - Try to access admin-only route
   - Should redirect to dashboard home

## Troubleshooting

### Issue: Redirect Loop
- Check if `/api/me` is excluded from interceptor
- Verify CSRF cookie is being set correctly
- Check CORS and session domain configuration

### Issue: Intended URL Not Restored
- Verify `redirect` query parameter is being read correctly
- Check if login mutation is successfully completing
- Ensure navigation happens after user data is refetched

### Issue: 401 on Public Routes
- Verify public routes are not under `auth:sanctum` middleware
- Check if interceptor is correctly excluding public endpoints
- Ensure GET requests to listings/shops are public

## Security Notes
- All passwords are hashed using bcrypt
- CSRF protection enabled for all state-changing operations
- Session-based authentication (no tokens stored in localStorage)
- Credentials (cookies) are sent with all requests
- Protected routes are enforced on both frontend and backend
