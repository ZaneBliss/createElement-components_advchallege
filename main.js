// Messages
const messages = [
    "Are we doing fireworks this year?",
    "After last year's \"tree incident\", should we?",
    "The fire fighters put it out in like a minute. Wasn't even a real fire.",
    "We can set them off in the street.",
    "Our neighbors' houses are flammable, too"
]

// Put an article DOM element in your index.html with the id attribute value of messages.
const container = document.body
const messagesElement = document.createElement('article');
messagesElement.setAttribute('id','messages');
container.appendChild(messagesElement);

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const article = document.querySelector('article');

// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.
const makeSections = messagesArray => {
    for (let i = 0; i < messagesArray.length; i++) {
        const section = document.createElement('section')
        section.classList.add('message')
        section.textContent = messagesArray[i];
        article.appendChild(section);
    }
}
makeSections(messages);

