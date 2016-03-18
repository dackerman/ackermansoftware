This is the game that I had in mind while building the
[Dackdroid game engine](#dackdroid). The name "Fort Horrors!" comes
from my idea for this to be a survival horror game.

The premise of the game is that you have Zombies coming at you from
all sides, and you need to stay in your fort to keep from getting
eaten. You need to build a fort around yourself, but the Zombies are
busy breaking down your walls! You need to be constantly repairing
your walls and setting up traps to kill the zombies. Every time you
kill a zombie, you get some extra materials to keep alive.

![](images/fort_horrors_icon.png "The icon I created for Fort
Horrors. The red behind the skull is supposed to be blooood")

To create the demo screenshot you see on the left, I used Dackdroid's
tiling engine to make a landscape of grass, then added extra types of
tiles for concrete (including special corner tiles that you can see
blending into the grass at the edges). The little orange things are
actually birds, and each one has it's own AI.

Each bird has a simple three frame animation and flys around the
screen with some basic AI. Each bird has a `think()` stage, and it
decides where it needs to fly, flys there, and then thinks about where
to fly next. All the birds AI's are in the Game Thread, calculated in
a simple for loop across all thinking entities in the game.

As you can see from the debug output, the rendering and logic threads
are both running around 20fps, but this is only because I have
throttled them that slow - the actual framerate I could get with this
demo (about 50 birds) was over 60fps.
