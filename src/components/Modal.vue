<template>
    <div class="Modal" v-show="isModal">
        <div class="container">
            <h4>Yangi Avtomobil kiriting</h4>
            <button @click="Back()" class="btn btn-outline-light back">{{back}}</button>
            <div class="form-floating mb-3">
                <input v-model="car.title" type="text" class="form-control" id="floatingInput"
                    placeholder="Modelni kiriting">
                <label for="floatingInput">Modelni kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <select v-model="car.comp" class="form-select" id="floatingSelect"
                    aria-label="Floating label select example">
                    <option disabled>Kampanniyalar</option>
                    <option v-for="(item,i) of company" :key="i" :value="item.id">{{item.title}}</option>
                </select>
                <label for="floatingSelect">Kampaniyani kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="car.year" type="number" class="form-control" id="floatingInput"
                    placeholder="Yilini kiriting">
                <label for="floatingInput">Yilini kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="car.color" type="color" class="form-control" id="floatingInput"
                    placeholder="Rangini kiriting">
                <label for="floatingInput">Rangini kiriting</label>
            </div>
            <button @click="add" class="w-100 btn btn-outline-light">Qo'shish</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                back: ">",
                car: {},
                company: []
            }
        },
        methods: {
            add() {
                this.$store.dispatch('addCar', this.car)
                this.$store.commit('isModalToggle', false)
                this.car = {}

            },
            Back() {
                this.$store.commit('isModalToggle', false)
            }
        },
        computed: {
            isModal() {
                return this.$store.getters.getIsModal
            },
            company() {
                return this.$store.getters.getCompAll
            }
        }
    }
</script>

<style>

</style>