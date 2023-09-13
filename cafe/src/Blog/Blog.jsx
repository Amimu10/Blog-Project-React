import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

 

const Blog = ({blog, handleAddToBookmarks, handleMarksRead}) => {
    const {cover, author_img, author, posted_date, reading_time, title, hashtags} = blog;
    return (
        <div className="mb-14">
            <img className="w-full h-full mx-auto" src={cover} alt="" />
            <div className="flex justify-between items-center">
             <div className="flex gap-4 items-center my-8">
             <img className="w-[60px] h-[60px] rounded-full" src={author_img} alt="" />
                 <div className="">
                    <h3 className="text-2xl font-bold text-primaryColor">{author}</h3>
                    <h3 className="text-base text-extraColor  text-medium">{posted_date}</h3> 
                 </div>
             </div>
           <div className="flex gap-2">
           <span className="flex gap-2 items-center text-lg text-extraColor">{reading_time} min read</span>
             <button onClick={()=>handleAddToBookmarks(blog)} className="text-2xl text-sky-600 focus:text-red-700"><FaBookmark></FaBookmark></button> 
           </div>

            </div>
           <h2 className="lg:text-[40px] text-3xl text-primaryColor font-bold">{title}</h2>
          <p className="my-4 text-lg text-extraColor font-medium">{hashtags}</p>
          <button onClick={()=>handleMarksRead(reading_time)} className="text-xl text-secondaryColor font-semibold underline focus:no-underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object,
    handleAddToBookmarks: PropTypes.func,
    handleMarksRead: PropTypes.func
}
export default Blog;