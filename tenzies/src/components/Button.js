
export default function Button(props){
    return (
        <button 
            onClick={props.handleClick}
            className="Button">
            {props.content}
        </button>
    )
}