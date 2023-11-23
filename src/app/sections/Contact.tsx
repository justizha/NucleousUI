"use client"
import { SendHorizonal } from "lucide-react";
import { useEmail } from "../../hooks/useEmail";



export default function Contact() {
    const [form, handleChange, handleSubmit] = useEmail();

    return (
        <section className="pb-16 pt-24 flex mx-4 md:flex-row flex-col" id='contact'>
            <div className="h-full w-full mx-2 mb-3">
                <h2 className="mb-10 text-3xl font-bold text-main-white">
                    Get In Touch !
                </h2>
                <p className="px-4 text-main-white text-sm">
                    We'd love to hear from you! Got any cool ideas to jazz up our website? Shoot us an email with your awesome suggestions. Whether it's about spicing up the design, tweaking features, or adding something entirely new, we're all ears. Help us make this site even more awesome for you
                </p>
            </div>
            <div className="w-full">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="w-full p-6 bg-[#101128] rounded-lg shadow text-main-white"
                >
                    <div className="flex md:flex-row flex-col items-start mb-5 justify-between">
                        <h3 className="text-base text-main-white mb-2">Name</h3>
                        <input
                            onChange={handleChange}
                            required
                            value={form.user_name}
                            id="text"
                            name="user_name"
                            type="text"
                            className="md:w-[80%] w-full gap-2 p-2 bg-transparent border border-gray-200 rounded-md outline-none flex items-center"
                            placeholder="Example name"
                        />
                    </div>
                    <div className="flex md:flex-row flex-col items-start mb-5  justify-between">
                        <h3 className="text-base text-main-white mb-2">Email</h3>
                        <input
                            onChange={handleChange}
                            required
                            value={form.user_email}
                            id="email"
                            name="user_email"
                            type="email"
                            className="md:w-[80%] w-full gap-2 p-2 bg-transparent border border-gray-200 rounded-md outline-none flex items-center"
                            placeholder="Example@gmail.com"
                        />
                    </div>
                    <div className="flex md:flex-row flex-col items-start mb-5  justify-between">
                        <h3 className="text-base text-main-white mb-2">Feedback</h3>
                        <textarea
                            onChange={handleChange}
                            required
                            name="message"
                            value={form.message}
                            className="md:w-[80%] w-full gap-2 p-2 bg-transparent border border-gray-200 rounded-md outline-none flex items-center"
                            placeholder="Tell us more...." >

                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex  items-center gap-1 justify-center  font-sans font-semibold tracking-wide text-white bg-main-blue rounded-lg p-3"
                    >
                        Send <SendHorizonal className="w-10" />
                    </button>
                </form>
            </div>
        </section >
    );
};

