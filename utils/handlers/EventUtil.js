export default async (client, fs, config, CommandManager, func) => {
    for (const dir of fs.readdirSync('./client/events/')) {
        for (const evnFile of fs.readdirSync(`./client/events/${dir}/`)) {

            const event = await import(`../../client/events/${dir}/` + evnFile);

            if (['name', 'execute', 'once'].some(key => event.default[key] === undefined)) return console.log(`Event: ${event.default.name} non chargée, champ manquant`);

            if (event.default['once']) {
                client.once(event.default['name'], (...args) => event.default['execute'] (client, config, func, ...args));
            } else {
                client.on(event.default['name'], (...args) => event.default['execute'] (client, config, func, ...args));
            };
        };
    };
};