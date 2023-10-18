import dataTech from "../dataTech"
export default function Tech() {
    return (
        <section className="pb-24 pt-24 mx-auto border-t border-main-gray">
            <div>
                <h1 className="font-semibold text-3xl text-center">Technologies</h1>
                <h4 className="text-center text-main-gray text-lg mt-4">Here are the Framework,Libraries and Language used in this website.</h4>
            </div>
            <div className="flex justify-center md:mx-10 mx-4 mt-10">
                <div className="grid md:grid-cols-2 gap-10">
                    {dataTech.map((data, index) => (
                        <div key={index} className="rounded  bg-gradient-to-l from-main-black via-[#101935] to-[#1F618D] w-full h-80 md:h-64 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                            <img src={data.img} alt={data.language} className="w-48 ml-2" />
                            <div className="text-start mr-2">
                                <h2 className="font-semibold text-lg">{data.language}</h2>
                                <p className="text-sm">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}