<template>
    <div class="comps">
        <div class="container">
            <div class="row">
                <div class="form-floating col">
                    <input v-model="comp.title" type="text" class="form-control" id="floatingInput"
                        placeholder="Kampaniyani kiriting">
                    <label for="floatingInput">Kampaniyani kiriting</label>
                </div>
                <button @click="add" class="col btn btn-primary">Qo'shish</button>
            </div>
            <table>
                <tr v-for="(item, i) of company" :key="i">
                    <th>{{i+1}}</th>
                    <th>{{item.title}}</th>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
data(){
    return{
        comp:{},
    }
},
methods:{
    add(){
       this.$store.dispatch("addComp",this.comp)
               this.comp = {}

    }
},
computed:{
company(){
    return this.$store.getters.getCompAll
}
},
 
    }
</script>

<style>

</style>