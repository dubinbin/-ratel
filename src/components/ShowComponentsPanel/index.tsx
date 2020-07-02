import React, { useCallback } from 'react'
import { IMenuListType } from 'components/ComponentsConfig'
import { CollapseComp } from 'componentsLibrary/Collapse';

export function ShowComponentsPaenel(props: {data: IMenuListType}) {

    const { data } = props;

    const renderDifferentComponent = useCallback(() => {
        switch(data.tag) {
            case 'Collapse':
                return <CollapseComp/>
            default:
                return null
        }
    }, [])

    return renderDifferentComponent()
}