input.onButtonPressed(Button.A, function () {
    basic.showString("5 lados")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Egipto")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("vista aerea")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
