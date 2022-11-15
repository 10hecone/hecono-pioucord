export default {
    name: 'command',
    type: 1,
    category: 'subgroup',
    description: 'Envoie des subcommand!',

    async runInteraction(client, interaction, functions) {
        functions.reply(interaction, {content: 'subcommandgroup'});
    },
};