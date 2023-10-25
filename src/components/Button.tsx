import Link from "next/link"

export default function Button(props: any) {
    return (
        <Link href={'/'} {...props} className="text-lg border rounded p-2">
            {props.children}
        </Link>
    )
}