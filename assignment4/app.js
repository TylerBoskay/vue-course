const app = Vue.createApp({
    data() {
        return {
            aClass: '',
        };
    },
    computed: {
        pAClass() {
            if (this.aClass === 'user1') {
                return 'user1';
            } else if (this.aClass === 'user2') {
                return 'user2';
            };
        }
    },
    methods: {
        appendClass(event) {
            this.aClass = event.target.value;
        }
    }
});

app.mount('assignment');