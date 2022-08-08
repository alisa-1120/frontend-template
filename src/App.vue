<template>
  <ConnectWallte/>
  <router-view/>
</template>

<script>
import ConnectWallte from './components/ConnectWallteExample.vue';
export default {
    components: {
        ConnectWallte,
  },
}
</script>
<style lang="less">
 @import 'assets/css/style.less';
</style>
