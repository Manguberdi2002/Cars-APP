import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    isModal:false,
    isEditModal:false,
    Cars:[],
    company:[]
  },
  mutations: {
    isModalToggle(state,payload){
      state.isModal = payload
    },
    isEditModalToggle(state,payload){
      state.isEditModal = payload
    },
    toCars(state,payload){
      state.Cars = payload
    },
    toComp(state,payload){
      state.company = payload
    },
    addToCars(state,payload){
      state.Cars.push(payload)
    },
    addToComp(state,payload){
      state.company.push(payload)
    },
    delToCar(state,payload){
      state.Cars.splice(payload,1)
    },
    edit(state,payload){
      state.Cars.find(car =>{
        if(car.id == payload.id){
          car = payload
        }
      })
    }
  },
  actions: {
    addComp(context,payload){
      axios.post('http://localhost:3000/company',payload).then(res =>{
        context.commit("addToComp",res.data)
    })
    },
    addCar(context,payload){
      axios.post("http://localhost:3000/cars", payload).then(res => {
        context.commit('addToCars',res.data)

    })
    },
    delCar(context,payload){
      axios.delete("http://localhost:3000/cars/"+payload.id).then(
        () =>{
           context.commit('delToCar',payload.index)
        }
    )
    },
    putCar(context,payload){
      axios.put("http://localhost:3000/cars/"+payload.id, payload).then( res =>{
        context.commit("edit",res.data)
        context.commit("isEditModalToggle",false)
    } )
    },
    getCars(context){
      axios.get("http://localhost:3000/cars").then(
        res =>{
            context.commit('toCars',res.data)
        }
    )
    },
    getCompany(context){
      axios.get('http://localhost:3000/company').then(
        res =>{
            context.commit('toComp',res.data)
        }
    )
    }
  },
  modules: {
  },
  getters:{
    getIsModal(state){
      return state.isModal
    },
    getIsEditModal(state){
      return state.isEditModal
    },
    getCarsAll(state){
      return state.Cars
    },
    getCompAll(state){
      return state.company
    },
    getByIdCar(state){
      return carId => {
        return state.Cars.find(i => i.id == carId)
      }
    },
    getByIdComp(state){
      return cId => {
        return state.company.find(i => i.id == cId)
      }
    }
  }
})
