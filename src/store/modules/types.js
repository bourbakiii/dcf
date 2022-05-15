export default {
    state: [
        {
            id: "type-0",
            type_name: "Player",
            image: "player-image.png",
            health: 40,
        },
        {
            id: "type-1",
            type_name: "Enemy",
            image: "enemy-image.png",
            health_coefficient: 1.1,
            min_health: Math.floor(Math.random()*10),
            after_card: null,
            after_money: false,
        },
        {
            id: "type-2",
            type_name: "Coin",
            image: "coin-image.png",
            health: 10
        }]
}
