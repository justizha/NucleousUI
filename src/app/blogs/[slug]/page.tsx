
export default function Page({ params }) {
    console.log(params)
    return (
        <div>blog : {params.slug}</div>
    )
}