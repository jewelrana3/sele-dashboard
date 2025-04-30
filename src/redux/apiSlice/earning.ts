import { api } from '../api/baseApi';

const earing = api.injectEndpoints({
    endpoints: (builder) => ({
        getEarning: builder.query({
            query: () => ({
                url: '/total-earning-by-user',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetEarningQuery } = earing;
