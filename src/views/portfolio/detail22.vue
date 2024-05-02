<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
                        <div class="heading relative mb-0 md:w-[725px]">
                            <h4 class="!text-white">"Dog House" SlotGame</h4>
                            <p
                                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
                            >
                            It features a fun and colorful theme centered around dogs living in their cozy dog house. The game includes various dog-related symbols like different breeds of dogs, dog collars, and bones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="py-14 md:py-[100px]">
            <div class="container">
                <div>
                    <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Technologies</h3>
                    <div class="overflow-x-auto overflow-y-hidden">
                        <ul class="flex w-[520px] justify-between gap-4 md:w-auto md:justify-start md:gap-7" data-aos="fade-up" data-aos-duration="1000">
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-unity-96.png" alt="unity" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/file-type-godot.svg" alt="unity" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-asp-96.png" alt="unity" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/java.svg" alt="unity" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20085 26.8972L0 0L26.2838 0.0540514L23.9567 26.8972L13.2411 30L2.20085 26.8972Z" fill="#E34F26" />
                                        <path d="M13.2388 27.4023V2.56152L24.0626 2.59756L22.1325 24.8225L13.2388 27.4023Z" fill="#EF652A" />
                                        <path
                                            d="M21.0902 8.76676L21.3967 5.4834H4.74609L5.66603 15.5497H17.1574L16.7067 19.8431L13.0266 20.8351L9.29235 19.7528L9.09395 17.1912H5.79236L6.24343 22.4227L13.0264 24.3169L19.8633 22.4227L20.7833 12.2123H8.71496L8.37221 8.76676H21.0902Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="pb-14 md:pb-20 mt-20">
                    <h3 class="mb-7 mt-20 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Description</h3>
                    <p
                        class="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
                    >
                    "Dog House" is known for its engaging gameplay, vibrant graphics, and potential for rewarding bonuses. It has become a popular choice among online slot enthusiasts due to its entertaining theme and exciting features.
                    </p>
                </div>
                
                <div>
                    <img src="/src/portfolioes/doghouse.jpg" alt="portfolio-img-4" class="rounded-[32px]" data-aos="fade-up" data-aos-duration="1000" />
                </div>
            </div>
        </section>

        <section class="py-14 md:py-[100px] lg:py-[100px]">
            <project-slider>
                <template #title>
                    <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4>Related Projects</h4>
                    </div>
                </template>
            </project-slider>
        </section>

    </div>
</template>
<script setup lang="ts">
    import ProjectSlider from '@/components/ProjectSlider.vue';
    import ContactUs from '@/components/ContactUs.vue';
</script>
