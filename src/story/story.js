// bg
const microphone = require("./bg/microphone.jpeg");
const sleepingphantom = require("./bg/sleepingphantom.jpg")
const entrance = require("./bg/entrance.jpeg");
// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const vincent = require("./sprites/vincent.png");
const akirhen = require('./sprites/akirhen.png');

const b = "needtochange"

let story = [
  //Introduction
  {
    bg: sleepingphantom,
    sprite: vincent,
    speaker: "Vincent",
    text: "Welcome to the Sleeping Phantom Tavern."
  },
  {
    spriteRight: vincent,
    spriteLeft: akirhen,
    sprite: "",
    speaker: "Akirhen",
    text: "Hello! How are you today!"
  },
  {
    text: "Would you like to go exploring today!?",
  },
  {
    choicesExist: true,
    receiveJump: "whoAreYou"
  },

  // *******************************************************************
  // whoAreYou
  // *******************************************************************
  {
    routeBegins: "whoAreYouAkirhen", spriteLeft: "", spriteRight: "", sprite: akirhen, speaker: "Akirhen", text: "Oh! I'm Akirhen! We're old friends. Well, maybe not. It's weird."
  },
  {
    text: "See, there are parallel timelines in Daervyn, and a while ago there was a blurr of those timelines."
  },
  {
    text: "So I know you, but you might not know me."
  },
  {
    text: "That's okay! I still love you! So, do you want to go exploring?",
    jumpTo: "whoAreYou"
  },
  {
    routeBegins: "whoAreYouVincent", spriteLeft: "", spriteRight: "", sprite: vincent, speaker: "Vincent", text: "My name is Vincent. I am the owner of the Sleeping Phantom Tavern."
  },
  {
    text: "Information on the tavern goes here. Get information from Sain.",
    jumpTo: "whoAreYou"
  },
  {
    routeBegins: "whoAreYouExploreDaervyn", spriteLeft: "", spriteRight: "", sprite: akirhen, speaker: "Akirhen", text: "Great! Let's go explore Daervyn!"
  },
  {
    speaker: "Narrator",
    text: "Akirhen leads you out of the tavern."
  },
  {
    // bg: AnimationPlaybackEvent,
    speaker: "Akirhen",
    text: "This is the city of Annalay!"
  },
  {
    text: "It's a pretty big city. Would you like to explore here or go to a flight point and see somewhere else in Daervyn?"
  },
  {
    routeBegins: "whoAreYouExploreSP", spriteLeft: "", spriteRight: "", sprite: vincent, speaker: "Vincent", text: "It would be my pleasure to give you a tour of the tavern."
  },
  {
    routeBegins: "whoAreYouExplainDaervyn", spriteLeft: akirhen, sprite: "", spriteRight: vincent, speaker: "Akirhen", text: "Oh yeah! I keep forgetting you might not know it that well in this timeline."
  },
  {
    text: "Daervyn is made up of three... well, four continents. But the fourth one is the floating South Pole and no one can really get there."
  },
  {
    speaker: "Narrator",
    text: "Vincent points to a map displayed on the wall."
  },
  {
    speaker: "Vincent",
    text: "The continent usually displayed on the left of the map is Mel Shenshir. It has many large mountains, and is populated by mostly Dwarves."
  },
  {
    text: "The current king, or 'Dorni', is Lythur Sishan. He is well respected in the clans."
  },
  {
    speaker: "Akirhen",
    text: "Oh! And the center continent is Sir'ena! It's got a big mountain, but mostly it's known for the R'gra desert!"
  },
  {
    text: "The R'gra desert is filled with ghosties!"
  },
  {
    speaker: "Vincent",
    text: "We are currently located in the city of Annalay on Sir'ena."
  },
  {
    speaker: "Akirhen",
    text: "Yeah, but there aren't very many ghosties here."
  },
  {
    speaker: "Vincent",
    text: "The continent usually displayed on the right is K'vilna. There are two major port cities there, as well as Bjorvax."
  },
  {
    text: "Bjorvax is a large city controlled mostly by the Hallowed Vanguard. It is also the closest city to the Selnata portal."
  },
  {
    speaker: "Akirhen",
    text: "K'vilna is also where Oirae is! That's where the timelime issues were!"
  },
  {
    speaker: "Vincent",
    text: "The time issues have been taken care of, and Oirae is a safe place now."
  },
  {
    speaker: "Akirhen",
    text: "Yup! So that's a pretty broad overview. Would you like you like to explore with me?"
  },

  // *******************************************************************
  // exploreDaervyn
  // *******************************************************************
  {
    receiveJump: "enterAnnalay",
  },

  {
    text:"fdsafsa"
  },
  {
    text:
      "However, if you plan to write something without any choices like a linear visual novel, then you don't need to worry about `choices.js`."
  },
  { text: "The writing will take place in `story.js`." },
  { text: "Let's begin with the sprite properties." },
  { text: "At max, we can only have three sprites on the screen." },
  { text: "You can set just one position like I'm doing right now." },
  {
    spriteLeft: bp,
    spriteRight: bh,
    text: "Or you can use all three positions simultaneously."
  },
  {
    sprite: bh,
    text: "Okay, looks like we're done with the fundamentals."
  },
  {
    sprite: bn,
    text: "It's a little short, but it can do what you need for the most part."
  },
  { text: "Anyway, let's diverge to some specific features." },
  { choicesExist: true, receiveJump: "features" },
  // Effects
  { routeBegins: "showEffects", sprite: bh, text: "There are some preset effects at the moment." },
  { speaker: "", spriteEffect: "bounce", text: 'spriteEffect: "bounce"' },
  { spriteEffect: "shake", text: 'spriteEffect: "shake"' },
  { spriteEffect: "grow", text: 'spriteEffect: "grow"' },
  { spriteEffect: "shrink-back", text: 'spriteEffect: "shrink-back"' },
  { spriteEffect: "shrink", text: 'spriteEffect: "shrink"' },
  {
    spriteEffect: "shrink",
    text:
      "Before I grow back, one thing to note is that the sprite can stay in its altered state if the effect is continuously set."
  },

  { spriteEffect: "shrink", text: "A drawback is that when the sprite changes..." },
  { spriteEffect: "shrink", sprite: bn, text: "It reanimates." },
  {
    spriteEffect: "shrink",
    text: "The solution is to continuously apply a non-animated version of the effect after the initial animation."
  },
  {
    spriteEffect: "shrunk",
    text: 'So in this case, when `spriteEffect` is being set to "shrunk" instead of "shrink"...'
  },
  { sprite: bh, spriteEffect: "shrunk", text: "It doesn't reanimate." },

  {
    spriteEffect: "shrunk",
    sprite: bn,
    text:
      'The only difference between "shrink" and "shrunk" is that "shrunk" does not have the animation property in the CSS while "shrink" does.'
  },
  {
    spriteEffect: "grow-back",
    sprite: bn,
    text: "Anyway, `spriteLeft` and `spriteRight` also have their own effect functions."
  },

  { text: "For example..." },
  {
    speaker: "",
    sprite: "",
    spriteLeft: bn,
    spriteRight: bn,
    spriteLeftEffect: "grow",
    spriteRightEffect: "shake",
    text: 'spriteLeftEffect: "grow", spriteRightEffect: "shake"'
  },
  {
    speaker: b,
    spriteRight: "",
    spriteLeftEffect: "grown",
    text: "The effect property simply uses the value as its CSS class."
  },
  {
    spriteLeft: "",
    sprite: bh,
    text: "That means you can also write your own effects as well."
  },
  {
    text: "Just write the class in the effects.css file and set the effect value to that in a string.",
    jumpTo: "features"
  },
  // Transitions
  {
    routeBegins: "showTransitions",
    sprite: "",
    text: "There are background transitions and sprite transitions."
  },
  {
    text: "By default, the transitions fade in out with the sprites transitioning faster than the backgrounds."
  },
  { text: "Here is the default background change..." },
  { bg: entrance },
  {
    bgTransition: "scene-change",
    bg: microphone,
    text: "And here's the default sprite enter transition..."
  },
  { sprite: bn },
  {
    text: "Background transitions only have fades, but sprite transitions have a bit more at the moment."
  },
  { text: "You can enter a sprite from the sides like this...", sprite: "" },
  {
    speaker: "",
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: bn,
    text: 'spriteLeftTransition: "from-right-leave-left", spriteLeft: require("./sprites/sprite.png")'
  },
  {
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: "",
    text: 'spriteLeftTransition: "from-right-leave-left"'
  },
  {
    spriteLeftTransition: "from-left-leave-right",
    spriteLeft: bn,
    text: "Now to move from one position to another takes a bit more work."
  },
  {
    spriteLeftTransition: "move-right",
    spriteLeft: "",
    spriteTransition: "move-right",
    sprite: bn,
    text:
      'spriteLeftTransition: "move-right", spriteTransition: "move-right", spriteLeft: "", sprite: require("./sprites/sprite.png"),'
  },
  { speaker: b, text: "As you might have noticed, spriteLeft has to disappear with an empty string for this to work." },
  {
    text:
      "Since this application uses ReactCSSTransitionGroup, it is taking advantage of the leave and enter animations to make it work."
  },
  { text: "Anyway, let's continue." },
  {
    speaker: "",
    spriteRightTransition: "from-right-leave-left",
    spriteRight: bn,
    text: 'spriteRightTransition: "from-right-leave-left"'
  },
  {
    spriteRightTransition: "move-left-far",
    spriteRight: "",
    spriteLeftTransition: "move-left-far",
    spriteLeft: bh,
    text:
      'spriteRightTransition: "move-left-far", spriteLeftTransition: "move-left-far", spriteRight: "", spriteLeft: require("./sprites/sprite.png"),'
  },
  { speaker: b, text: "That's about it for now.", jumpTo: "features" },

  // Storing choices
  {
    spriteLeft: "",
    routeBegins: "showStoringChoices",
    text: "The user is jumped to a specific index depending on what choice is clicked on."
  },
  { text: "For some projects, that is enough." },
  {
    text: "But if you want the game to the user's choices, you can use the `store` property in 'choices.js'."
  },
  { text: "For example, let's say the user is friends with a character." },
  { text: "The user can pick choices that will raise affection points for that character." },
  { text: "If the user accumulated enough points by a certain point, the user will jump to a certain scene." },
  { text: "Let's see it in application." },
  {
    sprite: bp,
    text: "Hey, can you help me carry the microphone."
  },
  { choicesExist: true, text: "Help? (Refer to choices.js to see the properties.)" },
  {
    routeBegins: "helpBlock",
    speaker: "nashkenazy",
    text: "No problem."
  },
  {
    sprite: bh,
    speaker: b,
    text: "Thanks.",
    jumpTo: "blockHelp"
  },
  {
    routeBegins: "noHelpBlock",
    speaker: "nashkenazy",
    text: "Nah, I'm good."
  },
  {
    speaker: "",
    sprite: "",
    text: "The block trips and falls.",
    jumpTo: "blockHelp"
  },
  {
    receiveJump: "blockHelp",
    text: "(Back to common route) Some weeks pass."
  },
  { text: "Block asked me to hang out at his place." },
  { text: "Did I accept?", choicesExist: true },
  {
    routeBegins: "hangOutWithBlock",
    text: "It was fun. We ate some pizza and watched a movie.",
    jumpTo: "blockHangOut"
  },
  {
    routeBegins: "noHangOutWithBlock",
    text: "I said I was busy, but I just didn't feel like it.",
    jumpTo: "blockHangOut"
  },
  {
    receiveJump: "blockHangOut",
    text: "(Back to common route) I haven't seen Block for a few years now."
  },
  { text: "I text him to see how he's doing.", jumpToBecauseStore: "blockAffection" },
  // Goes to next index if the user's choices do not fulfill any `receiveJumpBecauseStore` requirements.
  {
    text: "I put my phone down and continue with life."
  },
  { text: "He never texted back." },
  { text: "blockAffection score: 0. (Technically anything not 1 or 2)", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 1],
    text: "A few hours later, he texts back."
  },
  {
    speaker: b,
    text: "Sorry, I've been a bit busy organizing my wedding."
  },
  { text: "I forgot to send you a letter, but would you like to come?" },
  { speaker: "", text: "blockAffection score: 1.", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 2],
    text: "He texts back immediately."
  },
  {
    speaker: b,
    text: "Hey, nashkenazy! It's been so long since we'd last talked."
  },
  { text: "I was thinking about making you my best man for a wedding I've been planning." },
  { text: "I know it's a bit sudden, but you're the only one I think is best for the role." },
  { text: "blockAffection score: 2.", jumpTo: "skitDone" },
  {
    receiveJump: "skitDone",
    text: "(Done with skit) It takes a bit more work to get the choices done, but it should work out in the end.",
    jumpTo: "features"
  },
  {
    routeBegins: "leave",
    sprite: bh,
    spriteEffect: "shake",
    text: "Thank you for trying out the demo.",
    jumpTo: "title-screen"
  }
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
