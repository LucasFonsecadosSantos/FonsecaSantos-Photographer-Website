export class MessageBuilder {
    static buildMessage(node, message) {
        Object.keys(message).forEach(key => {
            if (key === "text") {
                node.innerText = message[key];
            }
            else {
                node.setAttribute(key, message[key]);
            }
        });
    }
}
