import { FormEvent } from 'react'

export default function MainEntry(props: {oldData: string, noteFunction: CallableFunction}) {

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const title = formData.get("titleEntry")
        const notes = formData.get("notesEntry")
        let notePrint = ""
        if (notes != ""){
            notePrint = `\nNotes:\n${notes}`
        }
        const newNotesString = `${title}${notePrint}`
        props.noteFunction(newNotesString)
    }


    return (
        <form onSubmit={handleSubmit} className='flex flex-col m-5 bg-zinc-500 w-fit h-fit rounded-lg outline outline-zinc-400'>
            <div className='flex flex-col items-center m-5'>
                <div className='bg-zinc-800 px-5 py-2 mb-5'>
                    <label htmlFor="titleEntry" className='text-center'>Event Title</label>
                </div>
                <div className=''>
                    <input type="text" name='titleEntry' className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-zinc-400
                    focus:outline-zinc-200 border-zinc-200' />
                </div>
            </div>
            <div className='flex flex-col items-center m-5'>
                <div className='bg-zinc-800 px-5 py-2 mb-5'>
                   <label htmlFor="notesEntry">Extra Notes</label> 
                </div>
                <div className=''>
                    <textarea name="notesEntry" id="notesEntry" className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2  bg-zinc-400
                    focus:outline-zinc-200 border-zinc-200 min-h-48 max-h-48'></textarea>
                </div>
            </div>
            <input type="submit" value={"Submit"} className='py-2.5 px-5 mb-2 text-xl font-medium text-zinc-50 
                bg-zinc-400 rounded-lg border border-zinc-200 hover:bg-zinc-500 focus:z-10 focus:outline focus:outline-zinc-400 place-self-center'/>
        </form>
    )
}