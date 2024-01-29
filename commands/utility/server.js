const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server")
        .setDescription("Replies with the date the server was created"),
    async execute(interaction) {
        await interaction.reply(`${interaction.guild.name} was created on ${interaction.guild.createdAt}`);
    },
};