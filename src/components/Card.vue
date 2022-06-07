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
      <p class="card__health">
        {{ card.health }}
      </p>
      <img :src="getImgUrl(card.type.image)" alt="" class="card__image"/>
      <div class="card__weapon" v-if="card.weapon != null">
        <img class='card__weapon__image' :src="getImgUrl(card.weapon.image||card.weapon.type.image)"/>
        <p class="card__weapon__health">{{ card.weapon.health }}</p>
      </div>
      <p class="card__name">{{ card.type.info.name }}</p>
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
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.5s;
  background-color: inherit;
  overflow: hidden;
  padding: 4px;
  border: none;
  cursor: pointer;
}

.card__wrapper:not(.player):hover .card {
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
  transition: 0.2s;
  background-color: var(--card-color);
  box-sizing: border-box;
}

.card__health {
  color: var(--health-color);

  font-size: 17px;
  position: absolute;
  right: 20px;
  top: 0px;
}

.card__image {
  width: 50%;
  height: 50%;
  object-fit: contain;
  background-color: transparent;
}

.card__name {
  color: white;
  font-size: 14px;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}

.card__weapon {
  position: absolute;
  left: 40px;
  width: auto;
  height: 60%;
}

.card__weapon__health {
  color: white;
  font-size: 18px;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
}

.card__weapon__image {
  width: auto;
  height: 100%;
  object-fit: contain;
  transform: scale(0.7);
}

.card__sides {
  position: relative;
}

.card__wrapper.poisoned .card {
  background-color: rgb(34, 91, 34, 0.5);
}

.card__sides_top {
  transform: rotate(-90deg);
}

.card__sides_bottom {
  transform: rotate(90deg);
}

.card__wrapper.player .card {
  border: 5px solid rgba(167, 129, 10);
}
</style>