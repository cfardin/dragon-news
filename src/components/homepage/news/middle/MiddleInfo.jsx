// import React from 'react';

// const MiddleInfo = ({n}) => {
//     return (
//         <div>
//             <h3>{n.title}</h3>
//         </div>
//     );
// };

// export default MiddleInfo;



import React from 'react';
import Image from 'next/image';
import { FiBookmark, FiShare2, FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const MiddleInfo = ({ n }) => {
    const {_id, title, author, thumbnail_url, details, rating, total_view } = n;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
            {/* Author */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image src={author?.img} alt={author?.name || 'author'} fill className="object-cover" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-gray-800">{author?.name}</p>
                        {/* <p className="text-xs text-gray-400">{author?.published_date?.slice(0, 10)}</p> */}
                    </div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <FiBookmark className="cursor-pointer hover:text-orange-400" />
                    <FiShare2 className="cursor-pointer hover:text-orange-400" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pb-3">
                <h3 className="font-bold text-gray-900 text-base leading-snug">{title}</h3>
            </div>

            {/* Thumbnail */}
            <div className="relative w-full h-[520]">
                <Image src={thumbnail_url} alt={title} fill className="object-cover" />
            </div>

            {/* Details */}
            <div className="px-4 py-3">
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{details}</p>
                <Link href={`/news/${_id}`}>
                    <span className="text-orange-500 font-semibold text-sm cursor-pointer">Read More</span>
                </Link>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.round(rating?.number) ? 'text-orange-400' : 'text-gray-200'} size={14} />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">{rating?.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <FiEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default MiddleInfo;