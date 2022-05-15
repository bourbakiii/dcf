export default {
    state: {
        size: 300,
        points: 0
    },
    mutations: {
        action(state, action) {
            action(state);
        }
    }
}