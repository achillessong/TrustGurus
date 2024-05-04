<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
                        <div class="heading relative mb-0 md:w-[725px]">
                            <h4 class="!text-white">Clubflyers Creator</h4>
                            <p
                                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
                            >
                            Clubflyers Creator is an online platform that allows users to design and create various promotional materials, such as club flyers, business cards, posters, and more. The website emphasizes its compatibility with Google Chrome, stating that it works best on this browser compared to others.
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
                                    <img src="/public/src/skills/icons8-asp-96.png" alt="asp.net" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/jquery.svg" alt="jquery" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/bootstrap.svg" alt="bootstrap" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/google-analytics.svg" alt="google analytics" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
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
                    One of the main features of Clubflyers Creator is the ability to browse different sizes. Users can choose from a variety of sizes, select a template, or even create their designs from scratch. The platform also provides a Resize tool, which allows users to quickly turn one design into multiple sizes, saving time and effort.
                    </p>
                    <p
                        class="relative mt-5 font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
                    >
                    Another feature offered by Clubflyers Creator is a collection of professionally designed templates. These templates cover a wide range of promotional materials, and they are designed to be user-friendly and inspire designers of all skill levels. Users can select a template and customize it to suit their specific needs.
                    </p>
                    <p
                        class="relative mt-5 font-semibold leading-[30px] before:absolute before:top-0 before:h-full before:w-1 before:rounded before:bg-primary ltr:pl-6 ltr:before:left-0 rtl:pr-6 rtl:before:right-0 md:text-lg"
                    >
                    Additionally, Clubflyers Creator offers a Logo Creator tool, which enables users to create personalized and eye-catching logos in just a few minutes. Users can save and use their newly created logos for branding and marketing materials.
                    </p>
                </div>
                <div>
                    <img src="/src/portfolioes/de-1.png" alt="portfolio-img-4" class="rounded-[32px]" data-aos="fade-up" data-aos-duration="1000" />
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
