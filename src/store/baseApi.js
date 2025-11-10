import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (h) => {
      const t = localStorage.getItem('token');
      if (t) h.set('authorization', `Bearer ${t}`);
      return h;
    },
  }),
  endpoints: () => ({}),
});
