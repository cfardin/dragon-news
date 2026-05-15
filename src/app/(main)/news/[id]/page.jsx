import { getDetailsById } from '@/lib/data';
import NewsPage from '@/components/newspage/NewsPage';
import RightSidebar from '@/components/homepage/news/rightsidebar/RightSidebar';


const NewsDisplay = async({params}) => {

    const {id} = await params;

    const news = getDetailsById(id);
    

    return (
        <div className="grid grid-cols-12 gap-2 container mx-auto my-14">
            <div className='col-span-9'>
                <NewsPage></NewsPage>
            </div>
           
           <div className='col-span-3'>
                <RightSidebar></RightSidebar>
           </div>
           
        </div>
    );
};

export default NewsDisplay;