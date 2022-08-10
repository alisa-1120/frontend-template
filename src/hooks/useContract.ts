
import { getMasterchefAddress } from "../utils/addressHelpers"
import masterchefabi from "../config/abi/masterchef3.json"


export const useMasterContract = (web3) => {
  return new web3.eth.Contract(masterchefabi, getMasterchefAddress())
}

