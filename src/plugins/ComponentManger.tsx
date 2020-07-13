import { CollapseComp } from '../componentsLibrary/Collapse'
import { pluginsInit } from './initStore'
import { CarouselComp } from 'componentsLibrary/Carousel'
import { CardComp } from 'componentsLibrary/Card'

pluginsInit.components.registerComponent('Collapse', CollapseComp)
pluginsInit.components.addComponentToGroup('折叠面板', ['Collapse'])


pluginsInit.components.registerComponent('Carousel', CarouselComp)
pluginsInit.components.addComponentToGroup('走马灯', ['Carousel'])

pluginsInit.components.registerComponent('Card', CardComp)
pluginsInit.components.addComponentToGroup('卡片', ['Card'])

// pluginsInit.components.registerComponent('Button', CollapseComp)
// pluginsInit.components.addComponentToGroup('折叠面板', ['CollapseComp'])