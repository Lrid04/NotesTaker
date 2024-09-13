'use client'

import { FormEvent } from 'react'

export default function MainEntry(props: {oldData: string, noteFunction: Function}) {

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const title = formData.get("titleEntry")
        const notes = formData.get("notesEntry")
        const time = timeReturn()

        const newNotesString = `${props.oldData}\n${time} ${title}\nNotes:\n${notes}`
        props.noteFunction(newNotesString)

        console.log(title)
        console.log(notes)
        console.log(time)
        
    }

    function timeReturn(){
        let date = new Date();
        let time = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'
         });

        return time
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col m-5 bg-zinc-600'>
            <div className='flex flex-row m-5'>
                <div className='flex basis-1/3 items-center justify-center'>
                    <label htmlFor="titleEntry" className='text-center'>Event Title</label>
                </div>
                <div className='basis-2/3'>
                    <input type="text" name='titleEntry' className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                    focus:outline-[#ffffff] border-[#e6e6e6]"' />
                </div>
            </div>
            <div className='flex flex-row m-5'>
                <div className='flex basis-1/3 items-center justify-center'>
                   <label htmlFor="notesEntry">Extra Notes</label> 
                </div>
                <div className='basis-2/3'>
                    <textarea name="notesEntry" id="notesEntry" className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                    focus:outline-[#ffffff] border-[#e6e6e6]" min-h-48'></textarea>
                </div>
            </div>
            <input type="submit" value={"Submit"}/>
        </form>
    )
}