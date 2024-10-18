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
  }),
});

export const { useUploadPostMutation } = postApi;
