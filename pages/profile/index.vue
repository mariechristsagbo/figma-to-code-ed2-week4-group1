<script setup>
definePageMeta({
    layout: "patient-layout",
});
</script>

<template>
    <div class="max-w-[45em] mt-5 mx-auto">
        <!-- Avatar and Name Section -->
        <div class="flex flex-col items-center space-y-4">
            <div class="relative">
                <img src="/images/avatar.svg" alt="Profile Image" class="w-32 h-32 rounded-full object-cover border">
                <img src="/icons/add-avatar-icon.svg" alt="Add Avatar" class="absolute bottom-0 right-0 w-8 h-8">
            </div>
            <div class="flex items-center space-x-2">
                <h2 class="text-3xl font-semibold text-blue">Ravad Nadam</h2>
                <img src="/icons/modify-icon.svg" alt="Edit Icon" class="w-6 h-6">
            </div>
        </div>

        <!-- Divider -->
        <hr class="my-6">

        <!-- Email and Password Section -->
        <div class="space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="flex flex-col items-start md:flex-row md:items-center space-x-4">
                    <label for="email" class="font-medium">Email:</label>
                    <input type="email" id="email" value="0rwad.nadam0@gmail.com" readonly
                        class="bg-gray-lighter rounded-md px-4 py-2 border border-gray-300 outline-none" />
                </div>

                <div class="flex flex-col items-start md:flex-row md:items-center space-x-4">
                    <label for="password" class="font-medium">Password:</label>
                    <input type="password" id="password" value="************" readonly
                        class="bg-gray-lighter rounded-md px-4 py-2 border border-gray-300 outline-none" />
                </div>
            </div>

            <!-- Divider -->
            <hr />

            <!-- Gender and Birthday Section -->
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div class="flex items-center space-x-4">
                    <label class="font-medium">Gender:</label>
                    <div class="flex space-x-4">
                        <label class="flex items-center">
                            <input type="radio" name="gender" value="Male" checked class="mr-2 text-gray-medium" />
                            <span>Male</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="gender" value="Female" class="mr-2 text-gray-medium" />
                            <span>Female</span>
                        </label>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <label for="birthday" class="font-medium">Birthday:</label>
                    <div class="bg-gray-lighter px-4 py-2 flex items-center rounded-md">
                        <input type="text" id="birthday" value="08/09/2002" readonly
                            class="bg-transparent w-32 border-0" />
                        <img src="/icons/calender-icon.svg" alt="Calendar Icon" class="ml-2 w-6 h-6" />
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr />

            <!-- Specialization Section -->
            <div class="flex flex-col md:flex-row items-center  space-y-4 md:space-y-0 space-x-4">
                <label class="font-medium text-gray-600">Specialization:</label>
                <div class="grid grid-cols-1 md:grid-cols-4 md:space-x-6 space-x-0 space-y-5 md:space-y-0">
                    <label class="flex items-center">
                        <input type="radio" name="specialization" value="Cardiologist" checked
                            class="mr-2 text-gray-medium" />
                        <span>Cardiologist</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="specialization" value="Dermatologist" class="mr-2 text-gray-medium" />
                        <span>Dermatologist</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="specialization" value="Neurologist" class="mr-2 text-gray-medium" />
                        <span>Neurologist</span>
                    </label>
                    <label class="flex items-center">
                        <input type="radio" name="specialization" value="Pediatricians" class="mr-2 text-gray-medium" />
                        <span>Pediatricians</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <hr class="my-6" />

        <!-- Logout Button -->
        <div class="text-center">
            <button class="bg-red-500 text-white px-6 py-2 rounded-md">Logout</button>
        </div>
    </div>
</template>
