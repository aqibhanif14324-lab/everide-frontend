import { baseApi } from '../baseApi';

export const listingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getListings: build.query({
      query: (params = {}) => ({
        url: '/api/listings',
        params,
      }),
      providesTags: ['Listings'],
    }),
    getListing: build.query({
      query: (slug) => ({
        url: `/api/listings/${slug}`,
      }),
      providesTags: (result, error, slug) => [{ type: 'Listings', id: slug }],
    }),
    createListing: build.mutation({
      query: (body) => ({
        url: '/api/listings',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Listings'],
    }),
    updateListing: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/listings/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Listings', id }],
    }),
    deleteListing: build.mutation({
      query: (id) => ({
        url: `/api/listings/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Listings'],
    }),
    publishListing: build.mutation({
      query: (id) => ({
        url: `/api/listings/${id}/publish`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Listings', id }],
    }),
    archiveListing: build.mutation({
      query: (id) => ({
        url: `/api/listings/${id}/archive`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Listings', id }],
    }),
    getListingVariants: build.query({
      query: (id) => ({
        url: `/api/listings/${id}/variants`,
      }),
    }),
    createVariant: build.mutation({
      query: ({ listingId, ...body }) => ({
        url: `/api/listings/${listingId}/variants`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error, { listingId }) => [{ type: 'Listings', id: listingId }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetListingsQuery,
  useGetListingQuery,
  useCreateListingMutation,
  useUpdateListingMutation,
  useDeleteListingMutation,
  usePublishListingMutation,
  useArchiveListingMutation,
  useGetListingVariantsQuery,
  useCreateVariantMutation,
} = listingsApi;
