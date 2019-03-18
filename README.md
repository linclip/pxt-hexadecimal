# pxt-hexadecimal

Hexadecimal font for micro:bit.
You can show number in hexadecimal.
Including 2 digits font.

## Code Example

### Hexadecimal (0 to 255)
```blocks
input.onButtonPressed(Button.A, () => {
    hexadecimal.showHex(0)
})
input.onButtonPressed(Button.B, () => {
    hexadecimal.showHex(255)
})
```

### 2 digits (-9 to 99)
```blocks
input.onButtonPressed(Button.A, () => {
    hexadecimal.show2digits(0)
})
input.onButtonPressed(Button.B, () => {
    hexadecimal.show2digits(99)
})
```

## License

MIT

## Supported targets

* for PXT/microbit

