<template>
  <div class="modal__wrapper modal-start__wrapper">
    <div class="modal modal-start">
      <h3 class="modal-start__title">Dungeon Cards</h3>
      <p class="modal-start__text">
        Dungeon Cards — смесь головоломки, карточной игры и классического рогалика.
        <br/>
        В Dungeon Cards карта героя перемещается по полю из 9 карт. Чтобы сделать ход, нужно выбрать соседнюю карту,
        которая взаимодействует с картой героя и исчезает. Карты с монстрами и ловушками уменьшают здоровье героя, карты
        с лечением... лечат его, карты с лутом дают золото
        <br/>
        Чтобы начать игру введите свой никнейм и нажмите кнопку «Новая игра»
      </p>
      <form @submit.prevent="$emit('setName', name)" class="modal-start__form">
        <input required minlength="3" placeholder="Введите ник" class="modal-start__form__input" type="text"
               v-model="name" required>
        <button class="modal-start__form__button">
          Новая игра
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null
    }
  }
}
</script>
<style scoped>
.modal-start__wrapper {
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

.modal-start {
  background-color: var(--card-color);
  padding: 40px;
  width: calc(247px * 3);
  height: calc(311px * 3);
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
}

.modal-start__title {
  color: #9b3737;
  font-size: 60px;
  margin: 0px 0px 20px 0px;
}

.modal-start__text {
  color: white;
  font-size: 25px;
}

.modal-start__form {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 10px 0px 0px;
}

.modal-start__form__input {
  width: 100%;
  height: 70px;
  font-size: 25px;
  background-color: transparent;
  background-color: red;
  background-color: var(--body-color);
  padding: 0px 20px;
  border: none;
  outline: none;
  color: white;
  box-sizing: border-box;
}

.modal-start__form__button {
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
}
</style>
