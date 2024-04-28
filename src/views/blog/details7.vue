<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>BlockChain</h6>
                            <h4 class="!text-white">Top 5 ways to Integrate Bitcoin Payment Solutions into eCommerce Site</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Sophia Reyes</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    May 25, 2018
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
                                src="/src/blogs/blockchain2.png"
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
                        Bitcoin is becoming more and more common among the retailers and has established a global footprint. Today, many retailers are offering BTC as a payment option in the checkout process. According to a study, there are more than 80,000 modern retailers who have started accepting Bitcoin – the digital currency for payments. Bitcoin does not have its limits to online business offline businesses are also start accepting Bitcoin as a payment method.
                    </p>
                    <p>
                        If you are an online or offline retailer and want to follow this suit then hire a bitcoin developer for Bitcoin API integration. There are various ways to integrate bitcoin payment solutions into your website’s payment gateway. We are listing the top 5 ways of Bitcoin payment gateway integration.
                    </p>

                    <p>
                        <b class="!text-white">1. Stripe</b> – Stripe is a San Francisco-based payment platform, which offers two different ways to link Bitcoin payments into the website. It uses a powerful and customizable API to enable Bitcoin in Checkout with special payment forms for both desktops and mobile devices. Checkout is translated into various languages, including the English, Chinese, French, German, Italian, and Spanish.
                    </p>
                    <p>
                        When anyone wishes to pay in BTC, Stripe shows the customer how much they are required to pay and the money should be sent to which address. The processing fee is 0.8% for a transaction with a maximum fee of $5 for transactions over $625. Merchants can cash out their payments via automatic bank transfers per week or month.
                    </p>

                    <p>
                        <b class="!text-white">2. BitPay </b> – One among the largest Bitcoin operators, BitPay, works with popular brands such as Microsoft, Neteller, Virgin Galactic, Valve, and Newegg. The company has myriads readily usable payment solutions and a plethora of add-ons for shopping carts like Magento, Drupal Commerce, Zen Cart, WordPress eCommerce, OpenCart, X-Cart and more.
                    </p>
                    <p>
                        It has three different payment plans custom-made to the needs of the organization’s sizes and types. There is zero transaction fee for up to $1,000 per day or up to 30 transactions per month, for bigger amounts, BitPay charges 1% processing fee. Depending on your plan, you can send daily or weekly payments in currencies like dollars and Euros to the bank account.
                    </p>

                    <p>
                        <b class="!text-white">3. Coinbase</b> – Financial giants like Expedia, Intuit, Overstock, Dell, and Wikimedia use Coinbase payment system for their Bitcoin integration. Coinbase offers a wide range of easy-to-adopt checkout processes, payment buttons, widgets add-ons, and API for merchants who opt to build their own payment solutions.
                    </p>
                    <p>
                        The company charges 1% to convert BTC to local currency. Coinbase is a good choice for startups or small businesses as there is no fee for the first $1,000,000.
                    </p>
                    <p>
                        <b class="!text-white">4. CoinGate</b> – CoinGate offers a wide variety of solutions for multiple business needs including APIs, plugins for E-commerce, and PoS (Point of Sale) applications for web, Android, and iOS with payment buttons. Businesses can accept payments in Bitcoin and receive payouts in USD, EUR, or BTC.
                    </p>
                    <p>
                        <b class="!text-white">5. Cryptopay</b> – Cryptopay is an UK-based service facilitating the buy and sell of bitcoins. Its merchant payment gateway allows businesses to accept Bitcoin/Litecoin on their websites without the need for a digital wallet creation. The company provides an API for developers with a software development kit for Ruby and PHP, NodeJS, and SSL-secured endpoints. Cryptopay charges 1% processing fee.
                    </p>
                    <p>
                        Adding Bitcoin as a payment option benefits businesses in attracting new customers and cut down the operational fees to a great extent. Bitcoin payment gateway integration would be seamless and provide you the opportunity to generate sales and payments from all over the world when you hire bitcoin developer
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
