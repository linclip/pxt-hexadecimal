# Hexadecimal number font (2x5) for micro:bit

This is a hexadecimal number font for micro:bit.
You can show 2-digit hexadecimal number at a time.

Including decimal number font

## Code Example

### Hexadecimal number (0 to 255: ff)
```blocks
input.onButtonPressed(Button.A, () => {
    hexadecimal.showNumberHex(0)
})
input.onButtonPressed(Button.B, () => {
    hexadecimal.showNumberHex(255)
})
```

### Decimal number (-9 to 99)
```blocks
input.onButtonPressed(Button.A, () => {
    hexadecimal.showNumberDecimal(0)
})
input.onButtonPressed(Button.B, () => {
    hexadecimal.showNumberDecimal(99)
})
```

## More info

0 to 9 font based on [whaleygeek/mb_clock](https://github.com/whaleygeek/mb_clock).

[more description and demo video / 日本語の説明とデモ動画](http://newbodyfresher.linclip.com/hexadecimal-font-for-microbit)

## License

MIT

## Supported targets

* for PXT/microbit

