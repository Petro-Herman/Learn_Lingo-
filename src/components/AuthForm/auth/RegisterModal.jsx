import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "../AuthForm.module.css"

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
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
                <button onClick={onClose} className={css.closeBtn}>X</button>
                <h2 className={css.modalTitle}>Registration</h2>
                <p className={css.modalText}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                    <input placeholder="Name" />
                    
                    <input placeholder="Email" {...register("email")} />
                    <p>{errors.email?.message}</p>

                    <input placeholder="Password" {...register("password")} />
                    <p>{errors.password?.message}</p>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}