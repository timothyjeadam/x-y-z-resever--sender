datalogger.onLogFull(function () {
    logging = false
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    logging = true
})
let logging = false
logging = false
datalogger.setColumns(["x", "y", "z"])
loops.everyInterval(50, function () {
    datalogger.logData([
    datalogger.createCV("x", input.acceleration(Dimension.X)),
    datalogger.createCV("y", input.acceleration(Dimension.Y)),
    datalogger.createCV("z", input.acceleration(Dimension.Z))
    ])
})
