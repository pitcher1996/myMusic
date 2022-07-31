import myrequest from '../index'
export function getTopMV(offset,limit = 10) {
  return myrequest.get("/top/mv",{
    offset,
    limit
  })
}

//请求MV地址
export function getMVUrl(id) {
  return myrequest.get("/mv/url",{id})
}

//请求MV详情
export function getMVDEtail(mvid){
  return myrequest.get("/mv/detail",{mvid})
}

//请求推荐数据
export function getRelatedVideo(id){
  return myrequest.get("/related/allvideo",{id})
}
