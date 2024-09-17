'use client'

import MainEntry from "./ui/mainEntry";
import QuickEntry from "./ui/quickEntry";
import PreviewPanel from "./ui/previewPanel";
import HeadBar from "./ui/header";
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
    content.unshift(<br key={`${count+1*100}`} />)
    content.unshift(<pre key={count}>{noteData}</pre>)
    setContent(content)
  }

  function timeReturn(){
    const date = new Date();
    const time = date.toLocaleString([], {
    hour: '2-digit',
    minute: '2-digit'
     });

    return time
}

  function Download(){
    const FileSaver = require('file-saver');
    const blob = new Blob([notes], {type: "text/plain;charset=utf-8"});
    const today = new Date
    FileSaver.saveAs(blob, `club_notes${today.toLocaleDateString()}.txt`); 
  }

  return (
    <div>
      <HeadBar downloadFunction = {Download} />
      <div className="flex flex-row justify-evenly items-center my-5">
        <MainEntry noteFunction = {updateNotesString} oldData = {notes} />
        <div className="flex flex-col items-center w-1/3">
          <QuickEntry  noteFunction = {updateNotesString} oldData = {notes} />
          <PreviewPanel content = {content}/>
        </div>
      </div>
    </div>
  );
}
