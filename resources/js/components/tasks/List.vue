<template>
    <section class="grid grid-cols-3 gap-4">
        <ListCard
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            @on-delete="onDelete"
        />
    </section>
</template>

<script>
import ListCard from "./ListCard.vue";

export default {
    components: {
        ListCard,
    },

    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {};
    },

    methods: {
        async onDelete(task) {
            try {
                const response = await axios.delete(`/tasks/${task.id}`);

                if (response.status === 200) {
                    this.$notify({
                        title: "Success",
                        message: response.data.message,
                        type: "success",
                    });

                    this.$emit("on-reload");
                }
            } catch (error) {
                this.$notify({
                    title: "Error",
                    message: error.response.data.message,
                    type: "error",
                });
            }
        },
    },
};
</script>

<style scoped></style>
