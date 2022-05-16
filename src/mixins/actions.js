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
        switchDamage(card){
            let card_health_buffer = card.health;
            card.health = Math.max(0, card.health - this.player.health);
            this.player.health = Math.max(0, this.player.health - card_health_buffer);
        },
        click(card) {

            


            if (card.type.type_name == 'Player') return;
            if (this.is_adjacent(card)) {

                this.watchForAPoison([...this.cards,this.player]);



                if (card.type.type_name == 'Enemy') {
                    this.switchDamage(card);
                    if (card.health > 0)
                        this.switchCardsPositions(card, this.player);

                    else if (card.health == 0)
                        this.cards.splice(this.cards.map(el => el.id).indexOf(card.id), 1, this.newCoin({ health: card.type.start_health, position: card.position }));
                }
                if (card.type.type_name == 'Thorn') {
                    this.switchDamage(card);
                    this.goOnCardPosition(card);
                }
                else if (card.type.type_name == 'Coin') {
                    this.goOnCardPosition(card);
                    this.$store.commit("generalsAction", state => {
                        state.points += card.health;
                    });
                }
                else if (card.type.type_name == 'Bonus') {
                    this.goOnCardPosition(card);
                    console.object('typename', card.type.name)
                    if (card.type.name == 'heal'){
                    this.player.health += card.health;
                    this.player.poisoned = false;
                    }
                    if (card.type.name == 'poison')
                    {
                        this.player.health -= card.health;
                        this.player.poisoned = true;
                    }
                }
            }
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
        watchForAPoison(cards){
            for(let card in cards)
            {
                if (card.poisoned == true && card.health>1) {
                    card.health--;
                }
                if(card.health==1){
                    card.poisoned = false;
                }
            }
        }
    },
}