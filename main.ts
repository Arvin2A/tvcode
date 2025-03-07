basic.showString("My first code", 70)
basic.forever(function () {
    music.play(music.stringPlayable("C5 C C5 C C5 C C5 C ", 120), music.PlaybackMode.InBackground)
    images.createBigImage(`
        # # . . # . . . . .
        # # . # . # # . . .
        . . # . . # # # # #
        # # . # . # # . . .
        # # . . # . . . . .
        `).scrollImage(5, 500)
    music.stopAllSounds()
})
