import { useParams } from "react-router-dom";
import img1 from "../../assets/Vector.png";
import { useGetProfilQuery } from "../../redux/api/user-api";
import { CreatePostIcon, ReelsIcon } from "../../components/icon";
import img from "../../assets/Tag.svg";
import "./myProfil.css";
import MyPosts from "../../components/my-posts/MyPosts";

const MyProfile = () => {
  const { username } = useParams();
  const { data } = useGetProfilQuery({ username });
  console.log(data?.posts[1]?.content[0]?.url);

  return (
    <div className="bg-black pb-10 flex justify-center">
      <div className="w-full max-w-5xl px-5 sm:px-10 pt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 border rounded-full object-cover"
              src={
                data?.photo?.includes("http")
                  ? data?.photo
                  : "https://files.moontv.uz" + data?.photo
              }
              onError={(e) => {
                e.currentTarget.src =
                  "https://files.moontv.uz/uploads/profile_not_found";
              }}
              alt="Profile"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10">
                <div className="flex flex-col gap-1">
                  <p className="text-white text-2xl sm:text-3xl font-semibold">
                    {data?.username}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {data?.email}
                  </p>
                </div>
                <button className="mt-4 sm:mt-0 px-4 py-2 rounded-lg bg-gray-800 text-white flex gap-2 items-center">
                  <img src={img1} alt="Edit" className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
              <div className="flex gap-5 sm:gap-10 text-gray-300">
                <div>
                  <p className="text-lg font-medium">{data?.posts.length}</p>
                  <p className="text-sm">Posts</p>
                </div>
                <div>
                  <p className="text-lg font-medium">
                    {data?.followers.length}
                  </p>
                  <p className="text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-lg font-medium">
                    {data?.following.length}
                  </p>
                  <p className="text-sm">Following</p>
                </div>
              </div>
              <div className="mt-5 text-gray-300">
                <p>🌿 Capturing the essence of nature through my lens</p>
                <p>
                  ✨ "In every walk with nature, one receives far more than he
                  seeks." - John Muir
                </p>
              </div>
              <MyPosts />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-10 gap-4">
          <button className="flex-1 bg-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 text-white">
            <CreatePostIcon className="text-purple-400" />
            Posts
          </button>
          <button className="flex-1 bg-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 text-white">
            <ReelsIcon className="text-purple-400" />
            Reels
          </button>
          <button className="flex-1 bg-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 text-white">
            <img src={img} alt="Tagged" />
            Tagged
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {data?.posts?.map((post: any) => (
            <div key={post._id}>
              <img
                className="w-full h-48 sm:h-60 rounded-lg object-cover"
                src={post?.content[0]?.url}
                alt="Post"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
