export default {
    state: [
        {
            id: "type-0",
            type_name: "Player",
            image: "player-image.png",
            health: 20,
            info: {
                name: "Рыцарь",
                description: "Карта игрока. Может пользоваться мечами. Если в руках есть меч, то при взаимодействии с врагом не отнимает злоровье."
            }
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
                min_health: Math.floor(Math.random() * 4 + 1),
                start_health: Math.floor(Math.random() * 4 + 1),
                range: {from: 0, to: 7},
                info: {
                    name: "Орк",
                    description: "Орки — раса уродливых, жестоких и агрессивных монстров. Орки враждебны всему прекрасному и чистому, склонны к вандализму. Обычный враг."
                }
            },
                
                {
                    image: "enemy-2-image.png",
                    name: "Enemy №2",
                    start_health: Math.floor(Math.random() * 7 + 1),
                    min_health: Math.floor(Math.random() * 7 + 1),
                    coefficient: 2,
                    range: {from: 7, to: 12},

                    info: {
                        name: "Исчадие",
                        description: "Неизученное существо. Имеет большой стартовый запас очков здоровья. Обычный враг."
                    }
                }]
        },
        {
            id: "type-2",
            type_name: "Coin",
            image: "coin-image.png",
            health: 10,
            range: {from: 12, to: 20},
            info: {
                name: "Монетка",
                description: "При взаимодействии прибавляет к очкам игрока значение равное количеству здоровья карточки."
            }
        },
        {
            id: "type-3",
            type_name: "Bonus",
            subtypes: [{
                name: 'heal',
                health: 5,
                image: "heal-image.png",
                range: {from: 20, to: 26},

                info: {
                    name: "Зелье лечения",
                    description: "Лечит игрока на значение равное количеству здоровья карточки. Лечит от яда."
                }
            },
                {
                    name: 'poison',
                    health: 4,
                    image: "poison-image.png",
                    range: {from: 26, to: 32},

                    info: {
                        name: "Яд",
                        description: "Сначала наносит урон равный количеству здоровья карточки. Затем накладывает на игрока отрицательный эффект, который убавляет по 1 ед. здоровья на один ход"
                    }
                }]
        },
        {
            id: "type-4",
            type_name: "Thorn",
            subtypes: [{
                name: 'thorn',
                health: 4,
                image: "thorn-image.png",
                range: {from: 32, to: 35},
                info: {
                    name: "Кактус",
                    description: "При взаимодейтсвии наносит урон равный количеству здоровья карточки."
                }
            },
            ]
        },
        {
            id: "type-4",
            type_name: 'Weapon',
            health: 6,
            image: "weapon-image.png",
            range: {from: 35, to: 41},
            info: {
                name: "Меч",
                description: "Можно подобрать, чтобы атаковать монстров"
            }
        }
    ]
}
