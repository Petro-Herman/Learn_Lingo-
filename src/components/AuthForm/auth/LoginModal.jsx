import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import css from "../AuthForm.module.css";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

export default function LoginModal({ onClose, onLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        onLogin(data);
    };

    return (
        <div className={css.backdrop} onClick={onClose}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className={css.closeBtn}>X</button>
                <h2 className={css.modalTitle}>Log In</h2>
                <p className={css.modalText}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
                <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                    <input placeholder="Email" {...register("email")} />
                    <p>{errors.email?.message}</p>

                    <input placeholder="Password" type="password" {...register("password")} />
                    <p>{errors.password?.message}</p>

                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}