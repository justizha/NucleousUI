
export default function Tech() {
    return (
        <section className="pb-24 pt-24 mx-auto border-t border-main-gray">
            <div>
                <h1 className="font-semibold text-3xl text-center">Technologies</h1>
                <h4 className="text-center text-main-gray text-lg mt-4">Here are the Framework,Libraries and Language used in this website.</h4>
            </div>
            <div className="flex gap-5 mx-4 justify-center mt-4">
                <div className="rounded bg-main-gray w-20 h-40"></div>
                <div className="rounded bg-main-gray w-20 h-40"></div>
                <div className="rounded bg-main-gray w-20 h-40"></div>
                <div className="rounded bg-main-gray w-20 h-40"></div>
            </div>
            <div className="flex gap-10 justify-center mt-5">
                <div className="rounded bg-main-gray w-20 h-40"></div>
                <div className="rounded bg-main-gray w-20 h-40"></div>
            </div>
        </section>
    )
}