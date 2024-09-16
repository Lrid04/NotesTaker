
export default function HeadBar(prop: {downloadFunction: VoidFunction}){

    return (
        <div className="flex justify-between bg-zinc-800">
            <p className="basis-1/3"></p>
            <h1 className="place-self-center basis-1/3">Secretary Note Taker 9000</h1>
            <button type="button" onClick={prop.downloadFunction} className="py-2.5 px-5 mr-5 my-5 text-sm font-medium text-gray-900 
            focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
            focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
            dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 place-self-center">Download Notes</button>
            
        </div>
    )
}