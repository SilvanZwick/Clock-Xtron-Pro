@namespace
class SpriteKind:
    Passive = SpriteKind.create()
State = 1
scene.set_background_color(1)
Title = sprites.create(assets.image("""
    Title
"""), SpriteKind.Passive)
Title.set_position(80, 15)
Title.set_scale(4, ScaleAnchor.MIDDLE)
Hrs1 = sprites.create(assets.image("""
    Digit0
"""), SpriteKind.Passive)
Hrs1.set_position(33, 60)
Hrs1.set_scale(2, ScaleAnchor.MIDDLE)
Hrs2 = sprites.create(assets.image("""
    Digit0
"""), SpriteKind.Passive)
Hrs2.set_position(63, 60)
Hrs2.set_scale(2, ScaleAnchor.MIDDLE)
Colon = sprites.create(assets.image("""
    Colon
"""), SpriteKind.Passive)
Colon.set_position(93, 60)
Colon.set_scale(2, ScaleAnchor.MIDDLE)
Min1 = sprites.create(assets.image("""
    Digit0
"""), SpriteKind.Passive)
Min1.set_position(105, 60)
Min1.set_scale(2, ScaleAnchor.MIDDLE)
Min2 = sprites.create(assets.image("""
    Digit0
"""), SpriteKind.Passive)
Min2.set_position(135, 60)
Min2.set_scale(2, ScaleAnchor.MIDDLE)

def on_forever():
    if State == 1:
        pass
    else:
        if State == 1:
            pass
        else:
            pass
forever(on_forever)

def on_forever2():
    if State == 1:
        pass
forever(on_forever2)
