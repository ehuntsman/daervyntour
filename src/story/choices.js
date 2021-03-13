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
      // {
      //   routeBegins: "annalayBeach",
      //   content: "I want to check out the docks.",
      //   nextIndex: 0
      // },
      // {
      //   routeBegins: "annalayFlowerGarden",
      //   content: "Can we go see the Flower Garden?",
      //   nextIndex: 0
      // },
      {
        routeBegins: "annalaySarahsRest",
        content: "Who's Sarah?",
        nextIndex: 6
      },
      // {
      //   routeBegins: "annalayBakery",
      //   content: "The bakery sounds good.",
      //   nextIndex: 0
      // },
      {
        routeBegins: "annalayFlightPoint",
        content: "I'd like to go to the Flight Point.",
        nextIndex: 4
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
        nextIndex: 3, //never loops back, just to the end.
      }
    ]
  },
  {
    // 4 daervyn flight path
    choices: [
      // {
      //   routeBegins: "oirae",
      //   content: "We could fly to Oirae."
      // },
      {
        routeBegins: "bjorvax",
        content: "I want to see Bjorvax.",
        nextIndex: 5
      }
    ]
  },
  {
    // 5 talk with Anora
    choices: [
      {
        routeBegins: "introduceYourself",
        content: "Introduce yourself.",
        nextIndex: 5
      },
      {
        routeBegins: "crawfordHistory",
        content: "What's that about your family name?",
        nextIndex: 5
      },
      {
        routeBegins: "byeAnora",
        content: "Goodbye.",
        nextIndex: 5 //goes to the end
      }
    ]
  },
  {
    // 6 Sarah's Rest Item choice
    choices: [
      {
        routeBegins: "demonStatue",
        content: "A golden statue",
        nextIndex: 7
      },
      {
        routeBegins: "penguinBox",
        content: "A box with penguin figurines.",
        nextIndex: 8
      },
      {
        routeBegins: "sarahDress",
        content: "A shimmering dress.",
        nextIndex: 8
      }
    ]
  },
  {
    // 7 Sarah's Rest Demon choice
    choices: [
      {
        routeBegins: "giveCoin",
        content: "Feed a coin",
        nextIndex: 8
      },
      {
        routeBegins: "statuesTalk",
        content: "Can statues be hungry?",
        nextIndex: 8
      },
    ]
  },
  {
    // 8 Sarah's Rest Questions
    choices: [
      {
        routeBegins: "notHuman",
        content: "You're not human, are you?",
        nextIndex: 8
      },
      {
        routeBegins: "magicalItems",
        content: "Where do you get so many magic items?",
        nextIndex: 8
      },
      {
        routeBegins: "windowShopping",
        content: "Just window shopping",
        nextIndex: 9
      },
    ]
  }
];

export default choices;
