import React, { useState } from 'react';
import axios from 'axios';

export default function EditModal({ showModal, setShowModal, data }) {
  const [edit, setEdit] = useState({ body: data.body, title: data.title });

  const updateTitle = (e) => {
    setEdit({ ...edit, title: e.target.value });
  };

  const updateBody = (e) => {
    setEdit({ ...edit, body: e.target.value });
  };

  const EditNote = async () => {
    try {
      await axios.put(`http://localhost:8000/api/notes/${data.id}/update/`, edit);
    } catch (error) {
      console.error("Error Editing note:", error);
    }
    window.location.replace('/');
  };

  return (
    <div>
      {showModal && (
        <div className='fixed top-0 left-0 bg-black w-full h-full bg-opacity-50 flex justify-center items-center'>
          <div className='bg-slate-50 rounded-lg w-11/12 md:w-1/2 lg:w-1/3'>
            <div className='flex flex-col p-4'>
              <h1 className='text-2xl font-semibold text-slate-800'>Edit Note</h1>
              <input
                type='text'
                value={edit.title}
                className='border-2 border-slate-200 rounded-md p-2 mt-2'
                onChange={updateTitle}
              />
              <textarea
                value={edit.body}
                className='border-2 border-slate-200 rounded-md p-2 mt-2'
                onChange={updateBody}
              />
              <div className='flex flex-row justify-end mt-2'>
                <button className='bg-red-500 rounded-md px-4 py-2 text-slate-50' onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className='bg-green-500 rounded-md px-4 py-2 text-slate-50 ml-2' onClick={EditNote}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
