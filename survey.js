const readline = require('readline');

const profileGenerator = function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let profile = [];
  let response = [" loves listening to ", " while ", ", devouring ", " for ", ", prefers ", " over any other sport, and is amazing at "];

  rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    profile.push(answer);
    rl.question("What's an activity you like doing?  ", (answer) => {
      profile.push(answer);
      rl.question("What do you listen to while doing that?     ", (answer) => {
        profile.push(answer);
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)     ", (answer) => {
          profile.push(answer);
          rl.question("What's your favourite thing to eat for that meal?     ", (answer) => {
            profile.push(answer);
            rl.question("Which sport is your absolute favourite?     ", (answer) => {
              profile.push(answer);
              rl.question("What is your superpower? In a few words, tell us what you are amazing at!     ", (answer) => {
                profile.push(answer);
                console.log(profile[0] + response[0] + profile[2] + response[1] + profile[1] + response[2] + profile[4] + response[3] + profile[3] + response[4] + profile[5] + response[5] + profile[6]);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

profileGenerator();