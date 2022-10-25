import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Add() {
  const[book, setBook] = useState({
    title: '',
    price: null,
    description:'',
    cover: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async(e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:8080/books', book);
      navigate('/');
    }catch(err){
      console.log(err);
    }

  }
  console.log(book);
  return (
    <div className='form'>
      <h1>Add new Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="number" placeholder='price' onChange={handleChange} name='price'/>
      <input type="text" placeholder='description' onChange={handleChange} name='description'/>
      <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add