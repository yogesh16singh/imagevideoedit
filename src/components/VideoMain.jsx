import { useState } from "react";

const VideoMain = () => {
  const [video, setVideo] = useState(null);

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const cancelVideo = () => {
    setVideo(null);
  };

  return (
    <main className={`flex flex-col mt-20 items-center justify-center`}>
      <h1 className="m-2 p-2 text-center font-semibold text-6xl">
        Video Background Removal
      </h1>
      <p className="m-2 text-center text-xl">
        Remove Background from the Video. Edit your videos online
      </p>
      <div className="m-2 w-2/3 md:w-1/3 ">
        {video ? (
          <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
            <div className="relative">
              <video src={URL.createObjectURL(video)} controls className="w-full" />
              <span
                onClick={() => cancelVideo()}
                className="absolute top-1 right-0 bg-red-800 w-6 text-center text-white hover:cursor-pointer z-5"
              >
                X
              </span>
            </div>
            <button className=" m-2 bg-blue-400 hover:bg-blue-800 hover:cursor-pointer text-white px-8 py-2 rounded-lg">
              Convert
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  MP4, AVI, or MOV files
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => handleFileChange(e)}
              />
            </label>
          </div>
        )}
      </div>
    </main>
  );
};

export default VideoMain;
