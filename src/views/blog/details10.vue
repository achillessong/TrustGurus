<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>AI</h6>
                            <h4 class="!text-white">New ways to search in 2024</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Elizabeth Reid</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    January 17, 2024
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    3 mins read
                                </li>
                            </ul>
                        </div>
                        <div
                            class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/src/blogs/ai-1.webp"
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
                        We’re introducing two major updates to help you search any way, anywhere: Circle to Search and an AI-powered multisearch experience.
                    </p>
                    <p>
                        For more than two decades, we’ve continuously redefined what a search engine can do — always guided by our mission to organize the world’s information and make it universally accessible and useful. This has gone hand in hand with our ongoing advancements in AI, which help us better understand information in its many forms — whether it’s text, audio, images or videos.
                    </p>
                    <p>
                        As part of this evolution, we’ve made it easier to express what you’re looking for in ways that are more natural and intuitive. For instance, you can search with your voice, or you can search with your camera using Lens. And recently, we’ve been testing how generative AI’s ability to understand natural language makes it possible to ask questions on Search in a more natural way.
                    </p>
                    <p>
                        Ultimately, we envision a future where you can search any way, anywhere you want. Now, as we enter 2024, we’re introducing two major updates that bring this vision closer to reality: Circle to Search and an AI-powered multisearch experience. Let’s take a look at what’s ahead.
                    </p>

                    <h3>Circle (or highlight or scribble) to Search</h3>
                    <p>
                        Today we unveiled Circle to Search, a new way to search anything on your Android phone screen without switching apps. With a simple gesture, you can select images, text or videos in whatever way comes naturally to you — like circling, highlighting, scribbling or tapping — and find the information you need right where you are.
                    </p>
                    <p>
                        When something grabs your interest (like these adorable dog goggles), it can be disruptive to stop what you’re doing and use another app or browser to start searching for information. But now, whether you’re texting friends, browsing social media or watching a video, you can search what’s on your screen right when your curiosity strikes. And as we’ve shared, Search and Shopping ads will continue to appear in dedicated ad slots throughout the results page.
                    </p>
                    <p>
                        Circle to Search is launching globally on select premium Android smartphones on January 31, starting with the Pixel 8, the Pixel 8 Pro and the new Samsung Galaxy S24 series.
                    </p>
                    <h3>Point your camera, ask a question, get help from AI</h3>
                    <p>
                        In 2022, we pioneered multisearch in Lens as a new way to search multimodally, with both images and text. Since it launched, multisearch has been best for refining visual queries — like searching for a photo of red sneakers with Lens and adding the word “blue” to find them in your preferred color. But now, thanks to our recent breakthroughs in generative AI, multisearch makes exploring the world easier than ever before.
                    </p>
                    <p>
                        Starting today, when you point your camera (or upload a photo or screenshot) and ask a question using the Google app, the new multisearch experience will show results with AI-powered insights that go beyond just visual matches. This gives you the ability to ask more complex or nuanced questions about what you see, and quickly find and understand key information.
                    </p>
                    <p>
                        For example, imagine you’re at a yard sale and you come across an unfamiliar board game. There’s no box or instructions, so immediately some questions spring to mind: What is this game and how is it played? This is where the new multisearch experience can help.
                    </p>
                    <p>
                        Just take a picture of the game, add your question (“How do you play this?”), and you’ll get an AI-powered overview that brings together the most relevant information from across the web. This way, you can quickly find out what the game is called and how to win. And with the AI-powered overview, it’s easy to dig deeper with supporting links and get all the details.
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
