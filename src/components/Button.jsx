export default function Button(props) {
    return (
        <button onClick={props.onclick} className={props.className}>
            {props.children}
        </button>
    )
}