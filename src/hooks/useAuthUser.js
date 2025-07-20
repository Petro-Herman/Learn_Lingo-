import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

export const useAuthUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = getCurrentUser(setUser);
        return () => unsubscribe();
    }, []);

    return user;
}