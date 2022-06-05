export default {
    state: {
        width: 250,
        height: 320,
        points: 0,
        table_of_records: []
    },
    mutations: {
        generalsAction(state, action) {
            action(state);
        }
    }
}