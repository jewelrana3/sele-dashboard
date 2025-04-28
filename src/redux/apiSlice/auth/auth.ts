import { api } from '../../api/baseApi';

const auth = api.injectEndpoints({
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),

        forgotPassword: builder.mutation({
            query: (data) => ({
                url: '/auth/forget-password',
                method: 'POST',
                body: data,
            }),
        }),

        verifyEmail: builder.mutation({
            query: (data) => ({
                url: '/auth/verify-email',
                method: 'POST',
                body: data,
            }),
        }),

        resetPassword: builder.mutation({
            query: (data) => {
                const resetToken = localStorage.getItem('resetToken');
                return {
                    url: '/auth/reset-password',
                    method: 'POST',
                    body: data,
                    headers: {
                        Authorization: `${resetToken}`,
                    },
                };
            },
        }),
    }),
});

export const { useLoginMutation, useForgotPasswordMutation, useVerifyEmailMutation, useResetPasswordMutation } = auth;
