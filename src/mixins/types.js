export const TYPES = [
    {
        id: "type-0",
        type_name: "Player",
        image: "player-image.png",
        health: 1.0,
    },
    {
        id: "type-1",
        type_name: "Enemy",
        image: "enemy-image.png",
        health_coefficient: 1.1,
        after_card: null,
        after_money: false,
    }
];

export default {
    methods: {
        getRandomType() {
            return TYPES[Math.floor(Math.random())*TYPES.length];
        }
    }
}