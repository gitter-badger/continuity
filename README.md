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
- [X] Modular commands 
- [] Make sure to add try/catch and handle errors as redis loves to mess up
- [] Modularity for news and agenda channels.
  - [] Get the bot to find a channel name called "news" and let that process be embedded by default so we don't need to change webhooks manually or have Continuity post them (which would be easier.
- [] Source control
- [] Do a bunch of other things and check the Trello to-do list
- [] Get started on the web design & front-end and try and get a prototype deployed.

## Dependencies & Pre-requisites

**Platforms**

```
Windows :Visual Studio Code (there's a launch.json file located in ./.vscode/)
```

```
Linux: Atom (Follow the Linux guide below)
```

## Contribute to our code (git)

```cmd
placeholder for now
```

Huge thanks to the collective for contributing to this project, its goals and sharing code to make this project a reality.

Dependencies can be found in `package.json`

## EXPERIMENTAL ~ Running an instance of Continuity

**Start the bot:**

We recommend Linux for advanced users.

We recommend Windows Visual Studio Code for 
people who are new to coding or just want to
experiment in our test-build and in-dev branches.

*If you're stuck on something, just let us know in #campus-grounds or #troubleshooting on [Discord](https://discord.gg/lab).*

**Make sure to do `npm init` to grab packages and dependencies.**

`npm install` inside of the Continuity folder - Ignore work in progress things.

`pm2 start bot.js`

Don't worry if it errors or tells you about promise catches. That's fine, we're still actively fixing bugs.

Submit a pull request if you want to fix something!

## COMING SOON - Add Continuity to your own server

 Wait for production build soon. ~ We're looking into scalable VPS solutions. 

## License (because legal jargon is for the 1970s)

Read our community license [here](https://cheeselab.industries/license).

Do whatever you want with this code, just cite the source. Thanks <3
