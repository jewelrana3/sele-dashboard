import { api } from '../../api/baseApi';

const category = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: '/category',
                method: 'GET',
            }),
        }),

        createCategory: builder.mutation({
            query: (data) => ({
                url: '/category',
                method: 'POST',
                body: data,
            }),
        }),

        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
            }),
        }),

        updateCategory: builder.mutation({
            query: ({ id, data }) => ({
                url: `/category/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
});
export const { useGetCategoryQuery, useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } =
    category;
