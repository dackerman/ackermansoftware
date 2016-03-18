This project is a 2D Game engine built specifically for android
games. I have always been very interested in video game engines, but
only recently have had any idea how to actually build one. I still
don't, but I had some ideas about how I would go about it - especially
after watching some great talks from
[Chris Pruett](http://www.youtube.com/watch?v=7-62tRHLcHk) about
Android game development.

This application features two threads, one that renders the scene, and
one that executes the game logic. The rendering thread gets frequently
blocked by IO, so it's advantageous to have the game thread allowed to
do some processing while the rendering thread displays the last
image. I use double buffering, which both allows me to keep the game
screen from flickering, but also allows me to build up the next frame
of animation on the game thread while the rendering thread displays
the last one.

![](images/dackdroid_code2.png)

The engine utilizes a tile system to render the screen, and uses a
SurfaceHolder to actually do the drawing. The tiles can be any size,
and infinitely tiled in the case of ground or grass. The rendering
system doesn't use OpenGL, as I didn't want to lose the opportunity
for being compatible on multiple platforms.

There is also a rudimentary camera system that currently can be
controlled by the GameThread. If desired, the user of this library
could control the camera X and Y position with the touchscreen,
allowing the user to drag the camera around to view the world.
