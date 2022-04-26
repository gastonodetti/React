
export default function Dice(props){

    return (
        <div onClick={props.holdDice} className={props.isHeld ? "isHeld" : "Die"} >
            {props.value}
        </div>
    )
}

