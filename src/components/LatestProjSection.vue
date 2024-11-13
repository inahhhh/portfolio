<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">My Past Projects</h2>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
    
                <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
                    <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                    <p class="text-[#ADB7BE] mt-5"> <strong>Description: </strong>{{ project.description }}</p>
                    <p class="text-[#ADB7BE] mt-5"> <strong>Role: </strong>{{ project.role }}</p>
                    <div class="flex flex-wrap p-2.5">
                        <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
                        style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);"
                        >
                    <p class="px-1 py-2">{{ technology }}</p>
                    </div>
                    </div>
                </div>
                </div>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'web development',
        image: 'src/assets/project.png',
        title: 'Calendar and Room Reservation System',
        description: 'A system that helps our company to manage and schedule meetings by allowing users to view available rooms, book them, and avoid conflicts. It integrates with a calendar interface, offering features like real-time availability, notifications, and recurring bookings for improved scheduling efficiency.',
        technologies: ['PHP', 'MySQL', 'Jquery', 'VueJS', 'Slack API', 'Google Calendar API'],
        role: 'System maintenance, Development of new features, Development Plan Preparation, Code Review, Cross-Test, Deployment',
        gitURL: '',
        webURL: ''
    },
    {
        id: 2,
        category: 'Mobile App',
        image: 'src/assets/mobile.jpg',
        title: 'Hotdesk System',
        description: 'A system that allows employees to reserve workstations on a flexible, first-come, first-served basis. It helps organizations manage office space efficiently by enabling users to book desks in advance, view availability, and ensure optimal use of resources.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'NuxtJS', 'Slack API'],
        gitURL: '',
        webURL: '',
        role: 'System maintenance, Development of new features, Code Review, Cross-Test, Deployment',
    },
    {
        id: 3,
        category: 'web development',
        image: 'src/assets/project.png',
        title: 'OSS System',
        description: 'A tool designed to manage the usage of source codes that are made publicly available for anyone',
        technologies: ['PHP', 'Laravel','MySQL', 'VueJS'],
        gitURL: '',
        role: 'System maintenance, Deploymennt'
    },
    {
        id: 4,
        category: 'Mobile App',
        image: 'src/assets/mobile.jpg',
        title: 'Business Center System',
        description: 'A system that integrates features for delivery management, consulting services, and desk reservations. It allows for seamless scheduling, tracking, and coordination of deliveries, appointments, and desk bookings, optimizing resource allocation and improving operational efficiency.',
        technologies: ['PHP', 'MySQL', 'Jquery', 'VueJS', 'Company\'s Internal Delivery API', 'Company\'s Internal SMS API', 'reCaptcha V2'],
        gitURL: '',
        webURL: '',
        role: 'System maintenance, Development of new features, Development Plan Preparation, Code Review, Cross-Test, Deployment',
    },
    {
        id: 5,
        category: 'web development',
        image: 'src/assets/project.png',
        title: 'Evaluation Tool',
        description: 'A system that handles the Employee Evaluation of our company.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'VueJS', 'Vuetify', 'Company\'s Internal SMS API'],
        gitURL: '',
        webURL: '',
        role: 'System maintenance, Development of new features, Development Plan Preparation, Code Review, Cross-Test, Deployment',
    }
]);

const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})

</script>
