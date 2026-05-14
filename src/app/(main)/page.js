import { redirect } from "next/navigation"; 

export default async function Home() {

  redirect(`/category/01`);


  // return (
  //   <div className="grid grid-cols-12 gap-2 container mx-auto my-14">

  //     {/* for showing news categories */}
  //     <div className="col-span-3">
  //         <LeftSidebar categories = {categories} activeId={'01'} ></LeftSidebar>
  //     </div>



  //     {/* middle */}
  //     <div className="font bold bg-purple-100 text-3xl col col-span-6">
  //         <div className="space-y-4">
  //           {
  //             news.map(n => <MiddleInfo key={n._id} n = {n}></MiddleInfo>)
  //           }
  //         </div>
  //     </div>


  //     {/* right sidebar */}
  //     <div className="col-span-3">
  //       <RightSidebar></RightSidebar>
  //     </div>

  //   </div>
  // );
}
