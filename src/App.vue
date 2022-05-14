<template>
  <div class="content">123</div>
</template>

<script>
import generateMixin from "./mixins/generate.js";
import typesMixin from "./mixins/types.js";
export default {
  mixins:[generateMixin, typesMixin],
  data() {
    return {
      player: this.newPlayer(),
      cards: this.setCards({ length: 8, with_player: true }),
    };
  },
};
</script>