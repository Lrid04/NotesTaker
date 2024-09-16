import { FormEvent } from 'react'

export default function MainEntry(props: {oldData: string, noteFunction: Function}) {

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const title = formData.get("titleEntry")
        const notes = formData.get("notesEntry")
        const time = timeReturn()
        let notePrint = ""
        if (notes != ""){
            notePrint = `\nNotes:\n${notes}`
        }
        const newNotesString = `${props.oldData}\n\n${time} ${title}${notePrint}`
        props.noteFunction(newNotesString)
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
            <div className='flex flex-col items-center m-5'>
                <div className=''>
                    <label htmlFor="titleEntry" className='text-center'>Event Title</label>
                </div>
                <div className=''>
                    <input type="text" name='titleEntry' className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                    focus:outline-[#ffffff] border-[#e6e6e6]' />
                </div>
            </div>
            <div className='flex flex-col items-center m-5'>
                <div className=''>
                   <label htmlFor="notesEntry">Extra Notes</label> 
                </div>
                <div className=''>
                    <textarea name="notesEntry" id="notesEntry" className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                    focus:outline-[#ffffff] border-[#e6e6e6] min-h-48'></textarea>
                </div>
            </div>
            <input type="submit" value={"Submit"}/>
        </form>
    )
}