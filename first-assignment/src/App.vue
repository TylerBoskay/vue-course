<template>
<div id="app">
    <section>
        <h2>My Friends</h2>
        <ul>
            <li></li>
        </ul>
    </section>
</div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                friends: [
                    {
                        id: 'tyler',
                        name: 'Tyler',
                        phone: '555-555-5555',
                        email: 'tyler@localhost.com'
                    },
                    {
                        id: 'joe',
                        name: 'Joe',
                        phone: '555-555-5555',
                        email: 'joe@localhost.com'
                    },
                ]
            }
        }
    }
</script>