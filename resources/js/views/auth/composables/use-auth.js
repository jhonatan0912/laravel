import { useRouter } from "vue-router";

export const useAuth = () => {
    const router = useRouter();

    const goToLogin = () => {
        router.push("/login");
    };

    return {
        goToLogin,
    };
};
