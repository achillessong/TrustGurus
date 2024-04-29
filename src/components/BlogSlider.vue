<template>
    <section class="py-14 lg:py-[100px]">
        <div class="container">
            <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between" >
                <!-- :class="{ 'mb-10': !title }" -->
                <div class="heading text-center ltr:lg:text-left rtl:lg:text-right">
                    <!-- :class="{ 'mb-0': !title }" -->
                    <h6>Blog</h6>
                    <h4>Unlock the latest trends/news</h4>
                </div>
                <div class="mb-8 flex items-center justify-end gap-4 lg:mb-0">
                    <router-link to="/blog" class="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary">
                        View All
                    </router-link>
                    <button
                        type="button"
                        class="blog-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                    >
                        <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-black rtl:rotate-180 dark:text-white"
                        >
                            <path
                                d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        class="blog-slider-button-next text-p flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary"
                    >
                        <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="text-black rtl:rotate-180 dark:text-white"
                        >
                            <path
                                d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            <swiper
                :loop="true"
                slidesPerView="auto"
                :spaceBetween="30"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :navigation="{
                    nextEl: '.blog-slider-button-next',
                    prevEl: '.blog-slider-button-prev',
                }"
                :modules="[Navigation, Autoplay]"
                :breakpoints="{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }"
                :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                :key="store.direction === 'rtl' ? 'true' : 'false'"
            >
                    <swiper-slide v-for="blog in jsonData.slice(0,5)" :key="blog?.id">
                        <div
                            class="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark"
                        >
                            <router-link :to="`/blog-details/${blog?.id}`" class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></router-link>
                            <img :src="blog?.image" alt="blog-1" class="h-52 w-full rounded-t-3xl object-cover" />
                            <div class="p-5 text-sm font-bold">
                                <h6 class="font-extrabold text-secondary dark:text-secondary">{{ blog?.category }}</h6>
                                <h5 class="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                    {{ blog?.title }}
                                </h5>
                                <p class="line-clamp-4">
                                    {{ blog?.description }}
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Autoplay } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    const jsonData = ref([]);
    onMounted(async () => {
    try {
        const response = await fetch('/json/blogs.json');
        jsonData.value = await response.json();
    } catch (error) {
        console.error('Error fetching JSON data: ', error);
    }
    });

</script>
