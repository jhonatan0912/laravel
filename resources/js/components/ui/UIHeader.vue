<template>
    <header
        class="flex items-center justify-between p-6 bg-white shadow-md rounded-md fixed top-0 left-0 w-full"
    >
        <h1 class="font-extrabold text-2xl">Laravel vue App</h1>

        <nav>
            <ul class="flex gap-4 items-center">
                <li>
                    <el-button @click="$emit('on-create')" type="primary"
                        >Crear tarea</el-button
                    >
                </li>
                <li class="font-semibold hover:underline hover:cursor-pointer">
                    Profile
                </li>
                <li>
                    <el-button @click="onLogout" type="danger"
                        >Logout</el-button
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        async onLogout() {
            try {
                const response = await axios.post("/logout");

                if (response.status === 200) {
                    localStorage.removeItem("user");
                    this.$router.push({ name: "login" });
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped></style>
