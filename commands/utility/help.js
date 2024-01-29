const { SlashCommandBuilder } = require("discord.js");
const fs = require("node:fs");
const utilityFiles = fs.readdirSync("./commands/utility").filter((file) => file.endsWith(".js"));


// List all commands and a short description of each command, include a slash in front of each command name
module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Get a list of all available commands"),
  async execute(interaction) {
    await interaction.reply(
      `Here's a list of all the commands:
      \n${utilityFiles
        .map((file) => {
          const command = require(`./${file}`);
          return `**/${command.data.name}** - ${command.data.description}`;
        })
        .join("\n")}`
    );
  },
};
