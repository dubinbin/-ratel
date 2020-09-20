import React from 'react'
import style from './index.module.scss'

export function Title(props: {title: string}) {
    const { title } = props;
    return (
        <div className={style.title}>{title}</div>
    )
}