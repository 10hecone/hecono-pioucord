export default {
    name: 'subcommand',
    type: 1,
    category: 'cmd',
    ownerOnly: true,
    description: 'Envoie des subcommand!',

    async runInteraction(client, interaction, functions) {
        functions.reply(interaction, {content: 'subcommandgroup'});
    },
};