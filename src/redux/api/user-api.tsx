import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: "/api/user/all",
        params,
      }),
      providesTags: ["User"],
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    onFollow: build.mutation({
      query: ({ username }) => ({
        url: `/api/user/unfollow/${username}`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    follow: build.mutation({
      query: ({ username }) => ({
        url: `/api/user/follow/${username}`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getProfil: build.query({
      query: () => ({
        url: "/api/user/profile",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useSignInMutation,
  useFollowMutation,
  useOnFollowMutation,
  useGetProfilQuery,
} = userApi;
