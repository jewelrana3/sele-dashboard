import { api } from '../../api/baseApi';

const brand = api.injectEndpoints({
    endpoints: (builder) => ({
        getBrand: builder.query({
            query: () => ({
                url: '/brands',
                method: 'GET',
            }),
        }),

        createBrand: builder.mutation({
            query: (data) => ({
                url: '/brands',
                method: 'POST',
                body: data,
            }),
        }),

        deletebrand: builder.mutation({
            query: (id) => ({
                url: `/brands/${id}`,
                method: 'DELETE',
            }),
        }),

        updateBrand: builder.mutation({
            query: ({ id, data }) => ({
                url: `/brands/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});
export const { useGetBrandQuery, useCreateBrandMutation, useDeletebrandMutation, useUpdateBrandMutation } = brand;
