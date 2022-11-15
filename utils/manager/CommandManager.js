import { client } from "../../index.js";

export class CommandManager {
    constructor({name, description, options, category}) {
        this.name = name;
        this.description = description;
        this.options = [];
    };

    pushCommand() {
        client.commands.set(this.name, { name: this.name, description: this.description, options: this.options});
    };

    addSubcommandGroup({name, description, category}) {
        this.options.push({name: name, description: description, category: category, type: 2, options: []})
    };

    addSubcommand({...cmd}) {
        this.options.push(cmd);
    };

    addSubcommandInGroup({...cmd}) {
        this.options.find(n => n.name === cmd.category).options.push(cmd)
    };

};