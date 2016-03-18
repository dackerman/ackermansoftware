Based on Steve Gibson's
[Off the Grid project](https://www.grc.com/otg/offthegrid.htm) for
storing passwords, this project implements an alphabetic "latin
square" in Java.

#### What is "Off the Grid"

Steve Gibson is a security specialist, and has come up with a way for
people to generate a random
["latin square"](http://en.wikipedia.org/wiki/Latin_square) to use as
a key for all their online and offline passwords. This avoids the
problem of users always using the same password for all their
websites, because you can use one printout of a latin square to
"derive" as many unique passwords as you'd like with a simple strategy
based on the domain name.

This works similarly to password generation tools that take a basic
password and run a one-way encryption through it with a salt of the
website. The benefit of this latin square is that you can print it out
and take it with you without worrying about someone stealing it. Since
you make up your own method for deriving passwords, there is no
indication to a theif what your passwords are. Also, since you can
take it offline, you don't have to worry about a server getting hacked
and releasing passwords, or some program getting deprecated and
locking you out of your passwords.

#### Implementation

Since a latin square has the constraint that each row and column must
contain all the letters of the alphabet exactly once, this means there
are many "invalid" latin squares, and you need to dynamically adjust
what characters you have to work with as you generate each row. It is
also possible to generate some rows that make the following rows
impossible - as the constraints for what characters you have left
shrink as you get to the last row. It's possible that more than one
column has the same letter left to complete the alphabet - in which
case the row would be forced to have two characters with the same
letter. In this case, my algorithm backs up and retries previous rows
randomly to try and get one that is valid. It does this all very
quickly, and as you can see from the screenshot, it takes about 20
milliseconds to generate a given latin square.

<a href="https://www.grc.com/otg/offthegrid.htm" title="Screenshot of Steve Gibson's latin square" target="_blank">
    <img class="thumb float-left" src="images/offthegrid_stevessquare.png" />
</a>

One interesting aspect of the latin square is that the space of
possible valid latin squares have more bits of entropy than normal
random number generators, which means that you can't even reach every
possible unique latin square by just randomly generating
them. Therefore, my solution can't generate all possible latin
squares, but the code is flexible enough to take a new random number
generator if one was created. Steve Gibson created his own ultra-high
entropy PRNG specifically for this project.
