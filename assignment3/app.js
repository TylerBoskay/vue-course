const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        msg: ''
      };
    },
    methods: {
        add1() {
            this.counter ++;
        },
        add5() {
            this.counter += 5;
        },
    },
    computed: {
        message() {
            if (this.counter == 37) {
                return 'You made it!'
            } else if (this.counter > 37) {
                return 'Too much!'
            } else {
                return 'Not there yet!'
            };
        }
    },
    watch: {
        counter(value) {
            setTimeout(function () {
                this.counter = 0;
            }, 2000);
        }
    }
  });
  
  app.mount('#assignment');
  