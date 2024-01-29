const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roles")
        .setDescription("Replies with the roles of the user"),
    async execute(interaction) {
        await interaction.reply(`Your roles are: ${interaction.member.roles.cache.map(role => role.name).join(', ')}`);
        console.log(interaction.member.roles.cache.map(role => role.name).join(', '));
    },
};