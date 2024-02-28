import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });

        // if (!pages.layout) {
        //     pages.layout = Layout;
        // }
        // pages.layout ??= Layout;
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            // .component('Head', Head) // Global component registration
            // .component('Link', Link) // Global component registration
            .mount(el);
    },
    title: (title) => `${title} | BNRDEV`, // dinamic header title
    progress: {
        color: "#ff8f00",
        showSpinner: false,
    },
});
