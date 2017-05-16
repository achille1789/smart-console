/*!
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2017, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

var c = {
    a: (...extraParam) => console.assert(...extraParam),                    // console.assert()
    c: () => console.clear(),                                               // console.clear()
    cn: (param) => param ? console.count(param) : console.count(),          // console.count([label]) - label is optional
    d: (text, ...extraParam) => console.debug(text, ...extraParam),         // console.debug()
    dir: (param) => console.dir(param),                                     // console.dir() - non-standard method
    dx: (param) => console.dirxml(param),                                   // console.dirxml() - non-standard method
    e: (text, ...extraParam) => console.error(text, ...extraParam),         // console.error()
    g: () => console.group(),                                               // console.group()
    gc: () => console.groupCollapsed(),                                     // console.groupCollapsed()
    ge: () => console.groupEnd(),                                           // console.groupEnd()
    i: (text, ...extraParam) => console.info(text, ...extraParam),          // console.info()
    l: (text, ...extraParam) => console.log(text, ...extraParam),           // console.log()
    p: (param) => param ? console.profile(param) : console.profile(),       // console.profile()
    pe: () => console.profileEnd(),                                         // console.profileEnd()
    tb: (param) => console.table(param),                                    // console.table()
    t: (param) => param ? console.time(param) : console.time(),             // console.time()
    te: (param) => param ? console.timeEnd(param) : console.timeEnd(),      // console.timeEnd()
    ts: (param) => param ? console.timeStamp(param) : console.timeStamp(),  // console.timeStamp() - non-standard method
    tr: () => console.trace(),                                              // console.trace()
    w: (text, ...extraParam) => console.warn(text, ...extraParam),          // console.warn()

    // Prefixed style color log()
    lS: (text, ...extraParam) => console.log("\x1b[32m" + text + "\x1b[0m", ...extraParam),
    lI: (text, ...extraParam) => console.log("\x1b[34m" + text + "\x1b[0m", ...extraParam),
    lW: (text, ...extraParam) => console.log("\x1b[33m" + text + "\x1b[0m", ...extraParam),
    lD: (text, ...extraParam) => console.log("\x1b[31m" + text + "\x1b[0m", ...extraParam),
    // Prefixed style log background log()
    lSBG: (text, ...extraParam) => console.log("\x1b[42m\x1b[37m" + text + "\x1b[0m", ...extraParam),
    lIBG: (text, ...extraParam) => console.log("\x1b[44m\x1b[37m" + text + "\x1b[0m", ...extraParam),
    lWBG: (text, ...extraParam) => console.log("\x1b[43m\x1b[37m" + text + "\x1b[0m", ...extraParam),
    lDBG: (text, ...extraParam) => console.log("\x1b[41m\x1b[37m" + text + "\x1b[0m", ...extraParam),
}

module.exports = {c: c}
