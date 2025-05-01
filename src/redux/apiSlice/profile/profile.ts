import { api } from '../../api/baseApi';

const profile = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: '/auth/user-details',
                method: 'GET',
            }),
        }),

        updateProfile: builder.mutation({
            query: (data) => ({
                url: '/user/profile',
                method: 'PATCH',
                body: data,
            }),
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } = profile;
