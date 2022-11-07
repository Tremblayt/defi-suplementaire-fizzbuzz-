basic.forever(function () {
    for (let index = 0; index <= 100; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            basic.showString("Fizz buzz")
        } else if (index % 3 == 0) {
            basic.showString("Fizz")
        } else if (index % 5 == 0) {
            basic.showString("Buzz")
        } else {
            basic.showNumber(index)
        }
        basic.pause(500)
        basic.clearScreen()
    }
})
