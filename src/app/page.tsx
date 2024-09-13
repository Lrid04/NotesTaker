'use client'

import MainEntry from "./ui/mainEntry";
import { useState } from 'react';
  

export default function Home() {

  const [notes, setNotes] = useState("Goob")

  function updateNotesString(newData: string){
    setNotes(newData)
  }
  console.log(notes)

  return (
    <div className="w-2/5">
        <MainEntry noteFunction = {updateNotesString} oldData = {notes}/>
    </div>
  );
}
