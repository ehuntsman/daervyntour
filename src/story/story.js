// bg
const microphone = require("./bg/microphone.jpeg");
const sleepingphantom = require("./bg/sleepingphantom.jpg")
const entrance = require("./bg/entrance.jpeg");
const annalay = require("./bg/annalay.jpg");
const hotsprings = require("./bg/hotsprings.jpg");
// sprites
const bn = require("./sprites/val.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const vincent = require("./sprites/vincent.png");
const akirhen = require('./sprites/akirhen.png');
const sarah = require('./sprites/sarah.png');

const b = "needtochange"

let story = [
  //Introduction
  {
    bg: sleepingphantom,
    speaker: "",
    text: "The Sleeping Phantom is busy as usual as you step inside. The smell of a forest after rain and spices fill the air around you. "
  },
  {
    text: "Standing behind the bar is a youthful looking man in a fine suit with two small horns on his head. He deftly pours a cup of tea for a patron when he notices you."
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "He looks up with a smile as he finishes pour and with a flourished bow he speaks."
  },
  {
    text: "Welcome dear patron to the Sleeping Phantom. What can I do for you?"
  },
  // *******************************************************************
  // Intro with Vincent - route index 0
  // *******************************************************************
  {
    choicesExist: true,
    receiveJump: "introWithVincent"
  },
  // ****
  {
    routeBegins: "introVincent",
    sprite: vincent,
    speaker: "Vincent",
    text: "I am the humble owner of this tavern. Please, call me Vincent."
  },
  {
    speaker: "",
    text: "He cleans the bar top and looks up at you once more."
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "What else can I do for you?",
    jumpTo: "introWithVincent"
  },
  // ****
  {
    routeBegins: "introSP",
    sprite: vincent,
    speaker: "Vincent",
    text: "The Sleeping Phantom, my pride and joy. This tavern is a place for people to find peace and rest while they are within these walls."
  },
  {
    speaker: "",
    text: "He looks around the tavern with a soft smile as if there was more to it, but looks back at you."
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "Is there anything more I can do for you?",
    jumpTo: "introWithVincent"
  },
  // ****
  {
    routeBegins: "introSkip",
    sprite: "",
    speaker: "",
    text: "You take a seat at the bar and order your favorite drink which Vincent shortly provides for you."
  },
  // **** end Intro with Vincent
  {
    sprite: "",
    speaker: "",
    text: "Bursting through the front doors with little care or perhaps knowledge of common etiquette, enters a small kitsune girl with long red hair and a modest dress that sways as she skips in."
  },
  {
    text: "She clambers onto a stool next to you looking up with excited, or maybe mischevious, eyes."
  },
  {
    sprite: akirhen,
    speaker: "Akirhen",
    text: "Hi! Want to go exploring!?"
  },
  // *******************************************************************
  // Intro with Akirhen - route index 1
  // *******************************************************************
  {
    choicesExist: true,
    receiveJump: "introWithAkirhen"
  },
  // ****
  {
    routeBegins: "introAkirhen",
    sprite: akirhen,
    speaker: "",
    text: "With a toothy grin, the young kitsune flashes two fangs as she swings her legs."
  },
  {
    sprite: akirhen,
    speaker: "Akirhen",
    text: "I'm Akirhen! I'm kind of a big deal! So, are we going exploring??",
    jumpTo: "introWithAkirhen"
  },
  // ****
  {
    routeBegins: "askVincentAboutAkirhen",
    sprite: vincent,
    speaker: "Vincent",
    text: "The young miss?"
  },
  {
    speaker: "",
    text: "Vincent looks to the little Kitsune and smiles before turning back to you."
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "I would ask her, however, she is Akirhen. A...pleasant young miss as long as she is able to stay out of trouble.",
    jumpTo: "introWithAkirhen"
  },
  // ****
  {
    routeBegins: "exploreSP",
    sprite: "",
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Akirhen",
    text: "But that's so boring!"
  },
  {
    speaker: "",
    text: "The little kitsune pouts as a short laugh comes from Vincent. He motions to the stairs."
  },
  {
    speaker: "Vincent",
    text: "I would be happy to give you a tour if you would like. Beside the main floor, there is also the hot springs upstairs."
  },
  {
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    speaker: "",
    text: "He steps from behind the bar and you follow him upstairs.",
    jumpTo: "upstairsSP"
  },
  // ****
  {
    routeBegins: "exploreDaervyn",
    sprite: akirhen,
    speaker: "Akirhen",
    text: "Uh...Daervyn! Where else?!"
  },
  {
    speaker: "",
    text: "Akirhen giggles to herself as she motions to the door.",
  },
  {
    speaker: "",
    sprite: "",
    text: "Without waiting for a response, she hops off the bar stool and heads outside, you following shortly after. ",
    jumpTo: "annalay"
  },
  // **** end Intro with Akirhen

  // *******************************************************************
  // Sleeping Phantom Tour
  // *******************************************************************
  {
    receiveJump: "upstairsSP",
    // bg: ---------,
    sprite: "",
    speaker: "",
    text: "As you go upstairs, the wooden stairs creak under your feet. There is a long hall with many doors, each marked with a room number for those wishing to stay overnight, with a final door with a decoration of a mountain at the far end.",
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "We have many rooms, of course, but perhaps the most visited place in the tavern is our hot springs."
  },
  {
    speaker: "",
    text: "Vincent opens the door for you and follows you inside."
  },
  {
    bg: hotsprings,
    sprite: "",
    text: "Stepping through, you find yourself not inside of a city, but on the side of a snowy mountain. A short distance away are two buildings on either side of pools of water with steam rising into the cold air."
  },
  {
    sprite: vincent,
    speaker: "Vincent",
    text: "The hot springs are located in a nearby mountain forest. The door is a portal to take you there."
  },
  {
    speaker: "",
    text: "Vincent gestures to the nearby small shacks."
  },
  {
    speaker: "Vincent",
    text: "There are places to change if you wish. The water is quite warm and comforting."
  },
  {
    speaker: "",
    text: "Vincent turns to you and gestures to the door back into the tavern."
  },
  {
    speaker: "Vincent",
    text: "Shall we go back down and pour you a drink?"
  },
  {
    bg: sleepingphantom,
    sprite: "",
    speaker: "",
    text: "The two of you leave the hot springs and head back downstairs. Vincent pours you an amazing drink. You spend some time there before leaving.",
    jumpTo: "theEnd"
  },
  // *******************************************************************
  // Annalay
  // *******************************************************************
  {
    receiveJump: "annalay",
    bg: annalay,
    sprite: "",
    speaker: "",
    text: "Outside the tavern, you find a bustling city. There is a fountian in the center of the square with two statues on top of it."
  },
  {text: "The smell of the ocean is heavy in the air, but it also carries the sweet smell of baked goods and flowers."},
  {
    sprite: akirhen,
    speaker: "Akirhen",
    text: "Where do you wanna go?"
  },
  // { text: "Here in Annalay, there is the town square, the Flower Garden, the bakery or the beach. Or we could go visit Sarah!"},
  // {text: "We could also go to the flight tower and take a serpent to anywhere in Daervyn!"},
  { text: "I suggest we check out the town square, okay?" },
  {
    text: "So... where should we go?"
  },
  // *******************************************************************
  // Where to Tour in Daervn - route index 2
  // *******************************************************************
  {choicesExist: true,},
  // ****
  {
    routeBegins: "annalayTownSquare",
    // bg: -------
    sprite: "",
    speaker: "",
    text: "The fountain is front of you is tall and helps tie together the town square. Merchants call out their wares as people move about, talking amonst themselves. Shops line the outer wall of the square."
  },
  {
    sprite: akirhen,
    speaker: "Akirhen",
    text: "That's Valnyus and Sideon."
  },
  {
    speaker: "",
    text: "Akirhen points to the two statues on the fountain."
  },
  {
    sprite: akirhen,
    speaker: "Akirhen",
    text: "They're the main gods worshiped here in Annalay, though most people say they aren't actually gods anymore. They do run the city though!"
  },
  {
    speaker: "???",
    sprite: "",
    spriteLeft: akirhen,
    spriteRight: bn,
    text: "I suppose that is a matter of perspective isn't it?"
  },
  {
    speaker: "",
    text: "A cheery voice speaks walking up to the pair.",
  },
  {
    speaker: "???",
    text: "Are they still gods despite their fallen state? I'm not sure even they know at this point."
  },
  {
    speaker: "",
    spriteLeftEffect: "bounce",
    text: "Akirhen jumps moving to your side and speaking in a quiet tone."
  },
  {
    speaker: "Akirhen",
    text: "I...don't know who that is...Why don't you talk to her?"
  },
  {
    speaker: "",
    text: "The woman, clearly hearing Akirhen, looks to you expectantly."
  },
  // *******************************************************************
  // Talk with Valnyus - route index 3
  // *******************************************************************
  {
    choicesExist: true,
    receiveJump: "talkWithValnyus"
  },
  // ****
  {
    routeBegins: "whoAreYouValnyus",
    sprite: bn,
    spriteLeft: "",
    spriteRight: "",
    text: "The woman flashes a soft smile."
  },
  {
    speaker: "Val",
    text: "Usually the polite thing to do is give one's name before asking for another's, but I don't mind. I'm Val, a traveling Minstrel of sorts here with my friend...Wherever he got off to. Anyway, it's a pleasure to meet you! I have some time before Vel gets back if you would like to know more about the gods.",
    jumpTo: "talkWithValnyus"
  },
  // ****
  {
    routeBegins: "askAboutSideon",
    sprite: "",
    spriteLeft: akirhen,
    spriteRight: bn,
    speaker: "Val",
    text: "What's there to know about Sideon...? He is the god of traders and commerce for one. He is typically depicted as a strict businessman with a stick up his..,"
  },
  {
    speaker: "",
    text: "She pauses looking at Akirhen."
  },
  {
    speaker: "Val",
    text: "Nevermind, the story goes he is actually a big softie should you not get on his bad side.",
    jumpTo: "talkWithValnyus"
  },
  // ****
  {
    routeBegins: "askAboutValnyus",
    sprite: "",
    spriteLeft: akirhen,
    spriteRight: bn,
    speaker: "Val",
    text: "Other than she is gorgeous and should be the goddess of beauty? She is actually the goddess of Order and War. Most worship her for the continued peace of Annalay.",
    jumpTo: "talkWithValnyus",
  },
  // ****
  {
    routeBegins: "noQuestions",
    sprite: "",
    spriteLeft: akirhen,
    spriteRight: bn,
    speaker: "Val",
    text: "No problem at all! I think I can see Vel with the psuedodragons...Oh, I hope it doesn't go like last time.",
  },
  {
    speaker: "",
    text: "Val looks past you to a nearby shop. "
  },
  {
    speaker: "Val",
    text: "If you will excuse me. Enjoy your time in Annalay!"
  },
  {
    sprite: akirhen,
    spriteLeft: "",
    spriteRight: "",
    speaker: "",
    text: "Val waves before heading off calling out for Vel."
  },
  {
    speaker: "Akirhen",
    text: "I could go for a hot chocolate! Let's go bug Vincent for drinks!"
  },
  {
    sprite: "",
    speaker: "",
    text: "The two of you head back to the Sleeping Phantom."
  },
  {
    bg: sleepingphantom,
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Vincent",
    text: "Did you two have a nice tour?",
  },
  {
    speaker: "Akirhen",
    text: "Yup! Now we need hot chocolate. With straws!",
    jumpTo: "theEnd"
  },
  // ****
  {
    routeBegins: "annalayBeach",
    // bg: ------,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    speaker: "",
    text: "The docks of the harbor are filled with large boats, but to the side of it lays an open beach."
  },
  {
    text: "There are a few people at the beach, playing and relaxing."
  },
  {
    speaker: "Akirhen",
    sprite: akirhen,
    text: "**** why are we here? What kind of information or lore can be done here?"
  },
  {
    text: "Let's go get some hot chocolate!"
  },
  {
    sprite: "",
    speaker: "",
    text: "The two of you head back to the Sleeping Phantom."
  },
  {
    bg: sleepingphantom,
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Vincent",
    text: "Did you two have a nice tour?",
  },
  {
    speaker: "Akirhen",
    text: "Yup! Now we need hot chocolate. With straws!",
    jumpTo: "theEnd"
  },
  // ****
  {
    routeBegins: "annalayFlowerGarden",
    // bg:----
    sprite: "",
    speaker: "",
    text: "Not done yet."
  },
  {
    speaker: "Akirhen",
    sprite: akirhen,
    text: "Let's go get some hot chocolate!"
  },
  {
    sprite: "",
    speaker: "",
    text: "The two of you head back to the Sleeping Phantom."
  },
  {
    bg: sleepingphantom,
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Vincent",
    text: "Did you two have a nice tour?",
  },
  {
    speaker: "Akirhen",
    text: "Yup! Now we need hot chocolate. With straws!",
    jumpTo: "theEnd"
  },
  // ****
  {
    bg: annalay,
    routeBegins: "annalaySarahsRest",
    sprite: akirhen,
    spriteLeft: "",
    spriteRight: "",
    speaker: "Akirhen",
    text: "Sarah owns Sarah's Rest! It's a magic shop here in town.",
  },
  {
    text: "Akirhen starts walking off satisfied with her answer.",
    speaker: ""
  },
  {
    speaker: "Akirhen",
    text: "C'mon! You can see for yourself!"
  },
  {
    speaker: "",
    sprite: "",
    text: "The smol kitsune leads you to the market district of the city where a sign hangs over a staircase leading down saying Sarah's Rest written in glowing Pink letters."
  },
  {
    // bg: ----,
    text: "Akirhen steps inside as a small bell rings with the door opening. The air is filled with the scent of a subtle perfume as magical items line various shelves."
  },
  {
    text: "A sensual voice call out from the back of the shop."
  },
  {
    speaker: "???",
    sprite: sarah,
    text: "I will be out in a moment Darling." 
  },
  {
    speaker: "Akirhen",
    sprite: akirhen,
    text: "Let's go get some hot chocolate!"
  },
  {
    sprite: "",
    speaker: "",
    text: "The two of you head back to the Sleeping Phantom."
  },
  {
    bg: sleepingphantom,
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Vincent",
    text: "Did you two have a nice tour?",
  },
  {
    speaker: "Akirhen",
    text: "Yup! Now we need hot chocolate. With straws!",
    jumpTo: "theEnd"
  },
  // ****
  {
    routeBegins: "annalayBakery",
    sprite: "",
    speaker: "",
    text: "It's a bakery!"
  },
  {
    speaker: "Akirhen",
    sprite: akirhen,
    text: "Let's go get some hot chocolate!"
  },
  {
    sprite: "",
    speaker: "",
    text: "The two of you head back to the Sleeping Phantom."
  },
  {
    bg: sleepingphantom,
    spriteLeft: akirhen,
    spriteRight: vincent,
    speaker: "Vincent",
    text: "Did you two have a nice tour?",
  },
  {
    speaker: "Akirhen",
    text: "Yup! Now we need hot chocolate. With straws!",
    jumpTo: "theEnd"
  },
  // ****
  {
    routeBegins: "annalayFlightPoint",
    // bg:----
    sprite: "",
    speaker: "",
    text: "Not done yet."
  },
  {
    speaker: "Akirhen",
    text: "I have nothing else so it's the end for now",
    jumpTo: "theEnd"
  },

  // *******************************************************************
  // exploreDaervyn
  // *******************************************************************

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
  },
  // *******************************************************************
  // The End
  // *******************************************************************
  {
    receiveJump: "theEnd",
    sprite: "",
    spriteRight: "",
    spriteLeft: "",
    bg: sleepingphantom,
    speaker: "",
    text: "This is the end of the tour. You may recieve one favor a week for completing this tour by messaging Kyoko."
  },
  {
    text: "You can go through this tour as many times as you'd like without favor."
  },
  {
    text: "Updates will happen periodily to extend the tour and reflect current Daervyn situations."
  },
  {
    text: "Please refresh the page or close the browser",
  },

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
