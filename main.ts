basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # # .
    . . # # .
    `)
music.setTempo(45)
for (let index = 0; index < 2; index++) {
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
}
music.playTone(587, music.beat(BeatFraction.Half))
music.playTone(587, music.beat(BeatFraction.Quarter))
music.playTone(494, music.beat(BeatFraction.Half))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Quarter))
for (let index = 0; index < 2; index++) {
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
}
music.playTone(587, music.beat(BeatFraction.Half))
music.playTone(587, music.beat(BeatFraction.Quarter))
music.playTone(698, music.beat(BeatFraction.Quarter))
music.playTone(698, music.beat(BeatFraction.Eighth))
music.playTone(587, music.beat(BeatFraction.Eighth))
music.playTone(494, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Quarter))
music.playTone(523, music.beat(BeatFraction.Eighth))
music.playTone(392, music.beat(BeatFraction.Eighth))
music.playTone(330, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Quarter))
music.playTone(392, music.beat(BeatFraction.Eighth))
music.playTone(349, music.beat(BeatFraction.Eighth))
music.playTone(294, music.beat(BeatFraction.Quarter))
music.playTone(261, music.beat(BeatFraction.Whole))
music.playTone(261, music.beat(BeatFraction.Half))
basic.forever(function () {
	
})
