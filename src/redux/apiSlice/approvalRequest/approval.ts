import { api } from '../../api/baseApi';

const approval = api.injectEndpoints({
    endpoints: (builder) => ({
        getApproval: builder.query({
            query: () => ({
                url: '/auth/unapproved-users',
                method: 'GET',
            }),
            providesTags: ['approval'],
        }),

        updateApproval: builder.mutation({
            query: ({ id, data }) => ({
                url: `/user/user-approval/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['approval'],
        }),
    }),
});

export const { useGetApprovalQuery, useUpdateApprovalMutation } = approval;
