import { useGetFeddQuery, useGetProfilQuery } from "../../redux/api/user-api";
import { RootInterface } from "../../types";
import {
  HeartFilledIcon,
  HeartIcon,
  SavedIcon,
  SendIcon,
  ShareIcon,
} from "../icon";
import "../../components/snper/snper.css";
import Model from "../modale/Model";
import PostSkeleton from "../post-skleton/PostSkeleton";
import {
  useCommentPostMutation,
  useLikePostMutation,
} from "../../redux/api/post";
import { FormEvent } from "react";
const Post = () => {
  const { data: getData } = useGetFeddQuery({});
  const { data: user } = useGetProfilQuery({});
  const [commentPost] = useCommentPostMutation();
  console.log(getData);
  const [like] = useLikePostMutation();

  const handInput = (e: FormEvent<HTMLFormElement>, id: any) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const data: any = {};
    Array.from(formData.entries()).forEach(([key, value]) => {
      data[key] = value;
    });
    console.log(data, id);

    commentPost({ id, body: data })
      .unwrap()
      .then(() => target.reset());
  };
  return (
    <div>
      {getData ? (
        getData.posts?.map(
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
                    <button onClick={() => like({ id: post._id })}>
                      {post.likes.some((like: string) => like === user?._id) ? (
                        <HeartFilledIcon className="text-red-600" />
                      ) : (
                        <HeartIcon className="text-red-600" />
                      )}
                    </button>
                    <p className="text-[#fff] text-[16px] font-[600]">
                      {post.likes.length}
                    </p>
                  </div>

                  <Model
                    id={post._id}
                    fullName={post.owner.fullName}
                    date={new Date(post.createdAt).toLocaleString()}
                    caption={post.caption}
                    imges={post.content}
                    owber={post.owner.photo}
                  />
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
                <form
                  onSubmit={(e) => handInput(e, post._id)}
                  className="w-full flex pl-[16px] rounded-[8px] bg-[#101012] items-center"
                >
                  <input
                    name="message"
                    className="w-[100%] h-[44px] bg-[#101012] outline-none border-none text-[#fff] "
                    placeholder="Write your comment..."
                    type="text"
                  />
                  <button type="submit">
                    <SendIcon className="text-[#877EFF] w-[20px] h-[20px] mr-[12px]" />
                  </button>
                </form>
              </div>
            </div>
          )
        )
      ) : (
        <PostSkeleton />
      )}
    </div>
  );
};

export default Post;
