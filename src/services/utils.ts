export function randomNum() { // 生成n位长度的字符串
    return Math.floor(new Date().getTime() * (Math.random() * 60))
}
