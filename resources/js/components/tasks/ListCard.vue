<template>
    <div
        class="relative flex flex-col bg-white rounded-lg shadow-lg p-4 hover:cursor-pointer"
    >
        <el-button
            @click="$emit('on-delete', task)"
            class="absolute top-2 right-2"
            type="danger"
            icon="delete"
            circle
        />

        <p class="font-bold text-lg capitalize">{{ task.name }}</p>

        <span>"{{ task.description }}"</span>

        <span>{{ task.created_at }}</span>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
