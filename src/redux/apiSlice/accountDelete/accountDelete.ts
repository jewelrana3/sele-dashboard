import { api } from '../../api/baseApi';

const accountDelete = api.injectEndpoints({
    endpoints: (builder) => ({
        accountDelete: builder.mutation({
            query: (data) => ({
                url: '/auth/public/delete-user',
                method: 'DELETE',
                body: data,
            }),
        }),
    }),
});

export const { useAccountDeleteMutation } = accountDelete;
