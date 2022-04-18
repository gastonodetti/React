
export default function Dice(props){
    return (
        <div className="Die" onClick={props.holdDice}>
            {props.value}
        </div>
    )
}

