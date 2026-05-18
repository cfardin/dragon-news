import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 bg-white rounded-xl">

        <h1 className="text-3xl font-bold text-center mb-5">Login Your Account</h1>

        <form className="space-y-4">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input" placeholder="Type your Email" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" placeholder="Enter your password" />
          </fieldset>
          <div>
            <button className="btn w-full bg-slate-800 text-white rounded-lg">Login</button>
          </div>
        </form>


        <div className="flex justify-center items-center mt-8">
            <p className="text-center">Don't have an account ? <Link href={"/register"} className="text-red-500">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
