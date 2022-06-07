export default {
    methods: {
        getRandomType() {

            // const free_types = this.$store.state.types.filter(el =>el.type_name != 'Player');
            // let max_range = free_types[free_types.length - 1].range.to;
            // console.log(free_types)
            // let randomed_range = Math.floor(Math.random() * (63 + 1));

            // let type = free_types.filter(element => element.range.from >= randomed_range && element.range.to <= randomed_range);
            // console.log(type);

            let random_type = {...this.$store.state.types[Math.floor(Math.random() * (this.$store.state.types.length - 1)) + 1]};
            if (random_type.subtypes && random_type.subtypes.length) {
                let selected_subtype = random_type.subtypes[Math.floor(Math.random() * random_type.subtypes.length)]
                random_type = Object.assign(random_type, selected_subtype);
                delete random_type.subtypes;
            }
            if (random_type.sides) {
                random_type.sides = {...random_type.sides};
                for (let key in random_type.sides) {
                    console.log(key);
                    random_type.sides[key] = Math.random() > 0.5;
                }
            }
            return random_type;
        }
    }
}