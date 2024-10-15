import Snper from "../../components/snper/Snper";
import {
  useFollowMutation,
  useGetProfilQuery,
  useGetUsersQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { User } from "../../types/index";
const Home = () => {
  const { data: userData } = useGetProfilQuery({});
  const { data } = useGetUsersQuery({});
  const [unfollow, { isLoading: unfollowing }] = useOnFollowMutation();
  const [followUser, { isLoading: follow }] = useFollowMutation();
  console.log(userData);
  console.log(data);

  // const handleFollow = (username: string) => {
  //   followUser(username);
  // };

  const userItem: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div
        className="border w-[200px] h-[200px] rounded-[20px] flex flex-col gap-3  items-center justify-center"
        key={user._id}
      >
        <img
          className="w-[54px] h-[54px] rounded-full"
          src={import.meta.env.VITE_APP_BASE_URL + user.photo}
          alt=""
        />
        <div>
          <h3 className="text-[#fff] text-[14px] font-[600]">
            {user.fullName}
          </h3>
          <p className="text-[#7878A3] text-[12px]">{user.username}</p>
        </div>
        {user.followers.some((item: any) => item._id == userData?._id) ? (
          <button
            className="w-[79px] h-[30px] rounded-[8px] bg-[#877EFF] text-[#fff]"
            onClick={() => unfollow({ username: user.username })}
          >
            {unfollowing && user._id == userData?._id ? (
              <div>Loading...</div>
            ) : (
              "Unfollow"
            )}
          </button>
        ) : (
          <button
            className="w-[79px] h-[30px] rounded-[8px] bg-lime-600 text-[#fff]"
            onClick={() => followUser({ username: user.username })}
          >
            {follow && user._id == userData?._id ? (
              <div>Loading...</div>
            ) : (
              "follow"
            )}
          </button>
        )}
      </div>
    )
  );
  return (
    <>
      <div className="bg-black w-full  flex">
        <Snper />
        <div className="grid grid-cols-2 w-full ">
          <div className="w-full">
            <h3 className="text-[#fff] ">olma</h3>
          </div>
          <div className=" w-full pr-[24px]">
            <p className="mt-[48px] text-[24px] text-[#fff] mb-[40px] font-[700] text-center">
              Top Creators
            </p>
            <div className="flex flex-wrap items-end justify-end gap-[24px] ">
              {userItem}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
