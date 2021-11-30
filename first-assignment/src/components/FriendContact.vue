<template>
<div>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</div>
</template>

<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                name: 'Tyler',
                phone: '555-555-5555',
                email: 'tyler@test.com'
            },
        };
    },
    methods: {
        toggleDetails() {
            this.showDetails = !this.showDetails;
        },
    }
};
</script>