import myrequest from '../index'
export function getTopMV(offset,limit = 10) {
  return myrequest.get("/top/mv",{
    offset,
    limit
  })
}