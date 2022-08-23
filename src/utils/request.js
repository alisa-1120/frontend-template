import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout:30000
})


service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
   
    const res = response.data

    if (res.statusCode !== 200) {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
  
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res.data
      }
    },
    error => {
        Message({
            message:error.message,
            type:'error',
            duration:5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
