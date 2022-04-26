
export default function Dice(props){

    return (
        <div className={props.isHeld ? "isHeld" : "Die"} >
            {props.value}
        </div>
    )
}

