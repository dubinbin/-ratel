import React, { useCallback, ComponentClass, useEffect, useReducer } from 'react'
import style from './index.module.scss'
import { observer } from 'mobx-react'
import { useStore } from 'store/store'
import { Draggable, 
        Droppable, 
        DragDropContext, 
        DroppableProvided, 
        DropResult 
    } from 'react-beautiful-dnd'


interface IComp {
    name: string
    component: ComponentClass
    props: {[key: string]: any}
    comp_id: string
}


export const MiddlePanel = observer((props: {openRightBoard: () => void}) =>{
    // eslint-disable-next-line
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const { editComponent, componentQueue, adjustProcedure } = useStore()
    const { openRightBoard } = props;

    useEffect(() => {
        forceUpdate()
    }, [componentQueue.length])

    const clickComp = useCallback((Comp) => {
        openRightBoard()
        editComponent(Comp)
    } , [editComponent, openRightBoard])

    const onDragEnd = useCallback((result: DropResult) => {
        const destination = result.destination;
        const source = result.source;
        if (destination == null || source == null) return;
        if (destination.index === source.index) return;
        adjustProcedure(source.index, destination.index);
      }, [adjustProcedure]);

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
                                    <MiddlePanelWrap clickComp={(comp) => clickComp(comp)}/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable> 
                </div>
            </DragDropContext>
        </div>
    )
})

export const MiddlePanelWrap = observer((props: {clickComp: (Comp: IComp) => void}) => {

    const { componentQueue } = useStore()

    return (
        <div className={style.MiddleModuleWrappers}>
            {componentQueue.map((Comp: IComp, index: number) => {
                const Component = Comp.component;
                return (
                    <Draggable draggableId={`draggable-${index}`} key={index} index={index}>
                        {(provided) => (
                            <MiddlePanelItem 
                                Comp={Comp} 
                                provided = {provided} 
                                Component={Component} 
                                index={index} 
                                clickComp={props.clickComp}
                            />
                        )}
                    </Draggable>
                )
            })}
        </div>
    )
})

export const MiddlePanelItem = observer((props: {Comp: IComp, provided: any, clickComp: (Comp: IComp) => void, Component: React.ComponentClass<{}, any>, index: number}) => {
    const { Comp, provided, Component, index } = props;
    const { deleteItemFromQueue } = useStore()

    const deleteOption = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent> ,index: number) => {
        e.stopPropagation();
        deleteItemFromQueue(index)
    }, [deleteItemFromQueue])

    return (
            <div className={style.componentWrapInner} 
                    key={Comp.comp_id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    data-compid={Comp.comp_id}
            >
                <div className={style.componentWrapMask}></div>
                <div className={style.operationTools}>
                    <div className={style.editBtn} onClick={() => props.clickComp(Comp)} >
                        <img src={require('./images/edit.png')} alt=""/>
                    </div>
                    <div className={style.deleteBtn} onClick={(e) => deleteOption(e, index)}>
                        <img src={require('./images/delete.png')} alt=""/>
                    </div>
                </div>
                <Component {...Comp.props}/>
            </div>
        )
})