const fritzSelectorBtn = document.querySelector('#Fritz-selector')
const alexanderSelectorBtn = document.querySelector('#Alexander-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-header')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChatBtn = document.querySelector('.clear-button')

const createChatMessageElement = (message) => `
    <div class="message ${message.sender === 'Fritz' ? 'blue-bg' : 'gray-bg'}">
        <div class="sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`

let messageSender = 'Fritz'

const updateMessageSender = (name) => {
    messageSender = name
    chatInput.placeholder = `...`
    if (name === 'Fritz'){
        chatHeader.innerText = `Chat connected to Alexander`
        fritzSelectorBtn.classList.add('active-person')
        alexanderSelectorBtn.classList.remove('active-person')
    }
    if (name === 'Alexander'){
        chatHeader.innerText = `Chat connected to Fritz`
        alexanderSelectorBtn.classList.add('active-person')
        fritzSelectorBtn.classList.remove('active-person')
    }

    chatInput.focus()
} 

fritzSelectorBtn.onclick = () =>updateMessageSender('Fritz')
alexanderSelectorBtn.onclick = () =>updateMessageSender('Alexander')

const sendMessage = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    };

    chatMessages.insertAdjacentHTML('beforeend', createChatMessageElement(message));
    chatInput.value = ''; // Clear the input field after sending the message
};

chatInputForm.addEventListener('submit',sendMessage)