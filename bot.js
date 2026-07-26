const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

const help = require("./commands/help");
const rules = require("./commands/rules");
const contact = require("./commands/contact");
const github = require("./commands/github");
const about = require("./commands/about");

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const command = message.content.slice(prefix.length).toLowerCase();

  if (command === "help") {
    help.execute(message);
  } else if (command === "rules") {
    rules.execute(message);
  } else if (command === "contact") {
    contact.execute(message);
  } else if (command === "github") {
    github.execute(message);
  } else if (command === "about") {
    about.execute(message);
  }
});

client.login(process.env.TOKEN); 
