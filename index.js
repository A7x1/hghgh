const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////
 

  
	const time = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];  
	client.on("message", async message => {
	  if (message.guild.id != "695233817086263306") return;
	  if (
		message.author.id == "567703512763334685" && // تعديل مهم ايدي بوت الترحيب
		message.content.includes("Welcome To Desert Network") ///  تعديل مهم رسالة الترحيب
	  ) {
		setTimeout(() => {
		  message.channel.send(` ** Welcome To Desert Community 🔥 🔥  **`); /// تعديل مهم رسالة الترحيب        
		}, time[Math.floor(Math.random() * time.length)]);
	  }
	});

	client.login(process.env.TOKEN);

