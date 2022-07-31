import wyrequest from '../index'
export function getHotList(params) {
  return wyrequest.get("/top/song",params
  )
}