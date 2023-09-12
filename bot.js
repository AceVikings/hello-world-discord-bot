// Import the Discord.js module
const { Client, GatewayIntentBits } = require("discord.js");

// Import and Initialise dotenv
const dotenv = require("dotenv");
dotenv.config();

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Event handler for when the bot is ready
client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Event handler for when the bot receives a message
client.on("messageCreate", (message) => {
  // Check if the message author is a bot
  if (message.author.bot) return;

  // Check if the message content is "!hello"
  if (message.content === "!hello") {
    // Send a reply to the message
    message.reply("Hello, world!");
  }
});

// Log in to Discord with your app's token
client.login(process.env.TOKEN);
