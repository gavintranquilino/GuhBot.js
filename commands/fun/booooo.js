const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('booooo')
        .setDescription('Replies with "BOOOOO!"'),
    async execute(interaction) {
        await interaction.reply('BOOOOO!');
    },
};