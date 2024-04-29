<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Web Development</h6>
                            <h4 class="!text-white">Next.js SEO for Developers – How to Build Highly Performant Apps with Next</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Teddy</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    september 20, 2023
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    5 mins read
                                </li>
                            </ul>
                        </div>
                        <div
                            class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/src/blogs/teddy/blog-two.jpg"
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
                        Next.js is a popular React-based web framework that has gained popularity and a growing community in recent years. It's a powerful tool for building fast and SEO-friendly web applications with dynamic pages that work great on mobile devices.
                    </p>
                    <p>
                        RDue to the complex nature of isomorphic system design, Next.js SEO can be a tricky topic to get your head around. Especially if you're coming from traditional React apps and you're relying solely on documentation.
                    </p>

                    <p>
                        With its built-in support for server-side rendering, static site generation, and now React server components, Next.js provides a robust platform for achieving quality SEO web metrics in your web application. It also helps you deliver exceptional user experiences across multiple pages in Node and React apps while making them SEO friendly.
                    </p>

                    <h4>Why Should You Learn NextJS for Front End Development?</h4>
                    <p>
                        In short, the newest version of NextJS is an open source platform that addresses a lot of rendering issues that React currently has. I wrote this article because a lot of front end developers get mad at me
                    </p>
                    <p>
                        They spend 6-9 months developing a React App, and then I have to ask them to refactor their code.
                    </p>
                    <p>
                        Next.js avoids a lot of rending issues – it makes it very easy for search engines to understand what your website is all about.
                    </p>
                    <h4>How Should You Render Your Next JS Web Page Application?</h4>
                    <p>
                        I've personally reviewed a ton of theses websites from my consultancy OhMyCrawl and made a video overview to help understand the benefits of using frameworks such as Next.js for SEO:
                    </p>
                    <h4>How is Next SEO Different from Other Frameworks?</h4>
                    <p>
                        Next SEO sets itself apart by streamlining so many features and free tools into a well-organized package that you can easily digest and apply in your single page applications. Next does a great job when it comes to tasks such as search engine optimization, image optimization, and minimizing cumulative layout shift.
                    </p>
                    <p>
                        The benefits of Next.js SEO don't stop there. We’ll be covering many of the goodies that Next.js brings to the table related to search engines, old and new.
                    </p>
                    <h4>Search Engines, SSR, and SSG Concepts Are Evolving</h4>
                    <p>
                        Most developers and SEO experts have become pretty comfortable with the existing page creation strategies and the whole SSR vs SSG paradigm. They've also developed a high level of trust in version 12 of Next.js, which provides a clear cut way to handle these two forms of page generation.
                    </p>
                    <p>
                        As usual, though, yet another web app paradigm shift is underway, this time in the form of React Server Components (RSCs), which are included by default in Next.js version 13.
                    </p>
                    <h4>What’s New With Next.js 13 that Relates to SEO?</h4>
                    <p>
                        Rather than give you a comprehensive guide to the technical changes found in version 13, we’re going to focus mainly on Next JS SEO related advantages. We'll also look at how you can leverage the best SEO practices to achieve the best possible results in search engines with much less sweat off your back than is typically needed.
                    </p>
                    <p>
                        The version 13 changes we’ll discuss here are as follows:
                    </p>
                    <ul>
                        <li>React server components</li>
                        <li>Streaming UI chunks</li>
                        <li>Updated Next Image component</li>
                        <li>Next Font component</li>
                    </ul>
                    <p>On top of the existing default SEO properties of Next, these particular upgrades are the cornerstone of Next.js SEO improvements in version 13. Each one is awesome for its own reasons, which we’ll be going over shortly.</p>

                    <h4>How to Implement Structured Data With Next 13</h4>
                    <p>
                        Next recommends adding structured JSON-LD data to the layout or page component. In all honesty, this has always been a much simpler solution because Google has never said anything about excluding structured data from the page itself.
                    </p>
                    <p>
                        In fact, this has long been a common practice, and it’s a bit of a mystery as to why many developers have become fixed on the idea of placing it in the head tag.
                    </p>
                    <p>
                        How to Add Structured Data to the Layout or Page Component
                    </p>
                    <p>
                        Adding structured data to a component, whether the layout or page, looks something like this (example pulled straight from the docs):
                    </p>
                    <p>
                        As you can see, this is super simple, and there’s really no need to complicate things by attempting to inject structured data into the head tag.
                    </p>
                    <h4>Next.js SEO – Wrapping Things Up</h4>
                    <p>
                        We went over quite a bit here for Nextjs SEO. From the new features included with Next 13 that aim to solve many SEO related problems, to old features being revamped and streamlined for a better developer experience, things are looking great for Next.
                    </p>
                    <p>
                        If you plan on using Next.js as your framework of choice, I highly recommend experimenting with Next 13. Although features such as the Font component are still in beta, and the whole thing is still in canary (testing phase), much of version 13 is already considered stable and being used by many developers and the world's leading companies.
                    </p>
                    <p>
                        Major version updates can be daunting, but make sure to read the full documentation and give it a spin in order to ensure you’re staying at the cutting edge of Next.js SEO.
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
