import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';

function Book({title, description, cover, price, id}) {
    const handleDelete = async() => {
        try{
            await axios.delete('http://localhost:8080/books/'+id);
            window.location.reload()
        } catch(err){
            console.log(err);
        }
    }
  return (
    <div className='book'>
        <img src={cover}  alt=''/>
        <div className='book_desc'>
            <h3>{title}</h3>
            <span>{description}</span>
            <p>${price}</p>
        </div>
        <div className='operation'>
            <button><Link to={`/update/${id}`}>Update</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Book