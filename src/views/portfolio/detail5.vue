<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
                        <div class="heading relative mb-0 md:w-[725px]">
                            <h4 class="!text-white">Speaking Your Brand</h4>
                            <p
                                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
                            >
                            Speaking Your Brand is a coaching and training company that focuses on helping women entrepreneurs and executives become thought leaders and experts in their respective fields. The website offers a range of services and resources to help individuals grow their businesses, personal brands, and networks through powerful and persuasive presentations.
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
                                    <img src="/public/src/skills/icons8-wordpress-96.png" alt="wordpress" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-php-96.png" alt="php" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-mysql-96.png" alt="mysql" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/open-graph.svg" alt="open graph" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="py-14 md:py-20">
                    
                </div>
                <div class="pb-14 md:pb-20">
                    <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Description</h3>
                    <p
                        class="relative font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
                    >
                    Speaking Your Brand provides a comprehensive platform for women entrepreneurs and executives to develop their speaking skills, enhance their thought leadership, and make a meaningful impact through their presentations.
                    </p>
                </div>
                
                <div>
                    <img src="/src/portfolioes/ai1.png" alt="portfolio-img-4" class="rounded-[32px]" data-aos="fade-up" data-aos-duration="1000" />
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
