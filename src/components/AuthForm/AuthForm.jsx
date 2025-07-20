import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { register, login } from "../../services/authService";
import css from "./AuthForm.module.css"

const schema = yup.object({
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
});

export default function AuthForm({ type = "login", onClose }) {
    const { register: formRegister, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            if (type === "register") {
                await register(data.email, data.password);
            } else {
                await login(data.email, data.password);
            }
            onClose();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className={css.backdrop} onClick={onClose} onKeyDown={(e) => e.key === "Escape" && onClose()} tabIndex={0}>
            <form className={css.form} onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={onClose} className={css.closeBtn}>X</button>
                <input placeholder="Email" {...formRegister("email")} />
                {errors.email && <p>{errors.email.message}</p>}

                <input placeholder="Password" type="password" {...formRegister("password")} />
                {errors.password && <p>{errors.password.message}</p>}
                
                <button type="submit">{type === "register" ? "Register" : "Login"}</button>
            </form>
        </div>
    )
}