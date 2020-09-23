import { Request, IResponse } from "@/services/requst";

export type IGetCardType = {
    title: string
    price: number,
    originPrice: number,
    cover: string
    link: string
}[]

export const CardServicesModule = {
    getCard(): Promise<IResponse<IGetCardType>> {
       return Request.$get<IResponse<IGetCardType>>('/index/getData')
    }
}