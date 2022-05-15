export default {
    methods: {
        getRandomType() {
            return this.$store.state.types[Math.floor(Math.random())*this.$store.state.types.length+1];
        }
    }
}