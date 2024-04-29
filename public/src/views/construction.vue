<template>
    <div>
        <section class="bg-black bg-[url(/assets/images/construction/banner-frame.png)] bg-bottom bg-no-repeat">
            <div class="container">
                <div class="flex flex-col items-center gap-10 py-40 lg:flex-row">
                    <div class="text-center text-white ltr:lg:text-left rtl:lg:text-right">
                        <h2 class="text-3xl font-black sm:text-6xl">
                            WE TAKE YOUR <span class="text-primary">DREAM HOME</span> & <span class="text-secondary">MAKE IT REAL</span>
                        </h2>
                        <p class="mt-5 text-lg font-semibold">
                            Nisi nec a enim, velit potenti nunc interdum facilisis Pharetra integer viverra et scelerisque egestas.
                        </p>
                        <router-link to="/contact-us" class="btn mt-5 rounded-md bg-white">Contact Us</router-link>
                    </div>
                    <div>
                        <img src="/assets/images/construction/banner-img.png" data-aos="fade-up" data-aos-duration="1000" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[url(/assets/images/construction/services-bg-img.png)] bg-cover bg-center bg-no-repeat py-12 lg:py-24">
            <div class="container">
                <div class="heading text-center">
                    <h4 class="!font-black">OUR <span class="text-primary">SERVICES</span></h4>
                    <h6 class="mx-auto mt-2 max-w-[663px] !font-medium !text-gray dark:!text-white">
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                        ornare odio.
                    </h6>
                </div>
                <div class="grid grid-cols-1 justify-between gap-10 sm:grid-cols-2 md:gap-16 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        <span>
                            <svg class="h-[60px] w-[60px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_189_777)">
                                    <path
                                        d="M20.4 2.40002C16.4391 2.40002 13.2 5.63909 13.2 9.60002C13.2 11.9813 14.3719 14.1 16.1625 15.4125C15.2016 15.8953 14.325 16.5188 13.575 17.2875C12.7031 16.9782 11.775 16.8 10.8 16.8C6.17343 16.8 2.4 20.5735 2.4 25.2C2.4 28.1391 3.92343 30.75 6.225 32.25C2.55937 33.9844 -3.54272e-06 37.6969 -3.54272e-06 42V47.4C-0.00469104 47.7844 0.178121 48.1453 0.487496 48.375C0.487496 48.375 1.33593 48.975 2.9625 49.4625C4.58906 49.95 7.10156 50.4 10.8 50.4C14.4984 50.4 17.0109 49.95 18.6375 49.4625C18.8484 49.4016 19.0172 49.3407 19.2 49.275V54.6C19.1953 54.9844 19.3781 55.3453 19.6875 55.575C19.6875 55.575 20.5359 56.175 22.1625 56.6625C23.7891 57.15 26.3016 57.6 30 57.6C33.6984 57.6 36.2109 57.15 37.8375 56.6625C39.4641 56.175 40.3125 55.575 40.3125 55.575C40.6219 55.3453 40.8047 54.9844 40.8 54.6V49.275C40.9828 49.3407 41.1516 49.4016 41.3625 49.4625C42.9891 49.95 45.5016 50.4 49.2 50.4C52.8984 50.4 55.4109 49.95 57.0375 49.4625C58.6641 48.975 59.5125 48.375 59.5125 48.375C59.8219 48.1453 60.0047 47.7844 60 47.4V42C60 37.6969 57.4406 33.9844 53.775 32.25C56.0766 30.75 57.6 28.1391 57.6 25.2C57.6 20.5735 53.8266 16.8 49.2 16.8C48.1547 16.8 47.1609 17.011 46.2375 17.3625C45.4828 16.5703 44.5922 15.9094 43.6125 15.4125C45.4031 14.1 46.575 11.9813 46.575 9.60002C46.575 5.63909 43.3359 2.40002 39.375 2.40002C35.4141 2.40002 32.175 5.63909 32.175 9.60002C32.175 11.9813 33.3469 14.1 35.1375 15.4125C32.3812 16.7719 30.3656 19.3875 29.8875 22.5375C29.4094 19.3828 27.3984 16.7672 24.6375 15.4125C26.4281 14.1 27.6 11.9813 27.6 9.60002C27.6 5.63909 24.3609 2.40002 20.4 2.40002ZM20.4 4.80002C23.0672 4.80002 25.2 6.93284 25.2 9.60002C25.2 12.2672 23.0672 14.4 20.4 14.4C17.7328 14.4 15.6 12.2672 15.6 9.60002C15.6 6.93284 17.7328 4.80002 20.4 4.80002ZM39.375 4.80002C42.0422 4.80002 44.175 6.93284 44.175 9.60002C44.175 12.2672 42.0422 14.4 39.375 14.4C36.7078 14.4 34.575 12.2672 34.575 9.60002C34.575 6.93284 36.7078 4.80002 39.375 4.80002ZM20.4 16.8C24.4453 16.8 27.6 19.9547 27.6 24V24.375C24.15 25.4203 21.6 28.6172 21.6 32.4C21.6 35.3391 23.1234 37.95 25.425 39.45C23.9203 40.1625 22.6312 41.2078 21.6 42.4875V42C21.6 37.6969 19.0406 33.9844 15.375 32.25C17.6766 30.75 19.2 28.1391 19.2 25.2C19.2 22.4625 17.8641 20.025 15.825 18.4875C17.0719 17.4235 18.6187 16.8 20.4 16.8ZM39.375 16.8C41.2078 16.8 42.8016 17.4422 44.0625 18.5625C42.0844 20.1 40.8 22.5141 40.8 25.2C40.8 28.1391 42.3234 30.75 44.625 32.25C40.9594 33.9844 38.4 37.6969 38.4 42V42.4875C37.3687 41.2078 36.0797 40.1625 34.575 39.45C36.8766 37.95 38.4 35.3391 38.4 32.4C38.4 28.5328 35.7469 25.2657 32.175 24.3V24C32.175 19.9547 35.3297 16.8 39.375 16.8ZM10.8 19.2C11.7328 19.2 12.6 19.425 13.3875 19.8C15.4031 20.7657 16.8 22.8047 16.8 25.2C16.8 28.5282 14.1281 31.2 10.8 31.2C7.47187 31.2 4.8 28.5282 4.8 25.2C4.8 21.8719 7.47187 19.2 10.8 19.2ZM49.2 19.2C52.5281 19.2 55.2 21.8719 55.2 25.2C55.2 28.5282 52.5281 31.2 49.2 31.2C45.8719 31.2 43.2 28.5282 43.2 25.2C43.2 22.9828 44.3859 21.0657 46.1625 20.025C46.1719 20.0203 46.1906 20.0297 46.2 20.025C46.3781 19.9875 46.5422 19.9125 46.6875 19.8C46.7297 19.7813 46.7578 19.7438 46.8 19.725C46.8234 19.7157 46.8516 19.7016 46.875 19.6875C47.5922 19.3828 48.3703 19.2 49.2 19.2ZM30 26.4C33.3281 26.4 36 29.0719 36 32.4C36 35.7282 33.3281 38.4 30 38.4C26.6719 38.4 24 35.7282 24 32.4C24 29.0719 26.6719 26.4 30 26.4ZM10.8 33.6C15.4266 33.6 19.2 37.3735 19.2 42V46.6125C19.0219 46.7203 18.9516 46.8422 17.9625 47.1375C16.5891 47.55 14.3016 48 10.8 48C7.29843 48 5.01093 47.55 3.6375 47.1375C2.64843 46.8422 2.57812 46.7203 2.4 46.6125V42C2.4 37.3735 6.17343 33.6 10.8 33.6ZM49.2 33.6C53.8266 33.6 57.6 37.3735 57.6 42V46.6125C57.4219 46.7203 57.3516 46.8422 56.3625 47.1375C54.9891 47.55 52.7016 48 49.2 48C45.6984 48 43.4109 47.55 42.0375 47.1375C41.0484 46.8422 40.9781 46.7203 40.8 46.6125V42C40.8 37.3735 44.5734 33.6 49.2 33.6ZM30 40.8C34.6266 40.8 38.4 44.5735 38.4 49.2V53.8125C38.2219 53.9203 38.1516 54.0422 37.1625 54.3375C35.7891 54.75 33.5016 55.2 30 55.2C26.4984 55.2 24.2109 54.75 22.8375 54.3375C21.8484 54.0422 21.7781 53.9203 21.6 53.8125V49.2C21.6 44.5735 25.3734 40.8 30 40.8Z"
                                        fill="#47BDFF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_189_777">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <a
                            href="javascript:"
                            class="relative inline-block py-5 text-2xl font-bold text-secondary transition line-clamp-1 hover:text-primary sm:py-8"
                        >
                            Over 15 years experience
                            <span
                                class="absolute top-1/2 -translate-y-1/2 text-[64px] font-extrabold text-black/[0.05] ltr:left-0 rtl:right-0 dark:text-white/[0.05]"
                                >01</span
                            >
                        </a>
                        <p class="text-lg font-medium">Lorem ipsum dolot amet, consectetur adipiscing elit, sed do eiusmod tempor ever since the 1500s.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="h-[60px] w-[60px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_189_771)">
                                    <path
                                        d="M15.6 2.40002C13.6266 2.40002 12 4.02659 12 6.00002C12 6.15471 12.0282 6.3094 12.0891 6.45471C11.311 6.16409 10.4766 6.00002 9.60002 6.00002C5.63909 6.00002 2.40002 9.23909 2.40002 13.2C2.40002 17.9344 6.30471 22.2094 9.9469 25.8938C11.7703 27.736 13.5703 29.4188 14.8688 30.825C15.5203 31.5235 16.0453 32.161 16.3735 32.6625C16.7063 33.1688 16.8 33.5391 16.8 33.6C16.8 34.2797 16.2797 34.8 15.6 34.8C15.1688 34.7953 14.7656 35.0203 14.5453 35.3953C14.3297 35.7703 14.3297 36.2297 14.5453 36.6047C14.7656 36.9797 15.1688 37.2047 15.6 37.2C16.8844 37.2 18.0141 36.5016 18.6516 35.475C19.8891 38.8782 21.3516 41.8266 23.1 44.025C23.7469 44.8453 24.4547 45.5625 25.2 46.1625V50.4H21.6C18.3 50.4 15.6 53.1 15.6 56.4V57.6H43.2V55.2L44.4 56.4C44.4 53.1 41.7 50.4 38.4 50.4H34.8V46.0969C35.5172 45.5157 36.1922 44.8266 36.825 44.0438C38.5875 41.836 40.0735 38.8688 41.3297 35.4422C41.9625 36.4875 43.1016 37.2 44.4 37.2C44.8313 37.2047 45.2344 36.9797 45.4547 36.6047C45.6703 36.2297 45.6703 35.7703 45.4547 35.3953C45.2344 35.0203 44.8313 34.7953 44.4 34.8C43.7203 34.8 43.2 34.2797 43.2 33.6C43.2 33.5391 43.2938 33.1688 43.6266 32.6625C43.9547 32.161 44.4797 31.5235 45.1313 30.825C46.4297 29.4188 48.2297 27.736 50.0532 25.8938C53.6953 22.2094 57.6 17.9344 57.6 13.2C57.6 9.23909 54.361 6.00002 50.4 6.00002C49.5235 6.00002 48.6891 6.16409 47.911 6.45471C47.9719 6.3094 48 6.15471 48 6.00002C48 4.02659 46.3735 2.40002 44.4 2.40002H15.6ZM15.6 4.80002H44.4C45.0797 4.80002 45.6 5.32034 45.6 6.00002C45.6 6.67971 45.0797 7.20003 44.4 7.20003H15.6C14.9203 7.20003 14.4 6.67971 14.4 6.00002C14.4 5.32034 14.9203 4.80002 15.6 4.80002ZM9.60002 8.40002C12.2578 8.40002 14.386 10.5235 14.4 13.1766C14.4 13.2 14.4 13.2235 14.4 13.2469C14.4047 13.2797 14.4047 13.3078 14.4047 13.336C14.7235 18.8203 15.5391 24.3657 16.8 29.386C16.7391 29.3203 16.6922 29.2594 16.6313 29.1938C15.2297 27.6844 13.4297 26.0063 11.6532 24.2063C8.09534 20.611 4.80002 16.5047 4.80002 13.2C4.80002 10.5375 6.93752 8.40002 9.60002 8.40002ZM50.4 8.40002C53.0625 8.40002 55.2 10.5375 55.2 13.2C55.2 16.5047 51.9047 20.611 48.3469 24.2063C46.5703 26.0063 44.7703 27.6844 43.3688 29.1938C43.2985 29.2688 43.2422 29.3391 43.1719 29.4188C44.4375 24.4172 45.2672 18.886 45.586 13.4063C45.5953 13.336 45.6 13.2703 45.6 13.2C45.6 10.5375 47.7375 8.40002 50.4 8.40002ZM16.7438 9.60002H43.2563C43.1297 18 41.761 26.9672 39.361 33.8578C38.1094 37.4625 36.5907 40.4953 34.95 42.5438C33.3094 44.5922 31.6407 45.6 29.9578 45.6C28.2703 45.6 26.611 44.5875 24.975 42.5297C23.3438 40.4766 21.8344 37.4344 20.5922 33.8203C18.2156 26.9203 16.8657 17.9532 16.7438 9.60002ZM29.6297 15.6C29.5266 16.275 28.7672 18.4735 25.4391 18.4735V20.836H28.8938V30H32.4V15.6H29.6297ZM32.4 47.5219V50.4H27.6V47.55C28.3547 47.8313 29.1375 48 29.9578 48C30.8063 48 31.6172 47.8219 32.4 47.5219ZM21.6 52.8H26.1985C26.3297 52.8235 26.461 52.8235 26.5875 52.8H33.3985C33.5297 52.8235 33.661 52.8235 33.7875 52.8H38.4C39.9328 52.8 40.9828 53.8641 41.5078 55.2H18.4922C19.0172 53.8641 20.0672 52.8 21.6 52.8Z"
                                        fill="#47BDFF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_189_771">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <a
                            href="javascript:"
                            class="relative inline-block py-5 text-2xl font-bold text-secondary transition line-clamp-1 hover:text-primary sm:py-8"
                        >
                            Consecutive award winning
                            <span
                                class="absolute top-1/2 -translate-y-1/2 text-[64px] font-extrabold text-black/[0.05] ltr:left-0 rtl:right-0 dark:text-white/[0.05]"
                                >02</span
                            >
                        </a>
                        <p class="text-lg font-medium">Lorem ipsum dolot amet, consectetur adipiscing elit, sed do eiusmod tempor ever since the 1500s.</p>
                    </div>
                    <div>
                        <span>
                            <svg class="h-[60px] w-[60px]" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_189_765)">
                                    <path
                                        d="M55.2 4.80005H4.79998H4.6781H4.56091C3.96091 4.92192 3.59998 5.40005 3.59998 6.00005V54C3.59998 54.7219 4.0781 55.2 4.79998 55.2H55.2C55.9218 55.2 56.4 54.7219 56.4 54V6.00005C56.4 5.27817 55.9218 4.80005 55.2 4.80005ZM5.99998 31.2H20.4V40.8H5.99998V31.2ZM28.8 28.8H14.4V19.2H28.8V28.8ZM22.8 31.2H37.2V40.8H22.8V31.2ZM31.2 28.8V19.2H45.6V28.8H31.2ZM54 28.8H48V19.2H54V28.8ZM39.6 7.20005H54V16.8H39.6V7.20005ZM22.8 7.20005H37.2V16.8H22.8V7.20005ZM5.99998 7.20005H20.4V16.8H5.99998V7.20005ZM5.99998 19.2H12V28.8H5.99998V19.2ZM12 52.8H5.99998V43.2H12V52.8ZM28.8 52.8H14.4V43.2H28.8V52.8ZM45.6 52.8H31.2V43.2H45.6V52.8ZM54 52.8H48V43.2H54V52.8ZM54 40.8H39.6V31.2H54V40.8Z"
                                        fill="#47BDFF"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_189_765">
                                        <rect width="60" height="60" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <a
                            href="javascript:"
                            class="relative inline-block py-5 text-2xl font-bold text-secondary transition line-clamp-1 hover:text-primary sm:py-8"
                        >
                            Heigh quality products
                            <span
                                class="absolute top-1/2 -translate-y-1/2 text-[64px] font-extrabold text-black/[0.05] ltr:left-0 rtl:right-0 dark:text-white/[0.05]"
                                >03</span
                            >
                        </a>
                        <p class="text-lg font-medium">Lorem ipsum dolot amet, consectetur adipiscing elit, sed do eiusmod tempor ever since the 1500s.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-black py-12 dark:bg-gray-dark md:py-[75px]">
            <div class="container">
                <div class="flex flex-col items-center justify-between gap-7 text-center sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                    <p class="flex-1 text-2xl font-bold text-white md:text-3xl">An innovative company working with the latest technologies</p>
                    <button type="button" class="btn flex-none rounded-md text-white shadow-[10px_15px_30px_rgba(119,128,161,0.2)]">Get A Quote</button>
                </div>
            </div>
        </section>

        <section class="py-12 lg:py-24">
            <div class="container">
                <div class="heading text-center">
                    <h4 class="!font-black">ULTRA <span class="text-secondary">PERFORMANCE</span></h4>
                    <h5 class="mx-auto mt-2 max-w-[507px] !font-medium !text-gray dark:!text-white">
                        Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit cuat ipsum.
                    </h5>
                </div>
                <div class="grid gap-8 lg:grid-cols-2" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div>
                        <div class="flex items-center justify-between text-black dark:text-white">
                            <p class="text-xl font-bold">BUILDINGS</p>
                            <p class="text-xl font-bold">95%</p>
                        </div>
                        <div class="relative mt-2.5 h-[15px] rounded-[15px] bg-gray/20">
                            <div class="absolute h-[15px] rounded-[15px] bg-primary px-40 sm:px-60"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-black dark:text-white">
                            <p class="text-xl font-bold">ARCHITECTURE</p>
                            <p class="text-xl font-bold">60%</p>
                        </div>
                        <div class="relative mt-2.5 h-[15px] rounded-[15px] bg-gray/20">
                            <div class="absolute h-[15px] rounded-[15px] bg-primary px-28 sm:px-40"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-black dark:text-white">
                            <p class="text-xl font-bold">CONSTRUCTIONS</p>
                            <p class="text-xl font-bold">70%</p>
                        </div>
                        <div class="relative mt-2.5 h-[15px] rounded-[15px] bg-gray/20">
                            <div class="absolute h-[15px] rounded-[15px] bg-primary px-32 sm:px-[180px]"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-black dark:text-white">
                            <p class="text-xl font-bold">PLANNING</p>
                            <p class="text-xl font-bold">40%</p>
                        </div>
                        <div class="relative mt-2.5 h-[15px] rounded-[15px] bg-gray/20">
                            <div class="absolute h-[15px] rounded-[15px] bg-primary px-20 sm:px-32"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white pt-12 dark:bg-gray-dark lg:pt-24">
            <div class="container">
                <div class="heading text-center">
                    <h4 class="!font-black">SOME OF <span class="text-primary">OUR ESTEEMED PROJECTS</span></h4>
                    <h6 class="mx-auto mt-2 max-w-[507px] !font-medium !text-gray dark:!text-white">
                        Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit cuat ipsum.
                    </h6>
                </div>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project1.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 0;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >The Atmosphere</a
                        >
                        <p class="text-base font-semibold">Chicago, USA</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project2.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 1;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Wavelength Structure</a
                        >
                        <p class="text-base font-semibold">Madrid, Spain</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project3.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 2;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Greenhouse Garden</a
                        >
                        <p class="text-base font-semibold">Bali, Indonesia</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project4.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 3;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Industrial Hub</a
                        >
                        <p class="text-base font-semibold">Beijing, China</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project5.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 4;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Corporate Headquarters</a
                        >
                        <p class="text-base font-semibold">California, USA</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project6.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 5;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Space Station</a
                        >
                        <p class="text-base font-semibold">Moscow, Russia</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project7.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 6;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javascript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Bent Architecture</a
                        >
                        <p class="text-base font-semibold">Melbourne, Australia</p>
                    </div>
                </div>
                <div class="group">
                    <div class="relative overflow-hidden">
                        <img src="/assets/images/construction/project8.jpg" class="duration-200 group-hover:rotate-2 group-hover:scale-110" alt="" />
                        <div
                            class="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100"
                        >
                            <a
                                href="javascript:"
                                class="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                @click="
                                    visible = true;
                                    index = 7;
                                "
                            >
                                <svg class="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 6.66663V25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.66667 16H25.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="space-y-2.5 p-3 text-center sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                        <a
                            href="javsacript:"
                            class="text-lg font-bold text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                            >Lakeview Center</a
                        >
                        <p class="text-base font-semibold">Auckland, New Zealand</p>
                    </div>
                </div>
            </div>
            <vue-easy-lightbox
                :visible="visible"
                :imgs="items"
                :index="index"
                moveDisabled
                loop
                @hide="
                    index = null;
                    visible = false;
                "
            ></vue-easy-lightbox>
        </section>

        <section class="mt-12 bg-black py-[50px] dark:bg-gray-dark lg:mt-24">
            <div class="container">
                <div class="grid grid-cols-2 justify-between gap-7 text-center sm:grid-cols-4" data-aos="fade-up" data-aos-duration="1000">
                    <div>
                        <count-up
                            class="text-[40px] font-black leading-[50px] text-white"
                            startVal="0"
                            :end-val="8350"
                            :duration="10"
                            :options="{ suffix: '' }"
                        >
                        </count-up>
                        <p class="mt-2 text-lg font-semibold">Hours of Works</p>
                    </div>
                    <div>
                        <count-up class="text-[40px] font-black leading-[50px] text-white" startVal="0" :end-val="240" :duration="10" :options="{ suffix: '' }">
                        </count-up>
                        <p class="mt-2 text-lg font-semibold">Projects Complete</p>
                    </div>
                    <div>
                        <count-up class="text-[40px] font-black leading-[50px] text-white" startVal="0" :end-val="120" :duration="10" :options="{ suffix: '' }">
                        </count-up>
                        <p class="mt-2 text-lg font-semibold">Feedback Received</p>
                    </div>
                    <div>
                        <count-up class="text-[40px] font-black leading-[50px] text-white" startVal="0" :end-val="20" :duration="10" :options="{ suffix: '' }">
                        </count-up>
                        <p class="mt-2 text-lg font-semibold">Awards Winning</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-12 lg:py-24">
            <div class="container">
                <div class="heading text-center">
                    <h4 class="!font-black">MEET <span class="text-secondary">OUR TEAM</span></h4>
                    <h6 class="mx-auto mt-[18px] max-w-[663px] !font-medium !text-gray dark:!text-white">
                        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                        ornare odio.
                    </h6>
                </div>
            </div>
            <div class="container relative px-16">
                <div
                    class="team-swiper-button-prev absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary duration-200 hover:bg-primary hover:text-white"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.5892 14.4111L9.41083 15.5895L3.82167 10.0003L9.41083 4.41113L10.5892 5.58947L7.01167 9.16697H15V10.8336H7.01167L10.5892 14.4111Z"
                            fill="currentcolor"
                        />
                    </svg>
                </div>
                <div
                    class="team-swiper-button-next absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary text-primary duration-200 hover:bg-primary hover:text-white"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.41083 14.4111L10.5892 15.5895L16.1783 10.0003L10.5892 4.41113L9.41083 5.58947L12.9883 9.16697H5V10.8336H12.9883L9.41083 14.4111Z"
                            fill="currentcolor"
                        />
                    </svg>
                </div>
                <swiper
                    :loop="true"
                    :slidesPerView="4"
                    :spaceBetween="30"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :breakpoints="{
                        320: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                        1600: {
                            slidesPerView: 4,
                        },
                    }"
                    :navigation="{
                        nextEl: '.team-swiper-button-next',
                        prevEl: '.team-swiper-button-prev',
                    }"
                    :modules="[Navigation, Autoplay]"
                    :dir="store.direction === 'rtl' ? 'rtl' : 'ltr'"
                    :key="store.direction === 'rtl' ? 'true' : 'false'"
                    class="swiper team-member text-center"
                >
                    <swiper-slide class="relative">
                        <div class="overflow-hidden rounded-3xl">
                            <img src="/assets/images/construction/team1.jpg" class="h-full w-full object-cover" alt="" />
                        </div>
                        <h3 class="mt-2 text-xl font-extrabold text-black dark:text-white">Oscar Helman</h3>
                        <p class="mt-2.5 text-sm font-semibold">Founder & CEO</p>
                    </swiper-slide>
                    <swiper-slide class="relative">
                        <div class="overflow-hidden rounded-3xl">
                            <img src="/assets/images/construction/team2.jpg" class="h-full w-full object-cover" alt="" />
                        </div>
                        <h3 class="mt-2 text-xl font-extrabold text-black dark:text-white">James Hoult</h3>
                        <p class="mt-2.5 text-sm font-semibold">Founder & CEO'</p>
                    </swiper-slide>
                    <swiper-slide class="relative">
                        <div class="overflow-hidden rounded-3xl">
                            <img src="/assets/images/construction/team3.jpg" class="h-full w-full object-cover" alt="" />
                        </div>
                        <h3 class="mt-2 text-xl font-extrabold text-black dark:text-white">Steve johnson</h3>
                        <p class="mt-2.5 text-sm font-semibold">Project Manager</p>
                    </swiper-slide>
                    <swiper-slide class="relative">
                        <div class="overflow-hidden rounded-3xl">
                            <img src="/assets/images/construction/team4.jpg" class="h-full w-full object-cover" alt="" />
                        </div>
                        <h3 class="mt-2 text-xl font-extrabold text-black dark:text-white">Amy reacher</h3>
                        <p class="mt-2.5 text-sm font-semibold">Dentist</p>
                    </swiper-slide>
                </swiper>
            </div>
        </section>

        <!-- <section class="bg-black/[0.05] py-12 dark:bg-gray-dark lg:py-24">
            <div class="container">
                <div class="mx-auto lg:w-[730px]">
                    <faq type="construction"></faq>
                </div>
            </div>
        </section> -->

        <section class="overflow-hidden py-12 lg:py-24">
            <div class="container">
                <div class="heading text-center">
                    <h4 class="!font-black">RECENT <span class="text-secondary">NEWS</span></h4>
                    <h5 class="mt-2 !font-medium !text-gray dark:!text-white">Check out our latest blog posts</h5>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000">
                    <div class="group relative overflow-hidden rounded-xl border-2 border-transparent duration-200 hover:border-secondary">
                        <a href="javascript:" class="absolute inset-0 h-full w-full"></a>
                        <img src="/assets/images/construction/news1.jpg" alt="" />
                        <div class="space-y-[14px] bg-white px-4 py-5 group-hover:bg-secondary/20 dark:bg-gray-dark">
                            <p class="text-base font-semibold">November 28, 2022</p>
                            <h5 class="text-xl font-extrabold text-black hover:text-secondary dark:text-white">FUTURE PROOFING HOSPITALS</h5>
                            <p class="text-base font-medium">Lorem ipsum dolor amet consectetur adipisicing elit eiusm tempor incididunt...</p>
                        </div>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl border-2 border-transparent duration-200 hover:border-secondary">
                        <a href="javascript:" class="absolute inset-0 h-full w-full"></a>
                        <img src="/assets/images/construction/news2.jpg" alt="" />
                        <div class="space-y-[14px] bg-white p-5 group-hover:bg-secondary/20 dark:bg-gray-dark">
                            <p class="text-base font-semibold">November 28, 2022</p>
                            <h5 class="text-xl font-extrabold text-black dark:text-white">BIKE PARTS WAREHOUSE, DE</h5>
                            <p class="text-base font-medium">Lorem ipsum dolor amet consectetur adipisicing elit eiusm tempor incididunt...</p>
                        </div>
                    </div>
                    <div class="group relative overflow-hidden rounded-xl border-2 border-transparent duration-200 hover:border-secondary">
                        <a href="javascript:" class="absolute inset-0 h-full w-full"></a>
                        <img src="/assets/images/construction/news3.jpg" alt="" />
                        <div class="space-y-[14px] bg-white p-5 group-hover:bg-secondary/20 dark:bg-gray-dark">
                            <p class="text-base font-semibold">November 28, 2022</p>
                            <h5 class="text-xl font-extrabold text-black dark:text-white">JOY HOTEL & CASINO</h5>
                            <p class="text-base font-medium">Lorem ipsum dolor amet consectetur adipisicing elit eiusm tempor incididunt...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="dark:bg-gray-dark">
            <Testimonial class="relative py-14 lg:py-[100px]" :feedbacks="feedbacks"></Testimonial>
        </section>
    </div>
</template>
<script setup lang="ts">
    import CountUp from 'vue-countup-v3';
    import Testimonial from '@/components/Testimonial.vue';
    import Faq from '@/components/Faq.vue';
    import { ref } from 'vue';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Autoplay } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import { useAppStore } from '@/stores/index';
    import VueEasyLightbox from 'vue-easy-lightbox';
    const visible = ref(false);
    const index: any = ref(null);
    const items = ref([
        { src: '/assets/images/construction/project1.jpg' },
        { src: '/assets/images/construction/project2.jpg' },
        { src: '/assets/images/construction/project3.jpg' },
        { src: '/assets/images/construction/project4.jpg' },
        { src: '/assets/images/construction/project5.jpg' },
        { src: '/assets/images/construction/project6.jpg' },
        { src: '/assets/images/construction/project7.jpg' },
        { src: '/assets/images/construction/project8.jpg' },
    ]);
    const store = useAppStore();

    const feedbacks = ref([
        {
            id: 1,
            name: 'Jack danver',
            role: 'Patient of cancer',
            thumbnail: '/assets/images/healthcare/healthcare-testimonial-img.png',
            message: 'I had a great experience with doctor ralph Edward. His surgery technique is very good. i satisfied with his team members. Thank you!!',
        },
    ]);
</script>
<style>
    [data-height-collapsible] {
        transition: height 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
</style>
