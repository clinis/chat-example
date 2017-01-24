# Improved Socket.IO Chat Example

Source code for a very simple Node.js chat application using [Socket.IO](http://socket.io).

This code is an improvement over the example [Getting Started guide](http://socket.io/get-started/chat/) on the Socket.IO website.

From their website:
> Homework
>
> Here are some ideas to improve the application:
>
> - [x] Broadcast a message to connected users when someone connects or disconnects
> - [x] Add support for nicknames
> - [ ] Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
> - [x] Add “{user} is typing” functionality
> - [x] Show who’s online
> - [ ] Add private messaging
>
> Share your improvements!


### Improvements

The improvements are:
- Users can set nicknames
- List of online users
- Typing indictor when user is typing
- Broadcast message when someone connects or disconnects

### Demonstration

![Demonstration gif](demo.gif)

### Getting Started

1. Clone or download this repo;

2. Open the directory in terminal;

3. Install Node modules with `npm install`;

4. Run the Node application with `node index.js`;

5. Open the application on the browser at [localhost:3000](http://localhot:3000).
