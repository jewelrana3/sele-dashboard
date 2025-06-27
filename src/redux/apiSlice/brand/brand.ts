import { api } from '../../api/baseApi';

const brand = api.injectEndpoints({
    endpoints: (builder) => ({
        getBrand: builder.query({
            query: () => ({
                url: '/brands',
                method: 'GET',
            }),
            providesTags: ['brand'],
        }),

        createBrand: builder.mutation({
            query: (data) => ({
                url: '/brands',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['brand'],
        }),

        deletebrand: builder.mutation({
            query: (id) => ({
                url: `/brands/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['brand'],
        }),

        updateBrand: builder.mutation({
            query: ({ id, data }) => ({
                url: `/brands/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['brand'],
        }),
    }),
});
export const { useGetBrandQuery, useCreateBrandMutation, useDeletebrandMutation, useUpdateBrandMutation } = brand;
