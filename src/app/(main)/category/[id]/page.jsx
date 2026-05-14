import LeftSidebar from "@/components/homepage/news/leftsidebar/LeftSidebar";
import MiddleInfo from "@/components/homepage/news/middle/MiddleInfo";
import RightSidebar from "@/components/homepage/news/rightsidebar/RightSidebar";
import React from "react";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data;
};

const getNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = await res.json();

  return data.data;
};

const CategoryNews = async ({ params }) => {
  const { id } = await params;

  const data = await getCategories();
  const categories = data.news_category;

  // news data :
  const news = await getNews(id);

  return (
    <div className="grid grid-cols-12 gap-2 container mx-auto my-14">
      {/* for showing news categories */}
      <div className="col-span-3">
        <LeftSidebar
          categories={categories}
          activeId={id}
        ></LeftSidebar>
      </div>

      {/* middle */}
      <div className="col-span-6">
        <h3 className="text-lg font-bold">News :</h3>
        <div className="space-y-4">
          {
            news.length > 0 ? news.map((n) => (
                <MiddleInfo key={n._id} n={n}></MiddleInfo>
            )) : <h2 className="text-4xl font-bold text-center my-9">No News Found</h2>
          }
        </div>
      </div>

      {/* right sidebar */}
      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default CategoryNews;
