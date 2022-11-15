export default {
    name: 'INTERACTION_CREATE',
    once: false,
    async execute(client, config, functions, interaction) {
        const { found, check } = {
             check(cmd) {
                if (!cmd) return found()
                cmd.runInteraction(client, interaction, functions);
            },
            found() {
                return functions.reply(interaction, {content: "L'interaction n'a pas été trouvé!"});
            }
        };

        if (interaction.data.type === 1) {
            for(const command of client.commands.get(interaction.data.name).options) {
                for(const data of interaction.data.options) {
                    if(data.name === command.name) {
                        if(data.type === 1) return check(command);
                           return check(command.options.find(e => e.type === 1));
                    };
                };
            };
        }; 
    },
};