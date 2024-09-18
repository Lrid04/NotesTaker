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
        <form onSubmit={handleSubmit} className='flex flex-col m-3 lg:m-5 bg-zinc-500 w-fit h-fit rounded-lg outline outline-zinc-400'>
            <div className='flex flex-col items-center m-3 lg:m-5'>
                <label htmlFor="titleEntry" className='bg-zinc-800 px-5 py-2 lg:mb-5 mb-2 lg:text-xl text-lg text-center w-full'>Event Title</label>
                <input type="text" name='titleEntry' className='px-7 py-2 lg:px-9 lg:py-3 text-lg lg:text-2xl font-bold rounded-lg border 
                focus:outline focus:outline-2 focus:outline-offset-2 bg-zinc-400
                focus:outline-zinc-200 border-zinc-200' />
            </div>
            <div className='flex flex-col items-center m-3 mt-1 lg:m-5'>
                <label htmlFor="notesEntry" className="bg-zinc-800 px-3 lg:px-5 py-2 mb-3 lg:mb-5 lg:text-xl text-lg w-full text-center">Extra Notes</label>
                <textarea name="notesEntry" id="notesEntry" className='lg:px-9 lg:py-3 px-7 py-2 lg:text-2xl text-lg font-bold rounded-lg border 
                focus:outline focus:outline-2 focus:outline-offset-2 bg-zinc-400
                focus:outline-zinc-200 border-zinc-200 min-h-48 max-h-48'></textarea>
            </div>
            <input type="submit" value={"Submit"} className='lg:py-2.5 lg:px-5 lg:m-5 lg:text-xl py-2 px-3 m-3 mt-0 text-lg font-medium text-zinc-50 
                bg-zinc-400 rounded-lg border border-zinc-200 hover:bg-zinc-500 focus:z-10 focus:outline focus:outline-zinc-400 place-self-center'/>
        </form>
    )
}