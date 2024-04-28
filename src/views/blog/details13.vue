<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Flutter</h6>
                            <h4 class="!text-white">Google announces Flutter support for Windows</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Pradeep Viswav</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    September 23, 2020
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    1 mins read
                                </li>
                            </ul>
                        </div>
                        <div
                            class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/src/blogs/flutter.webp"
                                alt="blog-detail-hero"
                                class="mx-auto h-80 rounded-[32px] object-cover sm:h-[400px] sm:w-[445px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gradient-to-t from-white to-transparent py-14 dark:bg-none md:py-[100px]">
            <div class="container">
                <div class="prose max-w-full dark:prose-invert">
                    <h2>Where does it come from?</h2>
                    <p>
                        Google announced Flutter back in 2015 as a cross-platform UI that allows developers to use a single codebase to build UIs for native Android and iOS apps, web apps, and desktop. In June, Google said that it is looking for assistance from Microsoft to bring Flutter to Microsoft. Today, Google announced the alpha release of Flutter support for Windows. With native desktop support, Flutter developers can enjoy improved developer tooling on Windows.
                    </p>
                    <p>
                        “This alpha release offers a solid foundation that we’ll stabilize over the coming months. With support for Windows 7 and above, we hope this gives adventurous developers something to get started with,” wrote Flutter team in its blog post.
                    </p>
                    <p>
                        Flutter apps are compiled to native 64-bit code that you can package and bring to other Windows PCs just like any other native app. Also, you can use that same codebase to create an app targeting Android, iOS, web, macOS, and Linux.
                    </p>
                    <p>
                        You can read the desktop documentation on flutter.dev for more details.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
