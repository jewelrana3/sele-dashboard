import { api } from '../api/baseApi';

const user = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: '/recent-user',
                method: 'GET',
            }),
            providesTags: ['user'],
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete-user/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['user'],
        }),
    }),
});

export const { useGetUserQuery, useDeleteUserMutation } = user;
