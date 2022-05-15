export default {
    methods: {
        getRandomType() {
            let random_type = { ...this.$store.state.types[Math.floor(Math.random() * (this.$store.state.types.length - 1)) + 1] };
            if (random_type.subtypes && random_type.subtypes.length) {
                console.log("Вызов");
                let selected_subtype = random_type.subtypes[Math.floor(Math.random() * random_type.subtypes.length)]
                random_type = Object.assign(random_type, selected_subtype);
                delete random_type.subtypes;
            }
            return random_type;
        }
    }
}