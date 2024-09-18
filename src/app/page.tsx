'use client'

import MainEntry from "./ui/mainEntry";
import QuickEntry from "./ui/quickEntry";
import PreviewPanel from "./ui/previewPanel";
import HeadBar from "./ui/header";
import { useState } from 'react';
import FileSaver from 'file-saver';


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
    const blob = new Blob([notes], {type: "text/plain;charset=utf-8"});
    const today = new Date
    FileSaver.saveAs(blob, `club_notes${today.toLocaleDateString()}.txt`); 
  }

  return (
    <div className="w-screen over overscroll-none">
      <HeadBar downloadFunction = {Download} />
      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center lg:my-5 my-3">
        <MainEntry noteFunction = {updateNotesString} oldData = {notes} />
        <div className="flex flex-col-reverse lg:flex-col items-center lg:w-1/3 w-full">
          <QuickEntry  noteFunction = {updateNotesString} oldData = {notes} />
          <div className="w-full">
            <PreviewPanel content = {content}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
