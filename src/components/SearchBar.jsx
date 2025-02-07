import {React, useState} from 'react'
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import SearchMovie from '../pages/SearchMovie';

const SearchBar = ({ onSearch, onClick }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-8 w-full max-w-md mx-auto mt-30">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
     <button onClick={onClick} className='mr-4'>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.041 5.3623L7.75976 6.73926V1.10938L5.08887 10.4014L7.75976 9.21973V15.582L11.041 5.3623ZM6.97851 0.640625L6.91504 0.870117L6.17285 3.45312C4.20508 4.20996 2.80859 6.11914 2.80859 8.35059C2.80859 10.9043 4.4834 13.0332 6.88086 13.502V16.1191C3.07715 15.6064 0.269531 12.3008 0.269531 8.35547C0.269531 4.4248 3.18945 1.16797 6.97851 0.640625ZM22.1836 22.4766C21.6367 23.0234 21.0557 23.0771 20.7871 22.9893C20.5234 22.9014 19.4639 22.0176 17.8379 20.8213C16.2119 19.6201 16.1973 19.0781 15.7383 18.0527C15.2793 17.0322 14.2539 15.9727 12.9307 15.4941L12.457 14.7764C11.251 15.6016 9.86914 16.0898 8.4873 16.1777L8.58984 15.8555L9.36621 13.4385C11.6367 12.8574 13.3164 10.8018 13.3164 8.35059C13.3164 5.68945 11.4414 3.36523 8.62891 3.12109V0.577148C12.6914 0.826172 15.8945 4.21484 15.8945 8.35547C15.8945 9.99609 15.3477 11.5146 14.4785 12.7695L15.1914 13.2383C15.6699 14.5615 16.7295 15.582 17.75 16.041C18.7705 16.5 19.3223 16.5146 20.5234 18.1406C21.7246 19.7617 22.6084 20.8213 22.6963 21.085C22.7842 21.3486 22.7305 21.9297 22.1836 22.4766ZM21.7002 21.6025C21.7002 21.3877 21.5244 21.2119 21.3096 21.2119C21.0947 21.2119 20.9189 21.3877 20.9189 21.6025C20.9189 21.8174 21.0947 21.9932 21.3096 21.9932C21.5244 21.9932 21.7002 21.8174 21.7002 21.6025Z" fill="#EBFAFF"/>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;

/*const SearchBar = ({onClick, value}) => {
  return (
    <form className='w-fit relative border-[1px] border-[#0F3187] rounded-md flex justify-center items-center' tabIndex={0}>
      <input type="text" value={value} placeholder='Search movie titles' className='w-90 px-4 py-2 focus:outline-none'/>

      <button onClick={onClick} className='mr-4'>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.041 5.3623L7.75976 6.73926V1.10938L5.08887 10.4014L7.75976 9.21973V15.582L11.041 5.3623ZM6.97851 0.640625L6.91504 0.870117L6.17285 3.45312C4.20508 4.20996 2.80859 6.11914 2.80859 8.35059C2.80859 10.9043 4.4834 13.0332 6.88086 13.502V16.1191C3.07715 15.6064 0.269531 12.3008 0.269531 8.35547C0.269531 4.4248 3.18945 1.16797 6.97851 0.640625ZM22.1836 22.4766C21.6367 23.0234 21.0557 23.0771 20.7871 22.9893C20.5234 22.9014 19.4639 22.0176 17.8379 20.8213C16.2119 19.6201 16.1973 19.0781 15.7383 18.0527C15.2793 17.0322 14.2539 15.9727 12.9307 15.4941L12.457 14.7764C11.251 15.6016 9.86914 16.0898 8.4873 16.1777L8.58984 15.8555L9.36621 13.4385C11.6367 12.8574 13.3164 10.8018 13.3164 8.35059C13.3164 5.68945 11.4414 3.36523 8.62891 3.12109V0.577148C12.6914 0.826172 15.8945 4.21484 15.8945 8.35547C15.8945 9.99609 15.3477 11.5146 14.4785 12.7695L15.1914 13.2383C15.6699 14.5615 16.7295 15.582 17.75 16.041C18.7705 16.5 19.3223 16.5146 20.5234 18.1406C21.7246 19.7617 22.6084 20.8213 22.6963 21.085C22.7842 21.3486 22.7305 21.9297 22.1836 22.4766ZM21.7002 21.6025C21.7002 21.3877 21.5244 21.2119 21.3096 21.2119C21.0947 21.2119 20.9189 21.3877 20.9189 21.6025C20.9189 21.8174 21.0947 21.9932 21.3096 21.9932C21.5244 21.9932 21.7002 21.8174 21.7002 21.6025Z" fill="#EBFAFF"/>
        </svg>
      </button>
    </form>
  )
}

export default SearchBar;*/
