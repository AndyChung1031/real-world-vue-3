<script setup lang="ts">
import { EventItem } from '@/types' 

const props = defineProps(["event"])
const event = {} as EventItem // custom type from types.ts.. event object only allows properties defined in types.ts

</script>

<template>
      <p>{{  event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
</template>