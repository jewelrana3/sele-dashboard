import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://69.62.67.125:5003/api/v1',
        baseUrl: 'http://69.62.67.125:5003/api/v1',

        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: () => ({}),
});

// export const imgUrl = 'http://69.62.67.125:5003';
export const imgUrl = 'http://69.62.67.125:5003';
