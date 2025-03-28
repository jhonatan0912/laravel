<template>
    <el-dialog v-model="showProfileDialog">
        <el-button>open</el-button>

        <template #content>
            <section>
                <h1>Profile</h1>
                <p>My name is John Doe</p>
            </section>
        </template>
    </el-dialog>
</template>

<script setup lang="ts"></script>

<style scoped></style>
