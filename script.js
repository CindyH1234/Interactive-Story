const story = {
  start: {
    text: "You wake up in a hospital room. Your attacker has tracked you here. What do you do?",
    choices: [
      { text: "Get it over with. Charge at him.", next: "Charge" },
      { text: "Run away, think later", next: "Run" },
      { text: "Disguise yourself as an elderly woman", next: "Disguise" }
    ]
  },

  Run: {
    text: "You find yourself pressed for time. He's near... You choose to...",
    choices: [
      { text: "Hide in a room", next: "Room" },
      { text: "Run down the stairs", next: "Stairs" }
    ]
  },

  Charge: {
    text: "You look around for a weapon to defend yourself.",
    choices: [
      { text: "Pick up the fruit knife on the table", next: "ending1" }
    ]
  },

  Disguise: {
    text: "You find a pair of crutches and some bandages.",
    choices: [
      { text: "Disguise yourself as injured", next: "Walk" }
    ]
  },

  Room: {
    text: "You hide in the room and lock the door.",
    choices: [
      { text: "Pray", next: "ending3" }
    ]
  },

  Stairs: {
    text: "You run down the stairs and reach the ground floor.",
    choices: [
      { text: "Run out the front door", next: "ending2" },
      { text: "Run out the back door", next: "ending4" }
    ]
  },

  Walk: {
    text: "You successfully walk past him.",
    choices: [
      { text: "Change disguises", next: "Nurse" },
      { text: "Forget it, just run", next: "ending5" }
    ]
  },

  Nurse: {
    text: "You find a spare nurse uniform.",
    choices: [
      { text: "Wear the uniform", next: "ending6" }
    ]
  },

  // ENDINGS
  ending1: {
    text: "You charge at him and are disarmed.\n\nENDING 1: You died.",
    ending: true
  },

  ending2: {
    text: "Your attacker brought his buddies.\n\nENDING 2: You were beaten to death.",
    ending: true
  },

  ending3: {
    text: "He waits outside the door like a predator.\n\nENDING 3: Trapped.",
    ending: true
  },

  ending4: {
    text: "You escape through the back door.\n\nENDING 4: You survived… barely.",
    ending: true
  },

  ending5: {
    text: "He catches you before you reach safety.\n\nENDING 5: Strangled.",
    ending: true
  },

  ending6: {
    text: "You call the police and escape safely.\n\nENDING 6: Freedom.",
    ending: true
  }
};

// Display scene
function showNode(nodeKey) {
  const node = story[nodeKey];
  const textEl = document.getElementById("text");
  const choicesEl = document.getElementById("choices");

  textEl.innerText = node.text;
  choicesEl.innerHTML = "";

  if (node.ending) {
    const btn = document.createElement("button");
    btn.innerText = "Restart";
    btn.onclick = () => showNode("start");
    choicesEl.appendChild(btn);
    return;
  }

  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => showNode(choice.next);
    choicesEl.appendChild(btn);
  });
}

// Start game
showNode("start");
