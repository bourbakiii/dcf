<template>
  <button
    type="button"
    @click="$emit('click')"
    :style="{
      top: parseInt(card.position.y) + 'px',
      left: parseInt(card.position.x) + 'px',
    }"
    :class="[
      (card.type.name ? card.type.name : card.type.type_name).toLowerCase(),
      card.poisoned ? 'poisoned' : '',
    ]"
    class="card__wrapper"
  >
    <div class="card">
      
      <img :src="getImgUrl(card.type.image)" alt="" class="card__image" />
      <div v-if="card.type.sides" class="card__sides">
        <div v-if="card.type.sides.left" class="card__sides_left">l-</div>
        <div v-if="card.type.sides.top" class="card__sides_top">t-</div>
        <div v-if="card.type.sides.right" class="card__sides_right">r-</div>
        <div v-if="card.type.sides.down" class="card__sides_down">d-</div>
      </div>
      <div class="card__weapon" v-if="card.weapon != null">
        <p class="card__weapon__health">{{ card.weapon.health }}</p>
      </div>
      <p class="card__name">{{ card.type.name || card.type.type_name }} | {{ card.health }}</p>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    card: {
      required: true,
    },
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet);
    },
  },
};
</script>
<style scoped>
.card__wrapper {
  position: absolute;
  width: 250px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  overflow: hidden;
  transition: 0.5s;
  background-color: inherit;
  overflow: hidden;
  padding: 4px;
  border:none;
  cursor: pointer;
}
.card__wrapper:not(.player):hover .card{
  border: 5px solid grey;
}
.card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  transition: 0.1s;
  background-color: rgba(57,58,57);
}
.card__image {
  width: 50%;
  height: 50%;
  object-fit: contain;
  background-color: transparent;
}
.card__name{
  color:white;
  font-size: 14px;
  position: absolute;left:50%;bottom:10px;
  transform: translateX(-50%);
}
.card__weapon__health {
  font-size: 18px;
}
.card__sides {
  position: relative;
}

.card__sides_top {
  transform: rotate(-90deg);
}
.card__sides_bottom {
  transform: rotate(90deg);
}
.card__wrapper.player .card{
  border: 5px solid rgba(167, 129, 10);
  /* background-color: lightblue; */
}
/* .card.poisoned {
  border: 10px solid green;
}
.card.heal {
  background-color: red;
}
.card.weapon {
  background-color: grey;
}
.card.enemy {
  background-color: lightcoral;
}
.card.poison {
  background-color: rgba(105, 45, 105, 0.836);
} */
/* .card.coin {
  background-color: gold;
} */
</style>