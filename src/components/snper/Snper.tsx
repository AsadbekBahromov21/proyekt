import { Link, NavLink } from "react-router-dom";
import img from "../../assets/login.svg";
import { useGetProfilQuery } from "../../redux/api/user-api";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slice/AuthSlice";
import {
  ChatIcon,
  CreatePostIcon,
  HomeIcon,
  ImageIcon,
  LogoutIcon,
  PeopleIcon,
  ReelsIcon,
  SavedIcon,
  SettingsIcon,
} from "../icon";
import "./snper.css";
const Snper = () => {
  const { data } = useGetProfilQuery({});
  const dispatch = useDispatch();

  return (
    <div className="h-screen fixed overflow-y-auto scroll-hide">
      <div className="w-[270px] desc flex flex-col bg-[#09090A] gap-[10px] py-[47px] px-[10px] sm:px-[24px] md:px-[24px] lg:px-[24px] ">
        <div className="container mx-auto flex items-center mb-5 foto">
          <img src={img} alt="" />
          <p className="text-[28px] font-[600] text-[#fff] ml-5 foto">
            Snapgram
          </p>
        </div>

        <div key={data?._id} className="flex gap-[10px] mb-[44px]">
          <div className="lg:w-[56px] lg:h-[56px] sm:w-[52px] sm:h-[52px] md:w-[54px] md:h-[54px] w-[44px] h-[44px] rounded-full border ">
            <Link to={`/profile/${data?.username}`}>
              <img
                className="lg:w-[54px] lg:h-[54px] sm:w-[50px] sm:h-[50px] md:w-[52px] md:h-[52px] w-[42px] h-[42px] rounded-full border-[3px] border-[#675CFF]"
                src={
                  data?.photo?.includes("http")
                    ? data?.photo
                    : import.meta.env.VITE_APP_BASE_URL + data?.photo
                }
                alt=""
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-[#EFEFEF] text-[18px] font-[600] foto">
              {data?.username.slice(0, 12)}
            </p>
            <p className="text-[14px] text-[#7878A3] foto">
              {data?.email.slice(6)}
            </p>
          </div>
        </div>

        <NavLink
          to={"/"}
          className={
            "text-[#877EFF] flex gap-[16px] items-center w-full p-[16px] rounded-[8px] duration-300 hover:bg-[#877EFF] hover:text-[#fff] "
          }
        >
          <HomeIcon className="text-[20px] " />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Home</p>
        </NavLink>
        <NavLink
          to={"/explore"}
          className="w-full flex p-[16px] rounded-[8px] gap-[16px] items-center text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff]"
        >
          <ImageIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Explore</p>
        </NavLink>
        <NavLink
          to={"/alluser"}
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
        >
          <PeopleIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">People</p>
        </NavLink>
        <NavLink
          to={"/saved"}
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
        >
          <SavedIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Saved</p>
        </NavLink>
        <NavLink
          to={"/reels"}
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
        >
          <ReelsIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Reels</p>
        </NavLink>
        <NavLink
          to={"/chats"}
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
        >
          <ChatIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Chats</p>
        </NavLink>
        <NavLink
          to={"/CreatePost"}
          className={
            "flex gap-[16px] items-center mb-[123px] w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
          }
        >
          <CreatePostIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">
            Create Post
          </p>
        </NavLink>
        <div
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
          onClick={() => dispatch(logOut())}
        >
          <LogoutIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] cursor-pointer foto">
            Logout
          </p>
        </div>
        <NavLink
          to={"/setting"}
          className="flex gap-[16px] items-center w-full text-[#877EFF] duration-300 hover:bg-[#877EFF] hover:text-[#fff] p-[16px] rounded-[8px]"
        >
          <SettingsIcon />
          <p className="text-[#EFEFEF] text-[18px] font-[600] foto">Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Snper;
