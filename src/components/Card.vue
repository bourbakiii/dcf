<template>
  <button type='button' @click='$emit("click")' :style="{ top: parseInt(card.position.y)+'px', left: parseInt(card.position.x)+'px' }" class="card">
    {{card.id}}{{card.type.type_name}} {{card.health}}
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
</style>