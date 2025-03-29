<template>
    <el-dialog @open="onOpen" @close="onClose" :title="title">
        <el-form
            :model="form"
            :rules="rules"
            ref="taskForm"
            @submit.native.prevent="onSubmit"
        >
            <el-form-item label="Nombre">
                <el-input v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="Descripción">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>

            <el-form-item label="Completado">
                <el-switch v-model="form.completed"></el-switch>
            </el-form-item>

            <el-form-item label="Prioridad">
                <el-select
                    v-model="form.priority"
                    placeholder="Selecciona una prioridad"
                >
                    <el-option
                        v-for="priority in priorities"
                        :key="priority.value"
                        :label="priority.label"
                        :value="priority.value"
                    ></el-option>
                </el-select>
            </el-form-item>
        </el-form>

        <template #footer>
            <div class="dialog-footer">
                <el-button @click="onClose" :loading="loading">
                    Cancelar
                </el-button>
                <el-button type="primary" @click="onSubmit" :loading="loading">
                    {{ task ? "Actualizar" : "Crear" }}
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script>
import { TASK_PRIORITIES, RULES } from "@constants/tasks";
import taskService from "@services/tasks";

export default {
    emits: ["update:task", "update:model-value", "on-reload"],

    props: {
        task: {
            type: Object,
            required: false,
        },
    },

    data() {
        return {
            title: "",
            loading: false,
            form: {
                priority: "low",
            },
            priorities: TASK_PRIORITIES,
            rules: RULES,
        };
    },

    methods: {
        onOpen() {
            if (this.task) {
                this.title = "Editar tarea";
                this.form = { ...this.task };
            } else {
                this.title = "Crear tarea";
                this.form = {
                    name: "",
                    description: "",
                    completed: false,
                    priority: "low",
                };
            }
        },

        onClose() {
            this.form = {
                name: "",
                description: "",
                completed: false,
                priority: "low",
            };
            this.$emit("update:task", null);
            this.$emit("update:model-value", false);
        },

        async onSubmit() {
            try {
                const valid = await this.$refs.taskForm.validate();

                if (!valid) return;

                if (this.task) {
                    this.onUpdate();
                } else {
                    this.onCreate();
                }
            } catch (error) {
                console.log(error);
            }
        },

        async onCreate() {
            this.loading = true;

            try {
                const { success } = await taskService.createTask(this.form);

                if (success) {
                    this.$notify({
                        title: "Tarea creada",
                        message: "La tarea ha sido creada exitosamente",
                        type: "success",
                    });
                    this.$emit("on-reload");
                    this.$emit("update:model-value", false);
                }
            } catch (error) {
                this.$notify({
                    title: "Error",
                    message: "Ha ocurrido un error al crear la tarea",
                    type: "error",
                });
            } finally {
                this.loading = false;
            }
        },

        async onUpdate() {
            this.loading = true;

            try {
                const { success } = await taskService.updateTask(
                    this.form.id,
                    this.form
                );

                if (success) {
                    this.$notify({
                        title: "Tarea actualizada",
                        message: "La tarea ha sido actualizada exitosamente",
                        type: "success",
                    });
                    this.$emit("on-reload");
                    this.$emit("update:model-value", false);
                }
            } catch (error) {
                this.$notify({
                    title: "Error",
                    message: "Ha ocurrido un error al actualizar la tarea",
                    type: "error",
                });
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
