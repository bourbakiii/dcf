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
            after_card: null,
            after_money: false,
            subtypes: [{
                image: "enemy-1-image.png",
                name: "Enemy №1",
                min_health: Math.floor(Math.random() * 20),
                start_health: 10,
                health_coefficient: 1.1,
                
            },
            {
                image: "enemy-2-image.png",
                name: "Enemy №2",
                start_health: 10,
                min_health: Math.floor(Math.random() * 30),
                health_coefficient: 1.1,
            }]
        },
        {
            id: "type-2",
            type_name: "Coin",
            image: "coin-image.png",
            health: 10
        },
        {
            id: "type-3",
            type_name: "Bonus",
            subtypes: [{
                subtype_name: 'heal',
                health: 10,
                image: "heal-image.png",
            },
            {
                subtype_name: 'poison',
                health: 10,
                image: "poison-image.png",
            }]
        }]
}
