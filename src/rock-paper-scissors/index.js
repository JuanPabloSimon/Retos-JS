function rockPaperScissors(choice) {
    let botChoice = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let result;
    let options = {
        1: "🗿",
        2: "✂️",
        3: "📄",
        4: "🦎",
        5: "🖖"
    }
    if (botChoice === choice) {
        result = "Empate :/";
        printInDocument(options[choice], options[botChoice], result)
        return result;
    }
    
    // const combinations = {
    //     1: "Piedra machaca tijeras.",
    //     2: "Tijeras corta papel.",
    //     3: "Papel envuelve piedra.",
    //     4: "Piedra aplasta lagarto.",
    //     5: "Lagarto envenena Spock.",
    //     6: "Spock destruye tijeras.",
    //     7: "Tijeras decapitan lagarto.",
    //     8: "Lagarto devora papel.",
    //     9: "Papel desautoriza Spock.",
    //     10: "Spock vaporiza piedra.",
    // }
    switch(choice) {
        case 1:
            if(botChoice === 3 || botChoice === 5) {
                result = "Ganador Bot :(";
            } else {
                result = "Has Ganado! :D";
            }
            break;
        case 2:
            if(botChoice === 1 || botChoice === 5) {
                result = "Ganador Bot :(";
            } else {
                result = "Has Ganado! :D";
            }
            break;
        case 3:
            if(botChoice === 2 || botChoice === 4) {
                result = "Ganador Bot :(";
            } else {
                result = "Has Ganado! :D";
            }
            break;
        case 4:
            if(botChoice === 1 || botChoice === 2) {
                result = "Ganador Bot :(";
            } else {
                result = "Has Ganado! :D";
            }
            break;
        case 5: 
            if(botChoice === 3 || botChoice === 4) {
                result = "Ganador Bot :(";
            } else {
                result = "Has Ganado! :D";
            }
            break;
    }
    printInDocument(options[choice], options[botChoice], result)
    return result;
}

function printInDocument(choice, botChoice, result) {
    let yourChoice = document.getElementById("choice"),
        bot = document.getElementById("botChoice"),
        finalResult= document.getElementById("result");

    yourChoice.innerHTML = `<h3>YOU</h3>
                            <p  class="choices">
                                ${choice} 
                            </p>`;
    bot.innerHTML = `<h3>BOT</h3>
                    <p  class="choices">
                        ${botChoice}
                    </p>`;
    finalResult.innerHTML = `<h1>${result}</h1>`;
}

const piedra = document.getElementById('rock'),
    papel = document.getElementById('paper'),
    tijera = document.getElementById('scissors'),
    lagarto = document.getElementById('lizard'),
    spock = document.getElementById('spock');


piedra.addEventListener('click', () => rockPaperScissors(1))
tijera.addEventListener('click', () => rockPaperScissors(2))
papel.addEventListener('click', () => rockPaperScissors(3))
lagarto.addEventListener('click', () => rockPaperScissors(4))
spock.addEventListener('click', () => rockPaperScissors(5))
