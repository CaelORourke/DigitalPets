const Game = require("./Game");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "DigitalPet> ",
    removeHistoryDuplicates: true
});

Game.intro();

rl.prompt();

rl.on("line", (line) => {
    switch (line.trim()) {
        case "exit":
            rl.close();
            break;
        case "help":
            Game.help();
            break;
        default:
            Game.takeTurn();
            break;
    }
    rl.prompt();
}).on("close", () => {
    console.log("\nThank you for playing!\n");
    process.exit(0);
});
