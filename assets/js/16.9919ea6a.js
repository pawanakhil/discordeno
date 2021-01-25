(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{407:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),n("p",[t._v("Discordeno aims for a simple, easy and stress-free interaction with the Discord\nAPI. Always supporting the latest version to ensure stability, consistency and\nthe best developer experience. This guide serves as the purpose for introducing\nDiscordeno to developers.")]),t._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Deno 1.0")]),t._v(" or higher")])]),t._v(" "),n("h2",{attrs:{id:"creating-your-first-discord-bot-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-your-first-discord-bot-application"}},[t._v("#")]),t._v(" Creating your First Discord Bot Application")]),t._v(" "),n("p",[t._v("Plenty of guides are available on how to create a Discord Bot Application.")]),t._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://discord.com/developers/applications",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an Application"),n("OutboundLink")],1),t._v(" on the\nDeveloper Portal, name something cool and pick a sweet icon!")]),t._v(" "),n("li",[t._v("After creating an application. Save the "),n("strong",[t._v("Client ID.")]),t._v(" Thats the unique\nidentifier for a Discord Bot.")]),t._v(" "),n("li",[t._v("Now, go and create a bot by clicking the "),n("strong",[t._v("Bot")]),t._v(" tab. You will see a\n"),n("strong",[t._v("Token")]),t._v(" section and thats the Discord Bot's token. "),n("strong",[t._v("Make sure you don't\nshare that token with anyone!!!")])]),t._v(" "),n("li",[t._v("Invite the bot to the server, you can use the\n"),n("strong",[n("a",{attrs:{href:"https://discordapi.com/permissions.html#0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord Permissions Calculator"),n("OutboundLink")],1)]),t._v("\nfor creating the invite link with custom permissions. By default, "),n("code",[t._v("0")]),t._v(" means\nno permissions and "),n("code",[t._v("8")]),t._v(" means Administrator.")])]),t._v(" "),n("p",[t._v("Now you've created an Application but it will need some code in order for it to\nbe online. Thats when Discordeno comes in handy!")]),t._v(" "),n("blockquote",[n("p",[t._v("Make sure you store your tokens in a file that is NOT deployed by adding it to\nthe .gitignore file. "),n("strong",[t._v("Don't share your bot token with anybody.")])])]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("p",[t._v("You can install Discordeno by importing:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" startBot "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://deno.land/x/discordeno@10.0.0/mod.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),n("p",[t._v("Starting with Discordeno is very simple, you can start from scratch without any\nboilerplates/frameworks: Add this snippet of code into a new TypeScript file:")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" startBot "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://deno.land/x/discordeno/mod.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("startBot")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  token"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BOT TOKEN"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  intents"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GUILDS"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GUILD_MESSAGES"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  eventHandlers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Successfully connected to gateway"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("messageCreate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!ping"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pong using Discordeno!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"tutorials"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[t._v("#")]),t._v(" Tutorials")]),t._v(" "),n("p",[t._v("Below you will find youtube playlists that display channels using Discordeno for\ntheir tutorials.")]),t._v(" "),n("p",[t._v("Web-Mystery Tutorials:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://web-mystery.com/articles/making-discord-bot-deno-and-discordeno",target:"_blank",rel:"noopener noreferrer"}},[t._v("Making a Discord bot with Deno and\nDiscordeno"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://web-mystery.com/articles/running-discord-bot-written-deno-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Running a Discord bot written in Deno in\nDocker"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("YouTube Tutorials:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://youtu.be/rIph9-BGsuQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discordeno Bot Tutorials YouTube series"),n("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);