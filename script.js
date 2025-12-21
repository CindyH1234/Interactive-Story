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
      { text: "You disguise yourself as a teen with a broken leg", next: "Walk" }
    ]
  },

  Room: {
    text: "You hide in the room and lock the door",
    choices: [
      { text: "Pray", next: "ending3" }
    ]
  },

   Stairs: {
    text: "You run down the stairs and make it to the ground floor. You...",
    choices: [
      { text: "Run out of the front door", next: "ending2" }
      { text: "Run out of the back door", next: "ending4" }
    ]
  },
    
  Walk: {
    text: "You successfully walk past him",
    choices: [
      { text: "Change Disguises", next: "Nurse" }
      { text: "Forget it, Just Run", next: "Stopped" }
    ]
  },

    Nurse: {
    text: "You discreetly enter the changing room and find a spare nurse uniform",
    choices: [
      { text: "Wear the uniform", next: "Escape" }
    ]
  },
  
    Stopped: {
    text: "A passing nurse recognizes you and calls out to you. The attacker is drawn to the commotion.",
    choices: [
      { text: "RUNN!!", next: "Ending5" }
    ]
    },

    Escape: {
    text: "You managed to escape as a nurse going on lunch break",
    choices: [
      { text: "Call 911 and leave the area", next: "Ending6" }
    ]
  };
      
  // ENDINGS
     
},   
  ending1: {
    text: "You charge at him and are disarmed.\n\nENDING 1: You died",
    ending: true
    ]
  },

  ending2: {
    text: "Your attacker brought his buddies.\n\nENDING 1: You were beaten to death",
    ending: true
  },
  

  ending3: {
    text: "He hears your frantic breaths through the door. He waits outside for you to come out on you own like a hunter teasing it's prey\n\nENDING 3: Trapped",
    ending: true
  },
    
  ending4: {
    text: "You escape through the backdoor, leaving the attacker too far behind to chase after you.\n\nENDING 4: You survived..barely",
    ending: true
    
  },
  
    ending5: {
    text: "Your Attacker is faster than you. He catches you and strangles you to death.\n\nENDING 4: Strangled to death",
    ending: true
    }, 

  Ending6: {
    text: "You call the police and they arrest the criminals. \n\nEnding 6: Succesfully escaped",
    ending: true
  },
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

