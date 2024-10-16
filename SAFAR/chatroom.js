// Sample messages data for chatrooms
const messages = {
    "Matheran": [
        { author: "Raghav", text: "Any good restaurants near hilltop?" },
        { author: "Neha", text: "Yes, there are a few options like Panorama and Kokan Katta." },
    ],
    "Mahabaleshwar": [
        { author: "Ananya", text: "Any recommendations for restaurants near the lake?" },
        { author: "Raj", text: "You should try Mapro Garden and Brightland Resort." },
    ],
    "Shirdi": [
        { author: "Nidhi", text: "Are there any good vegetarian places?" },
        { author: "Anuj", text: "Sai Sagar and Rajdhani are popular vegetarian options." },
    ],
    "Nainital": [
        { author: "Bhoomi", text: "Looking for budget restaurants near the mall. Any suggestions?" },
        { author: "Sana", text: "Try Sher-e-Punjab and Café de Mall." },
    ],
    "Agra": [
        { author: "Ananya", text: "Where can I find the best Petha in Agra?" },
        { author: "Varun", text: "Panchi Petha is a must-try!" },
    ]
};

function loadMessages(chatroom) {
    const chatMessages = document.getElementById('chatMessages');
    const chatTitle = document.getElementById('chat-title');
    chatMessages.innerHTML = ''; // Clear previous messages
    chatTitle.textContent = chatroom;

    messages[chatroom].forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<p><span class="author">${message.author}:</span> ${message.text}</p>`;
        chatMessages.appendChild(messageElement);
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const messageText = chatInput.value.trim();

    if (messageText === '') {
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.innerHTML = `<p><span class="author">You:</span> ${messageText}</p>`;
    chatMessages.appendChild(messageElement);

    chatInput.value = ''; // Clear input field
}

// Load default chatroom messages on page load
window.onload = () => {
    loadMessages('Matheran');
};