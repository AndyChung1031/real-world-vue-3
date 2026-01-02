<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const props = defineProps({ // using javascript
  id: {
    required: true,
  },
})

// // if typescript is used.. access by props.id in template
// const props = defineProps<{
//   id: number
// }>({
//   id: {
//     type: Number,
//     required: true,
//   },
// })

const event = ref(null)

const router = useRouter()

onMounted(()=>{
    EventService.getEvent(props.id)
  .then((response)=> {
    event.value = response.data
  })
  .catch((error) => {
    if (error.response && error.response.status == 404) {
      router.push({
        name: '404-resource',
        params: { resource: 'event' }
      })
    } else {
      router.push({ name: 'network-error'})
    }
  })
})
</script>

<template>
    <div v-if="event">
        <h1>{{  event.title }}</h1>
        <div id="nav">
          <router-link :to="{ name: 'event-details', params: { id }}"
            >Details
          </router-link>
          |
          <router-link :to="{ name: 'event-register', params: { id }}"
            >Register
          </router-link>
          |
          <router-link :to="{ name: 'event-edit', params: { id }}"
            >Edit
          </router-link>
        </div>
        <router-view :event="event"/>
    </div>
</template>