var c = {
    a: (...extraParam) => console.assert(...extraParam),                // console.assert()
    c: () => console.clear(),                                           // console.clear()
    cn: (data) => data ? console.count(data) : console.count(),         // console.count([label]) - label is optional
    d: (text, ...extraParam) => console.debug(text, ...extraParam),     // console.debug()
    dir: (data) => console.dir(data),                                   // console.dir() - non-standard method
    dx: (data) => console.dirxml(data),                                 // console.dirxml() - non-standard method
    e: (text, ...extraParam) => console.error(text, ...extraParam),     // console.error()
    g: () => console.group(),                                           // console.group()
    gc: () => console.groupCollapsed(),                                 // console.groupCollapsed()
    ge: () => console.groupEnd(),                                       // console.groupEnd()
    i: (text, ...extraParam) => console.info(text, ...extraParam),      // console.info()
    l: (text, ...extraParam) => console.log(text, ...extraParam),       // console.log()
    p: (data) => data ? console.profile(data) : console.profile(),      // console.profile()
    pe: () => console.profileEnd(),                                     // console.profileEnd()
    tb: (data) => console.table(data),                                  // console.table()
    t: (data) => data ? console.time(data) : console.time(),            // console.time()
    te: (data) => data ? console.timeEnd(data) : console.timeEnd(),     // console.timeEnd()
    ts: (data) => data ? console.timeStamp(data) : console.timeStamp(), // console.timeStamp() - non-standard method
    tr: () => console.trace(),                                          // console.trace()
    w: (text, ...extraParam) => console.warn(text, ...extraParam),      // console.warn()

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
