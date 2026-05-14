import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      headline: "CBI Arrests Five in NEET-UG 2026 Paper Leak Investigation    ",
      category: "Education",
    },
    {
      headline:
        "Professional Women's Hockey League Announces Expansion to Las Vegas and Hamilton    ",
      category: "Sports",
    },
    {
      headline:
        "Maryland Reaches $2.25 Billion Settlement Over Francis Scott Key Bridge Collapse   ",
      category: "Legal",
    },
    {
      headline:
        "US Inflation Hits 3.8% in April Amid Rising Fuel and Grocery Costs   ",
      category: "Economy",
    },
    {
      headline:
        "IBM Partners with SETU to Deploy €11.5m Mainframe System for AI Research   ",
      category: "Technology",
    },
    {
      headline:
        "Marc Marquez Ruled Out of Catalan GP Following Successful Surgery   ",
      category: "Sports",
    },
  ];

  return (
    <div className="flex justify-between bg-base-300 container mx-auto py-3 px-2">
      <button className="btn bg-pink-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {
            news.map((n, index)=>{
                return <span key={index}>{n.headline}    </span>
            }
                
            )
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;
