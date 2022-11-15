export default async (client, fs, config, CommandManager) => {
    for (const dir of fs.readdirSync('./client/commands/')) {
        const Command = new CommandManager({name: dir, description: dir, option: []})

        for (const cmdFile of fs.readdirSync(`./client/commands/${dir}/`)) {

            if(cmdFile.endsWith('js')) {

                const cmd = await import(`../../client/commands/${dir}/` + cmdFile);
                if (['name', 'category', 'ownerOnly'].some(key => cmd.default[key] === undefined)) return console.log(`Commande: ${cmd.default.name} non chargée, champ manquant`);

                Command.addSubcommand(cmd.default);

            } else {

                Command.addSubcommandGroup({name: cmdFile, description: cmdFile, category: dir});

                for (const subCommandGroup of fs.readdirSync(`./client/commands/${dir}/${cmdFile}/`)) {

                      const scg = await import(`../../client/commands/${dir}/${cmdFile}/` + subCommandGroup);
        
                      if (['name', 'category', 'ownerOnly'].some(key => scg.default[key] === undefined)) return console.log(`SubCommand: ${scg.default.name} non chargée, champ manquant`);
                      
                      Command.addSubcommandInGroup(scg.default)

                };
            };
        };
        Command.pushCommand()
    };
    
};