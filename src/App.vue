<template>
  <div id="#app" class="app">
    <transition-group name='cards-transition' appear mode='out-in'>
    <Card @click='click(item)' class='app__card' v-for="(item, index) in [...cards,player]" :key="index" :card="item" />
    </transition-group>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import generateMixin from "./mixins/generate.js";
import typesMixin from "./mixins/types.js";
import actionsMixin from "./mixins/actions.js";
export default {
  components: { Card },
  mixins: [generateMixin, typesMixin, actionsMixin],
  data() {
    return {
      player: this.newPlayer(),
      cards: this.setCards({ rows: 3, columns: 3 }),
      points: 0
    };
  },
};
</script>
<style scoped>
.cards-transition-enter{
  transform: rotateY(90deg);
}
.cards-transition-leave-to{
  transform: rotateY(90deg);
}
.cards-transition-leave-active,
.cards-transition-enter-active{
  transition: 0.3s;
}
.app{
  width:900px;
  height:900px;
  background-color: grey;
  position: relative;
}
.app__card{
}
</style>