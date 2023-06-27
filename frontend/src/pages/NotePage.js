import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditModal from '../components/EditModal';

export default function NotePage() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getNote = async () => {
      try {
        console.log(`http://localhost:8000/api/notes/${id}/`)
        const result = await axios.get(`http://localhost:8000/api/notes/${id}/`);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching NotePage:", error);
      }
    };

    getNote();
  }, [id]);

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}/delete/`);
      window.location.replace('/');
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className='flex flex-col p-4 md:px-24'>
      {showModal && <EditModal showModal={showModal} setShowModal={setShowModal} data={data} />}
      <div className='flex flex-row justify-between items-center pb-3'>
        <h1 className='font-bold text-3xl'>{data.title}</h1>
        <div className='flex flex-col md:flex-row gap-2'>
          <div
            className='text-sm text-slate-50 md:font-semibold bg-purple-500 px-4 py-[1px] md:py-2 rounded-md cursor-pointer'
            onClick={() => setShowModal(true)}
          >
            Edit
          </div>
          <div
            className='text-sm text-slate-50 md:font-semibold bg-red-500 px-4 py-[1px] md:py-2 rounded-md cursor-pointer'
            onClick={() => deleteNote(data.id)}
          >
            Delete
          </div>
        </div>
      </div>
      <p>{data.body}</p>

    </div>
  );
}
