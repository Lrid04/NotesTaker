
export default function PreviewPanel(props: {content: Array<JSX.Element>}){
    return (
        <div className='m-5 bg-zinc-600'>
            {props.content}
        </div>
    )
}