import { api } from '../../api/baseApi';

const settingText = api.injectEndpoints({
    endpoints: (builder) => ({
        getAbout: builder.query({
            query: () => ({
                url: '/about',
                method: 'GET',
            }),
        }),

        createAbout: builder.mutation({
            query: (data) => ({
                url: '/about',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetAboutQuery, useCreateAboutMutation } = settingText;
