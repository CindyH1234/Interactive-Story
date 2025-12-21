// This object holds the entire story
const story = {
  start: {
    text: "You wake up in a hospital room. Your attacker has tracked you here. What do you do?",
    choices: [
      { text: "Get it over with. Charge at him. ", next: "Charge" },
      { text: "Run away, think later", next: "Run" }
      { text: "Disguse yourself as an elderly women ", next: "Disguise" },
    ]
  },

  Run: {
    text: "You find yourself pressed for time. He's near... You choose to..",
    choices: [
      { text: "Hide in a room", next: "Room" },
      { text: "Run down the Stairs", next: "Stairs" }
    ]
  },

  Charge: {
    text: "You look around for a weapon to defend yourself.",
    choices: [
      { text: "Pick up the fruit knife on the table across from you", next: "ending1" }
    ]
  },

  Disguise: {
    text: "You find a pair of crutches and some bandages.",
    choices: [
      { text: "You disguise yourself as a teen with a broken leg", next: "ending2" }
    ]
  },

  Room: {
    text: "The door locks itself from the other side.",
    choices: [
      { text: "Scream", next: "ending3" }
    ]
  },

  // ENDINGS
  ending1: {
    text: "You charged towards him only to be disarmed and killed.\n\nENDING 1: You died",
    ending: true
  },

  ending2: {
    text: "You walk until the house swallows you.\n\nENDING 2: Lost",
    ending: true
  },

  ending3: {
    text: "No one hears you.\n\nENDING 3: Trapped",
    ending: true
  }
};

// This function displays the current scene
function showNode(nodeKey) {
  const node = story[nodeKey];
  const textEl = document.getElementById("text");
  const choicesEl = document.getElementById("choices");

  textEl.innerText = node.text;
  choicesEl.innerHTML = "";

  // If it's an ending, show restart button
  if (node.ending) {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart";
    restartBtn.onclick = () => showNode("start");
    choicesEl.appendChild(restartBtn);
    return;
  }

  // Create buttons for each choice
  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => showNode(choice.next);
    choicesEl.appendChild(btn);
  });
}

// Start the game
showNode("start");

