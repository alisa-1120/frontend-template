<template>
  <div class="home">
     <ul>
        <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
     </ul>

     <button @click="getControl()">getControl</button>
  </div>
</template>

<script>
import { computed, defineComponent,onMounted,ref,toRaw} from 'vue'

import { useStore } from 'vuex'
import { getAllNode } from '@/API/node'
import { useMasterContract } from "../hooks/useContract"
export default defineComponent({
   name:'homeView',
   setup(){
   const store = useStore();
   try{ 
      let list = ref([]);

      getAllNode().then(res => {
        console.log('interface')
         list.value = res.miner_node
      })

      onMounted(async () => {
        

      })
      
      const getControl = ()=> {
        const web3 =  toRaw(store.getters['getWeb3'])
        const contract = useMasterContract(web3)
        contract.methods.eggPerBlock().call().then(res=>{
          console.log(res)
        })
     
      
      }
      
     return {
        list,
        getControl
      }
    
 
    //console.log(curweb3)

    }catch(e){
      console.log(e)
    }
      
   }
})

</script>
