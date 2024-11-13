<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">My Skills</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-8" data-aos="fade-left">
                    <div v-for="skill in Skills" :key="skill.id"
                        class="flex items-center rounded-full p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <!-- Skill Name Section -->
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary rounded-full px-4 py-2 bg-[#1e293b]">
                                {{ skill.name }}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-5">My Experiences</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                    class="flex  items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                    <div class="w-1/4">
                        <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                    </div>
                    <div class="w-3/4 pl-4">
                        <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {{ element.role }}
                        </h3>
                        <p class="text-white">{{ element.company }}</p>
                        <p class="text-white">{{ element.date }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const Skills =ref([
    {
        id:1,
        name:'HTML & CSS',
        width:'85%'
    },
    {
        id:2,
        name:'PHP',
        width:'70%'
    },
    {
        id:3,
        name:'JavaScript',
        width:'98%',
        icon: 'https://img.icons8.com/?size=100&id=42769&format=png&color=000000'
    },
    {
        id:4,
        name:'JQUERY',
        width:'91%'
    }
    ,
    {
        id:5,
        name:'MySQL',
        width:'91%'
    }
    ,
    {
        id:6,
        name:'VueJS',
        width:'91%'
    },
    {
        id:7,
        name:'Vuetify',
        width:'91%'
    },
    {
        id:8,
        name:'Laravel',
        width:'91%'
    },
    {
        id:9,
        name:'Code Igniter',
        width:'91%'
    }
]);

const Experinces =ref([
    {
        id:1,
        role:'L2 Web Developer',
        company:'Cafe24 Philippines',
        date:'September 2022 – May 2023'
    },
    {
        id:2,
        role:'L1 Web Developer',
        company:'Cafe24 Philippines',
        date:'October 2016 – August 2022'
    },
    {
        id:3,
        role:'Intern',
        company:'Fujitsu Ten Solutions Philippines, Inc',
        date:'April - May 2015'
    }
])
</script>
