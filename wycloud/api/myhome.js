import wyrequest from '../index'
export function getHotList(params) {
  return wyrequest.get("/top/song",params
  )
}
export function getBangDan(){
  return wyrequest.get("/toplist/detail")
}