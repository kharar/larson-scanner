function NeoPixelUpdate () {
    for (let index = 0; index <= leds - 1; index++) {
        strip.setPixelColor(index, neopixel.hsl(0, 255, list[index]))
    }
    strip.show()
    for (let index2 = 0; index2 <= leds - 1; index2++) {
        list[index2] = Math.constrain(list[index2] * fade, 0, 255)
    }
}
let fade = 0
let list: number[] = []
let strip: neopixel.Strip = null
let leds = 0
leds = 26
strip = neopixel.create(DigitalPin.P8, leds, NeoPixelMode.RGB)
list = [leds - 1]
let brightness = 30
fade = 0.5
let pause2 = 10
while (true) {
    for (let index3 = 0; index3 <= leds - 1; index3++) {
        list[index3] = brightness
        NeoPixelUpdate()
        basic.pause(pause2)
    }
    list[leds - 1] = brightness
    NeoPixelUpdate()
    basic.pause(pause2)
    for (let index4 = 0; index4 <= leds - 1; index4++) {
        list[leds - index4] = brightness
        NeoPixelUpdate()
        basic.pause(pause2)
    }
    list[0] = brightness
    NeoPixelUpdate()
    basic.pause(pause2)
}
basic.forever(function () {
	
})
control.inBackground(function () {
	
})
