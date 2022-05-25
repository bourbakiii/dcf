export default {
    methods: {
        is_adjacent(card) {
            const width = this.$store.state.generals.width;
            const height = this.$store.state.generals.height;
            return (
                JSON.stringify(card.position) == JSON.stringify({ x: this.player.position.x - width, y: this.player.position.y })
                ||
                JSON.stringify(card.position) == JSON.stringify({ x: this.player.position.x + width, y: this.player.position.y })
                ||
                JSON.stringify(card.position) == JSON.stringify({ x: this.player.position.x, y: this.player.position.y - height })
                ||
                JSON.stringify(card.position) == JSON.stringify({ x: this.player.position.x, y: this.player.position.y + height })
            )

        },
        addPoints(value) {
            this.$store.commit("generalsAction", state => {
                state.points += value;
            });
        },
        switchDamage(card) {
            let player = card.type.attack_weapon ? this.player.weapon || this.player : this.player;
            let card_health_buffer = card.health;
            card.health = Math.max(0, card.health - player.health);
            player.health = Math.max(0, player.health - card_health_buffer);
        },
        click(card) {
            if (!this.able_to_step) return;
            if (card.type.type_name == 'Player') return;
            this.startStep();
            this.watchForAPoison([...this.cards, this.player]);
            if (this.is_adjacent(card)) {
                if (card.type.type_name == 'Enemy') {
                    // if(cart.weapon)
                    this.switchDamage(card);
                    if (card.health > 0) {
                        if (!this.player.weapon)
                            this.switchCardsPositions(card, this.player);
                    }
                    else if (card.health == 0) {
                        this.cards.splice(this.cards.map(el => el.id).indexOf(card.id), 1, this.newCoin({ health: card.type.start_health, position: card.position }));
                    }
                }
                if (card.type.type_name == 'Thorn') {
                    if (card.type.name == 'thorn-rotatable') {
                        if (this.checkForASides({ sides: card.type.sides, position: card.position })) {
                            this.addPoints(card.health);
                            this.switchDamage(card);
                            this.goOnCardPosition(card);
                        }
                        else {
                            this.addPoints(card.health);
                            this.goOnCardPosition(card);
                        }
                    }
                    else {
                        this.addPoints(card.health);
                        this.switchDamage(card);
                        this.goOnCardPosition(card);
                    }
                }
                else if (card.type.type_name == 'Coin') {
                    this.goOnCardPosition(card);
                    this.addPoints(card.health);
                }
                else if (card.type.type_name == 'Bonus') {
                    this.goOnCardPosition(card);
                    console.object('typename', card.type.name)
                    if (card.type.name == 'heal') {
                        this.player.health += card.health;
                        this.player.poisoned = false;
                    }
                    if (card.type.name == 'poison') {
                        this.player.health -= card.health;
                        this.player.poisoned = true;
                    }
                }
                else if (card.type.type_name == 'Weapon') {
                    let player_weapon_health = this.player.weapon ? this.player.weapon.health : 0
                    if (player_weapon_health <= card.health) this.player.weapon = card;
                    else this.points += card.health;
                    this.goOnCardPosition(card);
                }
            }
            this.stopStep();
        },
        switchCardsPositions(card1, card2) {
            let position_buffer = { ...card1.position };
            card1.position = card2.position;
            card2.position = position_buffer;
        },
        goOnCardPosition(card) {
            let adjacent_cards = this.cards.filter(card => this.is_adjacent(card))
            let random_index = Math.floor(Math.random() * adjacent_cards.length);
            this.switchCardsPositions(card, this.player);
            this.cards.splice(this.cards.map(el => el.id).indexOf(card.id), 1, this.newCard({ position: { ...adjacent_cards[random_index].position } }))
            adjacent_cards[random_index].position = card.position;
        },
        checkForASides({ sides, position }) {
            let { x, y } = this.player.position;
            if (position.x < x) if (sides.right) return true;
            if (position.x > x) if (sides.left) return true;
            if (position.y < y) if (sides.bottom) return true;
            if (position.y > y) if (sides.top) return true;
        },
        watchForAPoison(cards) {
            for (let card in cards) {
                if (card.poisoned == true && card.health > 1) {
                    card.health--;
                }
                if (card.health == 1) {
                    card.poisoned = false;
                }
            }
        }
    },
}