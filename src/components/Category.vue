<template>
    <div class="container">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="category in jsonData">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <div
                        class="group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style="box-shadow: -20px 30px 70px rgba(219, 222, 225, 0.4)"
                    >
                        <div
                            class="flex h-14 w-14 items-center justify-center rounded-full bg-secondary transition group-hover:bg-black"
                            style="box-shadow: 0px 15px 30px rgba(180, 118, 229, 0.4)"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    opacity="0.5"
                                    d="M14.2371 18.7087L18.7103 14.2366L21.4893 17.0156V21.4888H17.0172L14.2371 18.7087ZM5.2917 9.76334L2.3092 6.7819C2.21118 6.68399 2.13342 6.56771 2.08036 6.43973C2.02731 6.31174 2 6.17455 2 6.03601C2 5.89746 2.02731 5.76027 2.08036 5.63229C2.13342 5.5043 2.21118 5.38803 2.3092 5.29012L5.2917 2.30867C5.4894 2.11103 5.75751 2 6.03706 2C6.31662 2 6.58472 2.11103 6.78242 2.30867L9.76598 5.29012L5.2917 9.76334Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M5.29177 12.7459L7.21895 14.6742L8.71179 13.1813L6.78249 11.2552L8.27321 9.76449L10.2015 11.6917L11.6922 10.201L9.76605 8.27271L11.2568 6.78199L13.1818 8.71128L14.6736 7.2195L12.7454 5.29232L15.7279 2.31087C15.9256 2.11323 16.1937 2.0022 16.4732 2.0022C16.7528 2.0022 17.0209 2.11323 17.2186 2.31087L21.6908 6.78304C21.8884 6.98074 21.9994 7.24885 21.9994 7.5284C21.9994 7.80795 21.8884 8.07606 21.6908 8.27376L8.27321 21.6913C8.07551 21.889 7.8074 22 7.52785 22C7.2483 22 6.98019 21.889 6.78249 21.6913L2.31032 17.2192C2.11268 17.0215 2.00165 16.7533 2.00165 16.4738C2.00165 16.1942 2.11268 15.9261 2.31032 15.7284L5.29177 12.7459Z"
                                    fill="white"
                                ></path>
                            </svg>
                        </div>
                        <router-link
                            :to="`/servicesDetail/${category?.link}`"
                            class="my-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"
                            >{{category?.category}}</router-link
                        >
                        <p class="mb-10 text-lg font-semibold transition line-clamp-3 dark:group-hover:text-black">
                            {{category?.description}}
                        </p>
                        <router-link
                            :to="`/servicesDetail/${category?.link}`"
                            class="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3F4F6] transition group-hover:bg-black dark:bg-gray-dark"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="text-black transition group-hover:text-white rtl:rotate-180 dark:text-white"
                            >
                                <path
                                    d="M9.41083 14.4109L10.5892 15.5892L16.1783 10.0001L10.5892 4.41089L9.41083 5.58922L12.9883 9.16672H5V10.8334H12.9883L9.41083 14.4109Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import {ref, onMounted} from 'vue';
    defineProps({
        showTitle: {
            type: Boolean,
            default: true,
        },
    });
    
    const jsonData = ref([]);
    // let firstDescription = ref([]);

    onMounted(async () => {
    try {
        const response = await fetch('/json/categories.json');
        jsonData.value = await response.json();
    } catch (error) {
        console.error('Error fetching JSON data: ', error);
    }
    });
    
</script>
