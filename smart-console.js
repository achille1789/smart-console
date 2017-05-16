var c = {
    a: (text, ...extraParam) => console.assert(text, ...extraParam),
    c: () => console.clear(),
    cn: (data) => data ? console.count(data) : console.count(),
    d: (text, ...extraParam) => console.debug(text, ...extraParam),
    dir: (data) => console.dir(data),    // non-standard
    dx: (data) => console.dirxml(data),   // non-standard
    e: (text, ...extraParam) => console.error(text, ...extraParam),  // tested
    g: () => console.group(),
    gc: () => console.groupCollapsed(),
    ge: () => console.groupEnd(),
    i: (text, ...extraParam) => console.info(text, ...extraParam),
    l: (text, ...extraParam) => console.log(text, ...extraParam),
    p: (data) => data ? console.profile(data) : console.profile(),
    pe: () => console.profileEnd(),
    tb: (data) => console.table(data),
    t: (data) => data ? console.time(data) : console.time(),
    te: (data) => data ? console.timeEnd(data) : console.timeEnd(),
    ts: (data) => data ? console.timeStamp(data) : console.timeStamp(),   // non-standard
    tr: () => console.trace(),   // to check
    w: (text, ...extraParam) => console.warn(text, ...extraParam),

    // Prefixed style log color
    lS: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d;", ...extraParam),
    lI: (text, ...extraParam) => console.log("%c" + text, "color: #31708f;", ...extraParam),
    lW: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b;", ...extraParam),
    lD: (text, ...extraParam) => console.log("%c" + text, "color: #a94442;", ...extraParam),
    // Prefixed style log color + bold
    lSB: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d; font-weight: bold;", ...extraParam),
    lIB: (text, ...extraParam) => console.log("%c" + text, "color: #31708f; font-weight: bold;", ...extraParam),
    lWB: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDB: (text, ...extraParam) => console.log("%c" + text, "color: #a94442; font-weight: bold;", ...extraParam),
    // Prefixed style log background
    lSBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #dff0d8; color: #3c763d; font-weight: bold;", ...extraParam),
    lIBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #d9edf7; color: #31708f; font-weight: bold;", ...extraParam),
    lWBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #fcf8e3; color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #f2dede; color: #a94442; font-weight: bold;", ...extraParam),
}
