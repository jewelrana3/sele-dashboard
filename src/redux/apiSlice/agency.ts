import { api } from '../api/baseApi';

const agency = api.injectEndpoints({
    endpoints: (builder) => ({
        getAgency: builder.query({
            query: () => ({
                url: '/total-agency',
                method: 'GET',
            }),
            providesTags: ['agency'],
        }),

        deleteAgency: builder.mutation({
            query: (id) => ({
                url: `/delete-agency/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['agency'],
        }),
    }),
});

export const { useGetAgencyQuery, useDeleteAgencyMutation } = agency;
