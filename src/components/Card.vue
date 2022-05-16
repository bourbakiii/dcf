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
    {{card.poisoned}} {{ card.type.name || card.type.type_name }} | {{ card.health }}
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
.card.player {
  background-color: lightblue;
}
.card.poisoned {
  border: 10px solid green;
}
.card.heal {
  background-color: red;
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