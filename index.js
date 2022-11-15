import { Client } from 'pioucord';
import { CommandManager } from "./utils/manager/CommandManager.js";
import { func } from "./utils/functions.js";
import * as fs from 'node:fs';
import yaml from 'js-yaml';
const config = yaml.load(fs.readFileSync('./config.yaml', 'utf-8')); // no add

export const client = new Client({     
	intents: 3276799
});

['commands', 'guilds'].forEach(x => client[x] = new Map());

for (const handler of ['EventUtil', 'CommandUtil']) {
    await import(`./utils/handlers/${handler}.js`).then(c => c.default(client, fs, config, CommandManager, func));
};

process.on('warning', (...args) => { console.log(...args) });

process.on('exit', code => {
    console.log(`Le processus s'est arreté avec le code: ${code}!`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log(`UNHANDLED_REJECTION: ${reason}`);
    console.log(promise);
});

client.login(config.client.token);
