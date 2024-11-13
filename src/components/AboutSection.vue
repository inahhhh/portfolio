<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opqcity-40 blur-2xl"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                           Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                                Wilhelmina
                            </span>
                        </h1>
                    </div>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                    </div>
                </div>
            </div>
        </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base lg:text-lg mt-1 py-1">
                     I am Wilhelmina Ola, a Web Developer for 6 years. I’m proficient in languages such as PHP, Javascript, MySQL, HTML and CSS. I also worked on frameworks such as Laravel, Code Igniter, Jquery, VueJS, NuxtJS, and Vuetify.
                </p>
                <p class="text-base lg:text-lg mt-1 py-1">
                    In my previous role, I was responsible for handling the development process, from planning, creation of a development plan, coding, cross-testing, and code reviewing my teammate’s code as well as the project deployment
                </p>
                <p class="text-base lg:text-lg py-4">
                    I’ve worked in various projects that implement Agile methodologies and I am familiar with Agile project management tools such as Jira, Trello and Confluence which I’ve used to manage backlogs, and track sprint progress. I am also familiar with Git as a version control system and have been familiar with the branching workflow such as GitFlow.
                </p>
                <div class="pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-2">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">6</h3>
                        <p class="text-sm sm:text-base text-gray-300"> Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        School:'Polytechnic University of the Philippines',
        program:'Bachelor of Science in Computer Science',
        year:'2016'
    }
])
</script>
