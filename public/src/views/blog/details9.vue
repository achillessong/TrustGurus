<template>
    <div>
        <div class="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
            <div class="relative">
                <div class="container">
                    <div class="relative w-full py-14 md:my-14 md:inline-block md:py-0 lg:my-[128px]">
                        <div class="heading relative mb-8 text-center lg:mb-0 lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Frontend Development</h6>
                            <h4 class="!text-white">Frontend Optimization - 9 Tips to Improve Web Performance</h4>
                            <ul class="items-center justify-center pt-6 sm:flex lg:justify-start">
                                <li class="flex items-center justify-center">
                                    <span class="px-4 font-semibold sm:text-lg">Teddy</span>
                                </li>
                                <li
                                    class="relative px-4 font-semibold before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray ltr:before:left-0 rtl:before:right-0 sm:text-lg sm:before:h-1 sm:before:w-1"
                                >
                                    July 30, 2020
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
                                src="/src/blogs/teddy/blog-three.png"
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
                        In today's digital world, there are millions of websites accessed every day for a variety of reasons. Unfortunately, many of these websites are clunky and bothersome to use. Poorly optimized websites are plagued with a variety of issues including slow loading times, being non-mobile ready, browser incompatibilities, and so on.
                    </p>
                    <p>
                        This post will go over useful techniques you can use to help improve your frontend optimization. By focusing on clean code, compressing images, minimizing external requests, implementing a CDN, and a few other methods, you can dramatically increase the speed and overall performance of your website.
                    </p>

                    <h4>1. Clean up the HTML document</h4>
                    <p>
                        HTML, or hypertext markup language, is the backbone of nearly every website. HTML allows you to format webpages with headings, subheadings, lists, and other useful text-organizing features. With the most recent updates in HTML5, you can also create attractive graphics.
                    </p>
                    <p>HTML can be easily read by web crawlers, so search engines can be updated with your website's content in a timely manner. When dealing with HTML, you should strive to write in a manner that is both concise and effective. Additionally, when it comes to referencing other resources within your HTML document there are a few best practices you should follow.</p>

                    <h4>2. Optimize CSS performance</h4>
                    <p>
                        CSS, or cascading style sheets, can be used to transform your HTML-based content into a clean and professional document. Many CSS options require HTTP requests (unless using inline CSS), so you should make an effort to minimize bloated CSS files without eliminating vital features.
                    </p>
                    <p>
                        If your banner, plugin, and layout link styles are all located in separate CSS files, this will require your visitors' browsers to load numerous files at once. Although now less of a problem thanks to HTTP/2, this can certainly still attribute to longer load times if the files are loaded from external sources. Read our WordPress Performance article to see how reducing HTTP requests improved loading times dramatically.
                    </p>
                    <p>
                        Additionally, any webmasters mistakenly use the @import directive to include external style sheets on a webpage. This is an outdated method, and it prevents browsers from performing parallel downloads. The link tag is your best option and will also improve the frontend performance of your website. Furthermore, external style sheets requested with the link tag do not block parallel downloads.
                    </p>
                    <h4>3. Reduce external HTTP requests</h4>
                    <p>
                        In many cases, a large portion of a website's load time comes from external HTTP requests. The speed at which an external resource loads can vary depending on the hosting provider's server infrastructure, location, etc. Your first goal when reducing external HTTP requests should be to examine your website with a minimalist outlook. Study each component of your webpages, and eliminate any features that do not improve the experience of your visitors. These features may be:
                    </p>
                    <ul>
                        <li>Unnecessary images</li>
                        <li>Unnecessary JavaScript</li>
                        <li>UExcessive CSS</li>
                        <li>Unnecessary plugins</li>
                    </ul>

                    <h4>4. Minify CSS, JavaScript, and HTML</h4>
                    <p>
                        Minification techniques can help you eliminate unnecessary characters within a file. When you are writing code in an editor, you likely use indentations and notes. These methods certainly keep your code clean and readable, but they also add extra bytes to your document.
                    </p>
                    <p>
                        You can easily trim the bytes in your CSS, JS, and HTML files by using a minification tool. For more information on minification, read out complete post How To Minify CSS, JS, and HTML.
                    </p>

                    <h4>5. Enable prefetching</h4>
                    <p>
                        Prefetching can improve your visitors' browsing experience by fetching necessary resources and related data before they are needed. There are 3 main types of prefetching:
                    </p>
                    <ul>
                        <li>Link Prefetching</li>
                        <li>DNS Prefetching</li>
                        <li>Prerendering</li>
                    </ul>
                    <p>
                        With prefetching, the URL, CSS, images, and JavaScript are gathered for each link before you even leave your current webpage. This ensures that visitors can use links to navigate between pages with minimal loading times.
                    </p>
                    <p>
                        Fortunately, prefetching is easy to enable. Depending upon the type of prefetching you want to enable, you can simply add the rel="prefetch", rel="dns-prefetch", or rel="prerender" tag to your link attributes within your website's HTML.
                    </p>

                    <h4>6. Increase speed with a CDN and caching</h4>
                    <p>
                        You can significantly improve the speed and performance of your website by using a content delivery network. When you use a CDN, you link your website's static content to an extended network of servers across the globe. This is especially important if your website caters to a global audience. The CDN allows your site's visitors to load data from their nearest server. If you use a CDN, your site's files will automatically be compressed for rapid delivery across the globe.
                    </p>
                    <p>
                        A CDN is one method of caching that can greatly help improve the delivery times of your assets, however, there are other caching techniques that you can implement as well - one of which is to leverage browser caching.
                    </p>
                    <p>
                        Properly setting up browser caching allows your browser to store certain files within its own cache to be delivered faster. Configuring this method can be done directly within your origin server's configuration file.
                    </p>

                    <h4>7. Compress your files</h4>
                    <p>
                        While many CDN services will compress your files for you, if you don't use a CDN consider using a file compression method on your origin server to improve your frontend optimization. File compression will make your site's content light and easy to manage. One of the most commonly used file compression methods is Gzip. This is an excellent method for shrinking documents, audio files, PNG images, and other bulky files that have not already been compressed.
                    </p>
                    <P>
                        Brotli is another file compression algorithm that is still fairly new, however growing in popularity. This open source algorithm is regularly updated by software engineers from Google and other organizations. It has proven itself to compress files at a much better ratio than other existing methods. Although support for this algorithm is still minimal it is well positioned to be the next default file compression algorithm.
                    </P>
                    <h4>8. Optimize your images</h4>
                    <p>
                        For people who are unaccustomed to the ways of frontend optimization, images can be a website-killer. Massive photo albums and large high-resolution images on your site can jam the rendering process. High-definition images that are not optimized can weigh several megabytes. Therefore, properly optimizing these will allow you to improve your site's frontend performance.
                    </p>
                    <p>
                        Each image file contains a trove of information that isn't related to the actual photograph or picture. For JPEG photographs, the file contains dates, locations, camera specifications, and other irrelevant information. You can streamline an image's lengthy loading process by deleting this extra image data with optimization tools such as Optimus. Optimus uses smart compression in that it uses losslessly optimizes PNG images.
                    </p>
                    <p>
                        On the other hand, Optimus uses slight lossy compression for JPEG images. Although lossy compression actually removes additional data from the image, the Optimus lossy compression settings are defined at a level where the user will see no visible quality loss. This allows users to save big on file sizes while maintaining high quality images.
                    </p>

                    <h4>9. Use a minimalistic framework</h4>
                    <p>
                        Unless you are building your website with solely your own coding knowledge, you can avoid many amateur frontend optimization mistakes by using a good frontend framework. Although some larger, more well-known, frameworks come with a bunch of additional features and options, your web project may not require them all.
                    </p>
                    <p>
                        Frontend optimization can seem like an intimidating endeavor, but you can greatly improve the loading speed of your website by applying the principles of this guide. Remember, the faster your website loads, the better user experience your visitors will have. Therefore, ultimately benefiting you and your visitors alike. Let us know in the comments section if you have any other great frontend optimization tips.
                    </p>
                    <P>
                        That's why it's important to determine what features your project requires and start with a framework that can provide those features while remaining lightweight. Some of the most recently designed frameworks use concise HTML, CSS, and JavaScript code.
                    </P>
                    <P>
                        A framework is not a replacement for careful web design, programming, and maintenance. For simplification, imagine that the framework is a new house. The house is clean and presentable, but it is also empty. When you add furniture, appliances, and decorations, it is your responsibility to ensure that the house does not become cluttered. Likewise, it is also your responsibility to make sure that the framework is not ruined by redundant codes, large images, and excessive HTTP requests.
                    </P>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
    import { useAppStore } from '@/stores/index';
    const store = useAppStore();
</script>
