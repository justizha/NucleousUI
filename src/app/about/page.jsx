
export default function About() {
    return (
        <section className="pb-24 pt-24 mx-auto">
            <h1 className="font-bold text-5xl">About This website</h1>
            <div className="flex justify-center mt-10 ">
                <div className=" border rounded-md p-1 md:w-1/2 w-full flex justify-between shadow-project">
                    <div className="flex flex-col">
                        <h1 className="font-semibold text-2xl">The guy behind all of this.</h1>
                        <p className="text-gray-400 text-base mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae nisi sequi, eveniet, optio sed tempora quo harum nulla accusamus aliquam. Modi, esse. Dolorum optio possimus repellat. Unde sequi hic facere nulla harum voluptatibus deserunt.
                        </p>
                    </div>
                    <img src="/images/profile.png" alt="profile"  className=" rounded h-44 w-44 object-contain "/>
                </div>
            </div>
           
        </section>
    )
}
