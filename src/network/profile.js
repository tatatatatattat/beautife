import {request} from './request'

export function getProfile(){
    return request({
        url: '/category'
    })
}
export function getSubcategory(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function getProfileDetail(miniWallkey, type){
    return request({
        url:"/subcategory/detail",
        params:{
            miniWallkey,
            type
        }
    })
}