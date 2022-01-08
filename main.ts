datalogger.onLogFull(function () {
    logging = false
    basic.showString("Full")
})
input.onButtonPressed(Button.A, function () {
    if (logging == false) {
        logging = true
    } else if (logging == true) {
        basic.showIcon(IconNames.Yes)
        logging = true
    }
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    logging = false
})
let logging = false
logging = false
loops.everyInterval(20, function () {
    if (logging) {
        datalogger.logData([datalogger.createCV("strencth", input.acceleration(Dimension.Strength))])
    }
})
