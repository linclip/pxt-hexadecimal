//% weight=100 color=#0fbc11 icon="\u0023" block="Hexadecimal"

namespace hexadecimal {

    const numFont = [
        ["11", "11", "11", "11", "11"],   //0
        ["01", "01", "01", "01", "01"],   //1
        ["11", "01", "11", "10", "11"],   //2
        ["11", "01", "11", "01", "11"],   //3
        ["10", "10", "11", "01", "01"],   //4
        ["11", "10", "11", "01", "11"],   //5
        ["11", "10", "11", "11", "11"],   //6
        ["11", "01", "01", "01", "01"],   //7
        ["11", "11", "00", "11", "11"],   //8
        ["11", "11", "11", "01", "11"],   //9
        ["00", "11", "01", "11", "11"],   //a
        ["00", "10", "10", "11", "11"],   //b
        ["00", "00", "11", "10", "11"],   //c
        ["00", "01", "01", "11", "11"],   //d
        ["00", "11", "11", "10", "11"],   //e
        ["00", "01", "10", "11", "10"],   //f
        ["00", "00", "11", "00", "00"]    //-
    ]

    /**
     * show 2-digit hexadecimal number (0 to 255)
     * @param v number, eg: 0
     */
    //% blockId=showHex block="Show Hexadecimal  %v" weight=100

    export function showNumberHex(v: number): void {
        basic.clearScreen()
        if (v < 0) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        let n2 = 0
        n2 = Math.floor(v % 256 / 16)
        let n1 = Math.abs(Math.floor(v % 16))

        for (let y = 0; y < 5; y++) {
            if (n2 != 0 || v > 255) {
                for (let x = 0; x < 2; x++) {
                    if ((numFont[n2][y]).substr(x, 1) == "1") {
                        led.plot(x, y)
                    }
                }
            }
            for (let z = 3; z < 5; z++) {
                if ((numFont[n1][y]).substr(z - 3, 1) == "1") {
                    led.plot(z, y)
                }
            }
        }
    }
    /**
     * show 2-digit decimal number (-9 to 99)
     * @param v Numer, eg: 0
     */
    //% blockId=showNumberDecimal block="Show Decimal  %v"  weight=50
    export function showNumberDecimal(v: number): void {
        basic.clearScreen()
        if (v < -9) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        let n2 = 0
        if (v < 0) {
            n2 = 16
        } else {
            n2 = Math.floor(v % 100 / 10)
        }
        let n1 = Math.abs(Math.floor(v % 10))

        for (let y = 0; y < 5; y++) {
            if (n2 != 0 || v > 99) {
                for (let x = 0; x < 2; x++) {
                    if ((numFont[n2][y]).substr(x, 1) == "1") {
                        led.plot(x, y)
                    }
                }
            }
            for (let z = 3; z < 5; z++) {
                if ((numFont[n1][y]).substr(z - 3, 1) == "1") {
                    led.plot(z, y)
                }
            }
        }


    }



} 