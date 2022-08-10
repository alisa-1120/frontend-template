<template>
  <div>
    <button @click="handleWalletConnect">WalletConnect</button>
    <button @click="resetApp">resetApp</button>

    <p>
      Address:
      {{ userAddress }}
    </p>
    <p>balance:{{ assets }}</p>
    <p>networkId: {{ networkId }}</p>
    <p>chainId: {{ chainId }}</p>
  </div>
</template>
<script setup>
import { computed,onMounted } from 'vue';
import { utils } from 'web3';
import useWallet from '../hooks/useWallte';
import { useStore } from "vuex"
import { getMasterchefAddress } from "../utils/addressHelpers"
import abi from "../config/abi/masterchef3.json"
const {
  onConnect,
  connected,
  web3,
  userAddress,
  chainId,
  networkId,
  resetApp,
  assets,
  getAccountAssets,
} = useWallet();

onMounted(async () => {
  const store = useStore()
  const connectInfo = store.getters['getWalletInfo'];
  if(connectInfo.connected){
    await onConnect();
  }
})



const masterchef = getMasterchefAddress()


const handleWalletConnect = async () => {
  await onConnect();
};



// function approve() {
//   return contract.value.methods
//     .approve(USDT_ADDRESS, utils.toHex(utils.toWei('1000000000000000000000000000', 'gwei')))
//     .send({ from: userAddress.value });
// }

// .....

</script>
