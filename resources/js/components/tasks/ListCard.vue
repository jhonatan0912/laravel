<template>
    <div
        class="relative flex flex-col bg-white rounded-lg shadow-lg p-4 hover:cursor-pointer gap-3 hover:scale-95"
    >
        <div class="absolute top-2 right-2 flex gap">
            <el-button
                @click="$emit('on-edit', task)"
                type="info"
                icon="edit"
                circle
            />
            <el-button
                @click="$emit('on-delete', task)"
                type="danger"
                icon="delete"
                circle
            />
        </div>

        <p class="font-bold text-lg capitalize">{{ task.name }}</p>

        <span><b>Descripción: </b> "{{ task.description }}"</span>

        <span><b>Completada: </b> {{ task.completed ? "✅" : "❌" }}</span>

        <span><b>Prioridad: </b> <Priority :priority="task.priority" /></span>

        <span><b>Creado el: </b>{{ formatedDate }}</span>
    </div>
</template>

<script>
import moment from "moment";
import Priority from "../ui/Priority.vue";

export default {
    components: {
        Priority,
    },

    props: {
        task: {
            type: Object,
            required: true,
        },
    },

    computed: {
        formatedDate() {
            return moment(this.task.created_at).format("DD/MM/YYYY hh:mm a");
        },
    },
};
</script>

<style lang="scss" scoped></style>
