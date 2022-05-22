<template>
  <div id="#app" class="app">
    <transition-group name="cards-transition" appear mode="out-in">
      <Card
        @click="click(item)"
        class="app__card"
        v-for="item in [...cards, player]"
        :key="item.id"
        :card="item"
      />
    </transition-group>
    <transition name="modal-lose">
      <div v-if="player.health <= 0" class="modal-lose">
        <div class="modal-lose__content">Вы проиграли</div>
      </div>
    </transition>
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
      able_to_step: true,
      player: this.newPlayer(),
      cards: this.setCards({ rows: 3, columns: 3 }),
    };
  },
  methods: {
    startStep() {
      this.able_to_step = false;
    },
    stopStep() {
      this.able_to_step = true;
    },
  },
  watch: {
    "player.health": {
      handler(value) {
        if (value <= 0) console.log("ТЫ ПРОИГРАЛ");
      },
      deep: true,
    },
    "player.weapon": {
      handler(value) {
        if (value != null && value.health == 0) this.player.weapon = null;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.cards-transition-enter {
  transform: rotateY(90deg);
  opacity: 0;
}

.cards-transition-leave-to {
  transform: rotateY(90deg);
  opacity: 0;
}
.cards-transition-leave-active,
.cards-transition-enter-active {
  transition: 0.3s;
}
.cards-transition-enter-active {
  transition-delay: 0.3s;
}

.modal-lose-enter,
.modal-lose-leave-to {
  opacity: 0;
}
.modal-lose-leave-active,
.modal-lose-enter-active {
  transition: 0.3s;
}
.modal-lose-enter-active {
  transition-delay: 0.3s;
}
.app {
  width: calc(250px * 3);
  height: calc(320px * 3);
  background-color: grey;
  position: relative;
  display: flex;
}
.modal-lose {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-lose__content {
  background-color: white;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>