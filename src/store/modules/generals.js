export default {
    state: {
        width: 250,
        height:320,
        points: 0
    },
    mutations: {
        generalsAction(state, action) {
            action(state);
        }
    }
}