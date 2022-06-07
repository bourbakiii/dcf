<template>
  <div id="#app" class="app">
    <transition name="modal-transition" appear>
      <ModalLose @close="setGame" :name="name" :points="$store.state.generals.points" v-if="player.health<=0"/>
    </transition>
    <transition name="modal-transition" appear>
      <ModalDescription :info="descriptionModal" v-if="descriptionModal" @close="descriptionModal=null"/>
    </transition>
    <transition name="modal-transition" appear>
      <ModalStart @setName="setName" v-if="start_modal"/>
    </transition>
    <p class="app__points">Очки: <span class="app__points__value">{{ $store.state.generals.points }}</span></p>
    <transition-group name="cards-transition" appear mode="out-in">
      <Card
          v-long-press="600"
          @long-press-start="openDescriptionModal({...item.type.info, image: item.type.image})"
          @click="click(item)"
          class="app__card"
          v-for="item in [...cards, player]"
          :key="`card-${item.id}`"
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
import ModalLose from "./components/ModalLose.vue";
import ModalStart from "./components/ModalStart.vue";
import generateMixin from "./mixins/generate.js";
import typesMixin from "./mixins/types.js";
import actionsMixin from "./mixins/actions.js";
import LongPress from 'vue-directive-long-press'
import ModalDescription from "@/components/ModalDescription";

export default {
  directives: {
    'long-press': LongPress
  },
  components: {ModalDescription, Card, ModalLose, ModalStart},
  mixins: [generateMixin, typesMixin, actionsMixin],
  data() {
    return {
      able_to_step: true,
      player: {},
      cards: [],
      lose: false,
      name: null,
      start_modal: true,
      descriptionModal: null
    };
  },
  methods: {
    openDescriptionModal(info) {
      this.descriptionModal = info;
    },
    setName(value) {
      this.start_modal = false;
      this.name = value;
    },
    startStep() {
      this.able_to_step = false;
    },
    stopStep() {
      this.able_to_step = true;
    },
    setGame() {
      this.start_modal = true,
          this.able_to_step = true,
          this.player = this.newPlayer(),
          this.cards = this.setCards({rows: 3, columns: 3}),
          this.lose = true,
          this.name = null,
          this.start_modal = true;
    }
  },
  created() {
    this.setGame();
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

.modal-transition-enter, .modal-transition-leave-to {
  opacity: 0;

}


.modal-transition-enter-active, .modal-transition-leave-active {
  transition: 0.3s;
}


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


.app {
  width: calc(250px * 3);
  height: calc(320px * 3);
  position: relative;
  display: flex;
}

.modal-switch {
  position: absolute;
  right: 100%;
}

.app__points {
  position: absolute;
  bottom: 100%;
  color: white;
  left: 0px;
  font-size: 20px;
}

.app__points__value {
  margin-left: 10px;
  font-size: 25px;
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