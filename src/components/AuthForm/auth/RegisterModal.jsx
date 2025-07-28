import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";
import css from "../AuthForm.module.css"

const schema = yup.object({
    name: yup.string().min(2, "Name must be at least 2 characters").required("Name is requried"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function RegisterModal({ onClose, onRegister }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        onRegister(data);
    };

    return (
        <div className={css.backdrop} onClick={onClose}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={css.closeBtn}><IoClose className={css.iconClose} /></button>
                <h2 className={css.modalTitle}>Registration</h2>
                <p className={css.modalText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                    <ul className={css.formList}>
                        <li>
                            <input placeholder="Name" {...register("name")} />
                            <p>{errors.name?.message}</p>
                        </li>
                        <li>
                            <input placeholder="Email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                        </li>
                        <li>
                            <input placeholder="Password" type="password" {...register("password")} />
                            <p>{errors.password?.message}</p>
                        </li>
                    </ul>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}