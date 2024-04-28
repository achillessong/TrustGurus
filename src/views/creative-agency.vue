<template>
    <div>
        <div class="h-20 bg-black lg:h-[104px]"></div>
        <section class="bg-white bg-[url(/assets/images/creative/banner-img.png)] bg-bottom bg-no-repeat rtl:rotate-y-180 dark:bg-black">
            <div class="py-24 dark:bg-gradient-to-r dark:from-[#B476E5]/10 dark:to-[#47BDFF]/10 lg:py-40">
                <div class="container">
                    <div class="mx-auto max-w-[1028px] text-center rtl:rotate-y-180">
                        <h2 class="text-4xl font-black text-black dark:text-white sm:text-6xl lg:text-[100px] lg:leading-[125px]">
                            One <span class="text-color">brilliant</span> idea can change your life.
                        </h2>
                        <p class="mt-5 text-lg font-bold">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                        <div class="mt-8 flex justify-center gap-2.5">
                            <div>
                                <img src="/assets/images/creative/avatar-1.svg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/images/creative/avatar-2.svg" alt="" />
                            </div>
                            <div>
                                <img src="/assets/images/creative/avatar-3.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray py-[50px] text-center dark:bg-gray-dark">
            <swiper
                :loop="true"
                slidesPerView="auto"
                :spaceBetween="30"
                :speed="2500"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :modules="[Autoplay]"
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
                        slidesPerView: 8,
                    },
                }"
                :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                :key="store.direction === 'rtl' ? 'true' : 'false'"
            >
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">BRANDING</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">TYPHOGRAPHY</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">AGENCY</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">DESIGN</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">INTERACTION</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">INNOVATION</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">ELEMENT</h5>
                </swiper-slide>
                <swiper-slide>
                    <h5 class="inline-block text-[22px] font-extrabold text-white">DIGITAL SOLUTION</h5>
                </swiper-slide>
            </swiper>
        </section>

        <section class="bg-black bg-[url(/assets/images/creative/Line.png)] py-12 lg:py-20">
            <div class="container">
                <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <div class="inline-flex items-center gap-2.5 bg-white p-2.5">
                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.09106 0.922891C4.26412 0.0268889 5.36879 -0.310967 6.01328 0.335155L8.72195 3.05047C8.88268 3.21162 9.08805 3.32082 9.31153 3.36366L13.0771 4.09131C13.9731 4.26422 14.3109 5.36877 13.6648 6.01338L10.9497 8.72186C10.7886 8.88263 10.6793 9.08815 10.6362 9.31148L9.9089 13.0771C9.73584 13.9731 8.63117 14.311 7.98668 13.6648L5.27801 10.9499C5.11728 10.7888 4.91191 10.6796 4.68842 10.6363L0.922825 9.90907C0.0268234 9.73578 -0.310912 8.63124 0.335135 7.98663L3.05025 5.27815C3.2114 5.11738 3.32061 4.91186 3.36376 4.68853L4.09106 0.922891Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </span>
                            <p class="text-lg font-extrabold text-black">WHO WE ARE?</p>
                            <span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.091 0.922891C4.26406 0.0268889 5.36872 -0.310967 6.01322 0.335155L8.72189 3.05047C8.88262 3.21162 9.08799 3.32082 9.31147 3.36366L13.0771 4.09131C13.9731 4.26422 14.3108 5.36877 13.6648 6.01338L10.9496 8.72186C10.7885 8.88263 10.6793 9.08815 10.6361 9.31148L9.90883 13.0771C9.73578 13.9731 8.63111 14.311 7.98662 13.6648L5.27795 10.9499C5.11721 10.7888 4.91185 10.6796 4.68836 10.6363L0.922764 9.90907C0.0267624 9.73578 -0.310973 8.63124 0.335074 7.98663L3.05019 5.27815C3.21134 5.11738 3.32055 4.91186 3.3637 4.68853L4.091 0.922891Z"
                                        fill="#47BDFF"
                                    />
                                </svg>
                            </span>
                        </div>
                        <h3 class="mt-7 text-3xl font-extrabold text-white md:text-[50px] md:leading-[70px]">
                            We are dynamic team of creative design and development
                        </h3>
                        <p class="mt-2.5 text-lg font-medium">we ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
                        <div class="mt-8 flex items-center gap-5">
                            <a href="javascript:" class="text-lg font-bold text-white duration-200 hover:text-secondary">Explore Us</a>
                            <span>
                                <svg width="59" height="53" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.1" cx="32" cy="26.5" r="25" stroke="url(#paint0_linear_153_569)" stroke-width="3" />
                                    <path
                                        d="M28.0739 27.3557L20.7465 25.3923L21.2641 23.4608L31.889 26.3077L29.0421 36.9327L27.1105 36.4151L29.0739 29.0877L1.21209 45.1737L0.21209 43.4417L28.0739 27.3557Z"
                                        fill="url(#paint1_linear_153_569)"
                                    />
                                    <defs>
                                        <linearGradient id="paint0_linear_153_569" x1="32" y1="1.5" x2="32" y2="51.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="white" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient
                                            id="paint1_linear_153_569"
                                            x1="-3.17691"
                                            y1="37.5718"
                                            x2="28.4836"
                                            y2="19.9431"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="#B476E5" />
                                            <stop offset="1" stop-color="#47BDFF" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="mx-auto max-w-[540px]" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/assets/images/creative/about-img1.png" class="rtl:rotate-y-180" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 dark:bg-gray-dark lg:py-20">
            <div class="container">
                <div class="text-center ltr:md:text-left rtl:md:text-right">
                    <div class="mx-auto inline-flex items-center gap-2.5 bg-black p-2.5">
                        <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.09106 0.922891C4.26412 0.0268889 5.36879 -0.310967 6.01328 0.335155L8.72195 3.05047C8.88268 3.21162 9.08805 3.32082 9.31153 3.36366L13.0771 4.09131C13.9731 4.26422 14.3109 5.36877 13.6648 6.01338L10.9497 8.72186C10.7886 8.88263 10.6793 9.08815 10.6362 9.31148L9.9089 13.0771C9.73584 13.9731 8.63117 14.311 7.98668 13.6648L5.27801 10.9499C5.11728 10.7888 4.91191 10.6796 4.68842 10.6363L0.922825 9.90907C0.0268234 9.73578 -0.310912 8.63124 0.335135 7.98663L3.05025 5.27815C3.2114 5.11738 3.32061 4.91186 3.36376 4.68853L4.09106 0.922891Z"
                                    fill="#B476E5"
                                />
                            </svg>
                        </span>
                        <p class="text-lg font-extrabold text-white">FEATURES</p>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.091 0.922891C4.26406 0.0268889 5.36872 -0.310967 6.01322 0.335155L8.72189 3.05047C8.88262 3.21162 9.08799 3.32082 9.31147 3.36366L13.0771 4.09131C13.9731 4.26422 14.3108 5.36877 13.6648 6.01338L10.9496 8.72186C10.7885 8.88263 10.6793 9.08815 10.6361 9.31148L9.90883 13.0771C9.73578 13.9731 8.63111 14.311 7.98662 13.6648L5.27795 10.9499C5.11721 10.7888 4.91185 10.6796 4.68836 10.6363L0.922764 9.90907C0.0267624 9.73578 -0.310973 8.63124 0.335074 7.98663L3.05019 5.27815C3.21134 5.11738 3.32055 4.91186 3.3637 4.68853L4.091 0.922891Z"
                                    fill="#47BDFF"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <h3
                    class="mt-7 text-center text-3xl font-extrabold text-black dark:text-white md:text-[50px] md:leading-[70px] ltr:md:text-left rtl:md:text-right"
                >
                    The Best Features
                </h3>
                <p class="mt-2.5 text-center text-lg font-medium ltr:md:text-left rtl:md:text-right">
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
                <div
                    class="mt-12 grid gap-[30px] text-center sm:grid-cols-2 ltr:sm:text-left rtl:sm:text-right md:grid-cols-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M34.6467 17.9156C33.7341 12.2984 28.9628 8.11945 23.2743 7.95494C23.0038 7.94435 22.7402 8.04173 22.5416 8.22562C22.343 8.40952 22.2256 8.66485 22.2155 8.93533V9.02684L22.856 18.6084C22.898 19.2534 23.4525 19.7438 24.0978 19.7065L33.7056 19.066C33.9763 19.046 34.2279 18.9188 34.4045 18.7127C34.5812 18.5066 34.6683 18.2385 34.6467 17.9679V17.9156Z"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M16.6207 13.6542C17.2318 13.5129 17.8573 13.8256 18.1109 14.3993C18.1774 14.5344 18.2173 14.6807 18.2285 14.8308C18.3592 16.687 18.6338 20.7522 18.7907 22.9483C18.8174 23.344 19.0008 23.7125 19.3 23.9726C19.5994 24.2326 19.99 24.3627 20.3854 24.3339L28.4507 23.8373C28.8107 23.8155 29.1637 23.9436 29.4261 24.1912C29.6885 24.4387 29.837 24.7837 29.8364 25.1444C29.5095 30.0147 26.0103 34.0863 21.2444 35.1417C16.4787 36.197 11.5877 33.9834 9.23515 29.7064C8.53289 28.4754 8.08815 27.1146 7.92797 25.7065C7.85949 25.2743 7.83322 24.8365 7.84954 24.3993C7.86341 19.1981 11.5162 14.7167 16.6076 13.6542"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">Marketing Strategy</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.0695 25.1136L18.2253 18.2253L25.1135 16.0696L22.9578 22.958L16.0695 25.1136Z"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.5915 33.6C27.7759 33.6 33.6 27.7759 33.6 20.5916C33.6 13.4072 27.7759 7.58313 20.5915 7.58313C13.4072 7.58313 7.5831 13.4072 7.5831 20.5916C7.5831 27.7759 13.4072 33.6 20.5915 33.6Z"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">SEO-optimization</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.9054 8.10138H14.833C10.6615 8.10138 8.0459 11.0547 8.0459 15.2357V26.5146C8.0459 30.6957 10.6492 33.6491 14.833 33.6491H26.8038C30.9889 33.6491 33.5922 30.6957 33.5922 26.5146V21.0502"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.2906 19.1332L26.4286 8.99531C27.6917 7.73366 29.7387 7.73366 31.0018 8.99531L32.6528 10.6463C33.9157 11.9093 33.9157 13.9578 32.6528 15.2194L22.466 25.4062C21.9138 25.9583 21.165 26.269 20.3835 26.269H15.3018L15.4292 21.141C15.4482 20.3867 15.7562 19.6678 16.2906 19.1332Z"
                                    stroke="#47BDFF"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M24.888 10.5616L31.0823 16.7559" stroke="#47BDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">Design</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">All the Lorem Ipsum generators on the Internet tend to repeat chunks as necessary.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M34.258 14.4234L33.3153 12.7876C32.5178 11.4033 30.7504 10.9259 29.3644 11.72C28.7046 12.1087 27.9173 12.219 27.1761 12.0265C26.435 11.8342 25.8008 11.3547 25.4135 10.6942C25.1643 10.2744 25.0303 9.79614 25.0253 9.30792C25.0477 8.52519 24.7525 7.76669 24.2066 7.2052C23.6608 6.64372 22.911 6.32707 22.1279 6.32739H20.2287C19.4615 6.32738 18.726 6.63308 18.1848 7.17684C17.6437 7.72061 17.3415 8.4576 17.3453 9.22474C17.3225 10.8086 16.0319 12.0807 14.4479 12.0805C13.9596 12.0755 13.4815 11.9416 13.0616 11.6923C11.6755 10.8981 9.90813 11.3756 9.11062 12.7598L8.09863 14.4234C7.30208 15.8058 7.77309 17.572 9.15221 18.3743C10.0487 18.8918 10.6009 19.8484 10.6009 20.8835C10.6009 21.9186 10.0487 22.8751 9.15221 23.3927C7.77484 24.1895 7.30332 25.9515 8.09863 27.3297L9.05517 28.9794C9.42884 29.6537 10.0558 30.1512 10.7972 30.3619C11.5387 30.5727 12.3337 30.4792 13.0061 30.1023C13.6671 29.7166 14.4548 29.611 15.1942 29.8088C15.9335 30.0066 16.5631 30.4916 16.9432 31.1559C17.1924 31.5757 17.3262 32.054 17.3314 32.5422C17.3314 34.1424 18.6286 35.4395 20.2287 35.4395H22.1279C23.7226 35.4395 25.0176 34.1508 25.0253 32.556C25.0216 31.7865 25.3257 31.0474 25.8698 30.5033C26.414 29.959 27.1531 29.655 27.9226 29.6587C28.4096 29.6718 28.8859 29.8051 29.309 30.0468C30.6914 30.8434 32.4576 30.3724 33.2599 28.9933L34.258 27.3297C34.6443 26.6666 34.7504 25.8768 34.5527 25.1352C34.3548 24.3936 33.8696 23.7615 33.2043 23.3788C32.5392 22.9961 32.054 22.364 31.8561 21.6224C31.6584 20.8809 31.7645 20.091 32.1508 19.4279C32.402 18.9892 32.7658 18.6256 33.2043 18.3743C34.5752 17.5725 35.0451 15.8165 34.258 14.4372V14.4234Z"
                                    stroke="#B476E5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M21.1852 24.876C23.3902 24.876 25.1777 23.0885 25.1777 20.8835C25.1777 18.6784 23.3902 16.8909 21.1852 16.8909C18.9802 16.8909 17.1927 18.6784 17.1927 20.8835C17.1927 23.0885 18.9802 24.876 21.1852 24.876Z"
                                    stroke="#B476E5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">Marketing Strategy</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.5967 31.4439C26.1745 31.4439 31.5069 26.1115 31.5069 19.5337C31.5069 12.9558 26.1745 7.62341 19.5967 7.62341C13.0188 7.62341 7.68642 12.9558 7.68642 19.5337C7.68642 26.1115 13.0188 31.4439 19.5967 31.4439Z"
                                    stroke="#B476E5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path d="M27.8805 28.4361L32.55 33.0935" stroke="#B476E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">Research</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    </div>
                    <div>
                        <span>
                            <svg class="mx-auto h-[42px] w-[42px] sm:mx-0" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M22.5883 9.04291L26.0436 15.8373C26.2166 16.18 26.5508 16.4192 26.9387 16.4746L34.6742 17.5669C34.9875 17.6078 35.2694 17.7681 35.4619 18.0132C35.823 18.4726 35.7677 19.1229 35.335 19.5182L29.7286 24.8178C29.4436 25.0803 29.3167 25.4653 29.3914 25.8401L30.734 33.3185C30.8281 33.9382 30.3954 34.5187 29.7614 34.6194C29.4988 34.6587 29.2302 34.6179 28.9916 34.5027L22.102 30.972C21.7559 30.7882 21.3412 30.7882 20.9951 30.972L14.0548 34.5216C13.4744 34.8104 12.7642 34.596 12.448 34.0404C12.3271 33.8158 12.2853 33.5605 12.3271 33.3112L13.6698 25.8329C13.7369 25.4595 13.6102 25.0759 13.3327 24.8119L7.69631 19.5139C7.23681 19.0676 7.23383 18.3413 7.69184 17.8921L7.69631 17.8862C7.88579 17.7186 8.11852 17.6063 8.37065 17.5625L16.1076 16.4702C16.494 16.4105 16.8267 16.1742 17.0028 15.8315L20.4549 9.04291C20.5937 8.76728 20.8399 8.55582 21.1383 8.45957C21.4381 8.36186 21.7663 8.3852 22.0483 8.52373C22.2795 8.63603 22.469 8.81832 22.5883 9.04291Z"
                                    stroke="#B476E5"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                        <h5 class="mt-5 text-lg font-extrabold text-black dark:text-white">Social Media Promotion</h5>
                        <p class="mt-2.5 text-[15px] font-semibold">It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary bg-[url(/assets/images/creative/numbers.png)] bg-center bg-no-repeat py-12 lg:py-20">
            <div class="container">
                <div class="border-[8px] border-white/10">
                    <div class="grid grid-cols-2 gap-7 divide-x-2 divide-double divide-gray/[0.15] bg-white py-[54px] px-2 text-center md:grid-cols-4">
                        <div>
                            <count-up class="text-[34px] font-black leading-10 text-primary" :startVal="0" :end-val="1540" :duration="10"></count-up>
                            <p class="mt-2 text-lg font-bold text-black">Projects Executed</p>
                        </div>
                        <div>
                            <count-up class="text-[34px] font-black leading-10 text-primary" :startVal="0" :end-val="120" :duration="10"></count-up>
                            <p class="mt-2 text-lg font-bold text-black">Global Awards</p>
                        </div>
                        <div>
                            <count-up class="text-[34px] font-black leading-10 text-primary" :startVal="0" :end-val="165" :duration="10"></count-up>
                            <p class="mt-2 text-lg font-bold text-black">Active Clients</p>
                        </div>
                        <div>
                            <count-up class="text-[34px] font-black leading-10 text-primary" :startVal="0" :end-val="1500" :duration="10"></count-up>
                            <p class="mt-2 text-lg font-bold text-black">Ongoing Contracts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 dark:bg-gradient-to-r dark:from-[#B476E5]/10 dark:to-[#47BDFF]/10 lg:py-24">
            <div class="container">
                <div class="inline-flex items-center gap-2.5 bg-black p-2.5">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.09106 0.922891C4.26412 0.0268889 5.36879 -0.310967 6.01328 0.335155L8.72195 3.05047C8.88268 3.21162 9.08805 3.32082 9.31153 3.36366L13.0771 4.09131C13.9731 4.26422 14.3109 5.36877 13.6648 6.01338L10.9497 8.72186C10.7886 8.88263 10.6793 9.08815 10.6362 9.31148L9.9089 13.0771C9.73584 13.9731 8.63117 14.311 7.98668 13.6648L5.27801 10.9499C5.11728 10.7888 4.91191 10.6796 4.68842 10.6363L0.922825 9.90907C0.0268234 9.73578 -0.310912 8.63124 0.335135 7.98663L3.05025 5.27815C3.2114 5.11738 3.32061 4.91186 3.36376 4.68853L4.09106 0.922891Z"
                                fill="#B476E5"
                            />
                        </svg>
                    </span>
                    <p class="text-lg font-extrabold uppercase text-white">Check our Work</p>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.091 0.922891C4.26406 0.0268889 5.36872 -0.310967 6.01322 0.335155L8.72189 3.05047C8.88262 3.21162 9.08799 3.32082 9.31147 3.36366L13.0771 4.09131C13.9731 4.26422 14.3108 5.36877 13.6648 6.01338L10.9496 8.72186C10.7885 8.88263 10.6793 9.08815 10.6361 9.31148L9.90883 13.0771C9.73578 13.9731 8.63111 14.311 7.98662 13.6648L5.27795 10.9499C5.11721 10.7888 4.91185 10.6796 4.68836 10.6363L0.922764 9.90907C0.0267624 9.73578 -0.310973 8.63124 0.335074 7.98663L3.05019 5.27815C3.21134 5.11738 3.32055 4.91186 3.3637 4.68853L4.091 0.922891Z"
                                fill="#47BDFF"
                            />
                        </svg>
                    </span>
                </div>
                <h5 class="mt-7 text-3xl font-extrabold text-black dark:text-white md:text-[50px] md:leading-[70px]">Some of our recent case studies</h5>
                <div class="mt-12 grid grid-cols-2 gap-3 md:gap-[30px]" data-aos="flip-left" data-aos-duration="1000">
                    <div class="group overflow-hidden border-[8px] border-white">
                        <img
                            src="/assets/images/creative/work1.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                    <div class="group overflow-hidden border-[8px] border-white md:mt-5">
                        <img
                            src="/assets/images/creative/work2.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                    <div class="group overflow-hidden border-[8px] border-white">
                        <img
                            src="/assets/images/creative/work3.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                    <div class="group overflow-hidden border-[8px] border-white md:mt-5">
                        <img
                            src="/assets/images/creative/work4.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                    <div class="group overflow-hidden border-[8px] border-white">
                        <img
                            src="/assets/images/creative/work5.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                    <div class="group overflow-hidden border-[8px] border-white md:mt-5">
                        <img
                            src="/assets/images/creative/work6.jpg"
                            alt=""
                            class="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white/50 py-12 dark:bg-transparent dark:bg-gradient-to-t dark:from-white/[0.02] dark:to-transparent lg:py-24">
            <div class="container">
                <div class="inline-flex items-center gap-2.5 bg-black p-2.5">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.09106 0.922891C4.26412 0.0268889 5.36879 -0.310967 6.01328 0.335155L8.72195 3.05047C8.88268 3.21162 9.08805 3.32082 9.31153 3.36366L13.0771 4.09131C13.9731 4.26422 14.3109 5.36877 13.6648 6.01338L10.9497 8.72186C10.7886 8.88263 10.6793 9.08815 10.6362 9.31148L9.9089 13.0771C9.73584 13.9731 8.63117 14.311 7.98668 13.6648L5.27801 10.9499C5.11728 10.7888 4.91191 10.6796 4.68842 10.6363L0.922825 9.90907C0.0268234 9.73578 -0.310912 8.63124 0.335135 7.98663L3.05025 5.27815C3.2114 5.11738 3.32061 4.91186 3.36376 4.68853L4.09106 0.922891Z"
                                fill="#B476E5"
                            />
                        </svg>
                    </span>
                    <p class="text-lg font-extrabold uppercase text-white">out team</p>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.091 0.922891C4.26406 0.0268889 5.36872 -0.310967 6.01322 0.335155L8.72189 3.05047C8.88262 3.21162 9.08799 3.32082 9.31147 3.36366L13.0771 4.09131C13.9731 4.26422 14.3108 5.36877 13.6648 6.01338L10.9496 8.72186C10.7885 8.88263 10.6793 9.08815 10.6361 9.31148L9.90883 13.0771C9.73578 13.9731 8.63111 14.311 7.98662 13.6648L5.27795 10.9499C5.11721 10.7888 4.91185 10.6796 4.68836 10.6363L0.922764 9.90907C0.0267624 9.73578 -0.310973 8.63124 0.335074 7.98663L3.05019 5.27815C3.21134 5.11738 3.32055 4.91186 3.3637 4.68853L4.091 0.922891Z"
                                fill="#47BDFF"
                            />
                        </svg>
                    </span>
                </div>
                <h5 class="mt-[30px] text-3xl font-extrabold text-black dark:text-white md:text-[50px] md:leading-[70px] xl:w-4/5">
                    Our agency it’s about the people and for the people
                </h5>
                <p class="mt-2.5 text-lg font-medium xl:w-1/2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>

                <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        <div class="rounded-t-full bg-gradient-to-b from-gray/10 to-transparent p-1">
                            <div class="rounded-t-full bg-gradient-to-b from-white to-transparent p-1 dark:bg-gray-dark dark:from-transparent">
                                <div class="h-72 rounded-t-full bg-gray/10 pt-6">
                                    <img src="/assets/images/creative/team-img1.png" class="h-full w-full object-contain" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="relative z-[1] mx-4 -mt-5 bg-secondary py-4 text-center text-white">
                            <h5 class="text-lg font-bold">Aditya Patel</h5>
                            <p class="mt-2.5 text-sm font-bold">Chief Executive Officer</p>
                        </div>
                    </div>
                    <div>
                        <div class="rounded-t-full bg-gradient-to-b from-gray/10 to-transparent p-1">
                            <div class="rounded-t-full bg-gradient-to-b from-white to-transparent p-1 dark:bg-gray-dark dark:from-transparent">
                                <div class="h-72 rounded-t-full bg-gray/10 pt-6">
                                    <img src="/assets/images/creative/team-img2.png" class="h-full w-full object-contain" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="relative z-[1] mx-4 -mt-5 bg-secondary py-4 text-center text-white">
                            <h5 class="text-lg font-bold">Audrey Ramirez</h5>
                            <p class="mt-2.5 text-sm font-bold">Chief Operating Officer</p>
                        </div>
                    </div>
                    <div>
                        <div class="rounded-t-full bg-gradient-to-b from-gray/10 to-transparent p-1">
                            <div class="rounded-t-full bg-gradient-to-b from-white to-transparent p-1 dark:bg-gray-dark dark:from-transparent">
                                <div class="h-72 rounded-t-full bg-gray/10 pt-6">
                                    <img src="/assets/images/creative/team-img3.png" class="h-full w-full object-contain" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="relative z-[1] mx-4 -mt-5 bg-secondary py-4 text-center text-white">
                            <h5 class="text-lg font-bold">James Robinson</h5>
                            <p class="mt-2.5 text-sm font-bold">Chief Financial Officer</p>
                        </div>
                    </div>
                    <div>
                        <div class="rounded-t-full bg-gradient-to-b from-gray/10 to-transparent p-1">
                            <div class="rounded-t-full bg-gradient-to-b from-white to-transparent p-1 dark:bg-gray-dark dark:from-transparent">
                                <div class="h-72 rounded-t-full bg-gray/10 pt-6">
                                    <img src="/assets/images/creative/team-img4.png" class="h-full w-full object-contain" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="relative z-[1] mx-4 -mt-5 bg-secondary py-4 text-center text-white">
                            <h5 class="text-lg font-bold">Daniel Allen</h5>
                            <p class="mt-2.5 text-sm font-bold">Chief Marketing Officer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gradient-to-b from-transparent to-white/50 py-12 dark:to-white/[0.02] lg:py-24">
            <div class="container">
                <div class="inline-flex items-center gap-2.5 bg-black p-2.5">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.09106 0.922891C4.26412 0.0268889 5.36879 -0.310967 6.01328 0.335155L8.72195 3.05047C8.88268 3.21162 9.08805 3.32082 9.31153 3.36366L13.0771 4.09131C13.9731 4.26422 14.3109 5.36877 13.6648 6.01338L10.9497 8.72186C10.7886 8.88263 10.6793 9.08815 10.6362 9.31148L9.9089 13.0771C9.73584 13.9731 8.63117 14.311 7.98668 13.6648L5.27801 10.9499C5.11728 10.7888 4.91191 10.6796 4.68842 10.6363L0.922825 9.90907C0.0268234 9.73578 -0.310912 8.63124 0.335135 7.98663L3.05025 5.27815C3.2114 5.11738 3.32061 4.91186 3.36376 4.68853L4.09106 0.922891Z"
                                fill="#B476E5"
                            />
                        </svg>
                    </span>
                    <p class="text-lg font-extrabold uppercase text-white">CLIENT STORIES</p>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.091 0.922891C4.26406 0.0268889 5.36872 -0.310967 6.01322 0.335155L8.72189 3.05047C8.88262 3.21162 9.08799 3.32082 9.31147 3.36366L13.0771 4.09131C13.9731 4.26422 14.3108 5.36877 13.6648 6.01338L10.9496 8.72186C10.7885 8.88263 10.6793 9.08815 10.6361 9.31148L9.90883 13.0771C9.73578 13.9731 8.63111 14.311 7.98662 13.6648L5.27795 10.9499C5.11721 10.7888 4.91185 10.6796 4.68836 10.6363L0.922764 9.90907C0.0267624 9.73578 -0.310973 8.63124 0.335074 7.98663L3.05019 5.27815C3.21134 5.11738 3.32055 4.91186 3.3637 4.68853L4.091 0.922891Z"
                                fill="#47BDFF"
                            />
                        </svg>
                    </span>
                </div>
                <h5 class="mt-[30px] text-3xl font-extrabold text-black dark:text-white md:text-[50px] md:leading-[70px] xl:w-3/5">
                    Check the success story of our clients
                </h5>
                <p class="mt-2.5 text-lg font-medium xl:w-1/2">
                    Velit integer nisl quis eget sedusce sed vulputate ac accumsan, odio amet. Sit varius pharetra donec.
                </p>

                <ClientSlider :feedbacks="feedbacks" type="creative-agency"></ClientSlider>
            </div>
        </section>

        <section class="bg-black py-6 dark:bg-gray-dark">
            <swiper
                :loop="true"
                slidesPerView="auto"
                :spaceBetween="30"
                :speed="2500"
                :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }"
                :modules="[Autoplay]"
                :breakpoints="{
                    450: {
                        slidesPerView: 1.2,
                    },
                    700: {
                        slidesPerView: 1.6,
                    },
                    1000: {
                        slidesPerView: 2,
                    },
                    1600: {
                        slidesPerView: 3.5,
                    },
                }"
                :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                :key="store.direction === 'rtl' ? 'true' : 'false'"
            >
                <swiper-slide>
                    <div class="flex items-center gap-7">
                        <h5 class="text-xl font-extralight text-white sm:text-[28px]">Let’s work together</h5>
                        <a href="javascript:" class="btn rounded-none bg-secondary text-white hover:bg-primary">Get started</a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex items-center gap-7">
                        <h5 class="text-xl font-extralight text-white sm:text-[28px]">Let’s work together</h5>
                        <a href="javascript:" class="btn rounded-none bg-secondary text-white hover:bg-primary">Get started</a>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="flex items-center gap-7">
                        <h5 class="text-xl font-extralight text-white sm:text-[28px]">Let’s work together</h5>
                        <a href="javascript:" class="btn rounded-none bg-secondary text-white hover:bg-primary">Get started</a>
                    </div>
                </swiper-slide>
            </swiper>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import CountUp from 'vue-countup-v3';
    import ClientSlider from '@/components/ClientSlider.vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay } from 'swiper';
    import 'swiper/css';
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
    const feedbacks = ref([
        {
            id: 1,
            name: 'Marvin McKinney',
            role: 'Founder of Triple IT',
            thumbnail: '/assets/images/creative/client-img1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            role: 'Founder of Dope tech',
            thumbnail: '/assets/images/creative/client-img2.png',
            message:
                " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by alteration in some form, injected humour, or randomised words which don't look even slightly believable.",
        },
    ]);
</script>
