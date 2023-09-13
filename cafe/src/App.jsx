
import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Boomarks/Bookmarks'
import Header from './components/Header/Header'

function App() { 
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);


const handleAddToBookmarks = blog =>{ 
  const newBookmarks = [...bookmarks, blog]; 
  setBookmarks(newBookmarks);
}

const handleMarksRead = time =>{
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime);
}
  return (
    <>
    <Header></Header>
     <div className="max-w-7xl mx-auto lg:px-12 md:px-8 px-6 flex md:flex-row lg:flex-row flex-col">
     <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarksRead={handleMarksRead} className=""></Blogs> 
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime} classname=""></Bookmarks>
     </div>
    </>
  )
}

export default App;
