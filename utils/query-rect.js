export function queryRect(id){
  return new Promise((resolve) =>{
    const query = wx.createSelectorQuery()
    query.select(id).boundingClientRect()
    query.exec(res =>{
      // console.log(res);
      // this.setData({swiperHeight:res[0].height})
      // console.log(this.data.swiperHeight);
      resolve(res)
    })
  })
  
}