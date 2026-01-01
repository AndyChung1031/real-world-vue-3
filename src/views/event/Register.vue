<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(["event"])
const router = useRouter()

const register = () => {
        router.push({
                name: 'event-details',
                id: props.event.id,
        })
}
</script>

<template>  
        <p>Register for event here</p>
        <button @click="register">Register Me!</button>
</template>
