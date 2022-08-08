import { ethers } from "ethers";

export const approve = async (contract, address, account) => {
    return contract.methods
    .approve(address, ethers.constants.MaxUint256)
    .send({ from: account })
}