export function randomNum() { // 生成n位长度的字符串
    return Math.floor(new Date().getTime() * (Math.random() * 60))
}


export function changeMoney(money: number, unit?: boolean): string {
    return unit ? '¥'  + (money / 100).toFixed(2) : (money / 100).toFixed(2)
}