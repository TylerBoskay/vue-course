const app = Vue.createApp({
    data() {
      return {
        outputParagraph: '',
        outputParagraph2: '',
      };
    },
    methods: {
      showAlert() {
          alert('You clicked the button!');
      },
      confirmInput(e) {
        this.outputParagraph = e.target.value;
      },
      confirmInput2(e) {
        this.outputParagraph2 = e.target.value;
      }
    }
  });
  
  app.mount('#assignment');
  