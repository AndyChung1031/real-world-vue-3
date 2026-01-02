<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { onMounted, ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  page: number | string // query params is a string
}>()
const page = computed(() => Number(props.page))

const events = ref<any[] | null>(null)
const totalEvents = ref<number>(0)
const perPage = 2;
const router = useRouter()

const hasNextPage = computed(()=> {
  return totalEvents.value > page.value * perPage // page is a computed property use .value
})

const fetchEvents = ()=>{
  EventService.getEvents(perPage, page.value)
  .then((response)=> {
    events.value = response.data;
    totalEvents.value = response.headers["x-total-count"]
  })
  .catch((error) => {
    router.push({ name: 'network-error'})
  })
}

onMounted(()=>{
  fetchEvents()
});

watch(
  () => page.value,
  () => {
    events.value = null
    fetchEvents()
  }
)
</script>

<template>
    <h1>Events For Good</h1>
    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>

        <div class="pagination">
          <router-link
            id="page-prev"
            :to="{ name: 'event-list', query: { page: page - 1} }"
            rel="prev"
            v-if="page != 1"
            >&#60; Prev Page
          </router-link>

          <router-link
            id="page-next"
            :to="{ name: 'event-list', query: { page: page + 1} }"
            rel="next"
            v-if="hasNextPage"
            >Next Page &#62;
          </router-link>
        </div>
    </div>
</template>

<style scoped>
.events {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pagination {
	display: flex;
	width: 290px;
}
.pagination a {
	flex: 1;
	text-decoration: none;
	color: #2c3e50;
}

#page-prev {
	text-align: left;
}

#page-next {
	text-align: right;
}
</style>