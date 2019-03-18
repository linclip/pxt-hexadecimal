let hundred = 0
let loopFlag = 0
let counter = 0
input.onButtonPressed(Button.AB, function () {
    if (loopFlag == 0) {
        loopFlag = 1
    } else {
        loopFlag = 0
    }
})
input.onButtonPressed(Button.A, function () {
    loopFlag = 0
    counter += -1
    if (counter < 0) {
        counter = 0
    }
    hexadecimal.showNumberHex(counter)
})
input.onButtonPressed(Button.B, function () {
    loopFlag = 0
    counter += 1
    if (counter > 255) {
        counter = 255
    }
    hexadecimal.showNumberHex(counter)
})
input.onGesture(Gesture.Shake, function () {
    counter = 0
    hexadecimal.showNumberHex(counter)
})
input.onPinPressed(TouchPin.P1, function () {
    counter += -16
    if (counter < 0) {
        counter = 0
    }
    hexadecimal.showNumberHex(counter)
})
input.onPinPressed(TouchPin.P0, function () {
    loopFlag = 0
    basic.showLeds(`
        # # . . .
        . # . . #
        # # . . #
        # . . # #
        # # . # #
        `)
    hundred = 0
    if (counter > 99) {
        hundred = Math.floor(counter / 100)
        hexadecimal.showNumberDecimal(hundred)
        basic.pause(1000)
    }
    hexadecimal.showNumberDecimal(counter)
})
input.onPinPressed(TouchPin.P2, function () {
    counter += 16
    if (counter > 255) {
        counter = 255
    }
    hexadecimal.showNumberHex(counter)
})
counter = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (loopFlag == 1) {
        counter += 1
        if (counter > 255) {
            counter = 0
        }
        hexadecimal.showNumberHex(counter)
        basic.pause(300)
    }
})
