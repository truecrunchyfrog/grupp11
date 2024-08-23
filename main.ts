controller.player4.onEvent(ControllerEvent.Connected, function () {
    player4 = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.Player)
    playerConnect(player4)
})
function playerConnect (player2: Sprite) {
    controller.moveSprite(player2, 100, 100)
    player2.ay = 10
}
controller.player3.onEvent(ControllerEvent.Connected, function () {
    player3 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Player)
    playerConnect(player3)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    player2 = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    playerConnect(player2)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 . . . 3 . . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . 3 . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    playerConnect(player1)
})
let player1: Sprite = null
let player2: Sprite = null
let player3: Sprite = null
let player4: Sprite = null
scene.setBackgroundColor(15)
