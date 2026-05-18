"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();


    const handleLogin = (data) => {
        console.log("data", data);

    }

    console.log("errors", errors);


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-20  bg-white rounded-xl">

        <h1 className="text-3xl font-bold text-center mb-5">Login Your Account</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>


            {/* email login */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input {...register("email")} type="email" className="input" placeholder="Type your Email" />
          </fieldset>

          {/* password */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input {...register("password", {required : "Password field is required"})} type="password" className="input" placeholder="Enter your password" />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
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
