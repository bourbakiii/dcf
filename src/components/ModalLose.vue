<template>
  <div class="modal__wrapper modal-lose__wrapper">
    <div class="modal modal-lose">
      <h3 class="modal-lose__title">Вы проиграли...</h3>
      <div class="modal-lose__record">
        <p class="modal-lose__record__title">Ваш счет:
          <span class="modal-lose__record__value">{{ points }}</span>
        </p>
      </div>
      <div class="modal-lose__table">
        <div class="modal-lose__table__item" v-for="(item, index) in table_of_records" :key="index">
          <p class="modal-lose__table__item__name">
            {{item.name}}
          </p>
          <span class="modal-lose__table__item__points">
            {{item.points}}
          </span>

        </div>
      </div>
      <button @click="$emit('close')" type="button" class="modal-lose__restart">Новая игра</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    points: {
      required: true,
      default: 0
    },
    name: {
      required: true,
      default: "Player"
    },
  },
  data() {
    return {
      table_of_records: JSON.parse(localStorage.getItem('table_of_records')) || []
    }
  },
  created() {
    this.$store.commit("generalsAction", state => {
      this.table_of_records.push({name: this.name, points: this.points})
      localStorage.setItem('table_of_records', JSON.stringify(this.table_of_records));
    });
  }
}
</script>
<style scoped>
.modal-lose__wrapper {
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

.modal-lose {
  background-color: var(--card-color);
  padding: 40px;
  width: calc(247px * 3);
  height: calc(311px * 3);
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.modal-lose__title {
  color: #9b3737;
  font-size: 50px;
  margin: 0px 0px 20px 0px;
}

.modal-lose__record {
  width: 100%;
  display: inline-block;
}

.modal-lose__record__title {
  color: var(--player-border);
  font-size: 30px;
}

.modal-lose__record__value {
  font-size: 35px;
}

.modal-lose__table {
  overflow-y: auto;
  flex-grow: 1;
  width: 100%;
  background-color: var(--body-color);
  margin-bottom: 30px;
}

.modal-lose__table::-webkit-scrollbar {
  display: none;
}

.modal-lose__table__item {
  width: 100%;
  height: 80px;
  background-color: var(--player-border);
  margin-bottom:10px;
  display: flex;
  align-items: center;justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
}


.modal-lose__table__item:last-of-type {
  margin-bottom:0px;
}
.modal-lose__table__item__name{
  font-size: 25px;
  margin: 0;
}
.modal-lose__table__item__points{
  font-size: 30px;
}

.modal-lose__restart {
  height: 50px;
  width: 200px;
  background-color: var(--player-border);
  color: white;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}
</style>