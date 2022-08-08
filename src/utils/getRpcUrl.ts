import random from 'lodash/random'

const nodes = [process.env.VUE_APP_NODE_1]

const getNodeUrl = () => {
    const randomIndex = random(0,nodes.length-1)
    return nodes[randomIndex]
}

export default getNodeUrl