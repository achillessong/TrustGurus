import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'dark',
        isShowMainLoader: true,
        direction: 'ltr',
        teamname: 'Trust-Gurus'
    }),

    actions: {
        toggleTheme(payload: any = null) {
            payload = payload || this.theme; // light|dark
            localStorage.setItem('theme', payload);
            this.theme = payload;
            if (this.theme === 'dark') {
                document.querySelector('body')?.classList.add('dark');
            } else {
                document.querySelector('body')?.classList.remove('dark');
            }
        },

        toggleDirection(payload: any = null) {
            payload = payload || this.direction; // rtl, ltr
            localStorage.setItem('direction', payload);
            this.direction = payload;
            document.querySelector('html')?.setAttribute('dir', this.direction || 'ltr');
        },

        toggleMainLoader(payload: boolean = false) {
            this.isShowMainLoader = payload || false;
        },
    },
    getters: {},
});
