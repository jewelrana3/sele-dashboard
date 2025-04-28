import { api } from '../api/baseApi';

const user = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: '/recent-user',
                method: 'GET',
            }),
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete-user/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetUserQuery, useDeleteUserMutation } = user;
