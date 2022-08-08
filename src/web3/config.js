import WalletConnectProvider from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

const providerOptions = {
   // https://docs.walletconnect.org/
   walletconnect:{
    package:WalletConnectProvider,
    options: {
        infuraId: 'xxxxxxxxxx' // TODO infuraId
    }
   },
   coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: 'My Awesome App', // Required
      infuraId: 'INFURA_ID', // Required
      rpc: '', // Optional if `infuraId` is provided; otherwise it's required
      chainId: 1, // Optional. It defaults to 1 if not provided
      darkMode: false // Optional. Use dark theme, defaults to false
    }
   },
   binancechainwallet: {
    display:{
      name:'Binance Chain Wallet'
    },
    package: true
  }
}


export { providerOptions }
