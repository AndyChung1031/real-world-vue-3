<script setup lang="ts">
import { EventItem } from '@/types' 

const { event } = defineProps<{ // destructure the prop.. access by event in template
  event: EventItem
}>()
// custom type from types.ts.. event object only allows properties defined in types.ts

// //or like this.. access by props.event in template
// const props = defineProps<{
//   event: EventItem
// }>()

// // without typescript.. access by event in template.. vue allows access to event without accessing props.event
// const props = defineProps(["event"])

</script>

<template>
      <p>{{  event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
</template>