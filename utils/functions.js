import { client } from '../index.js';

export const func = {
    // Interaction
    async reply(interaction, content) {
        await client.rest.post(`/interactions/${interaction.id}/${interaction.token}/callback`, {
            data: content,
            type: 4
        });
    },
};
