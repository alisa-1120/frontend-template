import addresses from '@/config/constants/contracts'

const chainId = process.env.VUE_APP_CHAINID

export const getMasterchefAddress = () => {
    return addresses.masterChef[chainId]
}