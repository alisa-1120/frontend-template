import { ref, reactive, getCurrentInstance, toRefs } from 'vue';
import { useStore } from "vuex"
import Web3, { utils } from 'web3';
import Web3Modal from 'web3modal';
import { getChainData } from '@/web3/tools';
import { providerOptions } from '@/web3/config';

const INITIAL_STATE = {
  web3: null,
  provider: null,
  userAddress: '',
  connected: false,
  chainId: 6999,
  networkId: 6999,
};

export default function UseWallet() {

  const { ctx: _this } = getCurrentInstance();
  const store = useStore()  
  const walletObj = reactive({ ...INITIAL_STATE });
  const fetching = ref(false);
  const assets = ref(0);

  const web3Modal = new Web3Modal({
    theme: 'dark',
    network: getChainData(walletObj.chainId).network,
    cacheProvider: true,
    providerOptions,
  });
  
  const resetApp = async () => {
    const { web3 } = walletObj;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    web3Modal.clearCachedProvider();
    assets.value = 0;
    Object.keys(INITIAL_STATE).forEach((e) => {
      walletObj[e] = INITIAL_STATE[e];
    });

    const obj = {
      connected:false,
    }
    store.commit('disConnect',obj)
    _this.$forceUpdate();
  };
  
  const getUserBalance = () => { 
     return walletObj.web3?walletObj.web3.eth
    .getBalance(walletObj.userAddress)
    .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0)):0;
  }

  const getAccountAssets = async () => {
    fetching.value = true;
    assets.value = await getUserBalance();
  };
  
  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    provider.on('disconnect', () => resetApp());

    provider.on('accountsChanged', async (accounts) => {
      walletObj.userAddress = accounts[0];
      await getAccountAssets();
    });
    provider.on('chainChanged', async (chainId) => {
      const networkId = await walletObj?.web3?.eth?.net.getId();
      walletObj.chainId = chainId;
      walletObj.networkId = networkId;
      const web3 = new Web3(provider);
      walletObj.web3 = web3
      store.commit('setWeb3',web3)
      await getAccountAssets();
    });
  };

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    await subscribeProvider(provider);
    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const networkId = await web3.eth.net.getId();
    const chainId = await web3.eth.getChainId(); 

    walletObj.web3 = web3;
    walletObj.provider = provider;
    walletObj.connected = true;
    walletObj.userAddress = address;
    walletObj.chainId = chainId;
    walletObj.networkId = networkId;
    const obj = {
      connected:true,
    }

    store.commit('connect',obj)
    store.commit('setWeb3',web3)

    await getAccountAssets();
  };

  return {
    ...toRefs(walletObj),
    fetching,
    assets,
    resetApp,
    getAccountAssets,
    web3Modal,
    // methods
    onConnect,
  };
}
