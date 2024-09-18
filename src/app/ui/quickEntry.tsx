import { FormEvent } from 'react'

export default function QuickEntry(props: {oldData: string, noteFunction: CallableFunction}){
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)  
        event.currentTarget.reset()

        const quickNote = formData.get("quickEnter")
        props.noteFunction(quickNote)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col mx-24 lg:my-5 my-2 bg-zinc-500 w-fit h-fit rounded-lg outline outline-zinc-400 items-center'>
            <div className='flex flex-col m-5'>
                <label htmlFor="quickEnter" className='bg-zinc-800 px-5 py-2 lg:mb-5 mb-2 lg:text-xl text-lg text-center'>Quick Motions</label>
                <select name="quickEnter" id="quickEnter" className='px-9 py-3 lg:text-2xl text-lg font-bold rounded-lg border 
                        focus:outline focus:outline-2 focus:outline-offset-2 bg-zinc-400
                        focus:outline-zinc-200 border-zinc-200'>
                    <option value="Meeting Start">Meeting Start</option>
                    <option value="Meeting End">Meeting End</option>
                    <option value="Motion Made">Motion Made</option>
                    <option value="Speech Given">Speech Given</option>
                    <option value="Vote Taken">Vote Taken</option>
                </select>
                <input type="submit" value={"Submit"} className='lg:py-2.5 lg:px-5 lg:mt-5 lg:text-xl py-2 px-3 mt-3 text-lg font-medium text-zinc-50 
                bg-zinc-400 rounded-lg border border-zinc-200 hover:bg-zinc-500 focus:z-10 focus:outline focus:outline-zinc-400 place-self-center'/>
            </div>
            
        </form>
    )
}