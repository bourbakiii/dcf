export default {
    methods: {
        is_adjacent(card) {

            return (
                (
                    (
                        (Math.abs(card.position.y - this.player.position.y) + Math.abs(card.position.x - this.player.position.x)) == this.$store.state.generals.width
                    )
                    ||
                    (
                        (Math.abs(card.position.y - this.player.position.y) + Math.abs(card.position.x - this.player.position.x)) == this.$store.state.generals.height
                    ) &&
                    Math.abs(card.position.y - this.player.position.y) <= this.$store.state.generals.height &&
                    Math.abs(card.position.x - this.player.position.x) <= this.$store.state.generals.width
                ))

        },
        click(card) {
            if (card.type.type_name == 'Player') return;
            else if (card.type.type_name == 'Enemy') {
                if (this.is_adjacent(card)) {
                    let card_health_buffer = card.health;
                    card.health = Math.max(0, card.health - this.player.health);
                    this.player.health = Math.max(0, this.player.health - card_health_buffer);
                    if (card.health > 0) 
                        this.switchCardsPositions(card, this.player);
                    
                    else if (card.health == 0) 
                        this.cards.splice(this.cards.map(el => el.id).indexOf(card.id), 1, this.newCoin({ health: card.type.start_health, position: card.position }));
                    
                }
            }
            else if (card.type.type_name == 'Coin') {
                let adjacent_cards = this.cards.filter(card => this.is_adjacent(card))
                let random_index = Math.floor(Math.random() * adjacent_cards.length);
                this.cards.splice(this.cards.map(el => el.id).indexOf(card.id), 1, this.newCard({ position: { ...adjacent_cards[random_index].position } }))
                adjacent_cards[random_index].position = { ...this.player.position }
                this.player.position = { ...card.position }
                this.$store.commit("generalsAction", state => {
                    state.points += card.health;
                });
            }
        },
        switchCardsPositions(card1, card2) {
            let position_buffer = { ...card1.position };
            card1.position = card2.position;
            card2.position = position_buffer;
        }
    }
}