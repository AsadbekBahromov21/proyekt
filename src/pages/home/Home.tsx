import Navbar from "../../components/navbar/Navbar";
import Snper from "../../components/snper/Snper";
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import img from "../../assets/Profile-Pic-S.png";
import {
  useFollowMutation,
  useGetFeddQuery,
  useGetProfilQuery,
  useGetUsersQuery,
  useOnFollowMutation,
} from "../../redux/api/user-api";
import { RootInterface, User } from "../../types/index";
const Home = () => {
  const { data: userData } = useGetProfilQuery({});
  const { data: getData } = useGetFeddQuery({});
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
        <img
          className="w-[54px] h-[54px] rounded-full"
          src={
            user.photo?.includes("http")
              ? user.photo
              : import.meta.env.VITE_APP_BASE_URL + user.photo
          }
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
      <div className="bg-black w-full   flex">
        <Snper />
        <div className="grid grid-cols-2 w-full ">
          <div className="w-[800px] px-[53px] pt-[60px] ">
            <Navbar />

            {getData?.posts?.map(
              (post: RootInterface): JSX.Element => (
                <div
                  className="w-full mb-[40px] h-[935px] px-[29px] py-[36px] flex flex-col gap-2
                     bg-[#09090A] rounded-[30px]"
                  key={post._id}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[56px] h-[56px] rounded-full "
                      src={img}
                      alt=""
                    />
                    <div>
                      <p className="text-[#fff] text-[16px] font-[600]">
                        Lewis Hamilton
                      </p>
                      <p className="text-[12px] text-[#7878A3] font-[500]">
                        26 June at 09:32 PM
                      </p>
                    </div>
                  </div>
                  <p className="text-[16px] font-[600] text-start text-[#fff]">
                    {post.caption}
                  </p>

                  <div className="flex gap-1 overflow-x-auto">
                    {post.content.map((url) => (
                      <img
                        className="w-[542px] h-[520px]  object-contain rounded-[30px] "
                        src={url}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className=" flex gap-6 items-center">
                    <div className="flex gap-2 items-center">
                      <FaHeart className="text-red-600" />
                      <p className="text-[#fff] text-[16px] font-[600]">
                        {post.likes_count}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaComment className="text-[#fff]" />
                      <p className="text-[#fff] text-[16px] font-[600]">
                        {post.comments_count}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-[40px] items-center gap-2">
                    <img
                      className="w-[54px] h-[54px] rounded-full"
                      src={img}
                      alt=""
                    />
                    <input
                      className="w-full h-[44px] bg-[#101012] outline-none border-none text-[#fff] pl-[10px]"
                      placeholder="Write your comment..."
                      type="text"
                    />
                  </div>
                </div>
              )
            )}
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
