export class MessageBuilder {

    public static buildMessage(node: HTMLElement, message: Object): void {

        Object.keys(message).forEach(key => {

            if (key === "text") {

                node.innerText = message[key];

            } else {

                node.setAttribute(key, message[key]);

            }

        });

    }

}