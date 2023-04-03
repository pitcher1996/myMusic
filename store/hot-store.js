import {HYEventStore} from 'hy-event-store'
import {getHotList,getBangDan} from '../wycloud/api/myhome'
const rankingStore = new HYEventStore({
  state:{
    hotRanking:[],
    bangDan:[]
  },
  actions:{
    getHot(ctx){
      let params={
        type:0
      }
      getHotList(params).then(res => {
        ctx.hotRanking = res.data
      })
      
    }
  }
})
export {
  rankingStore
}