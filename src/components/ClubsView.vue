<template>
    <section class=" dark:bg-gray-900 lg:py-1 py-8">

        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :speed="1000" :loop="true"
            :centeredSlides="true" :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
            }" @swiper="onSwiper" @slideChange="onSlideChange">

            <template v-for="Club in Clubs" :key="Club.id">

                <swiper-slide>

                    <!-- <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p class="text-2xl font-medium text-gray-900 dark:text-white">{{ testimonial.text }}</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" :src="testimonial.image" :alt="testimonial.name" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">{{ testimonial.name }}</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{{ testimonial.position }}</div>
                                </div>
                            </figcaption>
                        </figure>   
                    </div> -->


                    <div class="flex flex-col items-center py-24">

                        <figure class="px-3 md:max-w-screen-md  mx-auto text-center">
                            <h1 class="text-4xl text-Primary font-extrabold pb-4">{{ Club.name }}</h1>
                            <blockquote>
                                <p class="text-xl italic font-medium text-gray-900 dark:text-white">{{ Club.text }}</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                <!-- <img class="w-6 h-6 rounded-full"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                                    alt="profile picture"> -->
                                <div
                                    class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                    <cite class="pe-3 font-medium text-gray-900 dark:text-white">{{ Club.faculty }}</cite>
                                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">Faculty Coordinator</cite>
                                </div>
                            </figcaption>
                        </figure>

                    </div>


                </swiper-slide>

            </template>

        </swiper>

    </section>
</template>


<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import { Autoplay } from 'swiper/modules';

// const BASE_URL = "https://storage.googleapis.com/inovuslabs-cdn.appspot.com";

export default {
    name: 'ClubView',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
    data() {
        return {
            Clubs: [
                {
                    id: 1,
                    name: 'Souhrida Club',
                    text: 'Souhrida club an innovative programme launched by the Department of Higher Secondary Education aimed at Adolescent Counselling and Health care also functions in our school. The club conducts various counselling classes for both students and their parents',
                    faculty: 'Sandhya Karnavar'
                },
                {
                    id: 2,
                    name: 'Career Guidance Cell',
                    text: 'Career Guidance Cell: A unit of the Career Guidance Cell of the DHSE functions effectively in the school . The unit arranges classes for the students by experts and motivational speakers aiming at personality development and stress management.It also conducts programmes to guide students to select the right courses and career',
                    faculty: 'Narayanan Namboothiri K'
                },
                {
                    id: 3,
                    name: 'ASAP',                    
                    text: 'We have a unit of Additional Skill Acquisition Programme(ASAP) in our school. It focusses on skill development in students there by facilitating their employment placements',
                    faculty: ''
                },
                {
                    id: 4,
                    name: 'NSS Unit 52',
                    text: 'The NSS unit of NSHSS (unit 52) with a total strength of 100 vounteers under the leadership of a programme officer flourishes actively. The unit is able to uphold the NSS motto Not Me But You by enabling the volunteers to render selfless service through voluntary social service. This unit has also received the best NSS unit award.',
                    faculty: 'Soumya I'
                }
            ]
        }
    },
    methods: {

        onSwiper(swiper) {

        },
        onSlideChange() {

        },
    },
}
</script>