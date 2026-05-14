import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="px-2 space-y-4">
      <h2 className="text-lg font-bold">Login with</h2>

      <div className="flex flex-col gap-2 mt-4">
        <button className="flex justify-start items-center btn p-5 border-blue-400 text-blue-400 gap-3">
          <FaGoogle />
          Login with Google
        </button>
        <button className="flex justify-start items-center btn p-5 gap-3">
          <FaGithub /> Login with GitHub
        </button>
      </div>

      {/* socials */}
      <div className="">
        <h3 className="text-lg font-bold ">Find as on :</h3>
        <div className="flex flex-col gap-2">
          <button className="flex justify-start items-center btn p-5 border-blue-700 text-blue-700 gap-3 w-full py-7">
            <FaFacebookF /> Facebook
          </button>
          <button className="flex justify-start items-center btn p-5 border-pink-400 text-pink-400 gap-3 w-full py-7">
            <FaInstagram /> Instagram
          </button>
          <button className="flex justify-start items-center btn p-5 gap-3 border-black w-full py-7">
            <FaTwitter /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
