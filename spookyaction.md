"Spooky action at a distance" is a GWT webapp that allows a user to
edit files on a remote machine (namely, the webserver). The main
advantage to this app is that you can have an extremely slow and flaky
connection and still not notice.

The way this application works is that a person first chooses a file
to edit. They pick the file and it loads in the frontend. This is the
most networking activity needed, since the whole file needs to be
loaded up front. After this happens, then the user starts editing the
file in the editor area. The application is keeping track of all the
actions that "commands" that the user is performing on the file, such
as movement and keys pressed (like backspace, and text inserted). The
application keeps track of these actions and "applies" them to the
code in javascript so you can see your changes.

If the connection to the server is dropped, or is severely degraded,
the commands queue up on the client side. From the user's perspective,
editing can continue as if the file was local, but the UI will show
that some commands are queued up. Once the connection is regained, the
commands are sent to the server and applied accordingly.
