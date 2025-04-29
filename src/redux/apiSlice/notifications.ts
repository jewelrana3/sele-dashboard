import { api } from '../api/baseApi';

const notification = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: () => ({
                url: '/get-notification',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetNotificationsQuery } = notification;
