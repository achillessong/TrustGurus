<template>
    <div>
        <section class="relative">
            <div class="h-[750px] lg:h-[828px]">
                <img src="/assets/images/hotel-resort/hotel-banner.jpg" class="h-full w-full object-cover" alt="" />
            </div>
            <div
                class="absolute inset-0 z-[1] opacity-70"
                style="background: linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)"
            ></div>
            <div class="absolute inset-x-0 top-1/3 z-[1] -translate-y-1/2 text-white sm:top-1/2">
                <div class="container">
                    <div class="max-w-[624px] text-center ltr:md:text-left rtl:md:text-right">
                        <h2 class="text-4xl font-black sm:text-5xl md:text-[70px] md:leading-[88px]">
                            <span class="text-secondary">Word</span> Best Resort In Wild <span class="text-primary">Nature</span>
                        </h2>
                        <p class="mt-4 text-lg font-semibold">
                            Enjoying the beach and jungle greenry has never been so easy. In our resort, you'll get our great service, friendly staff and great
                            seaside.
                        </p>
                        <button type="button" class="btn mt-8 bg-white py-[19px] px-8 text-black hover:bg-black hover:text-white md:mt-[60px]">BOOK Now</button>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0 z-[1] bg-black/50">
                <div class="container">
                    <div class="grid grid-cols-2 gap-4 py-8 sm:grid-cols-4 xl:grid-cols-5" data-aos="fade-up" data-aos-duration="1000">
                        <div class="relative">
                            <input
                                type="date"
                                placeholder="Check in"
                                class="h-14 w-full rounded-[20px] border-2 border-white bg-transparent py-[18px] px-4 font-semibold text-white outline-none placeholder:text-white"
                            />
                        </div>
                        <div class="relative">
                            <input
                                type="date"
                                placeholder="Check out"
                                class="h-14 w-full rounded-[20px] border-2 border-white bg-transparent py-[18px] px-4 font-semibold text-white outline-none placeholder:text-white"
                            />
                        </div>
                        <div class="relative">
                            <select
                                class="h-14 w-full appearance-none rounded-[20px] border-2 border-white bg-transparent py-3 font-semibold text-white outline-none ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10"
                            >
                                <option class="text-black">Adult</option>
                                <option class="text-black">1</option>
                                <option class="text-black">2</option>
                                <option class="text-black">3</option>
                                <option class="text-black">4</option>
                            </select>
                            <span class="absolute top-1/2 -translate-y-1/2 ltr:right-2.5 rtl:left-2.5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="relative">
                            <select
                                class="h-14 w-full appearance-none rounded-[20px] border-2 border-white bg-transparent py-3 font-semibold text-white outline-none ltr:pl-4 ltr:pr-10 rtl:pr-4 rtl:pl-10"
                            >
                                <option class="text-black">Children</option>
                                <option class="text-black">1</option>
                                <option class="text-black">2</option>
                                <option class="text-black">3</option>
                                <option class="text-black">4</option>
                            </select>
                            <span class="absolute top-1/2 -translate-y-1/2 ltr:right-2.5 rtl:left-2.5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 15L10.25 13.5M5 9L7.33333 11"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="col-span-2 mx-auto sm:mx-0 xl:col-span-1">
                            <button type="button" class="btn bg-secondary py-[18px] text-white">Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-12 lg:py-24">
            <img src="/assets/images/hotel-resort/services1.svg" class="absolute bottom-0 ltr:left-0 rtl:right-0 rtl:rotate-y-180" alt="" />
            <img src="/assets/images/hotel-resort/services2.svg" class="absolute bottom-0 ltr:right-0 rtl:left-0 rtl:rotate-y-180" alt="" />
            <div class="container relative">
                <div class="heading text-center">
                    <h4 class="!text-primary">Facilities & Services</h4>
                    <p class="mt-2.5 text-base font-semibold">With our service you may enjoy the finest life in our resort.</p>
                </div>
                <div class="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in" data-aos-duration="1000">
                    <div
                        class="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20"
                    >
                        <span class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary/10 group-hover:bg-black">
                            <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5557 24.0002H17.5777" stroke="#B476E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M12.3706 18.8155C13.7458 17.4408 15.6107 16.6685 17.5552 16.6685C19.4997 16.6685 21.3646 17.4408 22.7397 18.8155"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.18481 13.6292C8.54672 12.2672 10.1636 11.1868 11.943 10.4497C13.7225 9.71263 15.6297 9.33325 17.5558 9.33325C19.4819 9.33325 21.3891 9.71263 23.1685 10.4497C24.948 11.1868 26.5648 12.2672 27.9267 13.6292"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2 8.4445C10.5908 -0.148167 24.5202 -0.148167 33.1661 8.4445"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h3 class="mt-5 text-xl font-bold text-black dark:text-white">High Speed Wifi</h3>
                        <p class="mt-2.5 text-base font-medium leading-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.</p>
                    </div>
                    <div
                        class="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20"
                    >
                        <span class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary/10 group-hover:bg-black">
                            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.76865 23.9999C10.6379 23.9999 12.1533 22.4846 12.1533 20.6153C12.1533 18.7461 10.6379 17.2307 8.76865 17.2307C6.89938 17.2307 5.38403 18.7461 5.38403 20.6153C5.38403 22.4846 6.89938 23.9999 8.76865 23.9999Z"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25.692 23.9999C27.5613 23.9999 29.0766 22.4846 29.0766 20.6153C29.0766 18.7461 27.5613 17.2307 25.692 17.2307C23.8227 17.2307 22.3074 18.7461 22.3074 20.6153C22.3074 22.4846 23.8227 23.9999 25.692 23.9999Z"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5.38461 20.6154H2V10.4615M2 10.4615L5.38461 2H20.6154L27.3846 10.4615M2 10.4615H27.3846M27.3846 10.4615H29.0769C29.9746 10.4615 30.8354 10.8181 31.4702 11.4529C32.1049 12.0876 32.4615 12.9485 32.4615 13.8461V20.6154H29.0769M22.3077 20.6154H12.1538M17.2308 10.4615V2"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h3 class="mt-5 text-xl font-bold text-black dark:text-white">Pick & Drop Facility</h3>
                        <p class="mt-2.5 text-base font-medium leading-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.</p>
                    </div>
                    <div
                        class="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20"
                    >
                        <span class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary/10 group-hover:bg-black">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M22.7059 7.17651H4.58824C3.15879 7.17651 2 8.33531 2 9.76475V21.4118C2 22.8413 3.15879 24.0001 4.58824 24.0001H22.7059C24.1353 24.0001 25.2941 22.8413 25.2941 21.4118V9.76475C25.2941 8.33531 24.1353 7.17651 22.7059 7.17651Z"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M18.8232 2L13.6467 7.17648L8.47021 2"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M17.5293 7.17651V24.0001" stroke="#B476E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.4116 17.5293V17.5428" stroke="#B476E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.4116 13.647V13.6605" stroke="#B476E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <h3 class="mt-5 text-xl font-bold text-black dark:text-white">Smart TV</h3>
                        <p class="mt-2.5 text-base font-medium leading-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.</p>
                    </div>
                    <div
                        class="group rounded-2xl border-2 border-dashed border-gray-dark/20 bg-white p-[30px] pl-5 duration-200 hover:border-secondary hover:bg-secondary/20 dark:border-white/20 dark:bg-gray-dark dark:hover:bg-secondary/20"
                    >
                        <span class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary/10 group-hover:bg-black">
                            <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.1097 5.55525C26.0914 5.55525 26.8873 4.75938 26.8873 3.77763C26.8873 2.79587 26.0914 2 25.1097 2C24.1279 2 23.332 2.79587 23.332 3.77763C23.332 4.75938 24.1279 5.55525 25.1097 5.55525Z"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M7.33203 7.33309L14.4425 3.77783L20.6642 9.11071L17.9978 12.666"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M2 17.5549C2.55336 17.83 3.15989 17.9817 3.77763 17.9993C4.47001 18.0138 5.15551 17.8595 5.77492 17.5498C6.39434 17.2401 6.92906 16.7843 7.33288 16.2217C7.7367 15.6591 8.27142 15.2032 8.89084 14.8935C9.51025 14.5838 10.1958 14.4295 10.8881 14.4441C11.5805 14.4295 12.266 14.5838 12.8854 14.8935C13.5049 15.2032 14.0396 15.6591 14.4434 16.2217C14.8472 16.7843 15.3819 17.2401 16.0013 17.5498C16.6208 17.8595 17.3063 18.0138 17.9986 17.9993C18.691 18.0138 19.3765 17.8595 19.9959 17.5498C20.6154 17.2401 21.1501 16.7843 21.5539 16.2217C21.9577 15.6591 22.4924 15.2032 23.1118 14.8935C23.7313 14.5838 24.4168 14.4295 25.1091 14.4441C25.8015 14.4295 26.487 14.5838 27.1064 14.8935C27.7259 15.2032 28.2606 15.6591 28.6644 16.2217C29.0682 16.7843 29.6029 17.2401 30.2224 17.5498C30.8418 17.8595 31.5273 18.0138 32.2197 17.9993C32.8374 17.9817 33.4439 17.83 33.9973 17.5549"
                                    stroke="#B476E5"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h3 class="mt-5 text-xl font-bold text-black dark:text-white">Swimming Pool</h3>
                        <p class="mt-2.5 text-base font-medium leading-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam.</p>
                    </div>
                </div>
                <div class="text-center">
                    <router-link to="/services" class="btn mt-7 bg-secondary py-[18px] px-8 text-white">More Services</router-link>
                </div>
            </div>
        </section>

        <section
            class="relative bg-[url(/assets/images/hotel-resort/counter-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat after:absolute after:inset-0 after:bg-black/90"
        >
            <div class="container">
                <div
                    class="relative z-[1] grid grid-cols-2 gap-5 py-12 text-center sm:gap-7 md:grid-cols-4 lg:py-24"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div class="rounded-2xl bg-white/25 p-[5px]">
                        <div class="rounded-2xl bg-white py-10 dark:bg-black">
                            <count-up
                                class="text-[34px] font-black leading-[42px] text-gray"
                                :startVal="0"
                                :end-val="250"
                                :duration="10"
                                :options="{ suffix: '+' }"
                            >
                            </count-up>
                            <p class="text-base font-bold text-black dark:text-white">Booking Month</p>
                        </div>
                    </div>
                    <div class="rounded-2xl bg-white/25 p-[5px]">
                        <div class="rounded-2xl bg-white py-10 dark:bg-black">
                            <count-up
                                class="text-[34px] font-black leading-[42px] text-gray"
                                :startVal="0"
                                :end-val="30"
                                :duration="10"
                                :options="{ suffix: '+' }"
                            >
                            </count-up>
                            <p class="text-base font-bold text-black dark:text-white">Visitors daily</p>
                        </div>
                    </div>
                    <div class="rounded-2xl bg-white/25 p-[5px]">
                        <div class="rounded-2xl bg-white py-10 dark:bg-black">
                            <count-up
                                class="text-[34px] font-black leading-[42px] text-gray"
                                :startVal="0"
                                :end-val="98"
                                :duration="10"
                                :options="{ suffix: '+' }"
                            >
                            </count-up>
                            <p class="text-base font-bold text-black dark:text-white">Positive feedback</p>
                        </div>
                    </div>
                    <div class="rounded-2xl bg-white/25 p-[5px]">
                        <div class="rounded-2xl bg-white py-10 dark:bg-black">
                            <count-up
                                class="text-[34px] font-black leading-[42px] text-gray"
                                :startVal="0"
                                :end-val="20"
                                :duration="10"
                                :options="{ suffix: '+' }"
                            >
                            </count-up>
                            <p class="text-base font-bold text-black dark:text-white">Awards & honors</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 lg:py-24">
            <div class="container">
                <div class="flex flex-col items-center justify-between sm:flex-row">
                    <div class="heading mb-8 text-center ltr:sm:text-left rtl:sm:text-right">
                        <h6>Destinations</h6>
                        <h4>NEAR NICE PLACES</h4>
                    </div>
                    <div>
                        <button type="button" class="btn mb-5 text-white sm:mb-0">View all</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-y-12 gap-x-[30px] text-center sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place1.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <div class="absolute inset-5 bottom-auto z-[1] flex items-center justify-between">
                                <span class="h-6 rounded-md bg-secondary px-2 text-[13px] leading-6 text-white hover:bg-primary"> Recommend </span>
                                <p class="rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 189.99 USD</p>
                            </div>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">05 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">Paris Rail Day Trip</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place2.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <div class="absolute inset-5 bottom-auto z-[1] flex items-center justify-between">
                                <span class="h-6 rounded-md bg-secondary px-2 text-[13px] leading-6 text-white hover:bg-primary"> Recommend </span>
                                <p class="rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 160.99 USD</p>
                            </div>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">05 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">Thames Hop-On Hop-Off</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place3.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <p class="absolute top-5 right-5 z-[1] rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 160.99 USD</p>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">08 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">Thames Hop-On Hop-Off</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place4.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <p class="absolute top-5 right-5 z-[1] rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 102.99 USD</p>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">03 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">London Eye Ticket with Skip</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place5.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <div class="absolute inset-5 bottom-auto z-[1] flex items-center justify-between">
                                <span class="h-6 rounded-md bg-secondary px-2 text-[13px] leading-6 text-white hover:bg-primary"> Recommend </span>
                                <p class="rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 190.99 USD</p>
                            </div>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">10 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">Warner Bros. Studio Tour</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                    <div class="group">
                        <div class="relative overflow-hidden rounded-[20px]">
                            <div
                                class="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-[#08111F] opacity-0 transition duration-500 group-hover:inset-y-0 group-hover:opacity-70"
                            ></div>
                            <img src="/assets/images/hotel-resort/place6.jpg" class="scale-100 transition duration-500 group-hover:scale-110" alt="" />
                            <p class="absolute top-5 right-5 z-[1] rounded-full bg-white py-2 px-4 text-base font-bold text-black">$ 160.99 USD</p>
                            <div class="item-center absolute bottom-5 right-5 z-[1] flex gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1110_12876)">
                                        <path
                                            d="M12.0833 5.41669L14.5833 3.00002C14.9038 2.67955 15.3385 2.49951 15.7917 2.49951C16.2449 2.49951 16.6795 2.67955 17 3.00002C17.3205 3.32049 17.5005 3.75514 17.5005 4.20835C17.5005 4.66157 17.3205 5.09622 17 5.41669L14.5833 7.91669L16.6667 14.1667L14.5833 16.2917L11.6667 10.8334L9.16667 13.3334V15.8334L7.5 17.5L6.25 13.75L2.5 12.5L4.16667 10.8334H6.66667L9.16667 8.33335L3.75 5.41669L5.83333 3.33335L12.0833 5.41669Z"
                                            stroke="white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1110_12876">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p class="text-sm font-bold text-white">12 Days</p>
                            </div>
                        </div>
                        <h2 class="mt-6">
                            <a href="javascript:" class="text-2xl font-bold text-black hover:text-primary dark:text-white">Paradise Beach, Island</a>
                        </h2>
                        <p class="mt-2.5 text-lg font-normal">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="sm:px-5">
            <div class="mx-auto max-w-[1440px] bg-black py-12 dark:bg-gray-dark sm:rounded-[32px] lg:py-24">
                <div class="container">
                    <div class="flex flex-col items-center gap-4 lg:flex-row">
                        <div class="flex-1 text-center ltr:md:text-left rtl:md:text-right">
                            <div class="heading mb-8">
                                <h4 class="!text-primary">Why Choose Us</h4>
                                <h6 class="mt-[18px] !font-semibold !text-gray">
                                    Our objective at TrustGurus is to bring together our visitor's societies and spirits with our own, communicating enthusiasm and
                                    liberality in the food we share.
                                </h6>
                            </div>
                            <div class="flex justify-center sm:gap-16 md:justify-start md:gap-10">
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Spa/gym</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Shopping</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Sightseeing</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Facials/makeup</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Night Bonefire</a>
                                    </li>
                                </ul>
                                <ul class="space-y-3">
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Meditation</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Trekking</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Elephant safari</a>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.56499 12.4067C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4067ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1563 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1563 7.70784 16.9932L7.14286 16.5ZM15.565 7.9932C15.8374 7.68116 15.8053 7.20738 15.4932 6.93497C15.1812 6.66256 14.7074 6.69468 14.435 7.00671L15.565 7.9932ZM10.5064 11.5067C10.234 11.8187 10.2662 12.2925 10.5782 12.5649C10.8902 12.8374 11.364 12.8052 11.6364 12.4932L10.5064 11.5067ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7567L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0067L4.56499 12.4067L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7567L6.57787 16.0067L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25671L10.5064 11.5067L11.6364 12.4932ZM13.6007 10.2432L15.565 7.9932L14.435 7.00671L12.4707 9.25671L13.6007 10.2432Z"
                                                    fill="#B476E5"
                                                />
                                                <path
                                                    d="M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125"
                                                    stroke="#B476E5"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <a href="javascript:" class="text-lg font-semibold text-white duration-200 hover:text-primary">Live music band</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex-1 overflow-hidden rounded-[25px]">
                            <img src="/assets/images/hotel-resort/whychooseus.jpg" class="xl:h-[500px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <logo-slider class="mt-12 bg-white !py-[50px] px-5 lg:mt-24"></logo-slider>

        <section class="bg-gradient-to-t from-white/60 py-12 dark:bg-gradient-to-t dark:from-white/10 lg:py-24">
            <div class="container">
                <div class="heading mb-[30px] text-center ltr:md:text-left rtl:md:text-right">
                    <h6>Some images of our hotel</h6>
                    <h4>Our Gallery</h4>
                </div>
                <ul class="filters realestate-filter mt-7 flex flex-row gap-5 overflow-auto whitespace-nowrap pb-2.5 pl-1 sm:gap-[30px]">
                    <li class="filter" :class="{ active: activeTab === 'cozy-room' }">
                        <button type="button" class="btn rounded-xl bg-gray/[0.08] capitalize text-gray hover:bg-primary" @click="activeTab = 'cozy-room'">
                            Cozy Room
                        </button>
                    </li>
                    <li class="filter" :class="{ active: activeTab === 'delux-room' }">
                        <button type="button" class="btn rounded-xl bg-gray/[0.08] capitalize text-gray hover:bg-primary" @click="activeTab = 'delux-room'">
                            Delux Room
                        </button>
                    </li>
                    <li class="filter" :class="{ active: activeTab === 'modern-room' }">
                        <button type="button" class="btn rounded-xl bg-gray/[0.08] capitalize text-gray hover:bg-primary" @click="activeTab = 'modern-room'">
                            Modern Room
                        </button>
                    </li>
                    <li class="filter" :class="{ active: activeTab === 'family-suit' }">
                        <button type="button" class="btn rounded-xl bg-gray/[0.08] capitalize text-gray hover:bg-primary" @click="activeTab = 'family-suit'">
                            Family Suit
                        </button>
                    </li>
                </ul>
                <div class="projects mt-8 grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                    <div
                        class="project group relative overflow-hidden rounded-xl"
                        :class="activeTab === 'cozy-room' || activeTab === 'delux-room' ? 'block' : 'hidden'"
                    >
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room1.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room1.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="project group relative overflow-hidden rounded-xl"
                        :class="activeTab === 'cozy-room' || activeTab === 'delux-room' ? 'block' : 'hidden'"
                    >
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room2.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room2.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="project group relative overflow-hidden rounded-xl" :class="activeTab === 'cozy-room' ? 'block' : 'hidden'">
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room3.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room3.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="project group relative overflow-hidden rounded-xl"
                        :class="activeTab === 'cozy-room' || activeTab === 'family-suit' ? 'block' : 'hidden'"
                    >
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room4.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room4.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="project group relative overflow-hidden rounded-xl"
                        :class="activeTab === 'cozy-room' || activeTab === 'family-suit' ? 'block' : 'hidden'"
                    >
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room5.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room5.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="project group relative overflow-hidden rounded-xl"
                        :class="activeTab === 'cozy-room' || activeTab === 'modern-room' ? 'block' : 'hidden'"
                    >
                        <div class="absolute inset-0 duration-200 group-hover:bg-black/50"></div>
                        <img src="/assets/images/hotel-resort/room6.jpg" class="z-[1] h-full w-full object-cover" alt="" />
                        <div class="absolute inset-0 m-auto flex scale-0 items-center justify-center text-white transition duration-700 group-hover:scale-100">
                            <a
                                href="javascript:"
                                class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary opacity-0 duration-200 hover:bg-primary group-hover:opacity-100"
                                @click="
                                    visible = true;
                                    index = getItems.findIndex((d) => d.src.toLowerCase().includes('room6.jpg'));
                                "
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <vue-easy-lightbox
                :visible="visible"
                :imgs="getItems"
                :index="index"
                moveDisabled
                loop
                @hide="
                    index = null;
                    visible = false;
                "
            ></vue-easy-lightbox>
        </section>

        <Testimonial class="py-14 lg:py-[100px]"></Testimonial>

        <section class="relative bg-gradient-to-t from-white/60 py-12 dark:bg-[#F6F8FD]/10 dark:from-transparent lg:py-24">
            <div class="absolute bottom-0 max-w-[550px] opacity-10 ltr:left-0 rtl:right-0">
                <img src="/assets/images/hotel-resort/news.png" class="h-full w-full object-cover" alt="" />
            </div>
            <div class="container">
                <div class="flex flex-col justify-between md:flex-row">
                    <div class="heading text-center md:mb-10 ltr:md:text-left rtl:md:text-right">
                        <h4 class="mb-2 !text-primary">Latest News & Events</h4>
                        <h5 class="text-base font-semibold">Excepteur sint occaecat cupidatat non proident sunt in culpa qui</h5>
                    </div>
                    <div class="text-center">
                        <button type="button" class="btn !text-sm text-white">View all</button>
                    </div>
                </div>
                <div class="mt-8 flex flex-col gap-10 md:mt-0 lg:flex-row">
                    <div class="flex-1">
                        <div class="h-[243px] w-full overflow-hidden rounded-[20px]">
                            <img src="/assets/images/hotel-resort/news1.jpg" class="w-full" alt="" />
                        </div>
                        <div class="relative z-[1] mt-5 flex gap-4">
                            <div
                                class="relative top-1/2 z-[1] flex h-[75px] w-[75px] flex-none flex-col items-center justify-center rounded-[10px] bg-black text-center text-white"
                            >
                                <h3 class="text-[28px] font-extrabold leading-5">20</h3>
                                <p class="text-xl font-extrabold">May</p>
                            </div>
                            <div>
                                <h3 class="text-[22px] font-bold leading-7 text-black dark:text-white">Fusce quis justo hendrerit ultrices elit eget</h3>
                                <div class="mt-[14px] flex gap-6">
                                    <div class="flex items-center gap-2">
                                        <a href="javascript:">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="4.5" r="3" stroke="#7780A1" stroke-width="1.5" />
                                                <path
                                                    d="M11.25 15.4613C10.5681 15.6464 9.8052 15.75 9 15.75C6.10051 15.75 3.75 14.4069 3.75 12.75C3.75 11.0931 6.10051 9.75 9 9.75C11.8995 9.75 14.25 11.0931 14.25 12.75C14.25 13.009 14.1926 13.2603 14.0846 13.5"
                                                    stroke="#7780A1"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </a>
                                        <p class="text-sm font-semibold">Admin</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <a href="javascript:">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.7213 14.1831L7.18561 13.5941L6.7213 14.1831ZM9 4.12541L8.45963 4.64551C8.60102 4.79241 8.79612 4.87541 9 4.87541C9.20388 4.87541 9.39898 4.79241 9.54037 4.64551L9 4.12541ZM11.2787 14.1831L11.743 14.7721L11.2787 14.1831ZM5.36961 12.1708C5.04978 11.9076 4.57713 11.9535 4.31391 12.2733C4.05069 12.5932 4.09658 13.0658 4.4164 13.329L5.36961 12.1708ZM1.59199 10.1485C1.79074 10.5119 2.24647 10.6454 2.60988 10.4466C2.9733 10.2479 3.10677 9.79216 2.90801 9.42875L1.59199 10.1485ZM2.25 6.85276C2.25 5.30976 3.12161 4.02553 4.29622 3.48861C5.42355 2.97331 6.96414 3.09175 8.45963 4.64551L9.54037 3.60531C7.66098 1.6527 5.45157 1.31122 3.67262 2.12438C1.94095 2.91593 0.75 4.74856 0.75 6.85276H2.25ZM6.25699 14.7721C6.63944 15.0736 7.06194 15.4049 7.49302 15.6568C7.92386 15.9085 8.4346 16.1249 9 16.1249V14.6249C8.8154 14.6249 8.57614 14.5524 8.24981 14.3617C7.92371 14.1711 7.58186 13.9065 7.18561 13.5941L6.25699 14.7721ZM11.743 14.7721C12.8019 13.9374 14.1903 12.9557 15.2777 11.7313C16.3907 10.478 17.25 8.91043 17.25 6.85276H15.75C15.75 8.4423 15.102 9.67014 14.1561 10.7353C13.1845 11.8293 11.9623 12.6892 10.8144 13.5941L11.743 14.7721ZM17.25 6.85276C17.25 4.74856 16.059 2.91593 14.3274 2.12438C12.5484 1.31122 10.339 1.6527 8.45963 3.60531L9.54037 4.64551C11.0359 3.09175 12.5765 2.97331 13.7038 3.48861C14.8784 4.02553 15.75 5.30976 15.75 6.85276H17.25ZM10.8144 13.5941C10.4181 13.9065 10.0763 14.1711 9.75019 14.3617C9.42386 14.5524 9.1846 14.6249 9 14.6249V16.1249C9.5654 16.1249 10.0761 15.9085 10.507 15.6568C10.9381 15.4049 11.3606 15.0736 11.743 14.7721L10.8144 13.5941ZM7.18561 13.5941C6.58203 13.1183 5.98392 12.6764 5.36961 12.1708L4.4164 13.329C5.04031 13.8425 5.70661 14.3382 6.25699 14.7721L7.18561 13.5941ZM2.90801 9.42875C2.50096 8.68449 2.25 7.84347 2.25 6.85276H0.75C0.75 8.11484 1.0741 9.20162 1.59199 10.1485L2.90801 9.42875Z"
                                                    fill="#7780A1"
                                                />
                                            </svg>
                                        </a>
                                        <p class="text-sm font-semibold">350</p>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <a href="javascript:">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1110_13575)">
                                                    <path
                                                        d="M9.81499 16.0408L10.4604 16.4228L10.4604 16.4228L9.81499 16.0408ZM10.2216 15.3539L9.57615 14.9719L10.2216 15.3539ZM7.7784 15.3539L7.13299 15.7359H7.13299L7.7784 15.3539ZM8.18498 16.0408L8.83039 15.6587L8.18498 16.0408ZM0.75 7.875C0.75 8.28921 1.08579 8.625 1.5 8.625C1.91421 8.625 2.25 8.28921 2.25 7.875H0.75ZM2.47836 11.6481C2.31985 11.2654 1.88112 11.0836 1.49844 11.2422C1.11576 11.4007 0.934029 11.8394 1.09254 12.2221L2.47836 11.6481ZM5.84218 14.2436L5.82926 14.9935H5.82926L5.84218 14.2436ZM3.81494 13.9645L3.52792 14.6575H3.52793L3.81494 13.9645ZM16.2145 11.9351L16.9075 12.2221L16.2145 11.9351ZM12.1578 14.2436L12.1449 13.4937L12.1578 14.2436ZM14.1851 13.9645L14.4721 14.6575H14.4721L14.1851 13.9645ZM14.7094 2.0526L14.3175 2.69208L14.7094 2.0526ZM15.9474 3.29063L16.5869 2.89876V2.89876L15.9474 3.29063ZM3.29063 2.0526L2.89876 1.41312V1.41312L3.29063 2.0526ZM2.0526 3.29063L1.41312 2.89876H1.41312L2.0526 3.29063ZM7.05209 14.4074L7.42917 13.7591L7.42916 13.7591L7.05209 14.4074ZM10.4604 16.4228L10.867 15.7359L9.57615 14.9719L9.16958 15.6587L10.4604 16.4228ZM7.13299 15.7359L7.53956 16.4228L8.83039 15.6587L8.42382 14.9719L7.13299 15.7359ZM9.16958 15.6587C9.13625 15.7151 9.0781 15.7499 8.99998 15.7499C8.92187 15.7499 8.86372 15.7151 8.83039 15.6587L7.53956 16.4228C8.19235 17.5257 9.80762 17.5257 10.4604 16.4228L9.16958 15.6587ZM7.875 2.25H10.125V0.75H7.875V2.25ZM15.75 7.875V8.625H17.25V7.875H15.75ZM5.85511 13.4937C4.91351 13.4775 4.45251 13.4168 4.10195 13.2716L3.52793 14.6575C4.16782 14.9225 4.88782 14.9773 5.82926 14.9935L5.85511 13.4937ZM1.09254 12.2221C1.54926 13.3247 2.4253 14.2007 3.52792 14.6575L4.10195 13.2716C3.36687 12.9672 2.78284 12.3831 2.47836 11.6481L1.09254 12.2221ZM15.75 8.625C15.75 9.5089 15.7496 10.1343 15.7161 10.6258C15.683 11.1106 15.6202 11.4101 15.5216 11.6481L16.9075 12.2221C17.0943 11.7709 17.1743 11.289 17.2126 10.7279C17.2504 10.1735 17.25 9.48838 17.25 8.625H15.75ZM12.1707 14.9935C13.1122 14.9773 13.8322 14.9225 14.4721 14.6575L13.8981 13.2716C13.5475 13.4168 13.0865 13.4775 12.1449 13.4937L12.1707 14.9935ZM15.5216 11.648C15.2172 12.3831 14.6331 12.9672 13.8981 13.2716L14.4721 14.6575C15.5747 14.2007 16.4507 13.3247 16.9075 12.2221L15.5216 11.648ZM10.125 2.25C11.3671 2.25 12.2459 2.25079 12.9287 2.31571C13.6003 2.37956 14.0043 2.50013 14.3175 2.69208L15.1012 1.41312C14.5127 1.05247 13.8521 0.896737 13.0707 0.822442C12.3004 0.749209 11.338 0.75 10.125 0.75V2.25ZM17.25 7.875C17.25 6.66199 17.2508 5.69956 17.1776 4.92933C17.1033 4.14795 16.9475 3.48728 16.5869 2.89876L15.3079 3.6825C15.4999 3.99574 15.6204 4.39972 15.6843 5.07131C15.7492 5.75406 15.75 6.63294 15.75 7.875H17.25ZM14.3175 2.69208C14.7212 2.93945 15.0606 3.27884 15.3079 3.6825L16.5869 2.89876C16.2158 2.29326 15.7067 1.78417 15.1012 1.41312L14.3175 2.69208ZM7.875 0.75C6.66199 0.75 5.69956 0.749209 4.92933 0.822442C4.14795 0.896737 3.48728 1.05247 2.89876 1.41312L3.6825 2.69208C3.99574 2.50013 4.39972 2.37956 5.07131 2.31571C5.75406 2.25079 6.63294 2.25 7.875 2.25V0.75ZM2.25 7.875C2.25 6.63294 2.25079 5.75406 2.31571 5.07131C2.37956 4.39972 2.50013 3.99574 2.69208 3.6825L1.41312 2.89876C1.05247 3.48728 0.896737 4.14795 0.822442 4.92933C0.749209 5.69956 0.75 6.66199 0.75 7.875H2.25ZM2.89876 1.41312C2.29326 1.78417 1.78417 2.29326 1.41312 2.89876L2.69208 3.6825C2.93945 3.27884 3.27884 2.93945 3.6825 2.69208L2.89876 1.41312ZM8.42382 14.9719C8.27335 14.7176 8.13454 14.4816 7.99807 14.2943C7.85237 14.0944 7.67724 13.9033 7.42917 13.7591L6.67502 15.0557C6.68022 15.0587 6.71056 15.0745 6.78586 15.1778C6.87039 15.2938 6.9681 15.4573 7.13299 15.7359L8.42382 14.9719ZM5.82926 14.9935C6.16207 14.9992 6.36046 15.0034 6.50878 15.0198C6.64318 15.0347 6.6723 15.0541 6.67502 15.0557L7.42916 13.7591C7.17862 13.6133 6.92166 13.5564 6.67386 13.5289C6.43998 13.503 6.16006 13.499 5.8551 13.4937L5.82926 14.9935ZM10.867 15.7359C11.0319 15.4573 11.1296 15.2938 11.2141 15.1778C11.2894 15.0745 11.3198 15.0587 11.3249 15.0557L10.5708 13.7591C10.3227 13.9033 10.1476 14.0944 10.0019 14.2943C9.86543 14.4816 9.72662 14.7176 9.57615 14.9719L10.867 15.7359ZM12.1449 13.4937C11.8399 13.499 11.56 13.503 11.3261 13.5289C11.0783 13.5564 10.8214 13.6133 10.5708 13.7591L11.3249 15.0557C11.3277 15.0541 11.3568 15.0347 11.4912 15.0198C11.6395 15.0034 11.8379 14.9992 12.1707 14.9935L12.1449 13.4937Z"
                                                        fill="#7780A1"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1110_13575">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <p class="text-sm font-semibold">30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="relative z-[1] mt-2.5 text-base font-medium">
                            Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt ut lab ore dolor magna aliqua enim ad minim veniam
                            quis nostrud exercitation ullamco. laboris nisi ut aliquip ex ea commodo.
                        </p>
                    </div>
                    <div class="flex-1 space-y-4">
                        <div class="group flex gap-3">
                            <div class="w-20 flex-none sm:w-[120px]">
                                <div class="relative h-20 overflow-hidden rounded-[10px] sm:h-[120px]">
                                    <div class="absolute inset-0 flex scale-0 items-center justify-center bg-black/60 duration-500 group-hover:scale-100">
                                        <h5 class="text-[22px] font-extrabold text-white">
                                            22 <br />
                                            <span class="text-base font-extrabold">Jan</span>
                                        </h5>
                                    </div>
                                    <img src="/assets/images/hotel-resort/news2.jpg" class="h-full w-full object-cover" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-[22px] font-bold text-black duration-200 hover:text-primary dark:text-white dark:hover:text-primary">
                                    <a href="javascript:">Etiam Vel Neqe</a>
                                </h3>
                                <p class="mt-2 text-base font-medium">
                                    Lorem ipsum dolor sit amet consectetur elit sed do. eiusm tempor incididunt labore et dolore magna aliqua ut enim ad minim
                                    veniam quis nostrud.
                                </p>
                            </div>
                        </div>
                        <div class="border border-dashed border-gray opacity-50"></div>
                        <div class="group flex gap-3">
                            <div class="w-20 flex-none sm:w-[120px]">
                                <div class="relative h-20 overflow-hidden rounded-[10px] sm:h-[120px]">
                                    <div class="absolute inset-0 flex scale-0 items-center justify-center bg-black/60 duration-500 group-hover:scale-100">
                                        <h5 class="text-[22px] font-extrabold text-white">
                                            22 <br />
                                            <span class="text-base font-extrabold">Jan</span>
                                        </h5>
                                    </div>
                                    <img src="/assets/images/hotel-resort/news3.jpg" class="h-full w-full object-cover" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-[22px] font-bold text-black duration-200 hover:text-primary dark:text-white dark:hover:text-primary">
                                    <a href="javascript:">Etiam Vel Neqe</a>
                                </h3>
                                <p class="mt-2 text-base font-medium">
                                    Lorem ipsum dolor sit amet consectetur elit sed do. eiusm tempor incididunt labore et dolore magna aliqua ut enim ad minim
                                    veniam quis nostrud.
                                </p>
                            </div>
                        </div>
                        <div class="border border-dashed border-gray opacity-50"></div>
                        <div class="group flex gap-3">
                            <div class="w-20 flex-none sm:w-[120px]">
                                <div class="relative h-20 overflow-hidden rounded-[10px] sm:h-[120px]">
                                    <div class="absolute inset-0 flex scale-0 items-center justify-center bg-black/60 duration-500 group-hover:scale-100">
                                        <h5 class="text-[22px] font-extrabold text-white">
                                            22 <br />
                                            <span class="text-base font-extrabold">Jan</span>
                                        </h5>
                                    </div>
                                    <img src="/assets/images/hotel-resort/news4.jpg" class="h-full w-full object-cover" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3 class="text-[22px] font-bold text-black duration-200 hover:text-primary dark:text-white dark:hover:text-primary">
                                    <a href="javascript:">Etiam Vel Neqe</a>
                                </h3>
                                <p class="mt-2 text-base font-medium">
                                    Lorem ipsum dolor sit amet consectetur elit sed do. eiusm tempor incididunt labore et dolore magna aliqua ut enim ad minim
                                    veniam quis nostrud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 dark:bg-gray-dark lg:py-24">
            <div class="container">
                <div class="relative z-10 lg:flex">
                    <div class="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                        <h6>Get In Touch.</h6>
                        <h4 class="sm:!leading-[50px]">Ready to Get Started?</h4>
                        <div class="mx-auto mt-5 max-w-[330px] overflow-hidden" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/assets/images/hotel-resort/frame.svg" alt="" class="w-full" />
                        </div>
                    </div>
                    <form action="" class="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                        <div class="grid gap-10 sm:grid-cols-2">
                            <div class="relative">
                                <input
                                    type="text"
                                    name="name"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Full Name</label
                                >
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="email"
                                    name="email"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Email Address</label
                                >
                                <svg
                                    width="22"
                                    height="21"
                                    viewBox="0 0 22 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="text"
                                    name="mobile"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >Mobile Number</label
                                >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <div class="relative">
                                <input
                                    type="text"
                                    name="city"
                                    class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >City</label
                                >
                                <svg
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="relative mt-10">
                            <input
                                type="text"
                                name="message"
                                class="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            />
                            <label for="" class="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                >Message</label
                            >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                            >
                                <path
                                    d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    stroke-linecap="round"
                                />
                                <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                            </svg>
                        </div>
                        <div class="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                            <button type="button" class="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import CountUp from 'vue-countup-v3';
    import VueEasyLightbox from 'vue-easy-lightbox';
    import Testimonial from '@/components/Testimonial.vue';
    import LogoSlider from '@/components/LogoSlider.vue';
    const activeTab = ref('cozy-room');
    const visible = ref(false);
    const index: any = ref(null);
    const items = ref([
        { src: '/assets/images/hotel-resort/room1.jpg', type: 'delux-room' },
        { src: '/assets/images/hotel-resort/room2.jpg', type: 'delux-room' },
        { src: '/assets/images/hotel-resort/room3.jpg', type: 'cozy-room' },
        { src: '/assets/images/hotel-resort/room4.jpg', type: 'family-suit' },
        { src: '/assets/images/hotel-resort/room5.jpg', type: 'family-suit' },
        { src: '/assets/images/hotel-resort/room6.jpg', type: 'modern-room' },
    ]);

    const getItems = computed(() => {
        if (activeTab.value.toLowerCase() === 'cozy-room') {
            return items.value;
        }
        const imgs = items.value.filter((d) => d.type.toLowerCase() === activeTab.value.toLowerCase()) || [];
        return imgs;
    });
</script>

<style scoped>
    input[type='date']::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>
