<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="Email" required />
            <input
                v-model="password"
                type="password"
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>

        <p v-if="error" style="color: red">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("jhonatan@gmail.com");
const password = ref("Jhonatan123@.");
const error = ref(null);

const login = async () => {
    try {
        error.value = null;
        await axios.get("/sanctum/csrf-cookie");

        const response = await axios.post("/login", {
            email: email.value,
            password: password.value,
        });

        router.push("/dashboard");
    } catch (err) {
        error.value = "Invalid credentials.";
        console.error(err);
    }
};
</script>
