<template>
    <div class="cars">
        <div class="container">
            <div class="cars__top">
                <div class="title">Avtomobillar ro'yxati</div>
                <button class="btn btn-primary" @click="openNew()">Yangi avtomobil qo'shish</button>
            </div>
            <table width="100%">
                <tr>
                    <th>№</th>
                    <th>Model</th>
                    <th>Kampaniya</th>
                    <th>Yili</th>
                    <th>Rang</th>
                    <th></th>
                </tr>
                <tr v-for="(item, index) of Cars" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.title}}</td>
                    <td>{{change(item.comp)}}</td>
                    <td>{{item.year}}</td>
                    <td :style="{'background': item.color}"></td>
                    <td>
                        <router-link tag="button" class="btn btn-success" :to="/car/+item.id"><strong>Batafsil</strong></router-link>
                        <button @click="edit(index)" class="btn btn-warning">Tahrirlash</button>
                        <button @click="del(index)" class="btn btn-danger">O'chirish</button>
                    </td>
                </tr>
            </table>
            <Modal/>

            <Edit :editCar="editCar"/>
        </div>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import Edit from '../components/Edit.vue'
export default {

data(){
    return{
        editIndex:0,
        editCar:{},
    }
},
methods:{

    change(id){
        let c = this.$store.getters.getByIdComp(id)
        return c.title
    },
    del(index){
      let car = {
        index: index,
        id: this.Cars[index].id
      }
      this.$store.dispatch('delCar',car)
    },
    edit(index){
        this.editIndex = index
        this.editCar = this.Cars[index]
        this.$store.commit("isEditModalToggle", true)
},
        openNew(){
        this.$store.commit('isModalToggle',true)
    }
},

computed:{
isModal(){
    return this.$store.getters.getIsModal
},
isEditModal(){
    return this.$store.getters.getIsModal
},
Cars(){
    return this.$store.getters.getCarsAll
},
company(){
    return this.$store.getters.getCompAll
}
},
components:{
    Modal,
    Edit
}
}
</script>

<style>

</style>