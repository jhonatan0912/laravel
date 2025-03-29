<template>
    <el-button v-if="priority === 'low'" type="success" circle> </el-button>
    <el-button v-if="priority === 'medium'" type="warning" circle> </el-button>
    <el-button v-if="priority === 'high'" type="danger" circle> </el-button>
</template>

<script>
export default {
    props: {
        priority: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped></style>
