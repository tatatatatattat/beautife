import {request} from './request'
export function getHomeTitle(){
    return request({
        url:"home/multidata"
    })
}