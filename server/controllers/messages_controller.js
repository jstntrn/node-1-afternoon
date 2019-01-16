let id = 0;
let messages = [];

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(messages);
    },
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++;
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const {id} = req.params;
        messages = messages.filter((message) => message.id !== +id)
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {id} = req.params;
        const {text, time} = req.body;
        messages = messages.map((message) => {
            if(message.id === +id) {
                message.text = text,
                message.time = time
            }
            return message
        })
        res.status(200).send(messages);
    },
}