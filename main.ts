enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    mySprite = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(0, 160), 0)
    mySprite.setVelocity(0, 50)
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let hero: Sprite = null
let mySprite: Sprite = null
music.setVolume(20)
music.play(music.createSong(hex`0096000408020305001c000f0a006400f4010a00000400000000000000000000000000000000022b000400080002242c0c001000012210001400011d1400180001192400280001292c003000012c34003800012206001c00010a006400f401640000040000000000000000000000000000000002400008000c0001241000140002202a14001800012418001c00021d271c00200002202a20002400012424002800012030003400012438003c00021d273c004000012909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001f000c000d00040d1015001400150002150b1c001d000213072c002d0003030506`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
info.setLife(3)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddddddddddddddddddddddddd33dddddddddddddddd
    ddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3ddddddddddddddddddddddddddddddddddddddd3dddddddddddddddd
    ddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333dddddddddddddddddddddddddddddddddddd3333ddddddddddddddd
    dddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddddddddddddddddddddddd33333ddddddddddddddd
    ddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333ddddddddddddddddddddddddddddddddd3333333dddddddddddddd
    ddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3ddddddddddddddddddddddddddddddddd33333d3dddddddddddddd
    ddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333ddddddddddddddddddddddddddddbddddddd3333dddddddddddddddd
    ddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333ddddddddddddddddddddddddddbdddddd3333333dddddddddddddd
    ddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333ddddddddddddddddddddddddddbddddd33333333dddddddddddddd
    ddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333ddddddddddddddddddddddddbdddd33333333333dddddddddddd
    dd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddddd33ddddddddbdd3d3333333333333ddddbddddd
    d33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbdddddd33333ddddddbdd333333333333333ddddbddddd
    33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd33333333ddddbddd33333333333333ddddbddddd
    333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd333333333ddddbdddd333333333333ddddbddddd
    d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3d33333333dddddbdddd3333333444444dbbdddd3
    d333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3dd333333333dddddbb3333333444444444bdddd3d
    33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd33333333ddddddddbb33333333443443bbdddddd
    333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3333333333dddddd333b333333343334bb3ddddd3
    3333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd333333b33dddddd33333333333333333bbdddddd33
    3333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd333333b3333ddddd333333333333333bbddddddd33
    3333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd333333b33b33dddddd333344444333333ddddddd33
    3333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd333333b33b33ddddd34444444444333333333ddd33
    3333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd333333b3b333dddd444444444443344433333ddd33
    3333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd33333bbb3443d3334444444444443444333ddddd3
    3333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd333333bb3443334444444444444444344433dddd33
    333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333333bb33333444444444444444444433333333333
    33bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b33333bb333344444444444444443bb333333333b333
    33b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b33333b3333433334443443443443bb333443333b333
    33b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b33333b3b33333344434433444333bb333b44333b333
    3bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b3333bb3b33333343334333334333bb333b33333b333
    3bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b333bbbb33333333433344333333bb333b333333b33
    3bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b333bbb333333334433443333333bb333b333333b33
    3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb3b333333333343333333b3333bb33b3333333bbb
    bb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333bbb333333333333333333b3333bbb3b333333333b
    3b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb333333333333b333333333333333333b3333bbbb33333333333
    3b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb333444333333b333333333333333333b3333bbbb33344433333
    3b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb3334443333333b444334443333333333b3333bbb333444333333
    44444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb33444334444444444433444333333333b3333bbb334443344444
    44443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb33333444444444443333b44433333333b3333bbb333334444444
    44444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb33334444444444444443b33333333b33b3333bbb333344444444
    44444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb3444434444444444444443333333b33b3333bbbb34444344444
    44444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b433443444444344443333333b33b3333bbb4444b4334434
    3444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b33443333444333bb3bb33333b33b3333bbbb444b3344333
    33b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb33333333b4333bb3b333333bb3bb333bbbb333bb333333
    33b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb33333333b3333bbbb3333333bbbb333bbbb333bb333333
    33b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb33333333b3333bb3333333333bbb333bbbb333bb333333
    33b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb33333333b3333bb33333333333bbb33bbbb333bb333333
    333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333333b333bb33333333333bbb33bbbb333bb333333
    333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333333bb3bbb3333443444334b33bbbb333bb33b333
    333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333333bbbbbb3334444444444443bbbbb33bb33b333
    3333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb3333333bbbbb334444444444444bbbbbb3bb33bb333
    33333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b333333333bbbb333443444444434bbbbbb3bb33b3333
    33333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b3333333333bbb3344334444443433bbbbbb3bb3b33333
    33333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb33333333333bbb3333344334433433bbbbbb3bbb333333
    33333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb3333333333333bbb333b3433333333333bbbbbbb33333333
    33333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb3333333333333bbb333b3333333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb3333333333333bbb333b3b33333333333bbbbbbb33333333
    33333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb33333333333333bbb333b3b33333333333bbbbbb333333333
    33333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb333333333333333bbb333b3b33333333333bbbbb3333333333
    33333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb333333333333333bb3333bbb33333333333bbbbb3333333333
    33333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb333333333333333bb333bbb333333333333bbbbb3333333333
    3333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d333333333333bbb333b333333333dd333bbbbb3d33333333
    3333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d33333bbb333b3333333333dd3bbbbbb33dd3333d3
    3333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd33333bbb3bbb3333333333333bbbbbbb33d333dd3
    dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33dd33bbbbbb33333333d33333bbbbbbb333333d33
    3dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd333333333dd3bbbbb33dd3333dd3333dbbbbbbbd33333333
    3dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d33333dddbbbbb333dd33dd33d3ddbbbbbbbd333d3333
    3dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d33dddbbb333333333d33dddddbbbbbbbdd3dd33d3
    ddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33dddddddbbbd33333333333dddddbbbbbbbdddd33ddd
    ddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbdddddddddddddbbbd333d33ddd33dddddbbbbbbbddddddddd
    ddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbdddddddddddddbbbd33ddd3dddd3dddddbbbbbbbddddddddd
    ddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbdddddddddddddbbbdddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbdddddddddddddbbb3ddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbdddddddddddddbbbbddddddddddddddddbbbbbbbddddddddd
    ddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbdddddddddddddbbbb3dddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbdddddddddddddbbbbbdddddddddddddddbbbbbbbddddddddd
    ddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3ddddddddddddbbbbb3ddddddddddddd3bbbbbbb3dddddddd
    ddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3ddddddddddddbbbbb3dddddddddddddbbbbbbbb3dddddddd
    ddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbddddddddddd3bbbbbbdddddddddddddbbbbbbbbbdddddddd
    ddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbddddddddddd3bbbbbbdddddddddddd3bbbbbbbbbdddddddd
    443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444443bbbbbbb3dddddddddddbbbbbbbb4444444444
    44444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb44444444444444444444444bbbddddddddd33bbb444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `)
mySprite = sprites.create(img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `, SpriteKind.Food)
mySprite.setPosition(randint(0, 160), 0)
mySprite.setVelocity(0, 50)
hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
hero.setPosition(79, 104)
controller.moveSprite(hero, 50, 0)
game.onUpdate(function () {
    if (mySprite.y > 120) {
        sprites.destroy(mySprite)
        mySprite = sprites.create(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, SpriteKind.Food)
        mySprite.setPosition(randint(0, 160), 0)
        mySprite.setVelocity(0, 50)
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    }
    if (hero.x > scene.screenWidth()) {
        hero.x = 0
    } else if (hero.x < 0) {
        hero.x = scene.screenWidth()
    }
})
