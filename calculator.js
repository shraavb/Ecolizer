const app = Vue.createApp({
    data() {
        return {
            width: null,
            depth: null,
            area: null,
            pricePer: 3, //Price per metre squared
            price: null //Final price
        };
    },
    methods: {
        addNumber() {
            //Calculate are
            if (this.width != null && this.depth != null) {
                this.area = this.width * this.depth;
            }
        }
    },
    watch: {
        area(value) {
            if (value != null) {
                this.price = this.pricePer * this.area; //Calculate price
            }
        }
    }
});
app.mount("#app");
