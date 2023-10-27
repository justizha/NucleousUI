import emailjs from "@emailjs/browser";
import { useRef } from "react";

const form = useRef();
const sendEmail = (e: any) => {
    e.preventDefault()
}
emailjs.sendForm("AAAAAfjijfiwi", "plssadadwawa ", form.current, "oapfjoajfjopajfp")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
export default function Contact() {
    return (
        <section id="contact">
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div>
                        <textarea placeholder="Your message" id="" cols={30} rows={10}>
                        </textarea>
                    </div>
                </form>
            </div>
        </section >
    )
}