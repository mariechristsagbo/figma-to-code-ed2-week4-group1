<script setup>
import { ref, shallowRef, onMounted } from 'vue'
import { ScheduleXCalendar } from "@schedule-x/vue";
import {
    createCalendar,
    viewDay,
    viewWeek,
    viewMonthGrid,
    viewMonthAgenda,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import { createResizePlugin } from "@schedule-x/resize";
import { createScrollControllerPlugin } from "@schedule-x/scroll-controller";
import { createEventModalPlugin } from "@schedule-x/event-modal";

const calendarApp = shallowRef(null)
const isCalendarMounted = ref(false)

onMounted(() => {
    const calendar = createCalendar({
        selectedDate: '2024-09-20',
        views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
        defaultView: viewWeek.name,
        plugins: [
            createResizePlugin(),
            createScrollControllerPlugin({
                initialScroll: '08:00'
            }),
            createEventModalPlugin({
                eventTimeConfig: {
                    duration: 60, // Default event duration in minutes
                },
            }),
        ],
        events: [],
        calendars: {
            work: {
                colorName: 'work',
                lightColors: {
                    container: '#fff',
                    onContainer: '#000',
                    main: '#fff',
                },
                darkColors: {
                    container: '#000',
                    onContainer: '#fff',
                    main: '#000',
                },
            }
        },
        dayBoundaries: {
            start: '08:00', // Le calendrier commencera à 6h00
            end: '18:00'    // Le calendrier se terminera à 22h00
        },
    })

    calendarApp.value = calendar
    isCalendarMounted.value = true

    setTimeout(() => {
        calendar.events.set([
            {
                id: 1,
                title: 'Coffee with John',
                start: '2024-09-21 08:00',
                end: '2024-09-21 09:00',
            },
            {
                id: 2,
                title: 'Breakfast with Sam',
                description: 'Discuss the new project',
                location: 'Starbucks',
                start: '2024-09-26 09:00',
                end: '2024-09-26 10:00',
            },
            {
                id: 3,
                title: 'Gym',
                start: '2024-09-27 11:00',
                end: '2024-09-27 12:00',
                calendarId: 'leisure'
            },
            {
                id: 4,
                title: 'Media fasting',
                start: '2024-09-17 10:00',
                end: '2024-09-17 11:00',
                calendarId: 'leisure'
            },
            {
                id: 5,
                title: 'Some appointment',
                people: ['John'],
                start: '2024-09-19 12:00',
                end: '2024-09-19 13:30',
            },
            {
                id: 6,
                title: 'Other appointment',
                people: ['Susan', 'Mike'],
                start: '2024-09-25 08:00',
                end: '2023-09-25 09:30',
                calendarId: 'leisure',
            },
        ])
    }, 200)
})
</script>

<template>
    <div>
        <ClientOnly>
            <ScheduleXCalendar v-if="isCalendarMounted" :calendar-app="calendarApp"></ScheduleXCalendar>
        </ClientOnly>
    </div>
</template>

<style></style>