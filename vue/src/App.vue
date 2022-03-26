<template>
  <div id="app">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col md="12" lg="6" xl="4" class= "mt-4">
          <b-card class="row bg-grey">

            <button @click="add" class="add">
              <b-icon scale="2px" icon="plus"></b-icon>
            </button>

<!--            {{ numbers }}-->

            <div v-for="(number, index) in numbers" :key="index">
              <div class="row">
                <b-col sm="6">
                  <input
                    type="number"
                    class="input mb-4"
                    placeholder="Enter number"
                    v-model="number.value"
                    :disabled="number.disabled">
                </b-col>
                <b-col cols="6" sm="3" class="mb-4">
                  <button @click="increase(number)" class="button" >increase</button>
                </b-col>
                <b-col cols="6" sm="3" class="mb-4">
                  <button @click="decrease(number)" class="button" >decrease</button>
                </b-col>
              </div>
              <div class="row">
                <b-col cols="6">
                  <button @click="save(index)" class="button-2">save</button>
                </b-col>
                <b-col cols="6">
                  <button @click="restore(index)" class="button-2 restore" >restore</button>
                </b-col>
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      numbers: [{ value: null, disabled: false }],
      tempNumber: [{ value: 0 }],
      numberCount: 1,
    }
  },

  watch: {
    numbers: {
      handler(value) {
        localStorage.numbers = JSON.stringify(value);
      },
      deep: true
    },

    tempNumber: {
      handler(value) {
        localStorage.tempNumber = JSON.stringify(value);
      },
      deep: true
    }
  },

  mounted() {
    if (localStorage.numbers) {
      this.numbers = JSON.parse(localStorage.numbers);
    }
    if (localStorage.tempNumber) {
      this.tempNumber = JSON.parse(localStorage.tempNumber);
    }
  },

  methods: {
    add() {
      this.numbers.push({ value: null, disabled: false });
      this.tempNumber.push({ value: 0 });
    },
    save(index) {
      if (this.numbers[index].value !== null) {
        this.tempNumber[index].value = this.numbers[index].value;
      } else {
        this.tempNumber[index].value = 0;
      }
    },

    restore: function (index) {
      // console.log(this.numbers[index].value == this.tempNumber[index].value);
      if (this.numbers[index].value == this.tempNumber[index].value) {
        this.numbers[index].disabled = true;
      }
      this.numbers[index].value = this.tempNumber[index].value;
    },

    increase(number) {
      number.value++;
    },
    decrease(number) {
      number.value--;
    }
  },
}
</script>

<style>

.bg-grey{
  background: #e6ecf1;
}

.add{
  margin-bottom: 1rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border-radius: 100%;
  border: 1px solid #5d8ce9;
  color: #5d8ce9;
}

.input{
  padding-left: 1rem;
  width: 100%;
  height: 2.5rem;
  text-align: left;
  font-size: 12px;
  background: #dae0e5;
  border-radius: 53px;
  border: 1px solid #dae0e5;
  color: #656060;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.button{
  width: 100%;
  height: 2.5rem;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border-radius: 53px;
  border: 1px solid #5d8ce9;
  color: #5d8ce9;
}

.button-2{
  margin-bottom: 1rem;
  width: 100%;
  height: 2.5rem;
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  background: #4796ee;
  border-radius: 53px;
  border: none;
  color: #fff;
}

.restore{
  background: #eff2f7;
  border: 1px solid #d9d3d3;
  color: #656060;
  box-shadow: 0px 1px rgb(184, 183, 183);
}

</style>


