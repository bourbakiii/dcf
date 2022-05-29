export default {
    methods: {
        setCards({ rows, columns }) {
            let to_return = [];
            for (let index_row = 0; index_row < rows; index_row++) {
                for (let index_column = 0; index_column < columns; index_column++) {
                    if (index_row == 1 && index_column == 1) continue;
                    const position = {
                        x: this.$store.state.generals.width * index_column,
                        y: this.$store.state.generals.height * index_row
                    }
                    to_return.push(this.newCard({ position }));
                }
            }
            return to_return;
        },
        newPlayer() {
            return this.newCard({ type: this.$store.state.types[0], position: { x: this.$store.state.generals.width, y: this.$store.state.generals.height }, weapon: { health: 10, image:'weapon-image.png' } });
        },
        newCard(to_concat) {
            let to_return = Object.assign({
                id: `card-${Math.random() * 100}`,
            }, { type: this.getRandomType(), poisoned: false }, { ...to_concat });
            return Object.assign(to_return, { health: to_return.type.health ? to_return.type.health : (to_return.type.min_health + this.$store.state.generals.points / 100).toFixed(0) });
        },
        newCoin({ health, position }) {
            return Object.assign({
                id: `card-${Math.random() * 100}`,
            },
                { type: this.$store.state.types[2] },
                { health, position });
        }
    }
}