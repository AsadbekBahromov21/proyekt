import { api } from "./index";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    uploadPost: build.mutation({
      query: (body) => ({
        url: "/api/post",
        method: "POST",
        body,
      }),
      invalidatesTags: [],
    }),
    getUserPosts: build.query({
      query: (username) => ({
        url: `/api/post/${username}`,
      }),
      providesTags: ["Product", "User", "Posts"],
    }),
    getProfile: build.query({
      query: (username) => ({
        url: `/api/profile/${username}`,
      }),
      providesTags: ["Product", "User", "Posts"],
    }),
  }),
});

export const {
  useUploadPostMutation,
  useGetUserPostsQuery,
  useGetProfileQuery,
} = postApi;
