import { pluginsInit } from './initStore'
import { CollapseComp } from 'componentsLibrary/Collapse'
import { CarouselComp } from 'componentsLibrary/Carousel'
import { CardComp } from 'componentsLibrary/Card'
import { ImageComp } from 'componentsLibrary/ImageComp'
import { TextComp } from 'componentsLibrary/TextComp'

pluginsInit.components.registerComponent('Collapse', CollapseComp)
pluginsInit.components.addComponentToGroup('折叠面板', ['Collapse'])

pluginsInit.components.registerComponent('Carousel', CarouselComp)
pluginsInit.components.addComponentToGroup('走马灯', ['Carousel'])

pluginsInit.components.registerComponent('Card', CardComp)
pluginsInit.components.addComponentToGroup('卡片', ['Card'])

pluginsInit.components.registerComponent('ImageComp', ImageComp)
pluginsInit.components.addComponentToGroup('图片组件', ['ImageComp'])

pluginsInit.components.registerComponent('TextComp', TextComp)
pluginsInit.components.addComponentToGroup('文字组件', ['TextComp'])
