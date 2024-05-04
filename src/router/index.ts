import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import HomeView from '../views/index.vue';
import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
    // dashboard
    { 
        path: '/', 
        name: 'home', 
        component: HomeView, 
        meta: { title: 'TrustGurus – Tailwind CSS Multipurpose Landing Templates' } },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/index.vue'),
        meta: { title: 'Portfolio | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/1',
        name: 'portfolio-detail/1',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail1.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/2',
        name: 'portfolio-detail/2',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail2.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/3',
        name: 'portfolio-detail/3',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail3.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/4',
        name: 'portfolio-detail/4',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail4.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/5',
        name: 'portfolio-detail/5',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail5.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/6',
        name: 'portfolio-detail/6',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail6.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/7',
        name: 'portfolio-detail/7',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail7.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/8',
        name: 'portfolio-detail/8',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail8.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/9',
        name: 'portfolio-detail/9',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail9.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/10',
        name: 'portfolio-detail/10',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail10.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/11',
        name: 'portfolio-detail/11',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail11.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/12',
        name: 'portfolio-detail/12',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail12.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/13',
        name: 'portfolio-detail/13',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail13.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/14',
        name: 'portfolio-detail/14',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail14.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/15',
        name: 'portfolio-detail/15',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail15.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/16',
        name: 'portfolio-detail/16',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail16.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/17',
        name: 'portfolio-detail/17',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail17.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/18',
        name: 'portfolio-detail/18',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail18.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/19',
        name: 'portfolio-detail/19',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail19.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/20',
        name: 'portfolio-detail/20',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail20.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/21',
        name: 'portfolio-detail/21',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail21.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/22',
        name: 'portfolio-detail/22',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail22.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/portfolio-detail/23',
        name: 'portfolio-detail/23',
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/portfolio/detail23.vue'),
        meta: { title: 'Portfolio Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/index.vue'),
        meta: { title: 'Services | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/design',
        name: '/servicesDetail/design',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailDesign.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/blockchain',
        name: '/servicesDetail/blockchain',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailBlockChain.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/ai',
        name: '/servicesDetail/ai',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailAI.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/game',
        name: '/servicesDetail/game',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailGame.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/web',
        name: '/servicesDetail/web',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailWeb.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/servicesDetail/marketing',
        name: '/servicesDetail/marketing',
        component: () => import(/* webpackChunkName: "services" */ '../views/services/detailMarketing.vue'),
        meta: { title: 'Services Detail | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/team',
        name: 'team',
        component: () => import(/* webpackChunkName: "team" */ '../views/team.vue'),
        meta: { title: 'Team | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: () => import(/* webpackChunkName: "about-us" */ '../views/about-us.vue'),
        meta: { title: 'About Us | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/career',
        name: 'career',
        component: () => import(/* webpackChunkName: "career" */ '../views/career.vue'),
        meta: { title: 'Career | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: () => import(/* webpackChunkName: "contact-us" */ '../views/contact-us.vue'),
        meta: { title: 'Contact Us | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/terms-conditions',
        name: 'terms-conditions',
        component: () => import(/* webpackChunkName: "terms-conditions" */ '../views/terms-conditions.vue'),
        meta: { title: 'Terms Conditions | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: () => import(/* webpackChunkName: "privacy-policy" */ '../views/privacy-policy.vue'),
        meta: { title: 'Privacy Policy | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/faq',
        name: 'FAQs',
        component: () => import(/* webpackChunkName: "FAQs" */ '../views/faq.vue'),
        meta: { title: 'FAQs | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/index.vue'),
        meta: { title: 'Blog | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/1',
        name: 'blog-details/1',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details1.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/2',
        name: 'blog-details/2',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details2.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/3',
        name: 'blog-details/3',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details3.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/4',
        name: 'blog-details/4',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details4.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/5',
        name: 'blog-details/5',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details5.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/6',
        name: 'blog-details/6',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details6.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/7',
        name: 'blog-details/7',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details7.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/8',
        name: 'blog-details/8',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details8.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/9',
        name: 'blog-details/9',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details9.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/10',
        name: 'blog-details/10',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details10.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/11',
        name: 'blog-details/11',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details11.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/12',
        name: 'blog-details/12',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details12.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/13',
        name: 'blog-details/13',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details13.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/14',
        name: 'blog-details/14',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details14.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-details/15',
        name: 'blog-details/15',
        component: () => import(/* webpackChunkName: "blog" */ '../views/blog/details15.vue'),
        meta: { title: 'Blog Details | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/crypto',
        name: 'crypto',
        component: () => import(/* webpackChunkName: "crypto" */ '../views/crypto.vue'),
        meta: { title: 'Crypto | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/real-estate',
        name: 'real-estate',
        component: () => import(/* webpackChunkName: "real-estate" */ '../views/real-estate.vue'),
        meta: { title: 'Real Estate | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/modern-saas',
        name: 'modern-saas',
        component: () => import(/* webpackChunkName: "modern-saas" */ '../views/modern-saas.vue'),
        meta: { title: 'Modern SAAS | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/healthcare',
        name: 'healthcare',
        component: () => import(/* webpackChunkName: "healthcare" */ '../views/healthcare.vue'),
        meta: { title: 'Health Care | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/hotel-resort',
        name: 'hotel-resort',
        component: () => import(/* webpackChunkName: "hotel-resort" */ '../views/hotel-resort.vue'),
        meta: { title: 'Hotel & Resort | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/marketing',
        name: 'marketing',
        component: () => import(/* webpackChunkName: "marketing" */ '../views/marketing.vue'),
        meta: { title: 'Marketing | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/application',
        name: 'application',
        component: () => import(/* webpackChunkName: "application" */ '../views/application.vue'),
        meta: { title: 'Application | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/nft',
        name: 'nft',
        component: () => import(/* webpackChunkName: "nft" */ '../views/nft.vue'),
        meta: { title: 'NFT | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/blog-2',
        name: 'blog-2',
        component: () => import(/* webpackChunkName: "blog-2" */ '../views/blog-2.vue'),
        meta: { title: 'Blog | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/construction',
        name: 'construction',
        component: () => import(/* webpackChunkName: "construction" */ '../views/construction.vue'),
        meta: { title: 'Construction | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/consulting',
        name: 'consulting',
        component: () => import(/* webpackChunkName: "consulting" */ '../views/consulting.vue'),
        meta: { title: 'Consulting | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/creative-agency',
        name: 'creative-agency',
        component: () => import(/* webpackChunkName: "creative-agency" */ '../views/creative-agency.vue'),
        meta: { title: 'Creative Agency | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/gym',
        name: 'gym',
        component: () => import(/* webpackChunkName: "gym" */ '../views/gym.vue'),
        meta: { title: 'GYM | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/insurance',
        name: 'insurance',
        component: () => import(/* webpackChunkName: "insurance" */ '../views/insurance.vue'),
        meta: { title: 'Insurance | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/job-placement',
        name: 'job-placement',
        component: () => import(/* webpackChunkName: "job-placement" */ '../views/job-placement.vue'),
        meta: { title: 'job-placement | TrustGurus – Tailwind CSS Multipurpose Landing Templates' },
    },
    {
        path: '/:catchAll(.*)',
        name: '404 | TrustGurus – Tailwind CSS Multipurpose Landing Templates',
        component: () => import(/* webpackChunkName: "404" */ '../layouts/error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }

        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to, from, next) => {
    const store = useAppStore();
    nextTick(() => {
        document.title = (to.meta.title || 'TrustGurus') as never;
    });
    store.toggleMainLoader(false);
});

export default router;
