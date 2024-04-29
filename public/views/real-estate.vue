<template>
    <div>
        <section
            class="overflow-hidden bg-black bg-[url(/assets/images/realestate/realestate_img.png)] bg-cover bg-center bg-no-repeat pt-[82px] lg:pt-[106px]"
        >
            <div class="container pt-12 pb-16 md:pt-24">
                <div class="relative">
                    <div class="w-full text-center ltr:lg:text-left rtl:lg:text-right xl:max-w-[767px]">
                        <div class="inline-block bg-secondary/10 px-2.5 py-2">
                            <h6 class="text-base font-bold text-secondary">apartment in new york</h6>
                        </div>
                        <h2 class="py-5 text-4xl font-extrabold text-white md:py-0 md:text-6xl md:leading-[90px]">
                            choose an Ideal place to reside with <span class="text-3xl italic text-primary md:text-[50px]"> your family.</span>
                        </h2>
                        <p class="max-w-lg pt-4 text-base font-semibold">
                            our mission is to help people to find the best course online and learn with expert anytime, anywhere.
                        </p>
                        <div class="mt-10 flex justify-between bg-white py-4 px-5 drop-shadow-[6px_6px_0px_rgba(119,128,161,0.3)] md:mt-16 lg:max-w-[445px]">
                            <div class="flex items-center gap-2.5">
                                <div>
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.43163 3.50106C9.9194 2.55077 11.687 2 13.5833 2C18.8761 2 23.1667 6.2906 23.1667 11.5833C23.1667 18.1538 15.5 25 13.5833 25C11.6667 25 4 18.1538 4 11.5833C4 9.89876 4.43465 8.31571 5.19792 6.9402"
                                            stroke="#08111F"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M17.0383 12.0814C17.1286 11.763 17.177 11.4266 17.177 11.0789C17.177 9.0732 15.568 7.44729 13.5833 7.44729C11.5985 7.44729 9.9895 9.0732 9.9895 11.0789C9.9895 13.0845 11.5985 14.7104 13.5833 14.7104C13.8589 14.7104 14.1272 14.6791 14.385 14.6197"
                                            stroke="#08111F"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <input type="search" placeholder="search by location...." class="h-14 border-0 text-black outline-0" />
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn rounded-none bg-secondary text-white">search</button>
                            </div>
                        </div>
                        <div
                            class="mt-14 flex justify-between gap-7 bg-[#141F32] py-[30px] px-5 text-center sm:gap-14 sm:px-12 md:mt-20 lg:max-w-[664px] lg:justify-start xl:gap-28"
                        >
                            <div>
                                <count-up
                                    class="text-[34px] font-black leading-10 text-white"
                                    :startVal="0"
                                    :end-val="100"
                                    :duration="10"
                                    :options="{ suffix: `k <span class='text-primary'>+</span>` }"
                                ></count-up>
                                <p class="mt-2 text-sm font-bold text-gray">premium product</p>
                            </div>
                            <div>
                                <count-up
                                    class="text-[34px] font-black leading-10 text-white"
                                    :startVal="0"
                                    :end-val="28"
                                    :duration="10"
                                    :options="{ suffix: `k <span class='text-primary'>+</span>` }"
                                ></count-up>
                                <p class="mt-2 text-sm font-bold text-gray">happy customer</p>
                            </div>
                            <div>
                                <count-up
                                    class="text-[34px] font-black leading-10 text-white"
                                    :startVal="0"
                                    :end-val="50"
                                    :duration="10"
                                    :options="{ suffix: ` <span class='text-primary'>+</span>` }"
                                ></count-up>
                                <p class="mt-2 text-sm font-bold text-gray">award winning</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative -bottom-16 z-[1] order-2 mx-auto w-full max-w-[350px] ltr:right-10 rtl:left-10 lg:absolute lg:order-1 lg:max-w-[424px]"
                        :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                        data-aos-duration="1000"
                        data-aos-offset="0"
                    >
                        <img src="/assets/images/realestate/realestate_img1.png" alt="" class="z-1 relative h-full w-full bg-gray-dark object-cover p-3" />
                        <span
                            class="absolute -top-5 -bottom-5 -z-[1] w-full border-[3px] border-[#B476E5] ltr:-right-6 rtl:-left-6 ltr:xl:-right-8 rtl:xl:-left-8"
                        ></span>
                    </div>
                    <span class="absolute -bottom-16 order-1 w-full max-w-[350px] ltr:left-[51%] rtl:right-[55%] lg:order-2 lg:max-w-[400px] xl:ltr:left-[55%]">
                        <svg width="28" height="100" viewBox="0 0 28 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_6_1064)">
                                <path
                                    d="M15.2353 3.76093V0H12.7648V3.76096L9.42133 1.94045L8.53853 4.47644L12.7648 6.7776V9.26383L8.05629 6.70011L7.17349 9.23607L12.7648 12.2805V14.8873L7.0162 11.7572L6.1334 14.2932L12.7648 17.9039V20.5437L5.73354 16.7152L4.85076 19.2511L12.7648 23.5602V25.9648L4.88278 21.6731L4 24.209L12.7648 28.9815V30.9321L4.88278 26.6405L4 29.1765L12.7648 33.9488V36.5842L4.88278 32.2926L4 34.8285L12.7648 39.6008V41.5918L4.88278 37.3002L4 39.8361L12.7648 44.6084V46.7977L4.88278 42.506L4 45.0419L12.7648 49.8142V52.4001L4.88278 48.1085L4 50.6444L12.7648 55.4167V58.3002L4.88278 54.0085L4 56.5444L12.7648 61.3167V63.4563L4.88278 59.1647L4 61.7007L12.7648 66.473V69.2242L5.67185 65.3621L4.78907 67.8982L12.7648 72.2409V74.2328L6.88461 71.031L6.00181 73.567L12.7648 77.2493V79.5856L8.98224 77.526L8.09944 80.0619L12.7648 82.6022V100H15.2353V82.6022L19.9006 80.0619L19.0178 77.526L15.2353 79.5856V77.2493L21.9982 73.567L21.1154 71.031L15.2353 74.2328V72.2409L23.2109 67.8982L22.3281 65.3621L15.2353 69.2242V66.473L24 61.7007L23.1172 59.1647L15.2353 63.4563V61.3167L24 56.5444L23.1172 54.0084L15.2353 58.3002V55.4167L24 50.6444L23.1172 48.1085L15.2353 52.4001V49.8142L24 45.0419L23.1172 42.506L15.2353 46.7977V44.6084L24 39.8361L23.1172 37.3L15.2353 41.5918V39.6008L24 34.8285L23.1172 32.2926L15.2353 36.5842V33.9488L24 29.1763L23.1172 26.6405L15.2353 30.9321V28.9813L24 24.209L23.1172 21.6731L15.2353 25.9648V23.5602L23.1493 19.2511L22.2665 16.7152L15.2353 20.5435V17.9039L21.8666 14.2932L20.9838 11.7572L15.2353 14.8872V12.2805L20.8265 9.23607L19.9437 6.70009L15.2353 9.26381V6.77756L19.4615 4.47642L18.5787 1.94045L15.2353 3.76093Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_6_1064"
                                    x="0"
                                    y="0"
                                    width="28"
                                    height="108"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_1064" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_1064" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </span>
                </div>
            </div>
        </section>

        <div class="bg-[url(/assets/images/realestate/line.png)] bg-[length:1052px] bg-top bg-repeat-y">
            <logo-slider class="bg-white !py-[50px] px-5"></logo-slider>

            <section class="bg-gradient-to-t from-white/50 to-transparent dark:from-black/50">
                <div class="bg-[url(/assets/images/realestate/properties_img.png)] bg-cover bg-center bg-no-repeat py-12 lg:py-24">
                    <div class="container text-center ltr:lg:text-left rtl:lg:text-right">
                        <div class="heading mb-0">
                            <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">area properties</h6>
                            <h4 class="!font-black">PROPERTIES BY <span class="text-secondary">LOCATION</span></h4>
                        </div>
                        <p class="mt-2.5 text-lg font-medium">we ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
                        <div class="mt-[30px] flex flex-wrap items-center justify-center gap-7">
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property1.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property1-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property2.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property2-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property3.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property3-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property4.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property4-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property5.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property5-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property6.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property6-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property7.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property7-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                            <div
                                class="flex h-28 w-28 items-end justify-center overflow-hidden rounded-full bg-[rgba(119,128,161,0.06)] duration-200 hover:bg-primary/30"
                            >
                                <a href="javascript:"><img src="/assets/images/realestate/property8.svg" class="block dark:hidden" alt="" /></a>
                                <a href="javascript:"><img src="/assets/images/realestate/property8-dark.svg" class="hidden dark:block" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative overflow-hidden bg-gradient-to-t from-white/[55%] to-transparent px-5 pt-12 pb-24 dark:from-white/[0.02] lg:pb-[200px]">
                <span class="absolute bottom-0 hidden ltr:right-0 rtl:left-0 sm:block">
                    <svg width="102" height="235" viewBox="0 0 102 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2">
                            <path
                                d="M92.527 78.0833C75.118 82.9124 56.2545 110.949 49 124.363C59.8818 123.021 84.5453 115.912 96.1543 98.2051C107.763 80.4979 98.5725 77.4124 92.527 78.0833Z"
                                fill="url(#paint0_linear_169_128)"
                            />
                            <path
                                d="M82.7459 31.7592C65.3642 33.512 52.8734 76.4017 47.2734 96.1807C59.7188 86.009 84.2369 65.6654 90.2095 58.8836C101.409 46.1692 99.5458 30.0638 82.7459 31.7592Z"
                                fill="url(#paint1_linear_169_128)"
                            />
                            <path
                                d="M22.9938 5.01791C11.3666 23.3114 36.5574 50.7968 48.1847 69.0903C48.1847 57.5722 48.1847 33.4741 48.1847 23.3115C48.1847 7.05064 31.3847 -8.19111 22.9938 5.01791Z"
                                fill="url(#paint2_linear_169_128)"
                            />
                            <path
                                d="M49.0913 104.363C36.0186 86.1963 8.10056 54.7092 0.97333 74.0864C-7.9448 98.3071 47.3095 104.363 49.0913 104.363Z"
                                fill="url(#paint3_linear_169_128)"
                            />
                            <path d="M49.0916 131.636L47.2734 63.4546" stroke="url(#paint4_linear_169_128)" stroke-width="2" stroke-linecap="round" />
                            <path
                                d="M31.0181 183.08C35.4272 172.361 41.9908 144.854 43.3635 131.636H61.8907C62.7088 147.927 71.1451 171.291 75.2633 183.08C87.6087 210.946 76.9815 228.809 69.0907 233.453H39.2544C19.7 227.022 24.8455 198.085 31.0181 183.08Z"
                                stroke="url(#paint5_linear_169_128)"
                                stroke-width="2"
                            />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_169_128" x1="75.3632" y1="78" x2="75.3632" y2="124.363" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_169_128" x1="72.2717" y1="31.6357" x2="72.2717" y2="96.1807" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_169_128" x1="34.0923" y1="0" x2="34.0923" y2="69.0903" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_169_128" x1="24.5456" y1="67.9993" x2="24.5456" y2="104.363" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_169_128" x1="48.1825" y1="63.4546" x2="48.1825" y2="131.636" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_169_128" x1="53.1786" y1="131.636" x2="53.1786" y2="233.453" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <div class="relative mx-auto max-w-[1440px] bg-gray/5 pt-12 dark:bg-gray/[0.05] lg:max-h-[400px]">
                    <div class="container">
                        <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">our services</h6>
                            <h4 class="!font-black">THINGS YOU NEED <span class="text-secondary">TO DO</span></h4>
                        </div>
                        <p class="mt-2.5 text-center text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                            we ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
                        </p>
                        <div class="mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                            <div
                                class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                            >
                                <span
                                    class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_22_590)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M21.3028 15.7205C24.8991 12.1242 24.8991 6.2935 21.3028 2.69722C17.7065 -0.899072 11.8758 -0.899072 8.27947 2.69722C5.89155 5.08514 5.0892 8.45821 5.87242 11.5082C5.99874 12.0001 5.88656 12.532 5.52744 12.8911L0.577989 17.8406C0.154104 18.2645 -0.0541175 18.8581 0.0120824 19.4539L0.321504 22.2387C0.354493 22.5355 0.487544 22.8124 0.698774 23.0236L0.976392 23.3012C1.18762 23.5125 1.46445 23.6455 1.76135 23.6785L4.54613 23.9879C5.14193 24.0541 5.73552 23.8459 6.15941 23.422L7.10611 22.4753L4.77791 20.1726C4.38525 19.7842 4.38176 19.151 4.77013 18.7584C5.15851 18.3657 5.79166 18.3622 6.18433 18.7506L8.52035 21.0611L11.1092 18.4722C11.4683 18.1131 11.9999 18.0013 12.4918 18.1276C15.5418 18.9108 18.9149 18.1084 21.3028 15.7205ZM12.781 7.44772C13.8224 6.40632 15.5109 6.40632 16.5523 7.44772C17.5937 8.48911 17.5937 10.1776 16.5523 11.219C15.5109 12.2603 13.8224 12.2603 12.781 11.219C11.7396 10.1776 11.7396 8.48911 12.781 7.44772Z"
                                                fill="currentcolor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_22_590">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">buy a home</h5>
                                <p class="mt-4 text-lg font-medium">find your place with an immersive photo experience and the most listings.</p>
                            </div>
                            <div
                                class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                            >
                                <span
                                    class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_18_167)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M16.9643 3.27418L19.1598 5.46974C22.3866 8.69653 24 10.3099 24 12.3148C24 14.3197 22.3866 15.933 19.1598 19.1598C15.933 22.3866 14.3197 24 12.3148 24C10.3099 24 8.69653 22.3866 5.46975 19.1598L3.27418 16.9643C1.41954 15.1096 0.49222 14.1823 0.147167 12.9792C-0.197887 11.776 0.0970006 10.4982 0.686775 7.9425L1.02689 6.46869C1.52307 4.31857 1.77116 3.24351 2.50733 2.50733C3.24351 1.77116 4.31857 1.52307 6.46868 1.02689L7.9425 0.686776C10.4982 0.0970007 11.776 -0.197887 12.9792 0.147167C14.1823 0.49222 15.1096 1.41954 16.9643 3.27418ZM10.976 14.7941C10.1684 13.9866 10.1753 12.8279 10.6582 11.9096C10.4169 11.559 10.4521 11.0754 10.7639 10.7636C11.0745 10.453 11.5557 10.4169 11.906 10.6554C12.3139 10.4386 12.762 10.324 13.2085 10.3282C13.7055 10.3329 14.1046 10.7396 14.1 11.2366C14.0953 11.7337 13.6885 12.1328 13.1915 12.1281C12.9792 12.1261 12.7002 12.2214 12.4609 12.4607C11.9959 12.9257 12.1182 13.3907 12.2488 13.5213C12.3794 13.6519 12.8444 13.7742 13.3095 13.3092C14.2503 12.3684 15.8747 12.0561 16.9157 13.0971C17.7233 13.9046 17.7164 15.0633 17.2335 15.9816C17.4748 16.3322 17.4396 16.8158 17.1278 17.1276C16.8171 17.4383 16.3358 17.4743 15.9855 17.2357C15.4372 17.5271 14.8135 17.6363 14.2188 17.5141C13.732 17.414 13.4184 16.9382 13.5184 16.4513C13.6185 15.9644 14.0943 15.6508 14.5812 15.7509C14.7938 15.7946 15.1365 15.7248 15.4308 15.4305C15.8958 14.9655 15.7735 14.5005 15.6429 14.3699C15.5123 14.2393 15.0473 14.1169 14.5823 14.582C13.6414 15.5228 12.017 15.8351 10.976 14.7941ZM9.62515 9.95175C10.5624 9.01449 10.5624 7.49489 9.62515 6.55763C8.68789 5.62037 7.1683 5.62037 6.23104 6.55763C5.29378 7.49489 5.29378 9.01449 6.23104 9.95175C7.1683 10.889 8.68789 10.889 9.62515 9.95175Z"
                                                fill="currentcolor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_18_167">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">sell a home</h5>
                                <p class="mt-4 text-lg font-medium">
                                    no matter what path you take to sell your home, we can help you navigate a successful sale.
                                </p>
                            </div>
                            <div
                                class="group border-2 border-white bg-white/50 p-[30px] duration-200 hover:border-secondary/80 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:hover:border-secondary"
                            >
                                <span
                                    class="flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary group-hover:bg-black group-hover:text-white dark:group-hover:bg-secondary"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19.2558 1H16.4651C16.1569 1 15.907 1.24989 15.907 1.55814V1.6239L19.8139 4.74947V1.55814C19.8139 1.24989 19.564 1 19.2558 1Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M21.7674 9.88608L22.6398 10.584C23.0008 10.8728 23.5277 10.8143 23.8165 10.4532C24.1054 10.0922 24.0468 9.56531 23.6858 9.27646L14.615 2.01985C13.0862 0.796794 10.9138 0.796794 9.385 2.01985L0.314239 9.27646C-0.0468168 9.56531 -0.105355 10.0922 0.183489 10.4532C0.472333 10.8143 0.999182 10.8728 1.36024 10.584L2.23258 9.88608V21.372H0.837238C0.374861 21.372 3.08724e-05 21.7469 3.08724e-05 22.2092C3.08724e-05 22.6716 0.374861 23.0465 0.837238 23.0465H23.1628C23.6251 23.0465 24 22.6716 24 22.2092C24 21.7469 23.6251 21.372 23.1628 21.372H21.7674V9.88608ZM8.93024 8.2558C8.93024 6.56041 10.3046 5.18604 12 5.18604C13.6954 5.18604 15.0698 6.56041 15.0698 8.2558C15.0698 9.95118 13.6954 11.3256 12 11.3256C10.3046 11.3256 8.93024 9.95118 8.93024 8.2558ZM12.0551 12.4418C12.7973 12.4418 13.4368 12.4418 13.9488 12.5106C14.4976 12.5844 15.0237 12.7508 15.4504 13.1775C15.8771 13.6042 16.0435 14.1302 16.1173 14.679C16.1818 15.1591 16.1858 15.7511 16.186 16.4348C16.186 16.4804 16.186 16.5264 16.186 16.5728L16.186 21.372H14.5116V16.6279C14.5116 15.8149 14.5098 15.2893 14.4578 14.9021C14.409 14.539 14.3301 14.4252 14.2664 14.3615C14.2027 14.2977 14.0889 14.2189 13.7257 14.1701C13.3385 14.118 12.813 14.1162 12 14.1162C11.187 14.1162 10.6615 14.118 10.2743 14.1701C9.91114 14.2189 9.79732 14.2977 9.73359 14.3615C9.66986 14.4252 9.59104 14.539 9.54222 14.9021C9.49016 15.2893 9.48838 15.8149 9.48838 16.6279V21.372H7.81396L7.81396 16.5728C7.81392 15.8306 7.81388 15.1911 7.88273 14.679C7.95652 14.1302 8.12291 13.6042 8.5496 13.1775C8.97629 12.7508 9.50235 12.5844 10.0512 12.5106C10.5632 12.4418 11.2027 12.4418 11.9449 12.4418H12.0551Z"
                                            fill="currentcolor"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.6047 8.2558C10.6047 7.48517 11.2294 6.86045 12 6.86045C12.7706 6.86045 13.3953 7.48517 13.3953 8.2558C13.3953 9.02642 12.7706 9.65114 12 9.65114C11.2294 9.65114 10.6047 9.02642 10.6047 8.2558Z"
                                            fill="currentcolor"
                                        />
                                    </svg>
                                </span>
                                <h5 class="mt-7 text-[22px] font-bold leading-7 text-black dark:text-white">rent a home</h5>
                                <p class="mt-4 text-lg font-medium">
                                    whether you’re looking for a single- family home, high-rise apartment, or something in between.
                                </p>
                            </div>
                        </div>
                    </div>
                    <span class="absolute bottom-0 ltr:-left-5 rtl:-right-5 md:bottom-20" data-aos="fade-up-right" data-aos-duration="1000">
                        <svg
                            width="62"
                            height="60"
                            viewBox="0 0 62 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12 md:h-14 md:w-14 xl:h-16 xl:w-16"
                        >
                            <path
                                d="M62 0L42.5037 43.0236L29.8853 34.7351L21.3901 36.8163L19.6134 23.952L10.6432 14.9567L62 0ZM53.4601 6.74365L23.4852 22.7451L23.8735 31.8047L53.4601 6.74365Z"
                                fill="#B476E5"
                            />
                            <path
                                d="M18.2192 39.9841C16.7331 41.4563 15.3531 43.0123 14.0066 44.5935C12.6657 46.1774 11.3638 47.7921 10.1012 49.4375C8.83847 51.0801 7.61209 52.7535 6.42763 54.4603C5.24874 56.17 4.10061 57.902 3.06421 59.7206C4.55317 58.2484 5.93038 56.6952 7.27688 55.114C8.61779 53.5301 9.91958 51.9154 11.1823 50.27C12.445 48.6246 13.6713 46.9513 14.853 45.2472C16.0347 43.5319 17.18 41.7999 18.2192 39.9841Z"
                                fill="#47BDFF"
                            />
                            <path
                                d="M31.064 40.2637C29.5778 41.7359 28.1978 43.2919 26.8513 44.873C25.5104 46.457 24.2086 48.0717 22.9459 49.7171C21.6832 51.3597 20.4568 53.033 19.2724 54.7399C18.0935 56.4495 16.9453 58.1816 15.9089 60.0002C17.3979 58.528 18.7751 56.9747 20.1216 55.3936C21.4625 53.8096 22.7643 52.195 24.027 50.5496C25.2897 48.9041 26.516 47.2308 27.7005 45.5267C28.8766 43.8115 30.0248 42.0795 31.064 40.2637Z"
                                fill="#47BDFF"
                            />
                            <path
                                d="M16.0322 23.9688C14.5461 25.441 13.166 26.997 11.8195 28.5781C10.4786 30.1621 9.17684 31.7767 7.91415 33.4222C6.65146 35.0648 5.42508 36.7381 4.24061 38.445C3.06173 40.1546 1.91357 41.8866 0.877159 43.7052C2.36613 42.233 3.74337 40.6798 5.08987 39.0987C6.43077 37.5147 7.73256 35.9 8.99246 34.2546C10.2551 32.6092 11.4815 30.9359 12.666 29.2318C13.8449 27.5166 14.993 25.7846 16.0322 23.9688Z"
                                fill="#47BDFF"
                            />
                        </svg>
                    </span>
                </div>
            </section>

            <section class="dark: relative py-12 lg:py-24">
                <span class="absolute bottom-0 hidden ltr:left-0 rtl:right-0 rtl:rotate-y-180 sm:block">
                    <svg width="302" height="220" viewBox="0 0 302 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.2"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M124.032 1.65331C124.966 2.58815 124.871 4.31116 123.864 4.69741C123.153 4.97059 123.024 6.90128 123.024 17.3032C123.024 30.9854 122.746 32.2914 119.599 33.3886C118.393 33.8084 109.268 34.0088 91.3128 34.0088C65.5527 34.0088 64.7751 34.0402 63.6869 35.1284C62.6205 36.1948 62.5674 36.9942 62.5674 51.9499C62.5674 69.3547 62.3983 70.3186 59.1421 71.4539C57.948 71.8698 49.5569 72.0741 33.6355 72.0741C13.3304 72.0741 9.7204 72.1973 8.60754 72.9267C7.08267 73.9253 5.65466 73.5391 5.16431 71.9958C4.46683 69.7969 7.34018 68.3219 8.82809 70.1149C9.42816 70.8376 12.9285 70.9546 34.0117 70.9546C57.8069 70.9546 58.5386 70.9221 59.9492 69.8132L61.4002 68.6718L61.5642 52.1307L61.7277 35.5897L63.2984 34.2395L64.8692 32.8893H92.1693H119.47L120.687 31.5939C121.863 30.3422 121.904 29.867 121.904 17.5993C121.904 10.1178 121.69 4.90005 121.382 4.90005C121.095 4.90005 120.696 4.38393 120.497 3.75362C119.819 1.6186 122.44 0.0612814 124.032 1.65331ZM131.239 57.3367C132.222 59.7024 132.707 60.1944 134.701 60.8521C135.975 61.2731 137.019 61.7887 137.019 61.998C137.019 62.2074 135.975 62.7229 134.701 63.1439C132.707 63.8016 132.222 64.2937 131.239 66.6593L130.096 69.4101L128.88 66.6571C127.831 64.2797 127.348 63.8084 125.345 63.2083C124.069 62.8259 123.024 62.3115 123.024 62.0652C123.024 61.8189 124.069 61.2725 125.347 60.851C127.323 60.1989 127.85 59.6744 128.882 57.335L130.096 54.5859L131.239 57.3367ZM259.921 60.5986C261.508 64.8748 261.715 65.139 264.015 65.8281C265.288 66.2093 266.329 66.7108 266.329 66.9426C266.329 67.1749 265.258 67.7543 263.95 68.2307C261.98 68.9483 261.424 69.4913 260.721 71.3884C259.538 74.5814 259.26 74.6883 258.474 72.2516C257.553 69.3916 257.203 69.0233 254.581 68.1584C253.345 67.7504 252.334 67.2454 252.334 67.0361C252.334 66.8267 253.379 66.3106 254.657 65.8891C256.64 65.2341 257.163 64.7107 258.242 62.3009C259.31 59.9145 259.569 59.652 259.921 60.5986ZM239.291 73.6762C255.5 79.2769 263.696 105.792 256.185 128.332C252.184 140.341 244.377 148.144 235.461 149.043C233.811 149.21 223.015 148.512 211.47 147.493L190.478 145.64L187.055 147.22C185.172 148.088 182.401 148.922 180.897 149.071C179.393 149.221 153.67 147.25 123.734 144.69L69.306 140.038L67.756 138.558C66.2076 137.08 66.1808 137.076 42.1353 135.063L18.0645 133.048L16.2676 130.97C15.2791 129.827 14.0559 127.974 13.5499 126.852C12.6671 124.895 12.4863 124.796 9.09845 124.434C5.83603 124.084 5.45874 123.898 4.14438 121.996C2.51035 119.629 0.987183 114.304 1.00006 111.002C1.01349 107.524 2.37042 102.531 3.95126 100.142C5.38766 97.972 7.07483 97.2907 11.0672 97.2694C12.1885 97.2633 12.7796 96.6632 14.0408 94.2494C16.9914 88.6023 15.007 89.124 42.175 86.8468L66.206 84.8327L67.8853 83.2939L69.5647 81.7556L121.345 77.3646C149.824 74.9497 175.518 72.9603 178.443 72.944C183.223 72.9166 184.099 73.0795 187.108 74.5551L190.456 76.1958L212.018 74.4C223.878 73.4126 234.211 72.6194 234.981 72.6378C235.751 72.6557 237.69 73.1232 239.291 73.6762ZM225.934 75.3248C218.056 79.1884 211.881 89.1369 209.76 101.381C208.748 107.226 209.362 120.563 210.885 125.798C213.607 135.151 219.207 143.017 225.49 146.313C228.192 147.731 229.123 147.915 233.581 147.915C238.039 147.915 238.97 147.73 241.67 146.314C248.013 142.987 253.023 135.934 256.048 126.073C257.47 121.439 257.59 120.306 257.62 111.259C257.657 100.11 257.028 96.7528 253.481 89.1475C250.014 81.7158 245.263 76.731 239.592 74.5736C236.358 73.3437 229.167 73.7389 225.934 75.3248ZM171.191 75.406C160.519 80.9092 153.409 97.6271 154.589 114.44C155.621 129.163 162.24 142.04 170.97 146.311C175.347 148.453 180.92 148.753 185.337 147.086C200.268 141.451 207.941 115.129 200.849 93.8783C197.503 83.8553 191.314 76.6235 184.044 74.2439C181.307 73.3482 173.879 74.0199 171.191 75.406ZM210.209 75.4216C203.051 76.0312 195.931 76.6722 194.385 76.8452L191.575 77.1609L194.224 80.0275C198.626 84.7907 202.163 92.7162 203.666 101.183C204.554 106.187 204.437 116.831 203.438 121.895C201.764 130.379 198.299 137.638 193.687 142.326L191.297 144.755L194.806 145.09C202.912 145.863 223.72 147.645 224.649 147.645C225.272 147.645 224.656 146.982 223.035 145.909C217.151 142.011 212.249 134.214 209.696 124.694C207.887 117.948 207.885 103.658 209.691 96.9845C212.19 87.7548 217.45 79.5388 223.195 75.893C226.233 73.9645 226.99 73.9925 210.209 75.4216ZM149.252 75.9786C138.675 76.8944 116.419 78.7815 99.793 80.172L69.5647 82.6999L67.4044 85.0841C57.8607 95.617 56.759 120.903 65.2745 133.974C68.5582 139.014 68.6114 139.041 76.8419 139.752C102.249 141.947 169.904 147.644 170.575 147.644C171.02 147.645 170.265 146.933 168.896 146.063C162.944 142.28 158.087 134.899 155.385 125.534C154.248 121.597 154.092 119.838 154.092 110.979C154.092 103.122 154.307 100.126 155.068 97.3752C157.975 86.8603 162.797 79.5758 169.848 75.046C170.831 74.414 170.822 74.3776 169.684 74.3463C169.022 74.3278 159.828 75.0628 149.252 75.9786ZM237.703 80.0673C240.665 81.0139 245.224 85.5845 247.47 89.8585C250.973 96.5249 252.031 101.377 252.014 110.699C251.999 119.996 251.157 124.328 248.152 130.575C244.647 137.863 238.902 142.614 233.612 142.601C228.186 142.588 222.385 137.854 219 130.676C216.318 124.988 215.346 120.866 214.986 113.644C213.919 92.2263 224.911 75.9786 237.703 80.0673ZM184.489 80.8C196.819 86.9442 201.815 112.432 194.063 129.637C189.707 139.305 182.515 144.201 175.854 142.034C166.539 139.003 160.388 126.525 160.408 110.699C160.418 102.817 161.54 97.4777 164.481 91.3161C169.393 81.0251 176.959 77.0478 184.489 80.8ZM39.4359 87.9502L18.2644 89.7896L16.9125 91.4275C9.08505 100.912 9.2457 122.927 17.1974 130.545L18.8818 132.159L40.3047 134.001C52.0876 135.014 62.5495 135.853 63.5543 135.866L65.3803 135.889L64.0614 133.79C56.8027 122.238 56.899 98.0671 64.2439 87.7514L65.4424 86.0687L63.0253 86.09C61.6958 86.1018 51.0806 86.9386 39.4359 87.9502ZM5.2533 100.09C4.46344 101.028 3.43347 103.089 2.96436 104.67C1.24133 110.471 2.28983 118.346 5.2533 121.869C6.48315 123.33 7.07037 123.574 9.35541 123.574H12.0228L11.1982 120.635C10.0602 116.58 10.073 104.597 11.2195 101.043L12.0771 98.384H9.38284C7.06702 98.384 6.48706 98.6236 5.2533 100.09ZM11.8772 137.849C12.4062 139.234 13.0393 140.368 13.2845 140.368C13.5291 140.368 14.7047 140.776 15.897 141.274L18.0645 142.18L15.7319 143.093C12.8502 144.221 12.6816 144.39 11.5582 147.262L10.6502 149.584L9.31903 146.844C8.21512 144.572 7.55905 143.938 5.46939 143.129C2.68164 142.05 2.52658 142.291 7.18118 140.476C8.1485 140.099 8.85831 139.174 9.36996 137.624C9.78644 136.362 10.3042 135.33 10.5209 135.33C10.7375 135.33 11.3482 136.463 11.8772 137.849ZM300.156 137.329C301.208 138.381 301.276 139.343 300.364 140.256C299.443 141.176 297.956 141.099 297.117 140.088C296.546 139.4 294.653 139.248 286.667 139.248C273.418 139.248 274.166 138.477 274.166 152.141V162.286L272.529 163.922L270.893 165.558H244.232C216.142 165.558 214.996 165.655 214.057 168.102C213.866 168.6 213.709 176.06 213.709 184.68V200.351L212.073 201.987L210.437 203.623H167.91C130.625 203.623 125.343 203.727 125.061 204.463C124.674 205.471 122.951 205.566 122.016 204.631C120.167 202.781 122.718 199.868 124.654 201.619C125.526 202.409 130.174 202.504 167.991 202.504C209.604 202.504 210.37 202.484 211.47 201.384C212.535 200.32 212.589 199.518 212.591 185.011C212.591 167.656 212.835 166.422 216.508 165.17C217.91 164.692 225.903 164.493 244.637 164.47C270.038 164.44 270.84 164.405 271.927 163.319C272.957 162.288 273.046 161.453 273.047 152.823C273.048 145.015 273.212 143.12 274.027 141.495C275.558 138.442 276.709 138.146 287.112 138.137C294.696 138.13 296.549 137.973 297.117 137.289C298.013 136.209 299.05 136.223 300.156 137.329ZM158.655 161.986C159.669 164.424 160.106 164.862 162.132 165.468C163.406 165.85 164.448 166.365 164.448 166.612C164.448 166.858 163.419 167.368 162.161 167.746C160.19 168.336 159.704 168.816 158.644 171.217L157.414 174.005L156.273 171.303C155.296 168.991 154.795 168.491 152.793 167.83C151.506 167.405 150.453 166.857 150.453 166.61C150.453 166.364 151.487 165.853 152.75 165.475C154.735 164.88 155.212 164.408 156.271 161.992L157.497 159.196L158.655 161.986ZM64.8065 173.096C64.8065 184.215 64.8418 184.57 66 185.19C67.0887 185.772 67.9189 185.104 75.4547 177.582C80.804 172.241 83.9561 169.483 84.3989 169.756C84.8563 170.039 82.3569 172.909 76.843 178.432C65.7593 189.534 65.574 189.069 81.0777 189.069C91.1203 189.069 92.7957 189.189 92.7957 189.909C92.7957 190.629 91.1203 190.748 81.0777 190.748C65.574 190.748 65.7593 190.283 76.843 201.385C82.3569 206.908 84.8563 209.778 84.3989 210.061C83.9567 210.334 80.8225 207.611 75.5208 202.346C68.2581 195.135 67.1822 194.264 66.066 194.699C64.8155 195.187 64.8065 195.273 64.8065 206.964C64.8065 214.44 64.6022 218.738 64.2467 218.738C63.8913 218.738 63.6869 214.452 63.6869 207.002C63.6869 195.597 63.6534 195.248 62.4935 194.627C61.4053 194.045 60.5796 194.708 53.1104 202.165C48.6058 206.661 44.7349 210.341 44.5076 210.341C43.1473 210.341 44.9633 208.085 51.9919 201.043C62.6866 190.33 62.8724 190.748 47.4157 190.748C37.3732 190.748 35.6977 190.629 35.6977 189.909C35.6977 189.189 37.3732 189.069 47.4157 189.069C62.9195 189.069 62.7342 189.534 51.6505 178.432C46.1366 172.909 43.6371 170.039 44.0945 169.756C44.5367 169.483 47.6676 172.217 52.9727 177.509C64.1157 188.626 63.6869 188.793 63.6869 173.33C63.6869 165.91 63.8913 161.64 64.2467 161.64C64.6016 161.64 64.8065 165.831 64.8065 173.096Z"
                            fill="url(#paint0_linear_171_158)"
                            fill-opacity="0.5"
                            stroke="url(#paint1_linear_171_158)"
                            stroke-width="2"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_171_158" x1="151" y1="1" x2="151" y2="218.738" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_171_158" x1="151" y1="1" x2="151" y2="218.738" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <div class="container">
                    <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">our properties</h6>
                        <h4 class="!font-black">FEATURED <span class="text-secondary">LISTINGS</span></h4>
                    </div>
                    <p class="mt-2.5 text-center text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                        discover our fantastic early booking discounts & start planning your journey.
                    </p>
                    <ul class="filters realestate-filter mt-7 flex flex-row gap-5 overflow-auto whitespace-nowrap pb-2.5 sm:gap-[30px]">
                        <li class="filter" :class="{ active: activeTab === 'residentails' }">
                            <button
                                type="button"
                                class="btn rounded-none bg-gray/[0.08] lowercase text-gray hover:bg-primary"
                                @click="activeTab = 'residentails'"
                            >
                                residentails
                            </button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'family' }">
                            <button type="button" class="btn rounded-none bg-gray/[0.08] lowercase text-gray hover:bg-primary" @click="activeTab = 'family'">
                                family
                            </button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'apartments' }">
                            <button
                                type="button"
                                class="btn rounded-none bg-gray/[0.08] lowercase text-gray hover:bg-primary"
                                @click="activeTab = 'apartments'"
                            >
                                apartments
                            </button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'office-space' }">
                            <button
                                type="button"
                                class="btn rounded-none bg-gray/[0.08] lowercase text-gray hover:bg-primary"
                                @click="activeTab = 'office-space'"
                            >
                                office space
                            </button>
                        </li>
                        <li class="filter" :class="{ active: activeTab === 'commercials' }">
                            <button
                                type="button"
                                class="btn rounded-none bg-gray/[0.08] lowercase text-gray hover:bg-primary"
                                @click="activeTab = 'commercials'"
                            >
                                commercials
                            </button>
                        </li>
                    </ul>
                    <div class="projects mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3">
                        <div class="project" :class="activeTab === 'residentails' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties1.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco1</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'residentails' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties2.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'residentails' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties3.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'office-space' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties1.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'apartments' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties1.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'apartments' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties2.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'family' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties3.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div class="project" :class="activeTab === 'commercials' ? 'block' : 'hidden'">
                            <img src="/assets/images/realestate/properties2.png" alt="" />
                            <div class="mt-5 flex items-center justify-between">
                                <button type="button" class="btn rounded-none p-2.5 lowercase text-white">residentials</button>
                                <a href="javascript:" class="duration-200 hover:text-[#FF0000]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.171 3.92759C23.6097 6.49771 23.6097 10.6647 21.171 13.2348L14.1762 20.6065C12.9932 21.8532 11.0068 21.8532 9.82377 20.6065L2.82903 13.2348C0.390326 10.6647 0.390324 6.49771 2.82902 3.92759C5.26772 1.35747 9.22164 1.35747 11.6603 3.92759V3.92759C11.845 4.12218 12.155 4.12218 12.3397 3.92759V3.92759C12.8192 3.42218 13.3574 3.01617 13.9311 2.70953C14.6139 2.3446 15.347 2.12043 16.0917 2.03705C16.5328 1.98765 16.9779 1.98765 17.419 2.03705"
                                            stroke="currentcolor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <h5 class="mt-5 text-lg font-semibold">san francisco</h5>
                            <h3 class="mt-2.5 text-[22px] font-bold leading-7 text-black dark:text-white">new bungalow house nice view</h3>
                            <a href="javascript:" class="group mt-5 flex items-center gap-2.5 text-lg font-bold text-secondary hover:text-primary">
                                <div class="duration-300">view property</div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="duration-300 group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2"
                                >
                                    <path
                                        d="M1 7.5H3.1875M15 7.5L9.75 2.25M15 7.5L9.75 12.75M15 7.5H5.8125"
                                        stroke="currentcolor"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative bg-white py-12 dark:bg-black lg:py-24">
                <span class="absolute bottom-0 hidden max-w-[120px] ltr:right-0 rtl:left-0 sm:block xl:max-w-[250px]">
                    <svg class="h-full w-full" width="300" height="229" viewBox="0 0 300 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M122.411 2.08716L81.1719 30.5425H90.7378L127.421 5.04356L122.411 2.08716Z" fill="#08111F" />
                        <path
                            d="M220.307 30.5257V229.008L86.0305 227.798V29.3331L123.773 3.22941L124.042 3.04463L125.454 2.07037L125.538 2.00317L125.639 2.08716L167.434 30.5257H220.307Z"
                            fill="#47BDFF"
                        />
                        <path
                            d="M220.307 30.5256V229.008L167.484 227.798C167.619 191.599 167.871 52.4299 167.568 33.8684C167.535 31.7183 167.501 30.5424 167.434 30.5256H220.307Z"
                            fill="#B476E5"
                        />
                        <path
                            d="M188.095 64.8266H177.47V49.5071C177.47 46.5675 179.858 44.199 182.783 44.199C185.725 44.199 188.095 46.5843 188.095 49.5071V64.8266Z"
                            fill="#FFD181"
                        />
                        <path
                            d="M210.96 133.731H200.335V118.411C200.335 115.472 202.722 113.103 205.647 113.103C208.589 113.103 210.96 115.489 210.96 118.411V133.731Z"
                            fill="#FFD181"
                        />
                        <g opacity="0.5">
                            <path
                                d="M206.253 44.199C209.195 44.199 211.565 46.5843 211.565 49.5071V64.8266H200.94V49.5071C200.94 46.5675 203.327 44.199 206.253 44.199Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 98.5229H177.555V83.2034C177.555 80.2637 179.942 77.8953 182.867 77.8953C185.809 77.8953 188.18 80.2805 188.18 83.2034V98.5229Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 98.5229H200.335V83.2034C200.335 80.2637 202.722 77.8953 205.647 77.8953C208.589 77.8953 210.96 80.2805 210.96 83.2034V98.5229Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 133.731H177.555V118.411C177.555 115.472 179.942 113.103 182.867 113.103C185.809 113.103 188.18 115.489 188.18 118.411V133.731Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 168.334H177.555V153.015C177.555 150.075 179.942 147.707 182.867 147.707C185.809 147.707 188.18 150.092 188.18 153.015V168.334Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 168.334H200.335V153.015C200.335 150.075 202.722 147.707 205.647 147.707C208.589 147.707 210.96 150.092 210.96 153.015V168.334Z"
                                fill="white"
                            />
                            <path
                                d="M188.18 206.667H177.555V191.347C177.555 188.408 179.942 186.039 182.867 186.039C185.809 186.039 188.18 188.424 188.18 191.347V206.667Z"
                                fill="white"
                            />
                            <path
                                d="M210.96 206.667H200.335V191.347C200.335 188.408 202.722 186.039 205.647 186.039C208.589 186.039 210.96 188.424 210.96 191.347V206.667Z"
                                fill="white"
                            />
                        </g>
                        <g opacity="0.5">
                            <path
                                d="M110.038 62.4078H99.4126V47.0882C99.4126 44.1486 101.8 41.7802 104.725 41.7802C107.667 41.7802 110.038 44.1654 110.038 47.0882V62.4078Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 61.9541H136.315V46.6346C136.315 43.695 138.702 41.3265 141.627 41.3265C144.57 41.3265 146.94 43.7118 146.94 46.6346V61.9541Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 97.011H99.4126V81.6915C99.4126 78.7519 101.8 76.3834 104.725 76.3834C107.667 76.3834 110.038 78.7687 110.038 81.6915V97.011Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 96.5574H136.315V81.2379C136.315 78.2983 138.702 75.9298 141.627 75.9298C144.57 75.9298 146.94 78.3151 146.94 81.2379V96.5574Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 134.789H99.4126V119.47C99.4126 116.53 101.8 114.161 104.725 114.161C107.667 114.161 110.038 116.547 110.038 119.47V134.789Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 134.336H136.315V119.016C136.315 116.076 138.702 113.708 141.627 113.708C144.57 113.708 146.94 116.093 146.94 119.016V134.336Z"
                                fill="white"
                            />
                            <path
                                d="M110.038 168.653H99.4126V153.334C99.4126 150.394 101.8 148.026 104.725 148.026C107.667 148.026 110.038 150.411 110.038 153.334V168.653Z"
                                fill="white"
                            />
                            <path
                                d="M146.94 168.2H136.315V152.88C136.315 149.941 138.702 147.572 141.627 147.572C144.57 147.572 146.94 149.957 146.94 152.88V168.2Z"
                                fill="white"
                            />
                        </g>
                        <path
                            d="M135.693 204.248V228.067H112.61V204.248C112.61 197.965 117.704 192.876 123.975 192.876H124.311C130.582 192.876 135.676 197.965 135.676 204.248H135.693Z"
                            fill="white"
                        />
                        <path d="M122.109 2.00317L166.004 33.8685H226.611L181.724 3.14542L122.109 2.00317Z" fill="#08111F" />
                        <path
                            opacity="0.2"
                            d="M295.561 67.2269L295.561 67.2269L295.557 67.2285C293.716 68.082 292.233 69.5441 291.359 71.3857L291.358 71.3884L290.057 74.1502L288.783 71.3799L288.783 71.3799L288.781 71.3765C287.927 69.5362 286.464 68.0548 284.621 67.1817L284.618 67.1804L281.856 65.8818L284.627 64.61L284.627 64.61L284.63 64.6084C286.472 63.7548 287.954 62.2928 288.828 60.4512L288.83 60.4485L290.13 57.6867L291.404 60.457L291.406 60.4604C292.26 62.3007 293.724 63.7821 295.566 64.6552L295.569 64.6565L298.331 65.9551L295.561 67.2269Z"
                            fill="url(#paint0_linear_79_171)"
                            fill-opacity="0.5"
                            stroke="url(#paint1_linear_79_171)"
                            stroke-width="2"
                        />
                        <path
                            opacity="0.2"
                            d="M256.035 152.778L256.032 152.779C254.191 153.633 252.708 155.095 251.834 156.936L251.833 156.939L250.532 159.701L249.258 156.931L249.258 156.931L249.256 156.927C248.402 155.087 246.938 153.606 245.096 152.732L245.093 152.731L242.331 151.433L245.102 150.161L245.105 150.159C246.946 149.306 248.429 147.844 249.303 146.002L249.304 145.999L250.605 143.238L251.879 146.008L251.881 146.011C252.735 147.851 254.199 149.333 256.041 150.206L256.044 150.207L258.806 151.506L256.035 152.778Z"
                            fill="url(#paint2_linear_79_171)"
                            fill-opacity="0.5"
                            stroke="url(#paint3_linear_79_171)"
                            stroke-width="2"
                        />
                        <path
                            opacity="0.2"
                            d="M15.3734 139.155L15.37 139.156C13.5286 140.01 12.0458 141.472 11.1717 143.314L11.1705 143.316L9.86969 146.078L8.59579 143.308L8.59424 143.304C7.73978 141.464 6.27635 139.983 4.43363 139.11L4.43094 139.108L1.66904 137.81L4.43945 136.538L4.43946 136.538L4.44279 136.536C6.28426 135.683 7.76704 134.221 8.64108 132.379L8.64235 132.376L9.94312 129.615L11.217 132.385L11.2186 132.388C12.073 134.229 13.5365 135.71 15.3792 136.583L15.3819 136.584L18.1438 137.883L15.3734 139.155Z"
                            fill="url(#paint4_linear_79_171)"
                            fill-opacity="0.5"
                            stroke="url(#paint5_linear_79_171)"
                            stroke-width="2"
                        />
                        <path
                            opacity="0.2"
                            d="M210.61 11.2065L210.606 11.2081C208.765 12.0617 207.282 13.5237 206.408 15.3653L206.407 15.368L205.106 18.1298L203.832 15.3595L203.831 15.3561C202.976 13.5159 201.513 12.0344 199.67 11.1613L199.667 11.16L196.905 9.86139L199.676 8.58957L199.676 8.58958L199.679 8.58804C201.521 7.73446 203.003 6.27237 203.877 4.43084L203.879 4.42815L205.179 1.66637L206.453 4.43665L206.453 4.43665L206.455 4.43999C207.309 6.28027 208.773 7.76171 210.616 8.63485L210.618 8.63611L213.38 9.93473L210.61 11.2065Z"
                            fill="url(#paint6_linear_79_171)"
                            fill-opacity="0.5"
                            stroke="url(#paint7_linear_79_171)"
                            stroke-width="2"
                        />
                        <path
                            opacity="0.2"
                            d="M55.6375 75.2562L55.6342 75.2578C53.7927 76.1113 52.3099 77.5734 51.4359 79.415L51.4346 79.4177L50.1339 82.1795L48.8599 79.4092L48.8599 79.4092L48.8584 79.4058C48.0039 77.5655 46.5405 76.0841 44.6978 75.211L44.6951 75.2097L41.9332 73.9111L44.7036 72.6393L44.707 72.6377C46.5484 71.7841 48.0312 70.3221 48.9052 68.4805L48.9065 68.4778L50.2073 65.716L51.4812 68.4863L51.4827 68.4897C52.3372 70.33 53.8006 71.8114 55.6433 72.6845L55.646 72.6858L58.4079 73.9844L55.6375 75.2562Z"
                            fill="url(#paint8_linear_79_171)"
                            fill-opacity="0.5"
                            stroke="url(#paint9_linear_79_171)"
                            stroke-width="2"
                        />
                        <defs>
                            <linearGradient id="paint0_linear_79_171" x1="290.094" y1="56.0204" x2="290.094" y2="75.8165" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_79_171" x1="290.094" y1="56.0204" x2="290.094" y2="75.8165" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_79_171" x1="250.569" y1="141.571" x2="250.569" y2="161.367" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_79_171" x1="250.569" y1="141.571" x2="250.569" y2="161.367" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_79_171" x1="9.9064" y1="127.948" x2="9.9064" y2="147.744" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_79_171" x1="205.143" y1="0" x2="205.143" y2="19.7961" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_79_171" x1="50.1706" y1="64.0497" x2="50.1706" y2="83.8458" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_79_171" x1="50.1706" y1="64.0497" x2="50.1706" y2="83.8458" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7780A1" />
                                <stop offset="1" stop-color="#7780A1" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <div class="container">
                    <div class="heading mb-0 w-full text-center lg:max-w-[478px] ltr:lg:text-left rtl:lg:text-right">
                        <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">why choose</h6>
                        <h4 class="!font-black">WHY OUR CUSTOMER <span class="text-secondary">CHOOSE US?</span></h4>
                    </div>
                    <p class="mt-2.5 w-full text-center text-lg font-medium lg:max-w-[478px] ltr:lg:text-left rtl:lg:text-right">
                        lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div class="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                        <div class="flex gap-5">
                            <div>
                                <span class="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(204,102,1,0.06)]">
                                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9755 7.02706C12.4315 6.20905 12.6595 5.80005 13.0004 5.80005C13.3413 5.80005 13.5693 6.20905 14.0253 7.02706L14.1432 7.23869C14.2728 7.47115 14.3376 7.58737 14.4386 7.66406C14.5396 7.74075 14.6654 7.76921 14.9171 7.82615L15.1462 7.87798C16.0316 8.07833 16.4744 8.1785 16.5797 8.51723C16.6851 8.85596 16.3832 9.20891 15.7796 9.91482L15.6234 10.0974C15.4518 10.298 15.3661 10.3983 15.3275 10.5224C15.2889 10.6465 15.3019 10.7803 15.3278 11.048L15.3514 11.2916C15.4427 12.2335 15.4883 12.7044 15.2125 12.9137C14.9368 13.1231 14.5222 12.9322 13.6931 12.5505L13.4787 12.4517C13.2431 12.3432 13.1253 12.289 13.0004 12.289C12.8755 12.289 12.7577 12.3432 12.5221 12.4517L12.3076 12.5505C11.4786 12.9322 11.064 13.1231 10.7882 12.9137C10.5125 12.7044 10.5581 12.2335 10.6494 11.2916L10.673 11.048C10.6989 10.7803 10.7119 10.6465 10.6733 10.5224C10.6347 10.3983 10.5489 10.298 10.3774 10.0974L10.2212 9.91482C9.61756 9.20891 9.31573 8.85596 9.42106 8.51723C9.5264 8.1785 9.96914 8.07833 10.8546 7.87798L11.0837 7.82615C11.3353 7.76921 11.4612 7.74075 11.5622 7.66406C11.6632 7.58737 11.728 7.47115 11.8576 7.23869L11.9755 7.02706Z"
                                            stroke="#CC6601"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M13 17.8814L8.47425 22.5674C7.82611 23.2385 7.50204 23.574 7.2276 23.6901C6.60222 23.9547 5.9085 23.7283 5.57953 23.1522C5.43516 22.8994 5.39018 22.4434 5.3002 21.5314C5.2494 21.0164 5.224 20.759 5.1469 20.5433C4.97429 20.0605 4.61159 19.685 4.14533 19.5063C3.93705 19.4264 3.68839 19.4001 3.19107 19.3475C2.31024 19.2544 1.86983 19.2078 1.62566 19.0583C1.06926 18.7177 0.850571 17.9994 1.10611 17.3519C1.21826 17.0677 1.54233 16.7322 2.19047 16.0611L5.1469 13"
                                            stroke="#CC6601"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M13 17.8814L17.5257 22.5674C18.1739 23.2385 18.498 23.574 18.7724 23.6901C19.3978 23.9547 20.0915 23.7283 20.4205 23.1522C20.5648 22.8994 20.6098 22.4434 20.6998 21.5314C20.7506 21.0164 20.776 20.759 20.8531 20.5433C21.0257 20.0605 21.3884 19.685 21.8547 19.5063C22.0629 19.4264 22.3116 19.4001 22.8089 19.3475C23.6898 19.2544 24.1302 19.2078 24.3743 19.0583C24.9307 18.7177 25.1494 17.9994 24.8939 17.3519C24.7817 17.0677 24.4577 16.7322 23.8095 16.0611L20.8531 13"
                                            stroke="#CC6601"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M5.19961 6.2763C4.81255 7.2419 4.59961 8.29608 4.59961 9.4C4.59961 14.0392 8.36042 17.8 12.9996 17.8C17.6388 17.8 21.3996 14.0392 21.3996 9.4C21.3996 4.76081 17.6388 1 12.9996 1C11.8957 1 10.8415 1.21295 9.87591 1.6"
                                            stroke="#CC6601"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 class="text-lg font-bold dark:text-white">quality products</h5>
                                <p class="mt-2 text-sm font-semibold">lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div>
                                <span class="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(52,102,255,0.06)]">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.8 5.8C17.8 3.53726 17.8 2.40589 17.097 1.70294C16.3941 1 15.2627 1 13 1C10.7372 1 9.60584 1 8.90289 1.70294C8.19995 2.40589 8.19995 3.53726 8.19995 5.8"
                                            stroke="#3466FF"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M10.6001 16.6H5.8001C5.23441 16.6 4.95157 16.6 4.77583 16.7757C4.6001 16.9514 4.6001 17.2343 4.6001 17.8V19C4.6001 19.5657 4.6001 19.8485 4.77583 20.0242C4.95157 20.2 5.23441 20.2 5.8001 20.2H10.6001C11.1658 20.2 11.4486 20.2 11.6244 20.0242C11.8001 19.8485 11.8001 19.5657 11.8001 19V17.8C11.8001 17.2343 11.8001 16.9514 11.6244 16.7757C11.4486 16.6 11.1658 16.6 10.6001 16.6Z"
                                            stroke="#3466FF"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                            stroke-linejoin="round"
                                        />
                                        <path d="M5.80005 6.40002V16.6M5.80005 24.4V20.8" stroke="#3466FF" stroke-width="2" stroke-linecap="square" />
                                        <path d="M20.2 6.40002V10.6M20.2 24.4V15.4" stroke="#3466FF" stroke-width="2" stroke-linecap="square" />
                                        <path
                                            d="M1 15.4C1 10.8746 1 8.61182 2.40589 7.20594C3.81178 5.80005 6.07452 5.80005 10.6 5.80005H15.4C19.9255 5.80005 22.1882 5.80005 23.5941 7.20594C24.3779 7.98975 24.7248 9.03991 24.8782 10.6M25 15.4C25 19.9255 25 22.1883 23.5941 23.5942C22.1882 25 19.9255 25 15.4 25H10.6C6.07453 25 3.81177 25 2.40589 23.5942C1.62207 22.8103 1.27525 21.7602 1.12179 20.2"
                                            stroke="#3466FF"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 class="text-lg font-bold dark:text-white">professional services</h5>
                                <p class="mt-2 text-sm font-semibold">lorem ipsum dolor amet consectetur sed eiusmod tempor.</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div>
                                <span class="flex h-[50px] w-[50px] items-center justify-center bg-[rgba(0,102,0,0.06)]">
                                    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25 10.6C25 6.07452 25 3.81177 23.5941 2.40589C22.1882 1 19.9255 1 15.4 1H10.6C6.07452 1 3.81177 1 2.40589 2.40589C1 3.81177 1 6.07452 1 10.6C1 15.1255 1 17.3882 2.40589 18.7941C3.81177 20.2 6.07452 20.2 10.6 20.2H15.4C19.9255 20.2 22.1882 20.2 23.5941 18.7941C24.3779 18.0103 24.7247 16.9601 24.8782 15.4"
                                            stroke="#006600"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path d="M10.6 15.4H5.80005" stroke="#006600" stroke-width="2" stroke-linecap="square" />
                                        <path d="M15.4001 15.4H13.6001" stroke="#006600" stroke-width="2" stroke-linecap="square" />
                                        <path d="M1 8.19995L7 8.19995M25 8.19995L11.8 8.19995" stroke="#006600" stroke-width="2" stroke-linecap="square" />
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h5 class="text-lg font-bold dark:text-white">make payment</h5>
                                <p class="mt-2 text-sm font-semibold">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="relative py-12 lg:py-24">
                        <span
                            class="absolute -bottom-3 hidden max-w-[320px] ltr:-left-44 rtl:-right-44 rtl:rotate-y-180 sm:block lg:max-w-full ltr:lg:-left-[360px] rtl:lg:-right-[360px]"
                        >
                            <img src="/assets/images/realestate/testimonials.svg" alt="" class="dark:hidden" />
                            <img src="/assets/images/realestate/testimonials-dark.svg" alt="" class="hidden dark:block" />
                        </span>
                        <div class="flex flex-col items-center justify-between gap-[73px] lg:flex-row">
                            <div>
                                <div class="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                                    <h6 class="inline-block bg-secondary/10 px-2.5 py-2 !text-secondary">testimonials</h6>
                                    <h4 class="!font-black">WHAT OUR CUSTOMERS ARE <span class="text-secondary">SAYING US?</span></h4>
                                </div>
                                <p class="mt-2.5 text-center text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.
                                </p>
                                <div class="mt-7 flex justify-center gap-16 lg:justify-start">
                                    <div>
                                        <h2 class="text-3xl font-black text-black dark:text-white">13M <span class="text-primary">+</span></h2>
                                        <p class="mt-1 text-sm font-bold">happy people</p>
                                    </div>
                                    <div>
                                        <h2 class="text-3xl font-black text-black dark:text-white">4.88</h2>
                                        <p class="mt-1 text-sm font-bold">overall rating</p>
                                        <span class="mt-5">
                                            <svg width="85" height="12" viewBox="0 0 85 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.7919 2.04503C5.55189 0.681675 5.93188 0 6.5 0C7.06812 0 7.44811 0.681675 8.2081 2.04502L8.40472 2.39774C8.62069 2.78516 8.72867 2.97887 8.89703 3.10668C9.0654 3.2345 9.27509 3.28194 9.69447 3.37683L10.0763 3.46322C11.5521 3.79713 12.29 3.96409 12.4655 4.52864C12.6411 5.09319 12.1381 5.68144 11.1319 6.85795L10.8716 7.16233C10.5857 7.49666 10.4428 7.66383 10.3785 7.87063C10.3142 8.07743 10.3358 8.30047 10.379 8.74653L10.4184 9.15264C10.5705 10.7224 10.6465 11.5072 10.1869 11.8561C9.72729 12.205 9.0364 11.8869 7.6546 11.2507L7.29711 11.0861C6.90445 10.9053 6.70811 10.8149 6.5 10.8149C6.29189 10.8149 6.09556 10.9053 5.70289 11.0861L5.3454 11.2507C3.96361 11.8869 3.27271 12.205 2.81309 11.8561C2.35347 11.5072 2.42953 10.7224 2.58164 9.15264L2.62099 8.74653C2.66422 8.30047 2.68583 8.07743 2.62152 7.87063C2.55721 7.66383 2.41426 7.49666 2.12835 7.16233L1.86806 6.85796C0.861949 5.68144 0.358895 5.09319 0.534453 4.52864C0.71001 3.96409 1.44791 3.79713 2.92372 3.46322L3.30553 3.37683C3.72491 3.28194 3.9346 3.2345 4.10297 3.10668C4.27133 2.97887 4.37932 2.78516 4.59528 2.39774L4.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M22.7919 2.04503C23.5519 0.681675 23.9319 0 24.5 0C25.0681 0 25.4481 0.681675 26.2081 2.04502L26.4047 2.39774C26.6207 2.78516 26.7287 2.97887 26.897 3.10668C27.0654 3.2345 27.2751 3.28194 27.6945 3.37683L28.0763 3.46322C29.5521 3.79713 30.29 3.96409 30.4655 4.52864C30.6411 5.09319 30.1381 5.68144 29.1319 6.85795L28.8716 7.16233C28.5857 7.49666 28.4428 7.66383 28.3785 7.87063C28.3142 8.07743 28.3358 8.30047 28.379 8.74653L28.4184 9.15264C28.5705 10.7224 28.6465 11.5072 28.1869 11.8561C27.7273 12.205 27.0364 11.8869 25.6546 11.2507L25.2971 11.0861C24.9044 10.9053 24.7081 10.8149 24.5 10.8149C24.2919 10.8149 24.0956 10.9053 23.7029 11.0861L23.3454 11.2507C21.9636 11.8869 21.2727 12.205 20.8131 11.8561C20.3535 11.5072 20.4295 10.7224 20.5816 9.15264L20.621 8.74653C20.6642 8.30047 20.6858 8.07743 20.6215 7.87063C20.5572 7.66383 20.4143 7.49666 20.1284 7.16233L19.8681 6.85796C18.8619 5.68144 18.3589 5.09319 18.5345 4.52864C18.71 3.96409 19.4479 3.79713 20.9237 3.46322L21.3055 3.37683C21.7249 3.28194 21.9346 3.2345 22.103 3.10668C22.2713 2.97887 22.3793 2.78516 22.5953 2.39774L22.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M40.7919 2.04503C41.5519 0.681675 41.9319 0 42.5 0C43.0681 0 43.4481 0.681675 44.2081 2.04502L44.4047 2.39774C44.6207 2.78516 44.7287 2.97887 44.897 3.10668C45.0654 3.2345 45.2751 3.28194 45.6945 3.37683L46.0763 3.46322C47.5521 3.79713 48.29 3.96409 48.4655 4.52864C48.6411 5.09319 48.1381 5.68144 47.1319 6.85795L46.8716 7.16233C46.5857 7.49666 46.4428 7.66383 46.3785 7.87063C46.3142 8.07743 46.3358 8.30047 46.379 8.74653L46.4184 9.15264C46.5705 10.7224 46.6465 11.5072 46.1869 11.8561C45.7273 12.205 45.0364 11.8869 43.6546 11.2507L43.2971 11.0861C42.9044 10.9053 42.7081 10.8149 42.5 10.8149C42.2919 10.8149 42.0956 10.9053 41.7029 11.0861L41.3454 11.2507C39.9636 11.8869 39.2727 12.205 38.8131 11.8561C38.3535 11.5072 38.4295 10.7224 38.5816 9.15264L38.621 8.74653C38.6642 8.30047 38.6858 8.07743 38.6215 7.87063C38.5572 7.66383 38.4143 7.49666 38.1284 7.16233L37.8681 6.85796C36.8619 5.68144 36.3589 5.09319 36.5345 4.52864C36.71 3.96409 37.4479 3.79713 38.9237 3.46322L39.3055 3.37683C39.7249 3.28194 39.9346 3.2345 40.103 3.10668C40.2713 2.97887 40.3793 2.78516 40.5953 2.39774L40.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M58.7919 2.04503C59.5519 0.681675 59.9319 0 60.5 0C61.0681 0 61.4481 0.681675 62.2081 2.04502L62.4047 2.39774C62.6207 2.78516 62.7287 2.97887 62.897 3.10668C63.0654 3.2345 63.2751 3.28194 63.6945 3.37683L64.0763 3.46322C65.5521 3.79713 66.29 3.96409 66.4655 4.52864C66.6411 5.09319 66.1381 5.68144 65.1319 6.85795L64.8716 7.16233C64.5857 7.49666 64.4428 7.66383 64.3785 7.87063C64.3142 8.07743 64.3358 8.30047 64.379 8.74653L64.4184 9.15264C64.5705 10.7224 64.6465 11.5072 64.1869 11.8561C63.7273 12.205 63.0364 11.8869 61.6546 11.2507L61.2971 11.0861C60.9044 10.9053 60.7081 10.8149 60.5 10.8149C60.2919 10.8149 60.0956 10.9053 59.7029 11.0861L59.3454 11.2507C57.9636 11.8869 57.2727 12.205 56.8131 11.8561C56.3535 11.5072 56.4295 10.7224 56.5816 9.15264L56.621 8.74653C56.6642 8.30047 56.6858 8.07743 56.6215 7.87063C56.5572 7.66383 56.4143 7.49666 56.1284 7.16233L55.8681 6.85796C54.8619 5.68144 54.3589 5.09319 54.5345 4.52864C54.71 3.96409 55.4479 3.79713 56.9237 3.46322L57.3055 3.37683C57.7249 3.28194 57.9346 3.2345 58.103 3.10668C58.2713 2.97887 58.3793 2.78516 58.5953 2.39774L58.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    opacity="0.3"
                                                    d="M76.7919 2.04503C77.5519 0.681675 77.9319 0 78.5 0C79.0681 0 79.4481 0.681675 80.2081 2.04502L80.4047 2.39774C80.6207 2.78516 80.7287 2.97887 80.897 3.10668C81.0654 3.2345 81.2751 3.28194 81.6945 3.37683L82.0763 3.46322C83.5521 3.79713 84.29 3.96409 84.4655 4.52864C84.6411 5.09319 84.1381 5.68144 83.1319 6.85795L82.8716 7.16233C82.5857 7.49666 82.4428 7.66383 82.3785 7.87063C82.3142 8.07743 82.3358 8.30047 82.379 8.74653L82.4184 9.15264C82.5705 10.7224 82.6465 11.5072 82.1869 11.8561C81.7273 12.205 81.0364 11.8869 79.6546 11.2507L79.2971 11.0861C78.9044 10.9053 78.7081 10.8149 78.5 10.8149C78.2919 10.8149 78.0956 10.9053 77.7029 11.0861L77.3454 11.2507C75.9636 11.8869 75.2727 12.205 74.8131 11.8561C74.3535 11.5072 74.4295 10.7224 74.5816 9.15264L74.621 8.74653C74.6642 8.30047 74.6858 8.07743 74.6215 7.87063C74.5572 7.66383 74.4143 7.49666 74.1284 7.16233L73.8681 6.85796C72.8619 5.68144 72.3589 5.09319 72.5345 4.52864C72.71 3.96409 73.4479 3.79713 74.9237 3.46322L75.3055 3.37683C75.7249 3.28194 75.9346 3.2345 76.103 3.10668C76.2713 2.97887 76.3793 2.78516 76.5953 2.39774L76.7919 2.04503Z"
                                                    fill="#7780A1"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative mx-auto w-full max-w-[445px] bg-white drop-shadow-[6px_6px_0px_rgba(119,128,161,0.3)] dark:bg-black">
                                <client-slider></client-slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section
            class="relative overflow-hidden bg-black bg-[url(/assets/images/realestate/newsletter_img.png)] bg-cover bg-center bg-no-repeat py-14 lg:py-24"
        >
            <div class="container">
                <div class="md:flex">
                    <div
                        class="relative z-10 mb-8 text-center md:mb-0 ltr:md:text-left rtl:md:text-right"
                        :data-aos="store.direction === 'rtl' ? 'fade-left' : 'fade-right'"
                        data-aos-duration="1000"
                    >
                        <span class="absolute -left-[50px] -top-[42px]">
                            <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.2">
                                    <path d="M17.3252 38.325H57.3252" stroke="url(#paint0_linear_963_22629)" stroke-width="2" stroke-dasharray="6 6" />
                                    <path d="M37.3252 18.325V58.325" stroke="url(#paint1_linear_963_22629)" stroke-width="2" stroke-dasharray="6 6" />
                                    <path d="M5.5752 22.65L18.0752 1" stroke="url(#paint2_linear_963_22629)" stroke-width="2" stroke-dasharray="6 6" />
                                    <path d="M1 5.57495L22.65 18.075" stroke="url(#paint3_linear_963_22629)" stroke-width="2" stroke-dasharray="6 6" />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_963_22629"
                                        x1="37.3252"
                                        y1="38.325"
                                        x2="37.3252"
                                        y2="39.325"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_963_22629"
                                        x1="37.8252"
                                        y1="18.325"
                                        x2="37.8252"
                                        y2="58.325"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_963_22629" x1="11.8252" y1="1" x2="11.8252" y2="22.65" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_963_22629"
                                        x1="11.825"
                                        y1="5.57495"
                                        x2="11.825"
                                        y2="18.075"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <div class="relative">
                            <h2 class="relative z-10 text-4xl font-black text-white md:text-6xl">EMAIL NEWSLETTER</h2>
                            <h2 class="text-stroke absolute top-1.5 left-1.5 whitespace-nowrap text-4xl font-black text-transparent md:text-6xl">
                                EMAIL NEWSLETTER
                            </h2>
                        </div>
                        <span class="absolute right-20 -top-5">
                            <svg width="72" height="36" viewBox="0 0 72 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.2"
                                    d="M66 36C66 19.4315 52.5685 6 36 6C19.4315 6 6 19.4315 6 36"
                                    stroke="url(#paint0_linear_963_22675)"
                                    stroke-width="11"
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_963_22675" x1="36" y1="6" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <p class="text-2xl font-semibold">get updates & more</p>
                        <div class="mt-10 flex justify-between bg-white py-4 px-5 drop-shadow-[6px_6px_0px_rgba(119,128,161,0.3)] md:mt-16 lg:max-w-[445px]">
                            <div class="flex items-center gap-2.5">
                                <div>
                                    <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M24 10.4091C24 14.8446 24 17.0623 22.6527 18.4403C21.3054 19.8182 19.1369 19.8182 14.8 19.8182H10.2C5.86308 19.8182 3.69462 19.8182 2.34731 18.4403C1 17.0623 1 14.8446 1 10.4091C1 5.9736 1 3.75586 2.34731 2.37793C3.69462 1 5.86308 1 10.2 1H14.8C19.1369 1 21.3054 1 22.6527 2.37793C23.4038 3.14616 23.7362 4.17543 23.8833 5.70455"
                                            stroke="#08111F"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                        <path
                                            d="M19.3999 5.70508L16.9172 7.82104C14.8051 9.62115 13.749 10.5212 12.4999 10.5212C11.7532 10.5212 11.0755 10.1996 10.1999 9.55627M5.59991 5.70508L6.63491 6.58718L7.66991 7.46928"
                                            stroke="#08111F"
                                            stroke-width="2"
                                            stroke-linecap="square"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <input type="search" placeholder="your email" class="h-14 border-0 text-black outline-0" />
                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn rounded-none bg-secondary text-white">subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute -bottom-6 hidden w-full max-w-[430px] flex-1 ltr:-right-[15%] rtl:-left-[15%] sm:border-y-black md:block lg:-bottom-7 lg:max-w-[480px] ltr:lg:right-0 rtl:lg:left-0 xl:-bottom-8 xl:max-w-[577px] ltr:xl:right-40 rtl:xl:left-40"
                        :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                        data-aos-duration="1000"
                    >
                        <img src="/assets/images/realestate/newsletter.svg" class="rtl:rotate-y-180" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import CountUp from 'vue-countup-v3';
    import LogoSlider from '@/components/LogoSlider.vue';
    import ClientSlider from '@/components/ClientSlider.vue';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    const activeTab = ref('residentails');
</script>
