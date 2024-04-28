<template>
    <div>
        <h3 v-if="title" class="mb-10 text-center text-2xl font-bold text-black dark:text-white lg:mb-14" v-html="title"></h3>
        <swiper
            :loop="true"
            slidesPerView="auto"
            :spaceBetween="30"
            :speed="2500"
            :autoplay="{
                delay: 0,
                disableOnInteraction: false,
            }"
            :breakpoints="{
                320: {
                    slidesPerView: 1.7,
                },
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 7,
                },
            }"
            :modules="[Autoplay]"
            :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
            :key="store.direction === 'rtl' ? 'true' : 'false'"
        >
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-1.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-2.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-3.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-4.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-5.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-6.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
            <swiper-slide>
                <a href="javascript:"><img src="/assets/images/logo-7.svg" alt="" class="mx-auto transition hover:scale-110" /></a>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script setup lang="ts">
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';
    import 'swiper/css';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    defineProps({
        title: {
            type: String,
            default: null,
        },
    });
</script>
