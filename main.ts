input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    rtcpcf85063tp.writeDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51), rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Sekunde), [0, -1 + rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC)])
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    rtcpcf85063tp.writeDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51), rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Sekunde), [0, 1 + rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC)])
})
let rgbSekunde = 0
matrix.init(matrix.ePages.y64)
matrix.displayMatrix()
rtcpcf85063tp.beimStart(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
loops.everyInterval(1000, function () {
    rtcpcf85063tp.readDateTime(rtcpcf85063tp.rtcpcf85063tp_eADDR(rtcpcf85063tp.eADDR.RTC_x51))
    rtcpcf85063tp.anzeige25LED(rtcpcf85063tp.e25LED.Zeit)
    if (rtcpcf85063tp.isChanged(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute))) {
        matrix.clearMatrix(0, 5)
        matrix.writeClock_radius24(30, 23, rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Stunde), rtcpcf85063tp.eFormat.DEC), rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Minute), rtcpcf85063tp.eFormat.DEC))
        matrix.displayMatrix(0, 5, matrix.eI2C.I2C_x3C)
    }
    matrix.writeDigits(6, 0, rtcpcf85063tp.getTime(rtcpcf85063tp.ePart.mit), 11, 0, matrix.eTransparent.u, matrix.matrix_eFaktor(matrix.eFaktor.f2))
    matrix.displayMatrix(6, 7, matrix.eI2C.I2C_x3C)
    rgbSekunde = Math.trunc(rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Sekunde), rtcpcf85063tp.eFormat.DEC) / 5)
    for (let Index = 0; Index <= 11; Index++) {
        if (Index == rgbSekunde && rtcpcf85063tp.getByte(rtcpcf85063tp.rtcpcf85063tp_eRegister(rtcpcf85063tp.eRegister.Sekunde), rtcpcf85063tp.eFormat.einer) % 2 == 0) {
            CalliColor.ShowColorOnPixelbright(CalliColor.rgb(0, 255, 0), Index)
        } else {
            CalliColor.ShowColorOnPixelbright(0x000000, Index)
        }
    }
})
