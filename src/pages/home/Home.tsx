import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/Post";
import {
  useFollowMutation,
  useGetProfilQuery,
  useGetUsersQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { User } from "../../types/index";
import "../../components/top-creates/create.css";
import CardSkeloton from "../../components/card-skleton/CardSkeloton";
const Home = () => {
  const { data: userData } = useGetProfilQuery({});

  const { data } = useGetUsersQuery({});
  const [unfollow, { isLoading: unfollowing }] = useOnFollowMutation();
  const [followUser, { isLoading: follow }] = useFollowMutation();
  console.log(userData);
  console.log(data);
  const userItem: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div
        className="border w-[200px] h-[200px] rounded-[20px] flex flex-col gap-3 bg-[#09090A] items-center justify-center"
        key={user._id}
      >
        <Link to={`/detel/${user.username}`}>
          <img
            className="w-[54px] h-[54px] rounded-full"
            src={
              user.photo?.includes("http")
                ? user.photo
                : import.meta.env.VITE_APP_BASE_URL + user.photo
            }
            alt=""
          />
        </Link>
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
      <div className="grid left lg:grid-cols-[4fr_2fr] sm:grid-cols-[4fr_2fr]  md:grid-cols-1  bg-black  ">
        <div className="bg-black max-w-[400px]  flex">
          <div className="w-full ">
            <div className="lg:w-[800px] md:w-[700px] sm:w-[600px]    w-full lg:pr-[200px] pr-[20px] pl-[30px]">
              <Navbar />
              <Post />
            </div>
          </div>
        </div>
        <div className=" w-[460px] foto  overflow-y-auto  right-0 top-0 pr-[24px] fixed h-screen bg-black">
          <p className="mt-[48px] text-[24px] text-[#fff] mb-[40px] font-[700] text-center">
            Top Creators
          </p>
          <div className="w-full flex flex-wrap items-end justify-end gap-[10px] mb-[20px] ">
            {userItem ? userItem : <CardSkeloton />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
