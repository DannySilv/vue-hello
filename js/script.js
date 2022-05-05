Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            titleText: 'Hello World!',
            titleClass: 'title',
        }
    }
); 