<template>
    <section>
        <div class="mt-20">
            <List :tasks="tasks" @on-edit="onEdit" @on-reload="onGetRecords" />

            <Form
                v-model="showForm"
                :task="task"
                @update:task="task = $event"
                @on-reload="onGetRecords"
            />
        </div>
    </section>
</template>

<script>
import Form from "@components/tasks/Form.vue";
import List from "@components/tasks/List.vue";

export default {
    components: {
        Form,
        List,
    },

    data() {
        return {
            showForm: false,
            tasks: [],
            task: null,
        };
    },

    created() {
        this.onGetRecords();
    },

    methods: {
        onCreate() {
            this.showForm = true;
        },
        onEdit(task) {
            this.showForm = true;
            this.task = task;
        },
        async onGetRecords() {
            const response = await axios.get("/tasks");
            this.tasks = response.data.tasks;
        },
    },
};
</script>

<style scoped></style>
