
export default function PreviewPanel(props: {content: Array<JSX.Element>}){
    return (
        <div className='m-5 bg-zinc-600 h-48 overflow-y-auto'>
            <h1 className="bg-zinc-500 text-center">Notes</h1>
            <div>
                {props.content}
            </div>
            
        </div>
    )
}