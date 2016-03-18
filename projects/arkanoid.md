This game is essentially a clone of the classic Arkanoid games from
the arcade. You controll a little bumper with your phone's trackball,
and try to hit the ball as it comes down the screen. If the ball hits
any of the bricks above, they break loose and come falling down,
obeying the laws of 2D physics (including rotation, rebound, and
collision with other bricks)! I used the great library
[JBox2D](http://www.jbox2d.org/) for my physics animations.

[![](images/arkanoid_broken_thumb.png)](images/arkanoid_broken.png)

This is the first game (or any app for that matter) I built on
Android. I build it when I had an HTC Hero, and it clearly shows. The
screenshot on the left is taken with a Nexus S, which has much better
screen resolution (`480x800` as opposed to `240x320`). I didn't bother
to use relative coordinates, so you can see the whole game only takes
up a small portion of the screen! Oh well, it was a great learning
experience.

One thing that can't be shown in a screenshot, is that I used the
Android api to find the direction of gravity, and changed my in-game
gravity to match it. Therefore, when the user hit a block and it came
falling down, you could move your phone to have it bounce out of the
way of your ball.
