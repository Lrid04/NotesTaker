
export default function HeadBar(prop: {downloadFunction: VoidFunction}){

    return (
        <div className="flex justify-between bg-zinc-800 text-3xl">
            <p className="basis-1/3"></p>
            <h1 className="place-self-center basis-1/3 text-center ">Secretary Note Taker 9000</h1>  
            <div className="basis-1/3 flex justify-end">
                <button type="button" onClick={prop.downloadFunction} className="py-2.5 px-5 mr-5 my-5 text-lg font-medium text-zinc-100 
                bg-zinc-500 rounded-lg border border-zinc-200 hover:bg-zinc-400 focus:z-10 focus:outline focus:outline-zinc-400 place-self-center">
                    Download Notes
                </button>
            </div>
        </div>
    )
}