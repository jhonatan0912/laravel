export default {
    async createTask(task) {
        try {
            const response = await axios.post("/tasks", task);
            return {
                success: response.status === 201,
                data: response.data,
            };
        } catch (error) {
            console.error("Error creating task:", error);
            throw error;
        }
    },

    async updateTask(taskId, taskData) {
        try {
            const response = await axios.put(`/tasks/${taskId}`, taskData);
            return {
                success: response.status === 200,
                data: response.data,
            };
        } catch (error) {
            console.error("Error updating task:", error);
            throw error;
        }
    },
};
