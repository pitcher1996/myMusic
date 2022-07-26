// pages/home-video/index.js
import {getTopMV} from '../service/api/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMvs: [],
    hasMore:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(options) {
  //   getTopMV(0).then(res =>{
  //     this.setData({topMvs:res.data})
  //   })
  // },
  onLoad: function(options){
    this.getTopMVData()
  },

  //网络请求封装
  async getTopMVData(offset){
    if(!this.data.hasMore) return  
    //展示加载动画
    wx.showNavigationBarLoading();

    const res = await getTopMV(0) 
    let newData = this.data.topMvs
    if(offset == 0){
      newData = res.data
    }else{
      newData = newData.concat(res.data)
    }
    this.setData({topMvs:res.data})
    this.setData({hasMore:res.hasMore})
    wx.hideNavigationBarLoading();
    if(offset === 0){
      wx.stopPullDownRefresh()
    }
  },

  onReachBottom: async function(){
    if(!this.data.hasMore) return
    const res = await getTopMV(this.data.topMvs.length)
    this.setData({topMvs:this.data.topMvs.concat(res.data)})
    this.setData({hasMore:res.hasMore})
    console.log(this.data.hasMore)
  },
  //下拉刷新 
  async onPullDownRefresh(){
    this.getTopMVData(0)
  },

  videoItemClick(event){
    const id = event.currentTarget.dataset.item.id;
    console.log(id);
    wx.navigateTo({
      url: '/pages/video-detail/video-detail?id=' + id,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})