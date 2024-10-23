import img from "../../assets/Gallery Add.png";
import Add from "../../components/add/Add";
import TopCreates from "../../components/top-creates/TopCreates";
import "../../components/snper/snper.css";
const CreatePost = () => {
  return (
    <>
      <div className="bg-black w-full h-[200vh]   flex">
        <div className="grid left lg:grid-cols-[4fr_2fr] sm:grid-cols-[4fr_2fr]  md:grid-cols-1  w-full bg-black ">
          <div className="w-full px-[26px] md:px-[43px] sm:px-[33px]    lg:px-[53px] pt-[60px]">
            <div className="flex gap-[4px] items-center">
              <img className="w-[36px] h-[36px]" src={img} alt="" />
              <p className=" text-[30px] font-[700] text-[#fff]">
                Create a Post
              </p>
            </div>
            <Add />
          </div>
          <TopCreates />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
