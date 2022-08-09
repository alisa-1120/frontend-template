import { createStore } from 'vuex'

export default createStore({
  state: {
      walletInfo:{
        web3:null,
        provider:null,
        userAddress:'',
        connected:false,
        chainId:1,
        networkId:1,
      }
  },
  getters: {
    getWalletInfo(state){
       // const local_walletInfo =  localStorage.getItem('local_walletInfo') as Object

     
    
       return state.walletInfo
    }
  },
  mutations: {
    connect(state,obj){
       state.walletInfo = obj
       localStorage.setItem('local_walletInfo',obj)
    },
    disConnect(state,obj){
      state.walletInfo = obj
      localStorage.removeItem('local_walletInfo')
    }
  },
  actions: {
    
  },
  modules: {
  }
})
