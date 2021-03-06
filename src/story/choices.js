var choices = [
  {
    // 0
    choices: [
      {
        routeBegins: "introVincent",
        content: "Who are you?",
        nextIndex: 0
      },
      {
        routeBegins: "introSP",
        content: "What is this place?",
        nextIndex: 0
      },
      {
        routeBegins: "introSkip",
        content: "Order a drink.",
        nextIndex: 1
      }
    ]
  },
  {
    // 1
    choices: [
      {
        routeBegins: "introAkirhen",
        content: "Hi... Who are you?",
        nextIndex: 1
      },
      {
        routeBegins: "askVincentAboutAkirhen",
        content: "Vincent, do you know who this is?",
        nextIndex: 1,
      },
      {
        routeBegins: "exploreSP",
        content: "I actually wanted to explore the Sleeping Phantom first.",
        nextIndex: 2
      },
      {
        routeBegins: "exploreDaervyn",
        content: "Explore where?",
        nextIndex: 2
      }
    ]
  },
  {
    // 2
    choices: [
      {
        routeBegins: "annalayTownSquare",
        content: "Lets explore the town square.",
        nextIndex: 3
      },
      {
        routeBegins: "annalayBeach",
        content: "I want to check out the docks.",
        nextIndex: 0
      },
      {
        routeBegins: "annalayFlowerGarden",
        content: "Can we go see the Flower Garden?",
        nextIndex: 0
      },
      {
        routeBegins: "annalaySarahsRest",
        content: "Who's Sarah?",
        nextIndex: 0
      },
      {
        routeBegins: "annalayBakery",
        content: "The bakery sounds good.",
        nextIndex: 0
      },
      {
        routeBegins: "annalayFlightPoint",
        content: "I'd like to go to the Flight Point.",
        nextIndex: 0
      }
    ]
  },
  {
    // 3
    choices: [
      {
        routeBegins: "whoAreYouValnyus",
        content: "Who are you?",
        nextIndex: 3
      },
      {
        routeBegins: "askAboutSideon",
        content: "What do you know about Sideon?",
        nextIndex: 3
      },
      {
        routeBegins: "askAboutValnyus",
        content: "What do you know about Valnyus?",
        nextIndex: 3
      },
      {
        routeBegins: "noQuestions",
        content: "That's all thank you.",
        nextIndex: 4
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "helpBlock",
        content: "Help Block."
      },
      {
        routeBegins: "noHelpBlock",
        content: "Don't help. He's too far."
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "hangOutWithBlock",
        content: "Yep.",
        nextIndex: 0
      },
      {
        routeBegins: "noHangOutWithBlock",
        content: "Nope.",
        nextIndex: 0
      }
    ]
  }
];

export default choices;
