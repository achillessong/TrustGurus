<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Game Development</h6>
                            <h4 class="!text-white">Submissions open for Godot 2019 showreel</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Achilles</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    Octover 2, 2023
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    4 mins read
                                </li>
                            </ul>
                        </div>
                        <div
                            class="top-0 mt-6 ltr:right-0 rtl:left-0 md:mt-0 lg:absolute"
                            :data-aos="store.direction === 'rtl' ? 'fade-right' : 'fade-left'"
                            data-aos-duration="1000"
                        >
                            <img
                                src="/src/blogs/achilles/blog-four.png"
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
                    <h4>Industry Veterans Create New Match-Three RPG Game, Puzzle Knights</h4>
                    <p>
                        Most days, you won’t hear us talk too much about a gaming genre that’s been beaten to death with a large stick, but upcoming Puzzle Knights is an exception to that rule, what with it’s interesting blend of, yes, matching colors, but also tactical strategy, light RPG elements, and online arena battles.
                    </p>
                    <p>
                        The game is expected to release sometime in the first or second week of September, so keep your eyes on this one. It’s exclusive to iOS, but will let you connect via Facebook to battle your FB friends.
                    </p>
                    <p>
                        Developer Mojaro was founded by Laurent Ancessi, who has worked in the gaming industry for over 25 years, with a variety of top tier companies, like Electronic Arts, Sony, Radical Entertainment, and Naughty Dog. It’s interesting, then, that a company with such an amazing pedigree would create a free-to-play game like this, which is why Puzzle Knights bears watching.
                    </p>
                    
                    <p>
                        In Puzzle Knights, you’ll match gems of the same color to power up your knight, who you can then send into battle with a set of attack moves that you plan out ahead of time, hoping to overcome your opponent, who is doing the same thing.
                    </p>
                    <p>
                        The battles are asynchronous, so you can hop in and play any time without having to wait for your elusive buddies on Facebook, and you can even tap through your combat history to get revenge on any particularly nasty folks that have beaten you soundly.
                    </p>
                    <p>
                        After each match, you’ll get experience points and in-game gold, which lets you level up your knight and purchase better armor and weaponry from the in-app store. Obviously, you’ll also be able to purchase said currency with real currency, as well.
                    </p>
                    <p>
                        Puzzle Knights is coming to an iOS device near you within the next couple of weeks.
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
