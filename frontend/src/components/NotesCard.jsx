import React, {  useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotesCard({ id, title, body }) {

  const [color, setColor] = useState('bg-red-100');
  const colors = ['bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 'bg-pink-100'];

    useEffect(() => {
  function getColor() {
    let random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
  }
    getColor();
    }, []);

  return (
    <Link to={`/notes/${id}`}>
      <div className={`w-32 ${color} flex flex-col p-2 rounded-md`}>
        <h1 className='text-xl font-semibold text-slate-800'>{title}</h1>
        <p className='text-sm text-slate-500'>{body}</p>
      </div>
    </Link>
  );
}
