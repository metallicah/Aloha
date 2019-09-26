const config = require('./info.json');
const Discord = require('discord.js');
const asciiCats = require('ascii-cats');
const eco = require('discordenvo');
const Minesweeper = require('discord.js-minesweeper');
const rp = require('request-promise');
const giveMeAJoke = require('give-me-a-joke');
const dogFacts = require('dog-facts');
const pandaFacts = require('panda-facts');
const burger = require('burgerlog');
const cowsay = require("cowsay");
const request = require('superagent');
const instagram = require("user-instagram");
const fs = require('fs');
const path = require('path');
const eafd = require('eafd');
const cheerio = require('cheerio');
const ytdl = require("ytdl-core");
const ffmpeg = require("ffmpeg");
const client = new Discord.Client();
const translate = require('google-translate-api');
const mysql = require('mysql');
const queue = new Map();
require('dotenv/config');

const process.env.PORT || 3000;
http.createServer().listen(port);

function secondsToString(seconds) {
    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var seconds = Math.floor(seconds % 60);

    var str = "";

    if (days > 0) {
        str += days + ":";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    str += hours + ":";
    str += minutes + ":";
    str += seconds;

    return str;
}
const token = config.token,
    prefix = config.prefix,
    sum = config.sum,
    serverID = config.serverID;
const invEmbed = new Discord.RichEmbed()
    .setColor('#d6acec')
    .addField('Invite Link:', 'https://discord.gg/F4z2xH')
    .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
const ruleEmbed = new Discord.RichEmbed()
    .setColor('#d6acec')
    .setTitle('Rules:')
    .setThumbnail('https://i.imgur.com/r1ah3fm.gif');

//client.on('ready', () => {
//    client.channels.get("614987809584971816").send("🌴 𝒜𝓁𝑜𝒽𝒶, 𝓌𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝑀𝒶𝓀𝒶𝒽𝑒𝒽𝒾 - 𝒶 𝓅𝓁𝒶𝒸𝑒 𝓉𝑜 𝓇𝑒𝓁𝒶𝓍 𝒶𝓃𝒹 𝓂𝑒𝑒𝓉 𝓃𝑒𝓌 𝒻𝓇𝒾𝑒𝓃𝒹𝓈. 𝒯𝑜 𝑔𝒶𝒾𝓃 𝒶𝒸𝒸𝑒𝓈𝓈 𝓉𝑜 𝓉𝒽𝑒 𝓇𝑒𝓈𝓉 𝑜𝒻 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝑒𝓇, 𝓅𝓁𝑒𝒶𝓈𝑒 𝓇𝑒𝓅𝓁𝓎 𝓌𝒾𝓉𝒽 𝓉𝒽𝑒 𝒶𝓃𝓈𝓌𝑒𝓇 𝓉𝑜: 𝟦 + 𝟦. 𝐹𝑜𝓇𝓂𝒶𝓉𝓉𝑒𝒹 𝓁𝒾𝓀𝑒 !𝓋𝑒𝓇𝒾𝒻𝓎 <𝒶𝓃𝓈𝓌𝑒𝓇>. \n𝒮𝑒𝑒 𝓎𝑜𝓊 𝒶𝓇𝑜𝓊𝓃𝒹! 🌴");
//});

// Create connection to database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor",
    database: "makahehi"
});
// Establish connection
con.connect(err => {
    if (err) throw err;
    console.log("Connected to database");
});

client.on('message', async (message) => {
    // If message from bot => do not execute
    if (message.author.bot) return;

    // hasRole = if user has member role, userAns = answer to simple verify question
    const hasRole = message.member.roles.find(r => r.name === "Kanaka");
    const userAns = message.content.replace(' ', '').toLowerCase();

    // Add +1 currency / message
    if (hasRole) {
        eco.AddToBalance(message.author.id, 1);
    }
    // If correct answer and not verified => give role
    if (userAns === `${prefix}verify${sum}` && !hasRole) {
        const role = message.guild.roles.find(role => role.name === "Kanaka");
        message.member.addRole(role);
        eco.SetBalance(message.author.id, 50);
        message.channel.send(`🌿 Welcome, ${message.author} to Makahehi 🌿`);
        setTimeout(deleteMessages, 10000);
        client.channels.get("614934422499754005").send("🐚 " + message.author + " is new around here! 🐚");
        // If incorrect answer and not verified => return wrong answer
    } else if (userAns !== `${prefix}verify${sum}` && !hasRole) {
        message.channel.send("🚫 " + message.content.split(' ')[1] + " is the wrong answer. 🚫");
        setTimeout(deleteMessages, 10000);
        // User already has role => return has role
    } else if (message.content.startsWith(`${prefix}verify`).toLowerCase && hasRole) {
        message.channel.send("You already have that role, silly! 😝");
        setTimeout(deleteMessages, 10000);
        // If other error not previously stated
    }

    function deleteMessages() {
        message.channel.bulkDelete(2);
    }

    if (message.content.startsWith(`${prefix}invite`)) {
        message.channel.send(invEmbed);
    }

    if (message.content.startsWith(`${prefix}straws`)) {

        // random numbers =>

        let min = 0,
            max = 4;

        let strawsMsg = [],
            longOrShort = 0,
            hasShort = false,
            choice = [1, 1, 1, 0];
        const args = message.content.split(' ');
        let straws = [
            "^\nll\nll\nll\nll\n||ll||\n||ll||\n||ll||\n||ll||\n||ll||\n||ll||",
            "^\nll\nll\nll\nll\n||ll||\n||ll||\n||ll||\n||ll||\n||  ||\n||  ||"
        ];
        console.log("lenght of straws array: " + straws.length);

        // 0 = long, 1 = short
        for (let i = 0; i < 20; i++) {
            // can't have 2 short straws ;)
            if (hasShort) {
                max = 3;
            } else {
                // will next straw be long or short
                longOrShort = Math.floor(Math.random() * (+max - +min)) + +min;
                if (choice[longOrShort] == 0) {
                    strawsMsg[i] = straws[0];
                } else if (choice[longOrShort] == 1) {
                    strawsMsg[i] = straws[1];
                    hasShort = true;
                }
            }
        }
        message.channel.send(strawsMsg[0] + strawsMsg[1]);
        console.log(strawsMsg);
        // Wait 3 seconds ... reveal by editing and adding '```' to start and end of string

    }

    if (message.content.startsWith(`${prefix}joke`)) {
        giveMeAJoke.getRandomDadJoke(function (joke) {
            message.channel.send(joke);
        });
    }

    /* To Morse */

    if (message.content.startsWith(`${prefix}morse`)) {
        const args = message.content.replace(`${prefix}morse `).trim().replace("undefined", "").split(" ");
        let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
            morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
            text = args.join(" ").toUpperCase();
        while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
            text = text.replace("Ä", "AE").replace("Ö", "OE").replace("Ü", "UE");
        }
        if (text.startsWith(".") || text.startsWith("-")) {
            text = text.split(" ");
            let length = text.length;
            for (i = 0; i < length; i++) {
                text[i] = alpha[morse.indexOf(text[i])];
            }
            text = text.join("");
        } else {
            text = text.split("");
            let length = text.length;
            for (i = 0; i < length; i++) {
                text[i] = morse[alpha.indexOf(text[i])];
            }
            text = text.join(" ");
        }
        message.channel.send("English: `" + args.join(" ") + "`\nMorse: `" + text + "`");
    }

    /* Minesweeper Game */

    if (message.content.startsWith(`${prefix}minesweeper`)) {

        const content = message.content.split(' ');
        const args = content.slice(1);
        const rows = parseInt(args[0]);
        const columns = parseInt(args[1]);
        const mines = parseInt(args[2]);

        if (!rows) {
            return message.channel.send(':warning: Please provide the number of rows.');
        }

        if (!columns) {
            return message.channel.send(':warning: Please provide the number of columns.');
        }

        if (!mines) {
            return message.channel.send(':warning: Please provide the number of mines.');
        }

        const minesweeper = new Minesweeper({
            rows,
            columns,
            mines
        });
        const matrix = minesweeper.start();

        return matrix ?
            message.channel.send(matrix) :
            message.channel.send(':warning: You have provided invalid data.');
    }

    if (message.content.startsWith(`${prefix}cat`)) {
        const kittyText = asciiCats();
        message.channel.send('```\n' + kittyText + '```');
    }

    if (message.content.startsWith(`${prefix}rules`)) {
        message.channel.send(ruleEmbed).then(sent => {
            message.channel.send("\n```diff\n+Be nice! :3\n```" + "```diff\n-Don't be a dick! :(\n```");
        });
    }

    /* Log 12 Y/O's */

    if (message.content.toLowerCase().includes('im') || message.content.toLowerCase().includes("i'm")) {
        const age = message.content.split(' ')[1],
            domain = 'https://discordapp.com/channels';
        parseInt(age);
        if (!isNaN(age)) {
            if (age < 13) {
                fs.appendFile('underageUsers.txt', `${message.author.username}:${message.author.id}:"${message.content}":${message.createdAt}:${domain}/${serverID}/${message.channel.id}/${message.id}\n-\n`, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            } else if (age > 12) {
                console.log("False Positive: U13 Not Detected");
            } else {
                return;
            }
        }
    }

    /* Tag Mods */

    if (message.content.startsWith(`${prefix}mod`)) {
        const swordfish = client.emojis.find(emoji => emoji.name === "swordfish"),
            whitespace = '              ';
        message.author.send({
            embed: {
                color: 14068972,
                title: ("Careful! Users abusing this role will be punished!"),
                fields: [
                    {
                        name: '1.',
                        value: 'Mute until further notice, depending on severity - no longer than half an hour.',
                        inline: true
                                    },
                    {
                        name: '2.',
                        value: 'Kicked from server.',
                        inline: true
                                    },
                    {
                        name: '3.',
                        value: 'Permanent ban from server.',
                        inline: true
                                    }
                         ],
                thumbnail: {
                    url: "https://i.imgur.com/r1ah3fm.gif"
                }
            }
        });
        message.channel.send(`${swordfish} **Mods have been alerted!** ${swordfish}\n${whitespace}${swordfish} <@&623334173356326993> ${swordfish}`);
    }

    /* Random Pepe */

    if (message.content.startsWith(`${prefix}pepe`)) {
        const pepeArg = message.content.split(' ')[1];
        let below1 = new Discord.RichEmbed()
            .setColor("#d6acec");

        let pepe1 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556352915505165.png?v=1");

        let pepe2 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1");

        let pepe3 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556486235389973.png?v=1");

        let pepe4 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556308929576960.png?v=1");

        let pepe5 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556295218659329.png?v=1");

        let pepe6 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556467021545473.png?v=1");

        let pepe7 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556448507625474.png?v=1");

        let pepe8 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556377754042378.png?v=1");

        let pepe9 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556281767526405.png?v=1");

        let pepe10 = new Discord.RichEmbed()
            .setColor("#d6acec")
            .setImage("https://cdn.discordapp.com/emojis/428556266366042112.png?v=1");

        let pepes = [below1, pepe1, pepe2, pepe3, pepe4, pepe5, pepe6, pepe7, pepe8, pepe9, pepe10];
        if (!pepeArg) {
            let dapepe = Math.floor((Math.random() * pepes.length));

            message.channel.send(pepes[dapepe]);
        } else {
            await parseInt(pepeArg);
            if (pepeArg < 1) {
                message.channel.send({
                    embed: {
                        color: 14068972,
                        title: ("Please enter a number above 0 and less than " + Object.keys(pepes).length),
                        thumbnail: {
                            url: "https://i.imgur.com/r1ah3fm.gif"
                        }
                    }
                });
            } else {
                message.channel.send(pepes[pepeArg]);
            }
        }
    }

    /* Snoop Dogg TTS */

    if (message.content.startsWith(`${prefix}snoop`)) {
        const coco = client.emojis.find(emoji => emoji.name === "coco");
        const name = message.content.replace(`${prefix}snoop `, '');
        console.log("Making TTS for: " + name);
        let filePath = './Snoop/';

        // Return if name = undefined or a number
        if (!name || name == `${prefix}snoop`) return;
        if (!(isNaN(name))) return;


        // Initial filename
        let filename = 'snoop-' + name + '-' + Math.floor(Math.random() * Math.floor(100000)) + '.mp3';
        console.log(filename);

        fs.writeFile('varData.dat', filename, (err) => {
            if (err) throw err;
        });
        fs.writeFile('nameData.dat', name, (err) => {
            if (err) throw err;
        });

        // Execute aefd process
        async function main(name, filename) {
            process.chdir('./Snoop/');
            let mp3Data = await eafd(name);
            console.log("Success part 1, " + filename + name);
            fs.writeFileSync(filename, mp3Data, 'utf8');
        }

        main(name, filename).then(filename => {
            // Send .mp3 file 
            console.log("Outputting file: ");
            console.log(filename);
            message.channel.send(coco, {
                files: [
                        filename
                    ]
            });
            process.chdir('../');
        });
    }

    /* Cowsay */

    if (message.content.startsWith(`${prefix}cow`)) {
        const cowSay = message.content.replace(`${prefix}cowsay`, '');

        // Return if cowSay = undefined or a number
        if (!cowSay || cowSay == `${prefix}cowsay`) return;
        if (!(isNaN(cowSay))) return;

        const cowSaid = cowsay.say({
            text: cowSay,
            e: "oO",
            T: "U "
        });

        message.channel.send("```" + cowSaid + "```");

    }

    /* Burger-ify Text */

    if (message.content.startsWith(`${prefix}burger`)) {
        const args = message.content.replace(`${prefix}burger`, '');
        fs.writeFile('burgerData.dat', args, (err) => {
            if (err) throw err;
        });
        const {
            exec
        } = require('child_process');
        exec('burgerMod.bat', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            // Do stuff here
        });
    }

    /* Random Animal Facts */

    if (message.content.startsWith(`${prefix}dogfact`)) {
        const randomFact = dogFacts.random();
        const dogFactEmbed = new Discord.RichEmbed()
            .setColor('#d6acec')
            .addField('Random Dog Fact:', randomFact)
            .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
        message.channel.send(dogFactEmbed);
    } else if (message.content.startsWith(`${prefix}pandafact`)) {
        const randomFact = pandaFacts.random();
        const pandaFactEmbed = new Discord.RichEmbed()
            .setColor('#d6acec')
            .addField('Random Panda Fact:', randomFact)
            .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
        message.channel.send(pandaFactEmbed);
    }

    /* Ship Function */

    if (message.content.startsWith(`${prefix}ship`)) {
        const percent = Math.floor(Math.random() * 100) + 1;
        const shipee = message.mentions.members.first();
        const shiper = message.author.username;

        if (!shipee) {
            message.channel.send("Please enter a member to ship 🐚");
        } else {
            client.fetchUser(shipee).then(user => {
                const shipEmbed = new Discord.RichEmbed()
                    .setColor('#d6acec')
                    .setTitle('Results for ' + user + ' and ' + shiper + ':')
                    .addField(percent + '%')
                    .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
            });
            message.channel.send(shipEmbed);
        }
    }

    /* Instagram Info Scraper */

    if (message.content.startsWith(`${prefix}ig`)) {
        const username = message.content.replace(`${prefix}ig`, '').trim();
        console.log("Scraping: " + username);
        const link = "https://www.instagram.com/" + username;
        instagram("https://www.instagram.com/jamigotbanned")
            .then(data => {
                console.log(`Full name is: ${data.fullName}`)
            })
            .catch(e => {
                // Error will trigger if the account link provided is false.
                console.error(data)
            });

        const igEmbed = new Discord.RichEmbed()
            .setColor('#d6acec')
            .setTitle(data.username + ' on Instagram')
            .setDescription('View ' + data.username + ' on Instagram.')
            .setURL('https://instagram.com/' + data.username)
            .addField('Followers:', data.followers, true)
            .addField('Following:', data.following, true)
            .addField('Posts:', data.posts, true)
            .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
        console.log(data);
        //message.channel.send(igEmbed)
    }

    /* Urban Dictionary Look-up */

    if (message.content.startsWith(`${prefix}ud`) && message.channel.id == "623364507103658004") {

        const suffix = message.content.split(" ").splice(1).join(" ");

        if (!suffix) {
            message.channel.send(`Please enter a search term.`)
        } else {
            request.get('http://api.urbandictionary.com/v0/define')
                .query({
                    term: suffix
                })
                .end((err, res) => {
                    if (!err && res.status === 200) {
                        const uD = res.body;
                        if (uD.result_type !== 'no_results' || uD.list.length > 0) {
                            message.channel.send({
                                embed: {
                                    color: 14068972,
                                    thumbnail: {
                                        url: 'https://i.imgur.com/r1ah3fm.gif'
                                    },
                                    title: `The internet's definition of ${uD.list[0].word}`,
                                    url: uD.list[0].permalink,
                                    description: uD.list[0].definition,
                                    fields: [
                                        {
                                            name: 'Example',
                                            value: `\`\`\`${uD.list[0].example}\`\`\``
                                        },
                                        {
                                            name: 'Thumbs up',
                                            value: `\`\`\`${uD.list[0].thumbs_up}\`\`\``,
                                            inline: true
                                        },
                                        {
                                            name: 'Thumbs down',
                                            value: `\`\`\`${uD.list[0].thumbs_down}\`\`\``,
                                            inline: true
                                        }
                  ]
                                }
                            });
                        } else if (message.content.startsWith(`${prefix}ud`) && message.channel.id != "623364507103658004") {
                            const coco = client.emojis.find(emoji => emoji.name === "coco");
                            message.channel.send(`Please use the ${message.guild.channels.get('623364507103658004').toString()} channel to get definitions! ${coco}`);
                        } else {
                            message.channel.send(`<@${msg.author.id}>, ${suffix}: This word is so screwed up, even Urban Dictionary doesn't have it in its database`);
                        }
                    } else {
                        global.i18n.send('API_ERROR', msg.channel);
                        global.logger.error(`Got an error: ${err}, status code: ${res.status}`);
                    }
                })
        }
    }

    if (message.content.startsWith(`${prefix}mock`)) {
        const userToMock = message.mentions.members.first();
        const messageToMock = userToMock.lastMessage.content;
        let mockedMessage, changedChar, upOrDown;
        if (messageToMock.length < 3) return;
        for (let i = 0; i < messageToMock.length; i++) {
            upOrDown = Math.floor(Math.random() * (3 - 1)) + 1;
            if (upOrDown == 1) {
                changedChar = messageToMock[i].toLowerCase();
            } else if (upOrDown == 2) {
                changedChar = messageToMock[i].toUpperCase();
            }
            mockedMessage += changedChar;
        }
        message.channel.send(`Nobody: \n${userToMock}: ${mockedMessage.replace('undefined', '')}`);
    }

    //    con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
    //        if (err) throw err;
    //        if (rows.length < 1) {
    //            sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', 5)`;
    //        } else {
    //            let xp = rows[0].xp;
    //
    //            sql = `UPDATE xp SET xp = (xp+5) WHERE id = '${message.author.id}'`;
    //        }
    //        con.query(sql);
    //    });

    /* Moderation */

    if (message.content.startsWith(`${prefix}mute`)) {
        const awh = client.emojis.find(emoji => emoji.name === "awh");
        if (message.member.roles.has('623334173356326993') || message.member.roles.has('614935973683265697')) {
            let role = message.guild.roles.find(r => r.name === "Kanaka"),
                roleTwo = message.guild.roles.find(r => r.name === "Mālie");
            const toMute = message.mentions.members.first();
            if (!toMute) {
                message.channel.send("🐟 You must specify a member to mute. 🐟");
                return;
            } else if (toMute.roles.has('614932720467968001')) {
                // Remove stated user from Kanaka - disallowing them to speak
                toMute.removeRole(role).catch(console.error);
                toMute.addRole(roleTwo).catch(console.error);
                toMute.send({
                    embed: {
                        color: 14068972,
                        thumbnail: {
                            url: 'https://i.imgur.com/r1ah3fm.gif'
                        },
                        fields: [
                            {
                                name: 'Disciplinery Action:',
                                value: 'You have been muted in the server: ' + message.guild.name + awh
                                        }
                                    ]
                    }
                });
                return;
            } else {
                message.channel.send("🐟 Cannot mute a muted user! 🐟");
            }
        } else {
            message.channel.send("🐟 You are not allowed to mute members. 🐟");
        }
    }

    if (message.content.startsWith(`${prefix}unmute`)) {
        const awh = client.emojis.find(emoji => emoji.name === "awh");
        if (message.member.roles.has('623334173356326993') || message.member.roles.has('614935973683265697')) {
            let role = message.guild.roles.find(r => r.name === "Kanaka"),
                roleTwo = message.guild.roles.find(r => r.name === "Mālie");
            const toUnmute = message.mentions.members.first();
            if (!toUnmute) {
                message.channel.send("🐟 You must specify a member to unmute. 🐟");
                return;
            } else if (!(toUnmute.roles.has('614932720467968001'))) {
                // Add stated user from Kanaka - allowing them to speak
                toUnmute.addRole(role).catch(console.error);
                toUnmute.removeRole(roleTwo).catch(console.error);
                toUnmute.send({
                    embed: {
                        color: 14068972,
                        thumbnail: {
                            url: 'https://i.imgur.com/r1ah3fm.gif'
                        },
                        fields: [
                            {
                                name: 'Disciplinary Action Revoked:',
                                value: 'You have been unmuted in the server: ' + message.guild.name + ", let's not have to do that again! " + awh
                                        }
                                    ]
                    }
                });
                return;
            } else {
                message.channel.send("🐟 Cannot unmute an unmuted user! 🐟");
                return;
            }
        } else {
            message.channel.send("🐟 You are not allowed to unmute members. 🐟");
        }
    }

    /* Currency */

    if (message.content.startsWith(`${prefix}shells`)) {
        if (message.content.length === prefix.length + 6) {
            const balance = eco.FetchBalance(message.author.id).then(balance => {
                message.channel.send({
                    embed: {
                        color: 14068972,
                        thumbnail: {
                            url: 'https://i.imgur.com/r1ah3fm.gif'
                        },
                        fields: [
                            {
                                name: 'You have:',
                                value: require('util').inspect(balance.balance) + " Shells"
                                        }
                                    ]
                    }
                });
            });
        } else {
            const user = message.mentions.members.first().id;
            if (!user) {
                return;
            } else {
                const balance = eco.FetchBalance(user).then(balance => {
                    message.channel.send({
                        embed: {
                            color: 14068972,
                            thumbnail: {
                                url: 'https://i.imgur.com/r1ah3fm.gif'
                            },
                            fields: [
                                {
                                    name: message.mentions.members.first().displayName + ' has:',
                                    value: require('util').inspect(balance.balance) + " Shells"
                                        }
                                    ]
                        }
                    });
                });
            }
        }
    }

    if (message.content.startsWith(`${prefix}transfer`)) {

        const user = message.mentions.users.first();
        const nickname = message.mentions.members.first().displayName;
        const amount = message.content.split(' ')[1];

        console.log(`transferring ${amount} shells from ${message.member.displayName} and ${nickname}.`);

        if (!user) return;
        if (!amount) return;
        if (amount < 1) return;

        const output = await eco.FetchBalance(message.author.id);
        if (output.balance < amount) return;
        const transfer = await eco.Transfer(message.author.id, user.id, amount);
        const transferEmbed = new Discord.RichEmbed()
            .setColor('#d6acec')
            .setTitle('Shells Transferred!')
            .addField(message.member.displayName, "```diff\n" + '-' + amount + ' Shells' + "```", true)
            .addField(nickname, "```diff\n" + '+' + amount + ' Shells' + "```", true)
            .setThumbnail('https://i.imgur.com/r1ah3fm.gif');
        message.channel.send(transferEmbed);
    }

});

client.once('ready', () => {
    console.log('Ready!');
});

bot.on('error', err => {
	console.log(err);
});

client.login(process.env.TOKEN);