export default {
    methods: {
        getRandomType() {


            // СДЕЛАТЬ!!!
            let all_types = [...this.$store.state.types.slice(1, this.$store.state.types.length)].filter(el => (el.subtypes || []).length);



            // let index = 0;
            // while (index < all_types.length) {
            //     if (all_types[index].subtypes.length) {
            //         index+=all_types[index].subtypes.length;
            //         all_types.splice(index, 1, [...all_types[index].subtypes]);
            //     }
            //     else index++;
            // }
            console.log("The all types is:");
            console.log(all_types);

            let random_type = {...this.$store.state.types[1]};
            if (random_type.subtypes && random_type.subtypes.length) {
                let selected_subtype = random_type.subtypes[Math.floor(Math.random() * random_type.subtypes.length)]
                random_type = Object.assign(random_type, selected_subtype);
                delete random_type.subtypes;
            }
            return random_type;
        }
    }
}