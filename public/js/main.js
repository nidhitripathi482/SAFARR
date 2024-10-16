const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from the URL query parameters
const { username, room } = Qs.parse(location.search, {
    ignoreQueryPrefix: true
});

const socket = io();

// Emit the joinRoom event to the server with username and room data
socket.emit('joinRoom', { username, room });

// Listen for roomUsers event to get the room name and user list from the server
socket.on('roomUsers', ({ room, users }) => {
    outputRoomName(room); // Function to display the room name
    outputUsers(users);   // Function to display the list of users
});

// Listen for messages from the server
socket.on('message', message => {
    console.log('Received message:', message); // Debugging log
    outputMessage(message);

    // Scroll down to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Handle message submission
chatForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission

    // Get the message text
    const msg = e.target.elements.msg.value.trim(); 
    if (msg) { // Ensure message is not empty
        // Emit the message to the server
        socket.emit('chatMessage', msg);
        
        // Clear the input field
        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();
    }
});

// Function to display a message in the DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
        <p class="meta">${message.username} <span>${message.time}</span></p>
        <p class="text">${message.text}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
}

// Function to add the room name to the DOM
function outputRoomName(room) {
    roomName.innerText = room;
}

// Function to add the list of users to the DOM
function outputUsers(users) {
    userList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `;
}
