import { api } from '../api/baseApi';

const agency = api.injectEndpoints({
    endpoints: (builder) => ({
        getAgency: builder.query({
            query: () => ({
                url: '/total-agency',
                method: 'GEt',
            }),
        }),

        deleteAgency: builder.mutation({
            query: (id) => ({
                url: `/delete-agency/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetAgencyQuery, useDeleteAgencyMutation } = agency;
