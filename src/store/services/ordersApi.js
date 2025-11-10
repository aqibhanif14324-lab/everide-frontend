import { baseApi } from '../baseApi';

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: (params = {}) => ({
        url: '/api/orders',
        params,
      }),
      providesTags: ['Orders'],
    }),
    getOrder: build.query({
      query: (id) => ({
        url: `/api/orders/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Orders', id }],
    }),
    createOrder: build.mutation({
      query: (body) => ({
        url: '/api/orders',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Orders'],
    }),
    updateOrderStatus: build.mutation({
      query: ({ id, status }) => ({
        url: `/api/orders/${id}/status`,
        method: 'POST',
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Orders', id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
} = ordersApi;
