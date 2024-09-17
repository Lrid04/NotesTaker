
export default function HeadBar(prop: {downloadFunction: VoidFunction}){

    return (
        <div className="flex lg:justify-between lg:flex-row bg-zinc-800 lg:text-3xl text-2xl flex-col justify-center w-full">
            <p className="basis-1/3"></p>
            <h1 className="place-self-center lg:basis-1/3 text-center ">Secretary Note Taker 9000</h1>  
            <div className="lg:basis-1/3 flex lg:justify-end justify-center">
                <button type="button" onClick={prop.downloadFunction} className="py-2 px-2 lg:py-2.5 lg:px-5 mr-5 my-5 lg:text-lg text-base font-medium text-zinc-100 
                bg-zinc-500 rounded-lg border border-zinc-200 hover:bg-zinc-400 focus:z-10 focus:outline focus:outline-zinc-400 place-self-center">
                    Download Notes
                </button>
            </div>
        </div>
    )
}