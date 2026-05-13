"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format, compareAsc } from "date-fns";

const Header = () => {

//   console.log(now);

  return (
    <div className=" text-center py-8 space-y-5">

      {/* logo */}
      <div>
        <Image
          src={logo}
          width={300}
          height={200}
          className="mx-auto"
          alt="logo-the-dragon-news"
        ></Image>
      </div>

      {/* header text */}
      <div className="space-y-2.5">
        <p>Journalism Without Fear or Favour</p>
        <div>
          <h3>{format(new Date(), "EEEE, MMM dd, yyyy")}</h3>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Header;
