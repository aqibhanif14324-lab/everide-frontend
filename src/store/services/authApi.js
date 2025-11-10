import { baseApi } from '../baseApi';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({ url: '/api/login', method: 'POST', body }),
    }),
    register: build.mutation({
      query: (body) => ({ url: '/api/register', method: 'POST', body }),
    }),
    me: build.query({
      query: () => '/api/user',
    }),
    logout: build.mutation({
      query: () => ({ url: '/api/logout', method: 'POST' }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem('token');
        } catch {}
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLogoutMutation,
} = authApi;
