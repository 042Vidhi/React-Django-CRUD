import React, { useState, useEffect } from "react";
import axios from 'axios';
import NotesCard from '../components/NotesCard';
import Header from "../components/Header";
import MobileAddButton from "../components/AddButton";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:8000/api/notes/');
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <Header />

      <div className="flex flex-wrap flex-row gap-4 md:gap-12 px-4 md:px-16 py-8">
      {data.map((note) => (
        <NotesCard
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          created_at={note.created_at}
        />
      ))}
        </div>
        <MobileAddButton/>
    </div>
  );
}
