<template>
  <div class="view">
    <div class="container">
        <h1>{{car.title}}</h1>
        <table>
            <tr>
                <th>Kampaniya</th>
                <td>{{change(car.comp)}}</td>
            </tr>
            <tr>
                <th>Yili</th>
                <td>{{car.year}}</td>
            </tr>
            <tr>
                <th>Rangi</th>
                <td :style="{'background':car.color}"></td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>

export default {
data(){
    return{
        id:this.$route.params.id,
        comp:{}
    }
},
computed:{
car(){
   return this.$store.getters.getByIdCar(this.id)
}
},
methods:{
    change(id){
      let c = this.$store.getters.getByIdComp(id)
      return c.title
    }
}
}
</script>

<style >

</style>