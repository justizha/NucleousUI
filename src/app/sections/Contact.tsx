"use client"
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function Contact() {

    const form = useRef();
    const MySwal = withReactContent(Swal)

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_73yrfq8', 'template_reug0ro', form.current, 'bnH7-JlAP3FpDBq6t')
            .then((result) => {
                console.log(result)
                MySwal.fire({
                    title: <h2>Message Sent!</h2>,
                    icon: 'success'
                })
            }, (error) => {
                console.log(error.text);
                MySwal.fire({
                    title: <h2>Something Went Wrong :/</h2>,
                    icon: "error"
                })
            });
    };
    return (
        <section className="pb-10 pt-10 flex justify-center items-center">
            <div className=" h-full md:w-1/2 w-full">
                <form
                    autoComplete="off"
                    ref={form}
                    onSubmit={sendEmail}
                    className="w-full p-6 bg-[#272727] rounded-lg shadow text-main-white"
                >
                    <h2 className="mb-10 text-3xl font-bold text-center">Get In Touch !</h2>
                    <div className="flex flex-col items-start mb-5 gap-y-3">
                        <input
                            id="email"
                            name="user_email"
                            type="email"
                            className="w-full p-2 bg-transparent border border-gray-200 rounded-md outline-none"
                            placeholder="Enter your email address..."
                        />
                    </div>
                    <div className="flex flex-col items-start mb-5 gap-y-3">
                        <input
                            id="text"
                            name="user_name"
                            type="text"
                            className="w-full p-2 bg-transparent border border-gray-200 rounded-md outline-none"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="flex flex-col items-start mb-5 gap-y-3">
                        <textarea
                            name="message"
                            className="w-full bg-transparent border border-main-white rounded-md outline-none h-28"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-full items-center gap-1 justify-center  font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg p-3"
                    >
                        Send <Send />
                    </button>
                </form>
            </div>
        </section >
    );
};

