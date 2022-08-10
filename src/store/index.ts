import { createStore } from 'vuex'

export default createStore({
  state: {
      walletInfo:{
        connected:false,  
      },
      web3:null
  },
  getters: {
    getWalletInfo(state){
        let walletInfo = state.walletInfo
        const local_walletInfo =  localStorage.getItem('local_walletInfo')
        if(local_walletInfo){
          walletInfo = JSON.parse(local_walletInfo)
        }
        return  walletInfo
    },
    getWeb3(state){
      return state.web3
    }
  },
  mutations: {
    connect(state,obj){
       state.walletInfo = obj
       localStorage.setItem('local_walletInfo',JSON.stringify(obj))
    },
    disConnect(state,obj){
      localStorage.removeItem('local_walletInfo')
      state.walletInfo = obj 
    },
    setWeb3(state,obj){
      state.web3 = obj 
    }
  },
  actions: {
    
  },
  modules: {
  }
})
