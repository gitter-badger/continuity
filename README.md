## Continuity | IN-DEV (DEBUGGING BUILD)

[![Build Status](https://travis-ci.org/Cheeselab/continuity.png?branch=in-dev)](https://travis-ci.org/Cheeselab/continuity)

`Submit an issue if you find a bug`

Continuity is an extremely work-in-progress opensource bot & web stack coded by communities for communities using existing open-source node.js libraries and technologies.

**Documentation in progress.**

Wrong branch? Check out our test-build instead. in-dev builds are extremely experimental and things are garuanteed to break.

## To-do:

- [] Duty command
  - [] Fix duty command and get idle features working
- [X] Debug mode
  - [X] Debugging checker
  - [X] Toggable mode via package.json (true/false)
- [X] Modular commands 
  - [] ~~Make sure to add try/catch and handle errors as redis loves to mess up~~ (We've disabled Redis dependencies for now)
  - [X] Modularity for news and agenda channels.
  - [] Get the bot to find a channel name called "news" and let that process be embedded by default so we don't need to change webhooks manually or have Continuity post them (which would be easier.
- [ ] Source control
  - [X] in-dev
  - [X] test-build
  - [] production (master)
- [] Do a bunch of other things and check the Trello to-do list
- [] Get started on the web design & front-end and try and get a prototype deployed.

## Dependencies & Pre-requisites

**Platforms**

```
Windows :Visual Studio Code (there's a launch.json file located in ./.vscode/)
```

```
Linux: Atom or bash terminal. (Follow the Linux guide below)
```

## Contribute to our code (git)

Make sure git is installed

```cmd
Windows: Git Bash
Linux: apt-get install git
```

```cmd
git clone -b in-dev https://github.com/Cheeselab/continuity.git
```

Dependencies can be found in `package.json`

Huge thanks to the collective for contributing to this project, its goals and sharing code to make this project a reality.

Also thanks to our contributors for helping put this project together & collectively learning how to make this!

**Team Core Contributors:**

- @Aurieh (Helping fixing stuff and generally being a whiz at code)
- @CheeseCast (Front-end concepts, design, smells a bit cheesy...)
- @Chris92 (Lets us know about some awesome stack we would have never known about!)
- @Paladinleeds (Came up with the idea)
- @Snazzah (Command handling and modular things)
- @Villaz (Public relations guy)

**Team Assistants:**

Big thanks to Yemper, Mathis, Lpopo431 & Manny for keeping Cheese.lab a generally clean & fun place to be around.

**Partners:**

Also shoutouts to Mackan, one of our partners who works on [Discord Dungeons](https://discord.discorddungeons.me).

**Backers:**

See our donations on our [OpenCollective](https://opencollective.com/Cheeselab). We'll have some shields here soon.

## EXPERIMENTAL ~ Running an instance of Continuity

**Start the bot:**

We recommend Linux for advanced users.

We recommend Windows Visual Studio Code for 
people who are new to coding or just want to
experiment in our test-build and in-dev branches.

*If you're stuck on something, just let us know in #campus-grounds or #troubleshooting on [Discord](https://discord.gg/lab).*

**Before you get started:**

```sudo apt-get install -y nodejs```

**Make sure to do `npm init` to grab packages and dependencies.**

`npm install` inside of the Continuity folder - Ignore work in progress things.

If you get any errors do `npm i -g n` and `n latest` then redo the previous steps.

To start the bot: `pm2 start bot.js`

Don't worry if it errors or tells you about promise catches. That's fine, we're still actively fixing bugs.

Submit a pull request if you want to fix something!

## COMING SOON - Add Continuity to your own server

 Wait for production build soon. ~ We're looking into scalable VPS solutions. 

## License (because legal jargon is for the 1970s)

Read our community license [here](https://cheeselab.industries/license).

Do whatever you want with this code, just cite the source. Thanks <3
