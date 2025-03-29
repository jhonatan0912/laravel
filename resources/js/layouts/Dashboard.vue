<template>
    <section class="w-full">
        <UIHeader />
        <router-view />
    </section>
</template>

<script>
import UIHeader from "@components/ui/UIHeader.vue";

export default {
    components: {
        UIHeader,
    },
};
</script>

<style scoped></style>
