const Router = require('koa-router');

class IndexController {
    static async getCard(ctx, next) {
        const data = [{
            title: '依巴特 儿童驼奶粉 225克（15克*15袋）/罐 ',
            price: 17500,
            originPrice: 25000,
            cover: 'https://www.160dyf.com/Public/upload/goods/2019/08-01/200x200/5d42bafa4e899.jpg',
            link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
        },
        {
            title: '跨境 新版澳洲爱他美白金版Aptamil婴幼儿配方奶粉 3段 （1-3岁）900g 1xc',
            price: 15500,
            originPrice: 22000,
            cover: 'https://www.160dyf.com/Public/upload/goods/2018/01-15/200x200/5a5c56ef0382a.jpg',
            link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
        },
        {
            title: '跨境 Devondale 澳大利亚 德运 脱脂高钙成人牛奶粉  1kg 1xc',
            price: 13500,
            originPrice: 21000,
            cover: 'https://www.160dyf.com/Public/upload/goods/2019/03-12/200x200/5c87a7eae802b.jpg',
            link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
        },
        {
            title: '露安适 婴儿手口专用湿巾 20片/包 宝宝儿童便携随身装 ',
            price: 12500,
            originPrice: 20000,
            cover: 'https://www.160dyf.com/Public/upload/goods/2019/08-01/200x200/5d42bafa4e899.jpg',
            link: 'https://m1.business.tryweike.cn/operation-business/fourth-activity/coupon-activity?entries=icon'
        }]
        try {
            ctx.response.body = {
                msg: 'ok',
                code: 0,
                data
            }
        } catch (e) {
            ctx.response.body = e
        }
    } 
}

module.exports = IndexController