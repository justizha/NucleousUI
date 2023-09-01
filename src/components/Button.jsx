export default function Button(props) {
    return (
        <button className="p-1 bg-blue-600 rounded">
            {props.children}
        </button>
    )
}