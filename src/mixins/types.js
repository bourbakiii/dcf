import types from "@/store/modules/types";

export default {
    methods: {
        getRandomType() {


            // СДЕЛАТЬ!!!
            let types_with_subtypes = [...this.$store.state.types.slice(1, this.$store.state.types.length).filter(el => (el.subtypes || []).length)];
            let all_subtypes = [];
            for (let type of types_with_subtypes) {
                type.subtypes.forEach(el => all_subtypes.push(Object.assign({...type}, {...el})));
            }
            all_subtypes.forEach(el => delete el.subtypes);
            all_subtypes = all_subtypes.concat([...this.$store.state.types.slice(1, this.$store.state.types.length).filter(el => !el.subtypes || !el.subtypes.length)]);
            const maximal_range = Math.max(...all_subtypes.map(el => el.range.to)) + 1;

            const random_number = Math.floor(Math.random() * maximal_range);

            const to_return_type = all_subtypes.filter(el => random_number >= el.range.from && random_number <= el.range.to)[0] || all_subtypes[0];

            return to_return_type;
        }
    }
}