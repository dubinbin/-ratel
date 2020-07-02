import React, { FC, useState, useCallback } from 'react'
import style from './index.module.scss'
import { MenuList, IMenuListType } from '../../ComponentsConfig'

export function LeftSideMenu(props: {seleteItem: (item: IMenuListType) => void}) {
    const [active, setActive] = useState<number>(0)

    const selectItem = useCallback((item: IMenuListType, index: number) => {
        setActive(index);
        props.seleteItem(item);
    }, [])

    return (
        <div className={style.LeftSideMenu}>
            <ul className={style.LeftSideMenuUl}>
                {MenuList.map((item, index) => (
                    <li className={index === active ? style.activeItem : undefined} key={item.id} onClick={() => selectItem(item, index)}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}