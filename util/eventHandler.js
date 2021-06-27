const reqEvet = (event) => require(`../events/${event}`)
module.exports = client => {
    client.on("ready" , () => reqEvet("ready.js") (client, "message") );
        client.on("message",reqEvet("message"));
}