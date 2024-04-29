<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>AI</h6>
                            <h4 class="!text-white">Our new report on AI's opportunity for developing countries</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Dmytro Bondar</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    June 2, 2021
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
                                src="/src/blogs/ai-3.webp"
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
                        We’re releasing “AI Sprinters,” a new report that provides a roadmap for developing countries to take advantage of AI’s potential. We’re also providing a $15 million Google.org commitment to support AI skills training.
                    </p>
                    <p>
                        AI stands to benefit people worldwide. This is especially true for developing countries across Latin America, the Middle East, Asia and Africa where it can provide game-changing solutions to unique challenges they face — like poor infrastructure, youth unemployment, uneven access to education and health care, and food insecurity.
                    </p>

                    <p>
                        Our AI tools are already optimizing traffic flow in cities like Rio de Janeiro, enabling businesses in Southeast Asia to scale their services, helping farmers in Africa detect locust outbreaks early, and improving health care outcomes for women throughout the developing world. A recent survey shows that developing countries are more optimistic about AI than anywhere else.
                    </p>
                    <p>
                        But AI’s promise will not automatically translate into economic growth and opportunity — it will take concerted action by governments, the private sector and civil society. So today we’re releasing “AI Sprinters,” a new report that shares ways governments and international organizations can use AI to drive economic growth through smart strategic investments and the right set of enabling policies. We’re also providing a $15 million Google.org AI Opportunity commitment to support AI skills training and prepare people across developing countries, with a focus on underserved communities.
                    </p>

                    <h2>Our AI Sprinters report shares four key recommendations:</h2>
                    <ul>
                        <li>
                            <b style="color: white;">Revolutionize infrastructure with 100% adoption of cloud-first policies :</b> Cloud computing is essential for governments, local enterprises and organizations to deploy AI systems cost-effectively, securely and at scale — ensuring that AI is widely and inclusively deployed. Policymakers should advance cloud-first initiatives that prioritize cloud solutions over traditional IT systems.
                        </li>
                        <li>
                            <b style="color: white;">Support people with national AI skill initiatives :</b> AI promises to propel economies forward — but this can only happen if workers know how to use AI to enhance their productivity and expertise. Google.org’s initial AI skilling commitment for developing countries is a first step. More collaboration between the public and private sectors is needed to build AI fluency, strengthen STEM education and increase online learning opportunities.</li>
                        <li>
                            <b style="color: white;">Modernize national data systems :</b> High-quality datasets that represent diverse perspectives, languages and cultures are essential for training AI models effectively for local markets. Governments should commit to better utilizing and sharing data to improve public services like health care, education, transportation and disaster response, and invest in the infrastructure needed to promote responsible use of data. Similarly, governments should enable trusted cross-border data flows to ensure models and systems are trained on rich, geographically diverse data.
                        </li>
                        <li>
                            <b style="color: white;">Modernize national data systems :</b> High-quality datasets that represent diverse perspectives, languages and cultures are essential for training AI models effectively for local markets. Governments should commit to better utilizing and sharing data to improve public services like health care, education, transportation and disaster response, and invest in the infrastructure needed to promote responsible use of data. Similarly, governments should enable trusted cross-border data flows to ensure models and systems are trained on rich, geographically diverse data.
                        </li>
                    </ul>
                    <p>
                        Putting these recommendations into practice will only happen if they are prioritized in country development strategies. So today — a week before the world’s financial leaders gather for the annual World Bank/IMF Spring Meetings — we're calling on governments, international institutions and development agencies to make AI a core pillar of national development plans, including by committing dedicated funding. While these organizations have traditionally focused on areas like healthcare, education and agriculture, AI presents a once-in-a-generation opportunity to transform every sector of the economy.
                    </p>
                    <p>
                        Technological innovations over the past 50 years have lifted billions of people out of poverty. Today, AI offers a similar opportunity. With the right public policies and investments, developing countries can take advantage of AI’s opportunity to close the digital divide and benefit millions of lives.
                    </p>
                    <p>
                        Read our full <b style="color: white;">AI Sprinters report</b>.
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
