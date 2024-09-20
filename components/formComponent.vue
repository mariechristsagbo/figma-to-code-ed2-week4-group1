<script>
    export default {
        name: "formComponent",
        props: {
            fields: {
                type: Array,
                required: true
            },
            buttonName: {
                type: String,
                required: true
            },
            isLoginForm: {
                type: Boolean,
                required: true
            },
            addtextarea: {
                type: Boolean,
                required: true
            }
        }
    };
</script>

<template>
    <div class="w-full">
        <form>
            <div class="relative z-0 w-full mb-4 group">
                <div v-for="(field, index) in fields" :key="index" class="relative z-0 w-full mb-4 group">
                    <input
                    :id="field.id"
                    :type="field.type"
                    :name="field.name"
                    class="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-blue appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    />
                    <label
                    :for="field.for"
                    class="peer-focus:font-medium absolute text-sm text-gray-darkest duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    {{field.label}}
                    </label>
                </div>
                <div v-if="addtextarea">
                    <label for="floating_description" class="hidden peer-focus:font-medium absolute text-sm text-gray-darkest duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Décrivez vos symptômes</label>
                    <textarea id="floating_description" rows="4" class="block py-2.5 px-0 w-full text-sm text-dark bg-transparent border-0 border-b-2 border-blue appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Décrivez vos symptômes"></textarea>
                </div>
            </div>
            <div v-if="isLoginForm" class="flex justify-between mb-5">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Se souvenir de moi</label>
                </div>
                <div>
                    <p class="text-center text-xs lg:text-sm text-gray-darkest underline"><NuxtLink to="/resetPassword">Mot de passe oublié</NuxtLink></p>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-700 text-white uppercase font-semibold text-base font-[Roboto] py-2 px-4 w-full rounded-[20px] focus:outline-none focus:shadow-outline" type="submit">
                    {{buttonName}}
                </button>
            </div>
        </form>
    </div>
</template>
