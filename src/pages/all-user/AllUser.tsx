import { useEffect, useState } from "react";
import { PeopleIcon } from "../../components/icon";
import {
  useFollowMutation,
  useGetProfilQuery,
  useGetUsersQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { User } from "../../types";
import { Link } from "react-router-dom";
import AllSkleton from "../../components/all-skleton/AllSkleton";

const AllUser = () => {
  const { data: userData } = useGetProfilQuery({});
  const [limit, setLimit] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isFetching } = useGetUsersQuery({ limit });
  const [unfollow, { isLoading: unfollowing }] = useOnFollowMutation();
  const [followUser, { isLoading: follow }] = useFollowMutation();

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    console.log("hello");

    setLimit((prev) => prev + 3);
  };
  useEffect(() => {
    if (!isFetching) {
      setIsLoadingMore(false);
    }
  }, [isFetching]);

  const userItem: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div
        className="border-2 border-gray-800 w-full sm:w-[280px] md:w-[260px] lg:w-[303px] h-[340px] rounded-2xl flex flex-col gap-3 bg-gray-900 items-center justify-center p-4"
        key={user._id}
      >
        <Link to={`/detel/${user?.username}`}>
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            src={
              user.photo?.includes("http")
                ? user.photo
                : import.meta.env.VITE_APP_BASE_URL + user.photo
            }
            alt="Profile"
          />
        </Link>
        <div className="text-center">
          <h3 className="text-white text-xl font-bold">{user.fullName}</h3>
          <p className="text-gray-400 text-sm">@{user.username}</p>
        </div>
        {user.followers.some((item: any) => item._id === userData?._id) ? (
          <button
            className="w-28 h-10 rounded-md bg-lime-600 text-white"
            onClick={() => unfollow({ username: user.username })}
            disabled={unfollowing}
          >
            {unfollowing ? <div>Loading...</div> : "Unfollow"}
          </button>
        ) : (
          <button
            className="w-28 h-10 rounded-md bg-[#877EFF] text-white"
            onClick={() => followUser({ username: user.username })}
            disabled={follow}
          >
            {follow ? <div>Loading...</div> : "Follow"}
          </button>
        )}
      </div>
    )
  );

  return (
    <div className="bg-black w-full flex justify-center">
      <div className="w-full max-w-6xl px-5 sm:px-10 py-10">
        <div className="flex gap-3 items-center">
          <PeopleIcon className="text-white" />
          <p className="text-2xl font-bold text-white">Create a Post</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {userItem ? userItem : <AllSkleton />}
        </div>
        {data?.length >= 0 && (
          <button
            onClick={handleLoadMore}
            className="w-32 mx-auto mt-10 py-2 bg-purple-500 text-white rounded-lg block text-center"
            disabled={isLoadingMore}
          >
            {isFetching ? "Loading..." : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AllUser;
