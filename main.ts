let 摄氏度 = 0
let 华氏度 = 0
basic.forever(function () {
    摄氏度 = input.temperature()
    华氏度 = 摄氏度 * (9 / 5) + 32
    basic.showNumber(华氏度)
    basic.pause(2000)
    basic.showNumber(摄氏度)
})
