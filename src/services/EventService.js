import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/AndyChung1031/real-world-vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id) {
        return apiClient.get('/events/' + id)
    },
}
// // typescript version. change the file to EventService.ts
// import axios, { type AxiosResponse } from 'axios'
// import type { EventItem } from '@/types'

// const apiClient = axios.create({
//   baseURL: 'https://my-json-server.typicode.com/AndyChung1031/real-world-vue-3',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })

// export default {
//   getEvents(perPage: number, page: number): Promise<AxiosResponse<EventItem[]>> {
//     return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
//   },

//   getEvent(id: number): Promise<AxiosResponse<EventItem>> {
//     return apiClient.get(`/events/${id}`)
//   },
// }