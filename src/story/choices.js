var choices = [
  {
    choices: [
      {
        routeBegins: "whoAreYouAkirhen",
        content: "Who is the little red headed child?",
        nextIndex: 0
      },
      {
        routeBegins: "whoAreYouVincent",
        content: "Who is the tall guy?",
        nextIndex: 0
      },
      {
        routeBegins: "whoAreYouExploreDaervyn",
        content: "Let's explore Daervyn!",
        nextIndex: 0
      },
      {
        routeBegins: "whoAreYouExploreSP",
        content: "I'd like to explore the Sleeping Phantom.",
        nextIndex: 0
      },
      {
        routeBegins: "whoAreYouExplainDaervyn",
        content: "Can you tell me about Daervyn?",
        nextIndex: 0
      }
    ]
  },
  {
    choices: [
      {
        routeBegins: "showEffects",
        content: "Effects",
        nextIndex: 0
      },
      {
        routeBegins: "showTransitions",
        content: "Transitions",
        nextIndex: 0
      },

      {
        routeBegins: "showStoringChoices",
        content: "Storing choices for future use",
        resetStore: "true"
      },
      {
        routeBegins: "leave",
        content: "Leave"
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
