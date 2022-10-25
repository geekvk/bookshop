import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function Update() {
    const location = useLocation();
    const[book, setBook] = useState({
        title: '',
        price: null,
        description:'',
        cover: ''
      });
    
      const navigate = useNavigate();
      const id = location.pathname.split("/")[2];
    // const id = useParams()

      const handleChange = (e) => {
        setBook((prev) => ({...prev, [e.target.name]: e.target.value }))
      }
    
      const handleClick = async(e) => {
        e.preventDefault();
        try{
          await axios.put('http://localhost:8080/books/'+id, book);
          navigate('/');
        }catch(err){
          console.log(err);
        }
    
      }
      console.log(id);
  return (
    <div className='form'>
        <h1>Update Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input type="number" placeholder='price' onChange={handleChange} name='price'/>
        <input type="text" placeholder='description' onChange={handleChange} name='description'/>
        <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>

        <button onClick={handleClick}>Add</button>
  </div>
  )
}

export default Update