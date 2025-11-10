import { baseApi } from '../baseApi';

export const shopsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getShops: build.query({
      query: (params = {}) => ({
        url: '/api/shops',
        params,
      }),
    }),
    getShop: build.query({
      query: (slug) => ({
        url: `/api/shops/${slug}`,
      }),
    }),
    getShopListings: build.query({
      query: (slug) => ({
        url: `/api/shops/${slug}/listings`,
      }),
    }),
    createShop: build.mutation({
      query: (body) => ({
        url: '/api/shops',
        method: 'POST',
        body,
      }),
    }),
    updateShop: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/shops/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    getShopSettings: build.query({
      query: (id) => ({
        url: `/api/shops/${id}/settings`,
      }),
    }),
    updateShopSettings: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/shops/${id}/settings`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetShopsQuery,
  useGetShopQuery,
  useGetShopListingsQuery,
  useCreateShopMutation,
  useUpdateShopMutation,
  useGetShopSettingsQuery,
  useUpdateShopSettingsMutation,
} = shopsApi;
