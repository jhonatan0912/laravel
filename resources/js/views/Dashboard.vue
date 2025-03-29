<template>
    <section class="w-full p-4">
        <UIHeader @on-create="onCreate" />
        <div class="mt-20">
            <List :tasks="tasks" @on-reload="onGetRecords" />

            <Form v-model="showForm" @on-reload="onGetRecords" />
        </div>
    </section>
</template>

<script>
import UIHeader from "@components/ui/UIHeader.vue";
import Form from "@components/tasks/Form.vue";
import List from "@components/tasks/List.vue";

export default {
    components: {
        UIHeader,
        Form,
        List,
    },

    data() {
        return {
            showForm: false,
            tasks: [],
        };
    },

    created() {
        this.onGetRecords();
    },

    methods: {
        onCreate() {
            this.showForm = true;
        },
        async onGetRecords() {
            const response = await axios.get("/tasks");
            this.tasks = response.data.tasks;
        },
    },
};
</script>

<style scoped></style>
