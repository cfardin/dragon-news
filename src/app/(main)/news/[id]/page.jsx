// import { getDetailsById } from '@/lib/data';
import RightSidebar from '@/components/homepage/news/rightsidebar/RightSidebar';
import NewsPage from '@/components/newspage/NewsPage';



const getDetailsById = async(news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await res.json();

    return data.data;
}

const NewsDisplay = async({params}) => {

    const {id} = await params;

    const news = await getDetailsById(id);
    

    return (
        <div className="grid grid-cols-12 gap-2 container mx-auto my-14">
            <div className='col-span-9'>
                <NewsPage news = {news}></NewsPage>
            </div>
           
           <div className='col-span-3'>
                <RightSidebar></RightSidebar>
           </div>
           
        </div>
    );
};

export default NewsDisplay;