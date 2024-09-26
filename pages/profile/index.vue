<script setup>
definePageMeta({
    layout: "patient-layout",
});
</script>

<template>
    <div class="max-w-70 mx-auto p-5">
        <div class="space-y-7 px-8">
            <div class="flex justify-center items-center">
                <div class="relative w-40">
                    <img src="/images/avatar.svg" alt="Avatar Profile" />
                    <img src="/icons/add-avatar-icon.svg" alt="Add Avatar" class="absolute bottom-0 right-0" />
                </div>
            </div>
            <div class="flex justify-center space-x-4 items-center">
                <p class="font-medium text-4xl text-blue">Ravad Nadam</p>
                <img src="/icons/modify-icon.svg" alt="Modify Icon" />
            </div>
            <hr />
        </div>

        <div class="p-8 space-y-5 mt-5">
            <div class="flex space-x-4 justify-between items-center">
                <div class="flex space-x-4 items-center">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" class="bg-gray-lighter outline-none border-0 w-64"
                        value="0rwad.nadam0@gmail.com" readonly />
                </div>

                <div class="flex space-x-4 items-center">
                    <label for="password">Password:</label>
                    <input type="password" name="password" id="password"
                        class="bg-gray-lighter outline-none border-0 w-64" value="************" readonly />
                </div>
            </div>
            <hr />
        </div>

        <div class="px-8 space-y-10">
            <div class="flex justify-between items-center space-x-4 space-y-5">
                <div class="flex items-center">
                    <label for="gender" class="mr-4">Gender:</label>
                    <div class="flex space-x-3 items-center">
                        <input id="male" name="gender" type="radio" class="text-gray-500" checked />
                        <label for="male" class="mr-4">Male</label>
                        <input id="female" name="gender" type="radio" class="text-gray-500" />
                        <label for="female">Female</label>
                    </div>
                </div>

                <div class="flex space-x-5 items-center">
                    <label for="birthday">Birthday:</label>
                    <div class="bg-gray-lighter flex items-center px-2 py-1">
                        <input type="text" id="birthbay" value="08/09/2002"
                            class="bg-transparent outline-none border-0 w-56" readonly />
                        <img src="/icons/calender-icon.svg" alt="Calendar Icon" class="ml-2 w-6 h-6">
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="p-8 mt-10">
            <div class="flex justify-between item-center">
                <label for="birthday">Specialisation:</label>
                <div class="flex space-x-6 items-center">
                    <input id="male" name="gender" type="radio" class="text-gray-500" checked />
                    <label for="male" class="mr-4">Cardiologist</label>
                    <input id="female" name="gender" type="radio" class="text-gray-500" />
                    <label for="female">Dermatologist</label>
                    <input id="male" name="gender" type="radio" class="text-gray-500" />
                    <label for="male" class="mr-4">Neurologist</label>
                    <input id="male" name="gender" type="radio" class="text-gray-500" />
                    <label for="male" class="mr-4">Pediatricians</label>
                </div>
            </div>
        </div>

        <div class="border border-red-600 w-40 rounded-md px-3 py-2 mx-auto text-red-500 text-center">
            Logout
        </div>

    </div>
</template>
