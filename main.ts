datalogger.onLogFull(function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.A, function () {
    if (logging == false) {
        basic.showString("is not logging")
    } else if (logging == true) {
        basic.showString("is logging")
    }
    logging = true
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("am I plugged in")
})
let logging = false
logging = false
datalogger.logData([datalogger.createCV("strencth", input.acceleration(Dimension.Strength))])
