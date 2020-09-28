

#### 2020 929 update --------

完成度：

拖拉 👌  
组件数据联动 👌

不知道数据和产品联动逻辑怎么设计，暂时停摆了

---------------------

### 一套用于搭建简单短平快类型活动页面的工具

技术栈：
前端：Typescript React(Hooks) Mobx Sass
后端：Nodejs


前端数据渲染结构，大致设计如下

```
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
    },
    {
        module: 'image',
        data_source: 'PORT', // PORT || USER-DEFINED,
        api: '',
        defineData: {},
    }
]

