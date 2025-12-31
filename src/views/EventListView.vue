<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { onMounted, ref } from 'vue'

const props = defineProps(["page"])

const events = ref(null)

const fetchEvents = ()=>{
  EventService.getEvents(2, props.page)
  .then((response)=> {
    events.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
}

onMounted(()=>{
  fetchEvents()
});
</script>

<template>
    <h1>Events For Good</h1>
    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
</template>

<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>