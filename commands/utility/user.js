const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Replies with the date you joined the server"),
    async execute(interaction) {
        await interaction.reply(`${interaction.user.username} joined the server on ${interaction.member.joinedAt}`);
    },
};