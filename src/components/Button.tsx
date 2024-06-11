import Link from "next/link"

export default function Button(props) {
    return (
        <Link href={'/design'} {...props} className="text-lg border rounded p-2 text-main-black bg-main-white  duration-200 cursor-pointer hover:scale-95">
            {props.children}
        </Link>
    )
}