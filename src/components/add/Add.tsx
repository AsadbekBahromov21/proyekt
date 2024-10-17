import { useState } from "react";
import img from "../../assets/Frame.png";
import { useUploadMutation } from "../../redux/api/file-api";
const Add = () => {
  const [upload] = useUploadMutation();
  const [image, setImage] = useState<File[] | string>("");
  //   const [saveImages, setSaveImages] = useState<string[]>([]);
  const handUpload = () => {
    const formData = new FormData();
    if (Array.isArray(image)) {
      Array.from(image).forEach((img: File) => {
        formData.append("files", img, img.name);
      });
    } else {
      formData.append("files", image);
    }
    upload(formData);
    //   .unwrap( )
    //       .then(res =>setSaveImages(res))
  };
  //   const handleCreatepost = (e: FormEvent) => {
  //     e.preventDefault();
  //     const newPost = {
  //       caption: caption,
  //       content_alt: content_alt,
  //       location: location,
  //       content: saveImages,
  //     };
  //   };
  return (
    <div>
      {" "}
      <form className="flex flex-col gap-[36px]" action="">
        <div className="flex flex-col gap-2">
          <label className="text-[18px] font-[500] text-[#fff]" htmlFor="">
            Caption
          </label>
          <input
            className="h-[114px] bg-[#101012] rounded-[10px] outline-none border-none text-[#fff] pl-[10px]"
            type="text"
            name="caption"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-[18px] font-[500] text-[#fff] " htmlFor="">
            Add Photos/Videos
          </label>
          <div className="h-[326px]  bg-[#101012] rounded-[10px] flex flex-col gap-3 items-center justify-center ">
            {Object.values(image).map((i, inx) => (
              <div key={inx} className="flex flex-col relative gap-2">
                <img
                  className="w-[300px] h-[200px] object-contain "
                  src={URL.createObjectURL(i)}
                  alt=""
                />
                <button
                  className="text-[#fff] absolute top-2 left-[20px]"
                  onClick={() =>
                    setImage((prev: any) =>
                      [...prev].filter((_, index) => index !== inx)
                    )
                  }
                >
                  remo
                </button>
              </div>
            ))}

            {!image && (
              <div className="flex flex-col gap-3 items-center justify-center">
                <img className="w-[96px] h-[77px]" src={img} alt="" />
                <p className="text-[18px] text-[#fff] font-[600px]">
                  Drag photos and videos here
                </p>
                <p className="text-[#5C5C7B] text-[12px] font-[500]">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            )}
            <div className="flex items-start gap-4 ">
              <input
                className="w-[166px] h-[38px] rounded-[8px] bg-[#1F1F22] text-[#fff]"
                type="file"
                placeholder="Select from computer"
                onChange={(e: any) => setImage(e.target.files)}
                multiple
                accept="image/*"
              />
              {image.length ? (
                <button
                  className="w-[60px] bg-[#1F1F22] h-[38px] rounded-[8px] text-[#fff] "
                  onClick={handUpload}
                  type="button"
                >
                  upload
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[18px] font-[500] text-[#fff]" htmlFor="">
            Add Location
          </label>
          <input
            className="h-[54px] bg-[#101012] text-[#fff] pl-[10px] rounded-[10px] outline-none"
            type="text"
            name="location"
            placeholder="location"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[18px] font-[500] text-[#fff]" htmlFor="">
            Add Location
          </label>
          <input
            className="h-[54px] bg-[#101012] text-[#fff] pl-[10px] rounded-[10px] outline-none"
            type="text"
            name="content_alt"
            placeholder="alt"
          />
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Add;
