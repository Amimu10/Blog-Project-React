import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'


const Bookmarks = ({bookmarks, readingTime}) => {
  // const { title } = bookmarks;
  return (
    <div className="md:w-1/3">
      <div>
        <h3 className="text-primaryColor text-2xl font-bold m-4">Spent time on read: {readingTime}</h3>
      </div>
      <h3 className="text-primaryColor text-2xl font-bold m-4">Bookmarked Blogs: {bookmarks.length}</h3> 

     <div className="text-[18px] text-primaryColor font-semibold p-2 m-4">
     {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></ Bookmark>   
      ))}
     </div>
    </div>
  );
};

Bookmarks.PropTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
}
export default Bookmarks;
