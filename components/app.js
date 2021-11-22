const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'tyler',
                    name: 'Tyler Boskay',
                    phone: '888 888 888',
                    email: 'email@email.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '888 888 888',
                    email: 'email@email.com',
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails()">
                {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
            </button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: {
                id: 'tyler',
                name: 'Tyler Boskay',
                phone: '888 888 888',
                email: 'email@email.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');