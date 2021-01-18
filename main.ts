input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("Empo2K and Jolo2K are the best!")
    }
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        led.setBrightness(255)
        basic.showIcon(IconNames.Duck)
        basic.pause(500)
        led.setBrightness(55)
        basic.showIcon(IconNames.Duck)
        basic.pause(500)
    }
    basic.clearScreen()
    basic.pause(500)
    led.setBrightness(255)
    for (let index = 0; index < 2; index++) {
        basic.showNumber(input.temperature())
        basic.pause(200)
    }
    basic.pause(500)
})
