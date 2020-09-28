import { pluginsInit } from './initStore'
import { CarouselComp } from 'componentsLibrary/Carousel'
import { CardComp } from 'componentsLibrary/Card'
import { ImageComp } from 'componentsLibrary/ImageComp'
import { TextComp } from 'componentsLibrary/TextComp'

pluginsInit.components.registerComponent('Carousel', CarouselComp)
pluginsInit.components.addComponentToGroup('Banner', ['Carousel'])

pluginsInit.components.registerComponent('Card', CardComp)
pluginsInit.components.addComponentToGroup('卡片', ['Card'])

pluginsInit.components.registerComponent('ImageComp', ImageComp)
pluginsInit.components.addComponentToGroup('图片组件', ['ImageComp'])

pluginsInit.components.registerComponent('TextComp', TextComp)
pluginsInit.components.addComponentToGroup('文字组件', ['TextComp'])
