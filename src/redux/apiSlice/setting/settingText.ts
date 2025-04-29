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

        // privacy center
        getPrivacy: builder.query({
            query: () => ({
                url: '/privacy-and-policy',
                method: 'GET',
            }),
        }),

        createPrivacy: builder.mutation({
            query: (data) => ({
                url: '/privacy-and-policy',
                method: 'POST',
                body: data,
            }),
        }),
        // terms and condition
        getCondition: builder.query({
            query: () => ({
                url: '/terms-and-conditions',
                method: 'GET',
            }),
        }),

        createCondition: builder.mutation({
            query: (data) => ({
                url: '/terms-and-conditions',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAboutQuery,
    useCreateAboutMutation,
    useGetPrivacyQuery,
    useCreatePrivacyMutation,
    useGetConditionQuery,
    useCreateConditionMutation,
} = settingText;
