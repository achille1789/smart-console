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
    lS: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d;", ...extraParam),
    lI: (text, ...extraParam) => console.log("%c" + text, "color: #31708f;", ...extraParam),
    lW: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b;", ...extraParam),
    lD: (text, ...extraParam) => console.log("%c" + text, "color: #a94442;", ...extraParam),
    // Prefixed style log color + bold log()
    lSB: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d; font-weight: bold;", ...extraParam),
    lIB: (text, ...extraParam) => console.log("%c" + text, "color: #31708f; font-weight: bold;", ...extraParam),
    lWB: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDB: (text, ...extraParam) => console.log("%c" + text, "color: #a94442; font-weight: bold;", ...extraParam),
    // Prefixed style log background log()
    lSBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #dff0d8; color: #3c763d; font-weight: bold;", ...extraParam),
    lIBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #d9edf7; color: #31708f; font-weight: bold;", ...extraParam),
    lWBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #fcf8e3; color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #f2dede; color: #a94442; font-weight: bold;", ...extraParam),
}
