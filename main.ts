namespace SpriteKind {
    export const Passive = SpriteKind.create()
}
scene.setBackgroundColor(1)
let Title = sprites.create(assets.image`Title`, SpriteKind.Passive)
Title.setPosition(80, 15)
Title.setScale(4, ScaleAnchor.Middle)
let Hrs1 = sprites.create(assets.image`Digit0`, SpriteKind.Passive)
Hrs1.setPosition(33, 60)
Hrs1.setScale(2, ScaleAnchor.Middle)
let Hrs2 = sprites.create(assets.image`Digit0`, SpriteKind.Passive)
Hrs2.setPosition(63, 60)
Hrs2.setScale(2, ScaleAnchor.Middle)
let Colon = sprites.create(assets.image`Colon`, SpriteKind.Passive)
Colon.setPosition(93, 60)
Colon.setScale(2, ScaleAnchor.Middle)
let Min1 = sprites.create(assets.image`Digit0`, SpriteKind.Passive)
Min1.setPosition(105, 60)
Min1.setScale(2, ScaleAnchor.Middle)
let Min2 = sprites.create(assets.image`Digit0`, SpriteKind.Passive)
Min2.setPosition(135, 60)
Min2.setScale(2, ScaleAnchor.Middle)
let AMPM = sprites.create(assets.image`AM`, SpriteKind.Passive)
AMPM.setPosition(80, 90)
AMPM.setScale(4, ScaleAnchor.Middle)
forever(function () {
    if (rtc.stringFormatTime("hh").charAt(0) == "0") {
        Hrs1.setImage(assets.image`Digit0`)
    } else {
        if (rtc.stringFormatTime("hh").charAt(0) == "1") {
            Hrs1.setImage(assets.image`Digit1`)
        } else {
            if (rtc.stringFormatTime("hh").charAt(0) == "2") {
                Hrs1.setImage(assets.image`Digit2`)
            }
        }
    }
    if (rtc.stringFormatTime("hh").charAt(1) == "0") {
        Hrs2.setImage(assets.image`Digit0`)
    } else {
        if (rtc.stringFormatTime("hh").charAt(1) == "1") {
            Hrs2.setImage(assets.image`Digit1`)
        } else {
            if (rtc.stringFormatTime("hh").charAt(1) == "2") {
                Hrs2.setImage(assets.image`Digit2`)
            } else {
                if (rtc.stringFormatTime("hh").charAt(1) == "3") {
                    Hrs2.setImage(assets.image`Digit3`)
                } else {
                    if (rtc.stringFormatTime("hh").charAt(1) == "4") {
                        Hrs2.setImage(assets.image`Digit4`)
                    } else {
                        if (rtc.stringFormatTime("hh").charAt(1) == "5") {
                            Hrs2.setImage(assets.image`Digit5`)
                        } else {
                            if (rtc.stringFormatTime("hh").charAt(1) == "6") {
                                Hrs2.setImage(assets.image`Digit6`)
                            } else {
                                if (rtc.stringFormatTime("hh").charAt(1) == "7") {
                                    Hrs2.setImage(assets.image`Digit7`)
                                } else {
                                    if (rtc.stringFormatTime("hh").charAt(1) == "8") {
                                        Hrs2.setImage(assets.image`Digit8-2`)
                                    } else {
                                        if (rtc.stringFormatTime("hh").charAt(1) == "9") {
                                            Hrs2.setImage(assets.image`Digit9`)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
