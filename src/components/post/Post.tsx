import { useGetFeddQuery } from "../../redux/api/user-api";
import { RootInterface } from "../../types";
import { ChatIcon, HeartIcon, SavedIcon, SendIcon, ShareIcon } from "../icon";
import "../../components/snper/snper.css";
const Post = () => {
  const { data: getData } = useGetFeddQuery({});
  console.log(getData);

  return (
    <div>
      {getData?.posts?.map(
        (post: RootInterface): JSX.Element => (
          <div
            className="w-full mb-[40px] lg:h-[935px] px-[29px] py-[36px] flex flex-col gap-2
                     bg-[#09090A] rounded-[30px]"
            key={post._id}
          >
            <div className="flex items-center img gap-2">
              <img
                className="w-[56px] h-[56px] rounded-full "
                src={post.owner.photo}
                alt=""
              />
              <div>
                <p className="text-[#fff] text-[16px] font-[600]">
                  {post.owner.fullName}
                </p>
                <p className="text-[12px] text-[#7878A3] font-[500]">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-[16px] font-[600] text-start text-[#fff]">
              {post.caption}
            </p>

            <div className="flex gap-1 overflow-x-auto scroll-hide">
              {post.content.map((url, inx) => {
                console.log(url);
                if (url.type == "IMAGE") {
                  return (
                    <img
                      key={inx}
                      className="lg:w-[542px] lg:h-[520px] md:w-[442px] md:h-[420px] sm:w-[342px] sm:h-[320px] w-full h-[160px]    object-contain rounded-[30px] "
                      src={url.url}
                      alt=""
                    />
                  );
                } else {
                  return (
                    <video
                      key={inx}
                      className="lg:w-[542px] lg:h-[520px] md:w-[442px] md:h-[420px] sm:w-[342px] sm:h-[320px] w-full h-[160px]    object-contain rounded-[30px] "
                      src={url.url}
                      controls
                    />
                  );
                }
              })}
            </div>
            <div className="flex lg:items-center img justify-between">
              <div className=" flex gap-[30px] items-center">
                <div className="flex gap-2 items-center">
                  <HeartIcon className="text-red-600" />
                  <p className="text-[#fff] text-[16px] font-[600]">
                    {post.likes_count}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <ChatIcon className="text-[#877EFF]" />
                  <p className="text-[#fff] text-[16px] font-[600]">
                    {post.comments_count}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <ShareIcon className="text-[#877EFF]" />
                  <p className="text-[#fff] text-[16px] font-[600]">
                    {post.comments_count}
                  </p>
                </div>
              </div>
              <div>
                <SavedIcon className="text-[#877EFF]" />
              </div>
            </div>
            <div className="flex mt-[40px] img ilg:tems-center gap-[11px]">
              <img
                className="w-[54px] h-[54px] rounded-full"
                src={post.owner.photo}
                alt=""
              />
              <div className="w-full flex pl-[16px] rounded-[8px] bg-[#101012] items-center">
                <input
                  className="w-[100%] h-[44px] bg-[#101012] outline-none border-none text-[#fff] "
                  placeholder="Write your comment..."
                  type="text"
                />
                <SendIcon className="text-[#877EFF] w-[20px] h-[20px] mr-[12px]" />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Post;
