import dataTech from "../dataTech"
export default function Tech() {
    return (
        <section className="pb-24 pt-24 mx-auto border-t border-main-gray">
            <div>
                <h1 className="font-semibold text-3xl text-center">Technologies</h1>
                <h4 className="text-center text-main-gray text-lg mt-4">Here are the Framework,Libraries and Language used in this website.</h4>
            </div>
            <div className="flex justify-center md:mx-10 mx-4 mt-10">
                <div className="grid md:grid-cols-4 gap-4">
                    {dataTech.map((data, index) => (
                        <div key={index} className="bg-gray-700 shadow w-72 h-44 flex flex-col rounded shadow-main-white p-2">
                            <div className="h-32 flex items-center justify-center p-4">
                                <img src={data.img} alt={data.language} className="w-16" />
                            </div>
                            <h3 className="text-lg font-semibold text-center mb-10">{data.language}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}