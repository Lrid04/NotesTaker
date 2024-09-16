'use client'

import MainEntry from "./ui/mainEntry";
import QuickEntry from "./ui/quickEntry";
import PreviewPanel from "./ui/previewPanel";
import { useState } from 'react';

export default function Home() {

  const [notes, setNotes] = useState('')
  const [count, setCount] = useState(0)
  const [content, setContent] = useState([<p key={'holder'}></p>])

  function updateNotesString(newData: string){
    const time = timeReturn()
    const noteData = `${time} ${newData}`
    const noteBuilder = `${notes}\n\n${noteData}`
    setNotes(noteBuilder)
    setCount(count + 1)
    content.push(<pre key={count}>{noteData}</pre>)
    content.push(<br key={`${count+1*100}`} />)
    setContent(content)
  }

  function timeReturn(){
    let date = new Date();
    let time = date.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit'
     });

    return time
}

  function Download(){
    const FileSaver = require('file-saver');
    const blob = new Blob([notes], {type: "text/plain;charset=utf-8"});
    const today = new Date
    FileSaver.saveAs(blob, `club_notes${today.toLocaleDateString()}.md`); 
  }

  return (
    <div className="">
        <MainEntry noteFunction = {updateNotesString} oldData = {notes} />
        <QuickEntry  noteFunction = {updateNotesString} oldData = {notes} />
        <PreviewPanel content = {content}/>
        <button type="button" onClick={Download } className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
        focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
        focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
        dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Click Me</button>
    </div>
  );
}
