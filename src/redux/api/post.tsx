import { api } from "./index";
const carschApi = api.injectEndpoints({
  endpoints: (build) => ({
    commentPost: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/comment/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
    getPostComments: build.query({
      query: ({ id }) => ({
        url: `/api/comment/post/${id}`,
      }),
      providesTags: ["Posts"],
    }),
    getSinglePost: build.query({
      query: ({ username, id }) => ({
        url: `api/post/${username}/${id}`,
        method: "GET",
      }),
    }),
    likePost: build.mutation({
      query: ({ id }) => ({
        url: `/api/post/${id}/like`,
        method: "POST",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
export const {
  useCommentPostMutation,
  useGetPostCommentsQuery,
  useLikePostMutation,
} = carschApi;
