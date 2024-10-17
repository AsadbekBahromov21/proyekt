import Snper from "../../components/snper/Snper";
import { useGetProfilQuery } from "../../redux/api/user-api";
import img from "../../assets/Gallery Add.png";
import Add from "../../components/add/Add";
const CreatePost = () => {
  const { data: userData } = useGetProfilQuery({});
  return (
    <>
      <div className="bg-black w-full h-[200vh]   flex">
        <Snper />
        <div className="grid grid-cols-[4fr_2fr] w-full ">
          <div className="w-full border  px-[53px] pt-[60px]">
            <div className="flex gap-[4px] items-center">
              <img className="w-[36px] h-[36px]" src={img} alt="" />
              <p className=" text-[30px] font-[700] text-[#fff]">
                Create a Post
              </p>
            </div>
            <Add />
          </div>
          <div className=" w-full   border pr-[24px]">
            <p className="mt-[48px] text-[24px] text-[#fff] mb-[40px] font-[700] text-center">
              Top Creators
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[24px]  ">
              <div className=" flex flex-col gap-1 items-center">
                <img
                  className="w-[54px] h-[54px] rounded-full border-[3px] border-[#675CFF]"
                  src={
                    userData?.photo?.includes("http")
                      ? userData?.photo
                      : import.meta.env.VITE_APP_BASE_URL + userData?.photo
                  }
                  alt=""
                />
                <p className="text-[#fff] text-[18px]">{userData?.username}</p>
                <p className="text-[#7878A3] text-[12px]">{userData?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
