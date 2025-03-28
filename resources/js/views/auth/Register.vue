<!-- resources/js/pages/Register.vue -->
<template>
    <div class="register">
        <h2>Register</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label>Name</label>
                <input v-model="form.name" type="text" required />
            </div>
            <div>
                <label>Email</label>
                <input v-model="form.email" type="email" required />
            </div>
            <div>
                <label>Password</label>
                <input v-model="form.password" type="password" required />
            </div>
            <div>
                <label>Confirm Password</label>
                <input
                    v-model="form.password_confirmation"
                    type="password"
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
        <button @click="goToLogin">Go to login</button>

        <p v-if="error" style="color: red">{{ error }}</p>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useAuth } from "./composables/use-auth";

const { goToLogin } = useAuth();

const form = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const error = ref(null);

const submitForm = async () => {
    error.value = null;
    try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/register", form);
        alert("Registration successful!");
    } catch (err) {
        error.value = err.response?.data?.message || "Something went wrong.";
    }
};
</script>
