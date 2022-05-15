export default {
    methods: {
        is_adjacent(card) {
            return ((Math.abs(card.position.y - this.player.position.y) + Math.abs(card.position.x - this.player.position.x)) == this.$store.state.generals.size &&
                Math.abs(card.position.y - this.player.position.y) <= this.$store.state.generals.size &&
                Math.abs(card.position.x - this.player.position.x <= this.$store.state.generals.size))
        },
        click(card) {
            if (card.type.type_name == 'Player') return;

            else if (card.type.type_name == 'Enemy') {
                if (this.is_adjacent(card)) {
                    let card_health_buffer = card.health;
                    card.health = Math.max(0, card.health - this.player.health);
                    this.player.health = Math.max(0, this.player.health - card_health_buffer);

                    if (card.health > 0) {
                        console.log(11)
                        this.switchCardsPositions(card, this.player);
                    }
                    else if (card.health == 0) {
                        this.cards.splice(this.cards.map(el=>el.id).indexOf(card.id), 1 , this.newCoin({ health: card.start_health, position: card.position }));
                    }

                }
            }

            // else if (card.type.type_name == 'Coin'){
            //     this.switchCardsPositions(card, this.player);
            // }
        },
        switchCardsPositions(card1, card2) {
            let position_buffer = { ...card1.position };
            card1.position = card2.position;
            card2.position = position_buffer;
        }
    }
}