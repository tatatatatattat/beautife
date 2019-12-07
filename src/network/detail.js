import {request} from './request'
export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 推荐接口
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

// 创建一个class类
export class Goods {
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.disCount = itemInfo.discountDesc;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.discountBgColor = itemInfo.discountBgColor;
    }
}


export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam{
    constructor(info,rule){
        // image在某些商品中有某些没有
        this.image = info.image?info.image[0]:'';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}