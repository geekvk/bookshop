import React, { useEffect, useState } from 'react'
import Book from '../component/Book'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const[books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBooks = async() => {
      try{
        const res = await axios.get('http://localhost:8080/books');
        setBooks(res.data);
      } catch(err){
        console.log(err);
      }
    }
    fetchAllBooks();
  }, [])
  return (
    <div className='home-container'>
      <h1>MY book list</h1>
      <button><Link to='/add'>Add New Book</Link></button>
      <div className='home'>
        {books.map((data) => (
          <Book 
            key={data.id} 
            title={data.title} 
            description={data.description} 
            cover={data.image} 
            price={data.price}
            id={data.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home