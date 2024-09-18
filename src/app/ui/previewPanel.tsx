
export default function PreviewPanel(props: {content: Array<JSX.Element>}){
    return (
        <div className='lg:m-5 m-3 rounded-lg outline outline-zinc-400 bg-zinc-500 h-48 overflow-auto lg:w-full overscroll-none'>
            <h1 className="bg-zinc-800 text-center sticky top-0 lg:text-xl text-lg">Notes</h1>
            <div className="px-3 py-3">
                {props.content}
            </div>
            
        </div>
    )
}