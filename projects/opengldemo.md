This project was an initial attempt at learning the new OpenGL
libraries and getting started making a basic game engine in
3D. Obviously a full functioning 3D engine takes quite a while to
build, but I got a basic understanding from building this concept
while reading
["Game Engine Architecture"](http://www.amazon.com/Game-Engine-Architecture-Jason-Gregory/dp/1568814135)
by Jason Gregory.

In C and C++, I implemented an asset loading system for shaders and
models from the ground up, using my own model loading format. I built
a file exporter in Python that I could run in Blender to export into
the proper format. The image of the duck on the right is one of the
models I created in blender and exported into my engine for rendering.

I learned a lot about how game engines work from the book, but only
applied the basics to this engine as I ended up spending more time
worrying about low level details (like making sure I'm reading files
properly, making sure the basic lighting shader math was correct). The
project uses the latest OpenGL standard, which means there aren't any
built in functions for rendering - you have to figure out all the
shaders yourself.

Soon, I hope to build a 3D application using Go, since it has the
ability to interact with C and handle low level concerns, but is a
nice modern language with many improvements over C and C++.
