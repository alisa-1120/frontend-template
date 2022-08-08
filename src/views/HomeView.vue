<template>
  <div class="home">
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getAllNode } from '@/API/node'
export default defineComponent({
  name: 'HomeView',
  components: {
  },
  mounted(){
    const that = this;
    
    getAllNode().then(res => {
      console.log(res)
    })
  }
})
</script>
