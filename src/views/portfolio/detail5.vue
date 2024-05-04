<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="items-center py-10 md:flex md:h-[400px] md:py-0">
                        <div class="heading relative mb-0 md:w-[725px]">
                            <h4 class="!text-white">Rarible</h4>
                            <p
                                class="relative mt-7 font-medium text-[#BBC0D0] before:absolute before:top-0 before:h-full before:w-1 before:bg-primary ltr:pl-8 ltr:before:left-0 rtl:pr-8 rtl:before:right-0"
                            >
                            Rarible.com is an online marketplace specifically designed for NFTs (Non-Fungible Tokens). It serves as a platform where brands, communities, and traders can engage in buying, selling, and trading unique digital assets.
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
                                    <img src="/public/src/skills/icons8-react-80.png" alt="React" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/ethers-seeklogo.svg" alt="ethers.js" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-nodejs-96.png" alt="node.js" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/icons8-cloudflare-96.png" alt="cloudflare" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/solana-sol-icon.svg" alt="amazon web service" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                            <li
                                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark md:h-20 md:w-20 md:rounded-[32px]"
                            >
                                <div>
                                    <img src="/public/src/skills/google-analytics.svg" alt="amazon web service" class="h-10 w-10 rounded-r-[32px] rounded-l-[32px] object-cover md:rounded-r-none" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="py-14 md:py-20">
                    <h3 class="mb-7 text-xl font-extrabold text-black dark:text-white sm:text-2xl">some key aspects of Rarible:</h3>
                    <ul class="list-disc space-y-4 font-semibold leading-6 ltr:ml-[18px] rtl:mr-[18px] md:text-lg ltr:md:pl-4 rtl:md:pr-4">
                        <li>NFT Marketplace</li>
                        <li>Brands, Communities, and Traders</li>
                        <li>Buying and Selling</li>
                        <li>Creator Tools</li>
                        <li>Community and Social Interaction</li>
                        <li>Rarity Farming and Governance</li>
                    </ul>
                </div>
                <div  class="py-[30px] sm:py-[50px] px-[200px]" >
                    <img src="/src/portfolioes/blockchian1.png" alt="portfolio-img-4" class="rounded-[32px]" data-aos="fade-up" data-aos-duration="1000" />
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
