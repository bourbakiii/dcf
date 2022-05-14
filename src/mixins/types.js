export default {
    data() {
        return {
            tp: 1,
        }
    },
    methods: {
        getRandomType() {
            console.log(this.tp);
            // return this.types[Math.floor(Math.random())*this.types.length];
        }
    }
}