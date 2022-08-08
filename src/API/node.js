import request from '@/utils/request'

export function getAllNode(params){
    return request({
        url:'/all_node',
        method:'get',
        params
    })
 }

 
