'use client'

// live preview 

import MainEntry from "./ui/mainEntry";
import QuickEntry from "./ui/quickEntry";
import { useState } from 'react';

export default function Home() {

  const [notes, setNotes] = useState('')

  function updateNotesString(newData: string){
    setNotes(newData)
  }

  function Download(){
    const FileSaver = require('file-saver');
    const blob = new Blob([notes], {type: "text/plain;charset=utf-8"});
    const today = new Date
    FileSaver.saveAs(blob, `club_notes${today.toLocaleDateString()}.md`); 
  }

  console.log(notes)
  
  return (
    <div className="w-2/5">
        <MainEntry noteFunction = {updateNotesString} oldData = {notes} />
        <QuickEntry  noteFunction = {updateNotesString} oldData = {notes} />
        <button type="button" onClick={Download } className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
        focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
        focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
        dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Click Me</button>

    </div>
  );
}
