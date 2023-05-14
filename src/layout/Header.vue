<template>
    <div v-for="route in routes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
    </div>
</template>

<script>
import { routes } from "../router/router.js";

export default {
    name: "header",
    data() {
        return {
            routes
        };
    },
}
</script>