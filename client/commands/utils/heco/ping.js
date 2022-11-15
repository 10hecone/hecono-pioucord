export default {
    name: 'ping',
    type: 1,
    category: 'heco',
    ownerOnly: false,
    description: 'Envoie des pong!',

    async runInteraction(client, interaction, functions) {
        functions.reply(interaction, {content: 'pong!'});
    },
};