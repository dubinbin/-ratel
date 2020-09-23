###
一套用于搭建简单短平快类型活动页面的工具

技术栈：
前端：Typescript React(Hooks) Mobx Sass
后端：Nodejs

通过css schema + js schema进行属性控制

// css schema目前策略
主动暴露一些需要调整的属性出来，用行内式加上去，具体还要再思考


// 绑定接口问题

前端数据渲染结构
//
data: [
    {
        module: 'card',
        data_source: 'PORT', // PORT || USER-DEFINED
        api: '',
        defineData: {},
    },
    {
        module: 'banner',
        data_source: 'PORT', // PORT || USER-DEFINED
        api: '',
        defineData: {},
    }
]