// pages/home-index/home.js
import {rankingStore} from '../../store/hot-store'

import { getBanner ,getHotMenu} from '../service/api/home'
import { queryRect } from '../../utils/query-rect'
import throttle from '../../utils/debounce'
import {getBangDan} from '../../wycloud/api/myhome'
const throttleImage = throttle(queryRect,100)
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    swiperHeight:0,
    recommendSong:[],
    playlists:[],
    tuijianlist:[],
    bangDanList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBanner()
    //发起共享数据的请求
    rankingStore.dispatch("getHot")
    //从store获取共享数据
    rankingStore.onState("hotRanking",res => {
      if(res.length == 0) return
      const recommendSong = res.slice(0,6)
      this.setData({recommendSong})
      console.log(recommendSong,'333');
    })
    //获取榜单数据
    this.getBangdan()
  },
  getBanner(){
    getBanner().then(res => {
      //小程序中setdata是同步的，react中setstate是异步的
      this.setData({banner:res.banners})
    })
    let params = {
      limit:6,
      order:'hot',
    }
    getHotMenu(params).then(res =>{
      this.setData({playlists:res.playlists})
    })
    let param={
      limit:6,
      order:'hot',
      cat:"华语"
    }
    getHotMenu(param).then(res =>{
      this.setData({tuijianlist:res.playlists})
    })
  },
  getBangdan(){
    getBangDan().then(res => {
      this.setData({bangDanList:res.list.slice(0,4)})
    }) 
  },
  //image组件创建后的监听
  watchImageLoad(){
    //获取图片高度封装函数
    throttleImage('#banner-image').then(res =>{
      this.setData({swiperHeight:res[0].height})
    })
  },
  lookUpMusic(){
    console.log('111');
    wx.navigateTo({
      url: '/pages/search-detail/index',
    })
  },

  handMoreClick(){
    wx.navigateTo({
      url: '/pages/song-item/index',
    })
  },
  handleRankingItemClick(){
    wx.navigateTo({
      url: '/pages/song-item/index',
    })
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
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})