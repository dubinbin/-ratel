import React from 'react'


export enum ReportType {
    "Single" = "Single",
    "ItemList" = "ItemList",
}

interface IParams {
    type: ReportType
}


export function ReportComponent({...params}: IParams) {
    return (
        <div>TODO</div>
    )
}

// ReportComponent({type: ReportType['Single']})