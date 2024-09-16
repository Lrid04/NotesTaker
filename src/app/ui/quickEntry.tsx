import { FormEvent } from 'react'

export default function QuickEntry(props: {oldData: string, noteFunction: Function}){
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const quickNote = formData.get("quickEnter")
        props.noteFunction(quickNote)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col m-5 bg-zinc-600'>
            <div className='flex flex-col items-center m-5'>
                <label htmlFor="quickEnter" className='text-center'>Quick Motions</label>
                <select name="quickEnter" id="quickEnter" className='px-9 py-3 text-2xl font-bold rounded-lg border 
                        focus:outline focus:outline-2 focus:outline-offset-2 bg-[#b6b4b4] text-[#ffffff] 
                        focus:outline-[#ffffff] border-[#e6e6e6]'>
                    <option value="Meeting Start">Meeting Start</option>
                    <option value="Meeting End">Meeting End</option>
                    <option value="Motion Made">Motion Made</option>
                    <option value="Speech Given">Speech Given</option>
                    <option value="Vote Taken">Vote Taken</option>
                </select>
            </div>
            <input type="submit" value={"Submit"}/>
        </form>
    )
}