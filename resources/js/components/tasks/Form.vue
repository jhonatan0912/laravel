<template>
    <el-dialog
        :visible="visible"
        @update:visible="visible = $event"
        title="Crear tarea"
    >
        <el-form>
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
                <el-button @click="$emit('visible:update', false)"
                    >Cancelar</el-button
                >
                <el-button type="primary" @click="onCreate(form)"
                    >Crear</el-button
                >
            </div>
        </template>
    </el-dialog>
</template>

<script>
export default {
    components: {},

    props: {
        visible: {
            type: Boolean,
        },
        task: {
            type: Object,
            required: false,
        },
    },

    data() {
        return {
            loading: false,
            form: {
                priority: "low",
            },
            priorities: [
                { label: "Baja", value: "low" },
                { label: "Media", value: "medium" },
                { label: "Alta", value: "high" },
            ],
        };
    },

    methods: {
        async onCreate() {
            this.loading = true;

            try {
                const response = await axios.post("/tasks", this.form);
                if (response.status === 201) {
                    this.$notify({
                        title: "Tarea creada",
                        message: "La tarea ha sido creada exitosamente",
                        type: "success",
                    });
                    this.$emit("visible:update", false);
                    this.$emit("on-reload");
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
    },
};
</script>

<style lang="scss" scoped></style>
