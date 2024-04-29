<template>
    <div class="container">
        <div class="overflow-x-auto">
            <ul class="filters portfolio-filter mx-auto flex w-max gap-7 whitespace-nowrap pb-2.5 font-bold dark:text-white">
                <template v-for="portfolioType in portfolioTypes">
                    <li class="filter" :class="{ active: activeTab === portfolioType?.tab }">
                        <button
                            type="button"
                            class="rounded-[10px] bg-gray/5 py-4 px-5 leading-5 transition hover:bg-secondary hover:text-white"
                            @click="activeTab = portfolioType?.tab"
                        >
                            {{portfolioType?.description}}
                        </button>
                    </li>
                </template>
            </ul>
        </div>
        <div class="projects mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <template v-for="portfolio in portfolioes">
                <div class="project" :class="activeTab === 'all' || portfolio?.type.includes(activeTab) ? 'block' : 'hidden'">
                    <div
                        class="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark dark:drop-shadow-none"
                    >
                        <router-link :to="`/portfolio-detail/${portfolio?.id}`" class="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></router-link>
                        <img :src="portfolio?.image" alt="project-1" class="h-52 w-full rounded-t-3xl object-cover" />
                        <div class="p-5 text-sm font-bold">
                            <h6 class="mb-1 text-black dark:text-white">{{portfolio?.title}}</h6>
                            <p>{{portfolio?.category}}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted} from 'vue';
    const portfolioTypes = ref([]);
    const portfolioes = ref([]);
    onMounted(async () => {
    try {
        const portfolioTypesResponse = await fetch('/json/portfolioTypes.json');
        const portfolioResponse = await fetch('/json/portfolio.json')
        portfolioTypes.value = await portfolioTypesResponse.json();
        portfolioes.value = await portfolioResponse.json();
    } catch (error) {
        console.error('Error fetching JSON data: ', error);
    }
    });

    const activeTab = ref('all');
</script>
