import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit'
import {addPost} from '../features/postSlice'


const AddPost = () => {
    const [content,setContent] = useState('')
    const [title,setTitle] = useState('')
    const dispatch = useDispatch();


    const handlePost = () => {
        if ( title && content === '') {
           alert('Заполните')
        }
        else{
            dispatch(addPost({
                id: nanoid(),
                title,
                content
               }))
        }
     
    }

    
     

    return(
      <section className="d-flex flex-column align-items-center justify-content-center">
        <input
          value={title}
          onChange ={e => setTitle(e.target.value)}
          className="form-control w-50 border-succses" 
          placeholder="title..." ></input>
        <textarea 
          value={content}
          onChange ={e => setContent(e.target.value)}
         className="form-control w-50 border-succses"
          placeholder="content..."></textarea>
        <button className="btn btn-dark m-2" onClick={handlePost}>Add post</button>
      </section>
       
    )

}

export default AddPost