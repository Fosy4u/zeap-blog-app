import { createApi } from "@reduxjs/toolkit/query/react";
import fetchBaseQuery from "./baseQuery";
import responseHandler from "./responseHandler";

export default createApi({
  reducerPath: "zeapApi",
  baseQuery: fetchBaseQuery,
  refetchOnMountOrArgChange: true,
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    getBlogPosts: builder.query({
      query: (arg) => {
        return {
          url: `blog/posts/published`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),
    getPublishedTags: builder.query({
      query: (arg) => {
        return {
          url: `blog/posts/published/tags`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),
    getPublishedPostsByTags: builder.query({
      query: (arg) => {
        return {
          url: `/blog/posts/tag/published`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),

    getBlogPost: builder.query({
      query: (arg) => {
        return {
          url: `blog/post/`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),
    getSimilarBlogPost: builder.query({
      query: (arg) => {
        return {
          url: `blog/post/similar`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),
    getBlogPostComments: builder.query({
      query: (arg) => {
        return {
          url: `blog/post/comments`,
          params: { ...arg },
        };
      },
      providesTags: ["Blog"],
      onQueryStarted: async (_, queryArgs) => {
        responseHandler({}, queryArgs);
      },
    }),

    createBlogPostComment: builder.mutation({
      query: (arg) => {
        const { payload } = arg;
        return {
          url: `blog/post/comment/create`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Blog"],
      onQueryStarted: async ({ successHandler, errorHandler }, queryArgs) => {
        responseHandler(
          {
            success: "Comment Successfully Added to Blog Post",
            successHandler,
            errorHandler,
          },
          queryArgs
        );
      },
    }),
    replyBlogPostComment: builder.mutation({
      query: (arg) => {
        const { payload } = arg;
        return {
          url: `blog/post/comment/reply`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Blog"],
      onQueryStarted: async ({ successHandler, errorHandler }, queryArgs) => {
        responseHandler(
          {
            success: "Reply Successfully Added to Blog Post Comment",
            successHandler,
            errorHandler,
          },
          queryArgs
        );
      },
    }),
  }),
});
