import { api } from '../../api/baseApi';

const dashboard = api.injectEndpoints({
    endpoints: (builder) => ({
        getStatics: builder.query({
            query: () => ({
                url: '/dashboard-statistics',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetStaticsQuery } = dashboard;
