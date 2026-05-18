// import React from 'react';

// const NewsPage = ({news}) => {
//     return (
//         <div>
//             <h3>This is news</h3>
//         </div>
//     );
// };

// export default NewsPage;


import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';

const NewsPage = async ({ news }) => {
    const n = await news;
    const item = n[0];
    const { title, author, image_url, details, rating, total_view } = item;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            {/* Image */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
                <Image src={image_url} alt={title} fill className="object-cover" />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

            {/* Meta */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image src={author?.img} alt={author?.name} fill className="object-cover" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-700">{author?.name}</p>
                        <p className="text-xs text-gray-400">{author?.published_date?.slice(0, 10)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} size={12} className={i < Math.round(rating?.number) ? 'text-orange-400' : 'text-gray-200'} />
                        ))}
                        <span className="ml-1">{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FiEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>

            {/* Details */}
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{details}</p>

            {/* Back button */}
            <Link href="/">
                <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2 rounded-full">
                    ← All news in this category
                </button>
            </Link>
        </div>
    );
};

export default NewsPage;