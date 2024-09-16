import { FormEvent } from 'react'

export default function QuickEntry(props: {oldData: string, noteFunction: Function}){
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const quickNote = formData.get("quickEnter")
        const time = timeReturn()

        const newNotesString = `${props.oldData}\n\n${time} ${quickNote}`
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
            <label htmlFor="quickEnter" className='text-center'>Quick Motions</label>
            <select name="quickEnter" id="quickEnter" className='px-9 py-3 text-2xl font-bold rounded-lg border 
                    focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                    focus:outline-[#ffffff] border-[#e6e6e6]'>
                <option value="Meeting Start">Meeting Start</option>
                <option value="Meeting End">Meeting End</option>
            </select>
            <input type="submit" value={"Submit"}/>
        </form>
    )
}