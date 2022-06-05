export default {
    state: [
        {
            id: "type-0",
            type_name: "Player",
            image: "player-image.png",
            health:1,
        },
        {
            id: "type-1",
            type_name: "Enemy",
            after_card: null,
            after_money: false,
            attack_weapon: true,
            subtypes: [{
                image: "enemy-1-image.png",
                name: "Enemy №1",
                min_health: Math.floor(Math.random() * 20 + 1),
                start_health: Math.floor(Math.random() * 20 + 1),
            },
            {
                image: "enemy-2-image.png",
                name: "Enemy №2",
                start_health: Math.floor(Math.random() * 20 + 1),
                min_health: Math.floor(Math.random() * 30 + 1),
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
                name: 'heal',
                health: 5,
                image: "heal-image.png",
            },
            {
                name: 'poison',
                health: 4,
                image: "poison-image.png",
            }]
        },
        {
            id: "type-4",
            type_name: "Thorn",
            subtypes: [{
                name: 'thorn',
                health: 4,
                image: "thorn-image.png",
            },
            {
                name: 'thorn-rotatable',
                health: 4,
                rotatable: true,
                sides: {
                    top:false,
                    left:false,
                    down:false,
                    right: true
                },
                image: "thorn-image.png",
            },

            ]
        },
        {
            id: "type-4",
            type_name: 'Weapon',
            health: 6,
            image: "weapon-image.png",
        }
    ]
}
