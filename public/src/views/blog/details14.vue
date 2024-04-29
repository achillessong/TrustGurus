<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Backend Development</h6>
                            <h4 class="!text-white">Clean Code in Python: Good vs. Bad Practices Examples</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Sophia Reyes</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    September 9, 2021
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    2 mins read
                                </li>
                            </ul>
                        </div>
                        <div
                            class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/src/blogs/stupid/blog-4.jpg"
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
                    <p>
                        In this guide, we’ll delve deeper into the concept of “Clean Code” in Python, contrasting examples of good and bad practices. This comparison will illustrate how clean code principles can transform code from being hard to maintain and understand to being clear and efficient.
                    </p>
                    <h2>Examples of Bad Practices vs. Good Practices</h2>
                    <h3>Example 1:Variables and Function Names</h3>
                    <div class="grid gap-[30px] sm:grid-cols-2">
                        <div class="grid sm:grid-cols-1">
                            <h4>Bad Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/1.jpg" alt="portfolio-img-1" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                In this example, the names of the variables and function are nondescriptive. It’s unclear what each variable represents or what the function does.
                            </p>
                        </div>
                        <div class="grid sm:grid-cols-1">
                            <h4>Good Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/2.jpg" alt="portfolio-img-2" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>This code uses descriptive names, making it much clearer and more readable.</p>
                        </div>
                    </div>
                    <h3>Example 2: Single Responsibility Functions</h3>
                    <div class="grid gap-[30px] sm:grid-cols-2">
                        <div class="grid sm:grid-cols-1">
                            <h4>Bad Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/3.jpg" alt="portfolio-img-1" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                Here, process_data is doing too much: filtering data, calculating an average, and printing results.
                            </p>
                        </div>
                        <div class="grid sm:grid-cols-1">
                            <h4>Good Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/4.jpg" alt="portfolio-img-2" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                Dividing the functionality into three separate functions improves clarity and code reusability.
                            </p>
                        </div>
                    </div>
                    <h3>Example 3: Error Handling</h3>
                    <div class="grid gap-[30px] sm:grid-cols-2">
                        <div class="grid sm:grid-cols-1">
                            <h4>Bad Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/5.jpg" alt="portfolio-img-1" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                This code does not handle the possibility of dividing by zero, which could lead to uncaught errors.
                            </p>
                        </div>
                        <div class="grid sm:grid-cols-1">
                            <h4>Good Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/6.jpg" alt="portfolio-img-2" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                Here, the code proactively handles the possibility of an error, avoiding potential problems.
                            </p>
                        </div>
                    </div>
                    <h3>Example 4: Duplicated Code</h3>
                    <div class="grid gap-[30px] sm:grid-cols-2">
                        <div class="grid sm:grid-cols-1">
                            <h4>Bad Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/7.jpg" alt="portfolio-img-1" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                In this example, printing product details is duplicated in two functions.
                            </p>
                        </div>
                        <div class="grid sm:grid-cols-1">
                            <h4>Good Practice:</h4>
                            <img src="/src/blogs/stupid/blog-4/8.jpg" alt="portfolio-img-2" class="rounded-[2px]" data-aos="fade-up" data-aos-duration="1000" />
                            <p>
                                The function print_product_info eliminates duplication and allows for greater flexibility.
                            </p>
                        </div>
                    </div>
                    <h3>Conclusion</h3>
                    <p>
                        These examples show how “Clean Code” practices can significantly improve the clarity, efficiency, and maintainability of Python code. Adopting these principles not only makes the code easier to work with for you and others but also teaches discipline and attention to detail, valuable skills for any programmer.
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
