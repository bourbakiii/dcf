<template>
  <div class="modal__wrapper modal-description__wrapper">
    <div class="modal modal-description">
      <h3 class="modal-description__title">{{ info.name }}</h3>
      <img :src="getImgUrl(info.image)" class="modal-description__image">
      <p class="modal-description__text">
        {{ info.description }}
      </p>
      <button @click="$emit('close')" class="modal-description__button">
        Закрыть
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      required: true
    }
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet);
    },
  }
}
</script>
<style scoped>
.modal-description__wrapper {
  background-color: var(--body-color);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
}

.modal-description {
  background-color: var(--card-color);
  padding: 40px;
  width: calc(247px * 3);
  height: calc(311px * 3);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}

.modal-description__image {
  max-width: 100%;
  object-fit: contain;
  max-height: 300px;
}

.modal-description__title {
  color: var(--health-color);
  font-size: 60px;
  margin: 0px 0px 20px 0px;
}

.modal-description__text {
  color: white;
  font-size: 25px;
}


.modal-description__button {
  height: 50px;
  width: 200px;
  background-color: var(--player-border);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  align-self: flex-end;
  cursor: pointer;
  font-size: 20px;
  margin-top:auto;
}
</style>
