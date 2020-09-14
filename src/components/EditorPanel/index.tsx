import React, { useCallback, ComponentClass, useEffect, useReducer } from 'react'
import style from './index.module.scss'
import { observer } from 'mobx-react'
import { useStore } from 'store/store'
import { Draggable, Droppable, DragDropContext,  DraggableProvided, DroppableProvided, DropResult, DroppableStateSnapshot  } from 'react-beautiful-dnd'

export const EditorPanel = observer((props: {openRightBoard: () => void}) =>{
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const { editComponent, componentQueue, adjustProcedure } = useStore()
    const { openRightBoard } = props;

    useEffect(() => {
        forceUpdate()
    }, [componentQueue.length])

    const clickComp = useCallback((Comp) => {
        openRightBoard()
        editComponent(Comp)
    } , [])

    const onDragEnd = useCallback((result: DropResult) => {
        const destination = result.destination;
        const source = result.source;
        if (destination == null || source == null) return;
        if (destination.index === source.index) return;
        adjustProcedure(source.index, destination.index);
      }, []);

    return (
        <div className={style.MiddleModule}>
            <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
                <div className={style.MiddleModuleWrapper}>
                    <Droppable droppableId="MiddleModule">
                        {(provided: DroppableProvided) => (
                            <div 
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={style.componentWrap}
                            >      
                                <EditorPanelItem clickComp={(comp) => clickComp(comp)}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable> 
                </div>
            </DragDropContext>
        </div>
    )
})

export const EditorPanelItem = observer((props: {clickComp: (Comp: any) => void}) => {

    const { componentQueue } = useStore()

    return (
        <div>
            {componentQueue.map((Comp: {name: string, component: ComponentClass, props: {[key: string]: any}}, index: number) => {
                const Component = Comp.component;
                return (
                    <Draggable draggableId={`draggable-${index}`} index={index} key={index}>
                        {(provided) => (
                            <div className={style.componentWrapInner} 
                                    onClick={() => props.clickComp(Comp)} 
                                    key={Comp.name}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                            >
                                <div className={style.componentWrapMask}></div>
                                <div className={style.operationTools}>
                                    <div className={style.editBtn}>
                                        <img src={require('./images/edit.png')} alt=""/>
                                    </div>
                                    <div className={style.deleteBtn}>
                                        <img src={require('./images/delete.png')} alt=""/>
                                    </div>
                                </div>
                                <Component {...Comp.props}/>
                            </div>
                        )}
                    </Draggable>
                )
            })}
        </div>
    )
})
