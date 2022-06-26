<template>
      <div class="Modal" v-show="isEditModal">
        <div class="container">
            <h4>Yangi Avtomobil kiriting</h4>
            <button @click="backEdit()" class="btn btn-outline-light back">{{back}}</button>
            <div class="form-floating mb-3">
                <input v-model="editCar.title" type="text" class="form-control" id="floatingInput" placeholder="Modelni kiriting">
                <label for="floatingInput">Modelni kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <select v-model="editCar.comp" class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option disabled>Kampanniyalar</option>
                    <option v-for="(item,i) in company" :key="i" :value="item.id">{{item.title}}</option>
                </select>
                <label for="floatingSelect">Kampaniyani kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="editCar.year" type="number" class="form-control" id="floatingInput" placeholder="Yilini kiriting">
                <label for="floatingInput">Yilini kiriting</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="editCar.color" type="color" class="form-control" id="floatingInput" placeholder="Rangini kiriting">
                <label for="floatingInput">Rangini kiriting</label>
            </div>
            <button @click="save" class="w-100 btn btn-outline-light">Saqlash</button>
        </div>
    </div>
</template>

<script>

export default {
    props:['editCar'],
data(){
    return{
        back:">",
    }
},
methods:{
    save(){
       this.$store.dispatch("putCar",this.editCar)
    },
    backEdit(){
          this.$store.commit("isEditModalToggle", false)

    }
},
computed:{
     company() {
        return this.$store.getters.getCompAll
        },
        isEditModal(){
            return this.$store.getters.getIsEditModal
        }
}
}
</script>

<style>

</style>