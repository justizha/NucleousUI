import emailjs from "@emailjs/browser";
import { useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface FormState {
    [key: string]: string;
    user_name: string;
    user_email: string;
    message: string;
}

const initialFormState: FormState = {
    user_name: "",
    user_email: "",
    message: ""
};

type HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
type HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => Promise<void>;

export const useEmail = (): [FormState, HandleChange, HandleSubmit] => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
        throw new Error('Environment variables not defined');
    }

    const [form, setForm] = useState<FormState>(initialFormState);

    const handleChange: HandleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }
    const MySwal = withReactContent(Swal)
    const sendEmail = async () => {
        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                form,
                userId
            );
            console.log(result);
            MySwal.fire({
                title: `<h2>Message Sent!</h2>`,
                icon: 'success',
            });
            setForm(initialFormState);
        } catch (error) {
            console.error('Error sending email: ', error);
            MySwal.fire({
                title: `<h2>Something Went Wrong: /</h2>`,
                text: error.message,
                icon: "error"
            });
        }
    };
    const handleSubmit: HandleSubmit = async (e) => {
        e.preventDefault();
        await sendEmail();
    };
    return [form, handleChange, handleSubmit];
}