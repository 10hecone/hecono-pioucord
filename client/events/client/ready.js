import fetch from 'node-fetch';

export default {
    name: 'READY',
    once: true,
    async execute(client, config) {
        const guild = await client.rest.get(`/users/@me/guilds`)

        console.log(`- Je suis activé sur ${await guild.length} serveurs!`);
        
        for(const cmd of client.commands) {
            await fetch(`https://discord.com/api/v10/applications/1001877351992410252/commands`, {
                method: 'post',
                body: JSON.stringify(cmd[1]),
                headers: { "Authorization": `Bot ${config.client.token}`, "Content-Type": "application/json" }
            });
        };
    },
};