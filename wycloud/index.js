//此处是网易云API
const BASE_URL = 'https://netease-cloud-music-api-six-taupe.vercel.app'
class WYrequest{
  request(url,method,params){
    return new Promise((resolve,reject) =>{
      wx.request({
        url: BASE_URL + url,
        method:method,
        data:params,
        success:function(res){
          resolve(res.data)
        },
        fail:function(err){
          reject(err)
        }
      })
    })
  }
  get(url,params){
    return this.request(url,"GET",params)
  }
  post(url,data){
    return this.request(url,"POST",data)
  }
}
const wyrequest = new WYrequest()
export default wyrequest