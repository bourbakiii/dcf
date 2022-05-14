import { types } from './types.js';
export default {
    methods: {
        setCards({ length, with_player }) {
            let to_return = [];
            for (let index = 0; index < length; index++)  to_return.push(this.newCard());
            if (with_player) to_return.push(this.player);
            return to_return;
        },
        newPlayer() {
            let shaphot = this.newCard();
            console.object('Player', shaphot);
        },
        newCard() {
            return Object.assign({
                id: `card-${Math.random() * 100}`,
            }, this.getRandomType());
        },
        
    }
}