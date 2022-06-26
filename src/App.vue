<template>
  <div class="app">
    <div class="top">
      <ul>
        <li v-for="(link,i) in links" :key="i">
          <router-link exact active-class="activ" :to="link.l">{{link.t}}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
data(){
  return{
    links:[
      {t:"Bosh sahifa",l:"/"},
      {t:"Avtomobillar",l:"/cars"},
      {t:"Kampaniyalar",l:"/company"},
    ]
  }
},
created(){
        this.$store.dispatch('getCars')
        this.$store.dispatch('getCompany')
  
},
}
</script>

<style>

</style>