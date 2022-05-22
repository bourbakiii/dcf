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
    class="card"
  >
   {{ card.type.name || card.type.type_name }} | {{ card.health }}

   <div v-if='card.type.sides' class="card__sides">
     <div v-if="card.type.sides.left" class="card__sides_left">l-</div>
     <div v-if="card.type.sides.top" class="card__sides_top">t-</div>
     <div v-if="card.type.sides.right" class="card__sides_right">r-</div>
     <div v-if="card.type.sides.down" class="card__sides_down">d-</div>
   </div>
    <div class="card__weapon" v-if='card.weapon!=null'>
      <p class="card__weapon__health">{{card.weapon.health}}</p>
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
};
</script>
<style scoped>
.card {
  position: absolute;
  width: 250px;
  height: 320px;
  border: 1px solid black;
  transition: 0.5s;
  cursor: pointer;
}
.card__weapon{
  position: absolute;left:20px;top:20px;
  height: calc(100% - 40px);
  width: 30px;
  background-color: red;
  display: flex;align-items: center;justify-content: center;flex-direction: column;
}
.card__weapon__health{
  font-size: 18px;
}
.card__sides{
  position: relative;
}

.card__sides_top{
  transform: rotate(-90deg)
}
.card__sides_bottom{
  transform: rotate(90deg)
}
.card.player {
  background-color: lightblue;
}
.card.poisoned {
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
}
.card.coin {
  background-color: gold;
}
</style>