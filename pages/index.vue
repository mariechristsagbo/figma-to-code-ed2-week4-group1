<template>
    <div class="">
        <!-- Main content -->
        <div class="flex-1">
            <h2 class="text-2xl font-semibold mb-6">Coming Appointments</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="day in days" :key="day" class="border rounded-lg p-4">
                    <h3 class="font-semibold mb-2">{{ day }}</h3>
                    <div class="space-y-2">
                        <div v-for="hour in Array.from({ length: 10 }, (_ , i) => i + 8)" :key="hour" class="flex p-1">
                            <span class="w-16 text-gray-500">{{ `${hour.toString().padStart(2, '0')}:00` }}</span>
                            <div class="flex-1 font-semibold" v-if="appointments[day]?.includes(hour)">
                                {{ getAppointmentName(day, hour) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const appointments = {
    Monday: [10, 13],
    Tuesday: [9],
    Wednesday: [8, 12, 15],
    Thursday: [9, 13, 16],
    Friday: [9, 13, 16],
    Saturday: [9, 13, 16],
};

const appointmentNames = {
    Monday: { 10: 'Ravati Neckam', 13: 'Zakariya Azizus' },
    Tuesday: { 9: 'Ali Masarli' },
    Wednesday: { 8: 'Ahmed Zinedine', 12: 'Raoul Zlatan', 15: 'Mercy Chinwo'},
    Thursday: { 9: 'Ravati Neckam', 13: 'Ravati Neckam', 16: 'Ali Marsali'},
    Friday: { 9: 'Ravati Neckam', 13: 'Ravati Neckam', 16: 'Ali Marsali'},
    Saturday: { 9: 'Ravati Neckam', 13: 'Ravati Neckam', 16: 'Ali Marsali'},
};

const getAppointmentName = (day, hour) => {
    return appointmentNames[day]?.[hour] || '';
};
</script>
