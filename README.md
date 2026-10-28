# HAXOR Denial of Service WITH NODE JS

<div align="center">
  <a href="https://www.npmjs.com/package/haxordos" title="npm version">
    <img src="https://img.shields.io/npm/v/haxordos?color=brightgreen&style=for-the-badge" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/haxordos" title="npm downloads">
    <img src="https://img.shields.io/npm/dt/haxordos?color=yellow&style=for-the-badge" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/haxordos" title="npm license">
    <img src="https://img.shields.io/npm/l/haxordos?color=blue&style=for-the-badge" alt="npm license">
  </a>
  <a href="https://www.npmjs.com/package/haxordos" title="package">
    <img src="https://img.shields.io/npm/v/haxordos?label=package&logo=npm&style=for-the-badge" alt="package">
  </a>
  <a href="https://nodejs.org/api/modules.html" title="CommonJS module format">
    <img src="https://img.shields.io/badge/Module-CommonJS-yellow?style=for-the-badge" alt="CommonJS">
  </a>
  
![Aniyms](https://qu.ax/AllLT.jpeg)
  <p><strong>A powerful Layer 7 DoS/DDoS testing toolkit built with Node.js</strong></p>
</div>

---

## 📋 Overview

> *DDoS is an amplified DoS attack that uses multiple computers (botnet) simultaneously. One type targets Layer 7 (application layer), where the attack floods the application with seemingly legitimate requests (like repeatedly reloading pages), causing the server to go down due to resource exhaustion while processing them.*

---

## ✨ Features

- 🎯 **Multiple Attack Vectors** - Five different Layer 7 attack methods
- ⚡ **High Performance** - Optimized for maximum efficiency
- 🔄 **TCP Socket Support** - Raw TCP connection capabilities
- 🤖 **Browser Automation** - Stealth mode using Puppeteer
- 🔍 **Smart Reconnaissance** - Automatic target pre-scanning
- 📊 **Real-time Validation** - Connection status monitoring
- 🛡️ **Adaptive Mechanism** - Persistent attack loops

---

## 🚀 Installation

```bash
# npm install:
npm install haxordos

# yarn install:
yarn add haxordos 
```

---

## 📖 Quick Start

### Basic Usage

```js
const hacxorDos = require('haxordos');

hacxorDos.SlowRiss('https://target.com', 300);
hacxorDos.netTcp('https://target.com', 300);
hacxorDos.fastDuck('https://target.com', 300);
hacxorDos.CrawlDos('https://target.com', 300);
hacxorDos.httpEndpoint('https://target.com/home/user/', 300);
```

### Import Module

```js
const hacxorDos = require('haxordos');
```

---

## 🔧 Methods Documentation

### 1. SlowRiss

```js
hacxorDos.SlowRiss('https://target.com', 300);
```

**Description:**  
Layer 7 DoS attack that holds many HTTP connections by sending data slowly or partially, causing the server to run out of available slots.

**Parameters:**
- `target` (string): Target URL
- `intensity` (number): Attack intensity level

---

### 2. netTcp

```js
hacxorDos.netTcp('https://target.com', 300);
```

**Description:**  
Layer 7 DDoS attack that uses raw TCP sockets to establish direct network connections, then sends HTTP GET requests.

**Parameters:**
- `target` (string): Target URL
- `intensity` (number): Attack intensity level

---

### 3. fastDuck

```js
hacxorDos.fastDuck('https://target.com', 300);
```

**Description:**  
Layer 7 DoS attack named FastDuck because it combines high-speed requests with stealth techniques using browser automation (Puppeteer) to generate traffic that is technically identical to legitimate user visits, including complete browser fingerprints, valid security headers, and session cookies.

**Parameters:**
- `target` (string): Target URL
- `intensity` (number): Attack intensity level

---

### 4. CrawlDos

```js
hacxorDos.CrawlDos('https://target.com/home/user/', 300);
```

**Description:**  
Layer 7 DoS with Adaptive Persistence Mechanism that features automatic reconnaissance through target pre-scanning and continuous attack loops, combining high volume (300 requests/100ms) with real-time connectivity validation to ensure attack effectiveness even against dynamic targets.

**Parameters:**
- `target` (string): Target URL with endpoint
- `intensity` (number): Attack intensity level

---

### 5. httpEndpoint

```js
hacxorDos.httpEndpoint('https://target.com/home/user/', 300);
```

**Description:**  
Targeted endpoint attack focusing on specific application routes.

**Parameters:**
- `target` (string): Target URL with specific endpoint
- `intensity` (number): Attack intensity level

---

## 💼 Ready-to-Use Stresser Script Example

This is an example of a complete testing tool

### Preview

![ScreenShot](https://qu.ax/iNcKt.jpg)

<div align="center">

[![Download](https://img.shields.io/badge/GitHub-Repo-black?logo=github&style=for-the-badge)](https://github.com/REYHAN6610/haxorDos)

</div>

---

## 📊 Feature Status

| Feature              | Status | Description                                    |
|----------------------|--------|------------------------------------------------|
| SlowRiss             | ✅     | Slow HTTP connection attack                    |
| netTcp               | ✅     | Raw TCP socket-based attack                    |
| fastDuck             | ✅     | Browser automation stealth attack              |
| CrawlDos             | ✅     | Adaptive reconnaissance attack                 |
| httpEndpoint         | ✅     | Targeted endpoint attack                       |
| Multi-threading      | ✅     | Concurrent request handling                    |

---

## ⚠️ Disclaimer

**IMPORTANT:** This tool is intended for **educational purposes** and **authorized security testing only**. 

- ⚖️ Unauthorized use of this tool against systems you don't own or have explicit permission to test is **illegal**
- 🔒 Always obtain proper authorization before conducting any security tests
- 📜 Users are solely responsible for compliance with applicable laws and regulations
- 🛡️ The developers assume no liability for misuse or damage caused by this software

---

<div align="center">

<strong>Please Donate:</strong>  
<br>  
<a href="https://saweria.co/reyhantanpahutang">
  <img src="https://img.shields.io/badge/Donate-Saweria-orange?style=for-the-badge&logo=buymeacoffee" alt="Donate via Saweria">
</a>

</div>