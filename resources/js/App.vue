<template>
    <main class="container">
        <router-view />

        <ProfileDialog v-model="showProfileDialog" />
    </main>
</template>

<script setup>
import { ref } from "vue";

const showProfileDialog = ref(true);
</script>
<style>
.container {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>
