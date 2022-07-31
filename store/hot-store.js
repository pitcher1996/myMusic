import {HYEventStore} from 'hy-event-store'
import {getHotList} from '../wycloud/api/myhome'
const rankingStore = new HYEventStore({
  state:{
    hotRanking:[]
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