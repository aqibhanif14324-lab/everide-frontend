import { baseApi } from '../baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: '/api/auth/login',
        method: 'POST',
        body,
        credentials: 'include',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Refetch user data after successful login
          dispatch(authApi.endpoints.me.initiate());
        } catch {}
      },
    }),
    register: build.mutation({
      query: (body) => ({
        url: '/api/auth/register',
        method: 'POST',
        body,
        credentials: 'include',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Refetch user data after successful registration
          dispatch(authApi.endpoints.me.initiate());
        } catch {}
      },
    }),
    me: build.query({
      query: () => ({
        url: '/api/me',
        credentials: 'include',
      }),
      providesTags: ['User'],
      // Don't retry on 401 - it's expected when not logged in
      retry: (failureCount, error) => {
        if (error?.status === 401) {
          return false;
        }
        return failureCount < 3;
      },
    }),
    logout: build.mutation({
      query: () => ({
        url: '/api/auth/logout',
        method: 'POST',
        credentials: 'include',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Clear auth state
          dispatch(authApi.util.resetApiState());
          // Redirect to home or login
          window.location.href = '/login';
        } catch {
          // Even if logout fails, clear state and redirect
          dispatch(authApi.util.resetApiState());
          window.location.href = '/login';
        }
      },
    }),
    forgotPassword: build.mutation({
      query: (body) => ({
        url: '/api/auth/forgot-password',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: build.mutation({
      query: (body) => ({
        url: '/api/auth/reset-password',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;