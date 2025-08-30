import { api } from '../api/baseApi';

const notifications = api.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query({
            query: () => ({
                url: '/get-notification',
                method: 'GET',
            }),
            providesTags: ['notification'],
        }),
        updateNotification: builder.mutation({
            query: (id) => ({
                url: `/update-notification/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['notification'],
        }),
    }),
});

export const { useGetNotificationsQuery, useUpdateNotificationMutation } = notifications;
