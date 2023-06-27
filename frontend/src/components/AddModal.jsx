import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function AddModal() {
    const [post, setPost] = useState({'title':'','body':''});

    const updatetitle = (e) => {
        setPost({...post,'title':e.target.value});
    }
    const updatebody = (e) => {
        setPost({...post,'body':e.target.value});
    }

    const PostNote = async () => {
        try{
            await axios.post(`http://localhost:8000/api/notes/create/`,post);
        }
        catch(error){
            console.error("Error Posting note:", error);
        }
        window.location.replace('/');

    }

    const CancelNote = () => {
        window.location.replace('/');
    }

  return (
    <div>

        <div className='fixed top-0 left-0 bg-black w-full h-full  bg-opacity-50 flex justify-center items-center'>
            <div className='bg-slate-50 rounded-lg w-11/12 md:w-1/2 lg:w-1/3'>
                <div className='flex flex-col p-4'>
                    <h1 className='text-2xl font-semibold text-slate-800'>Add Note</h1>
                    <input type='text' placeholder='Title' className='border-2 border-slate-200 rounded-md p-2 mt-2'  onChange={updatetitle}/>
                    <textarea placeholder='Body' className='border-2 border-slate-200 rounded-md p-2 mt-2' onChange={updatebody} />
                    <div className='flex flex-row justify-end mt-2'>
                        <button className='bg-red-500 rounded-md px-4 py-2 text-slate-50 ' onClick={CancelNote}>Cancel</button>
                        <button className='bg-green-500 rounded-md px-4 py-2 text-slate-50 ml-2' 
                        onClick={()=>PostNote()}>
                        Add</button>
         </div>
                </div>
            </div>
        </div>
    </div>
  )
}
