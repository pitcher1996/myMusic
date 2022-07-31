import myrequest from '../index'
export function getBanner(params) {
  return myrequest.get("/banner",params
  )
}
//推荐歌曲数据
export function getHotList(){
  return myrequest.get("/top/list")
}