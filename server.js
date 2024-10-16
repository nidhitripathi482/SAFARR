const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors'); // Import the CORS package
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');

const app = express();
const server = http.createServer(app);

// Enable CORS for all origins
app.use(cors());

// Create the Socket.io server with CORS enabled
const io = socketio(server, {
    cors: {
        origin: '*', // Allows requests from any origin
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
        credentials: true
    }
});

// Set static folder to serve frontend files (like chat.html, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'Safar Bot';

// Update rooms to travel destinations
const rooms = ['Matheran', 'Agra', 'Mahabaleshwar', 'Shirdi'];

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

// Serve the chat.html directly when the user accesses /chat
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// Run when a client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);

        // Emit a welcome message to the current user
        socket.emit('message', formatMessage(botName, `Welcome to the ${user.room} chatroom!`));

        // Broadcast when a user connects (to everyone else in the room)
        socket.broadcast
            .to(user.room)
            .emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        // Send the updated list of users to all clients in the room
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for chatMessage from the client
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );

            // Send updated user list to the room
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));