/*!
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2018, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

const base = "%c";
const colorStr = "color: ";
const bgStr = "background-color: ";
const colors = {
    A: "#FFD700;",  // amber/gold
    B: "#0000FF;",  // blue
    C: "#00FFFF;",  // cyan
    G: "#00FF00;",  // green
    K: "#000000;",  // black
    M: "#FF00FF;",  // magenta
    N: "#A52A2A;",  // brown
    O: "#FFA500;",  // orange
    P: "#FFC0CB;",  // pink
    R: "#FF0000;",  // red
    U: "#800080;",  // purple
    W: "#FFFFFF;",  // white
    Y: "#FFFF00;"   // yellow
};
const styles = {
    b: "font-weight: bold;",               // bold
    u: "text-decoration: underline;",      // underline
    t: "text-decoration: line-through;",   // line-through
    i: "font-style: italic;",              // italic
    s: "font-size: 200%;"                  // size 200%
};

// console object
const c = {
    a: (...extraParams) => console.assert(...extraParams),                      // console.assert()
    cl: () => console.clear(),                                                  // console.clear()
    c: (param) => param ? console.count(param) : console.count(),               // console.count([label]) - label is optional
    d: (text, ...extraParams) => console.debug(text, ...extraParams),           // console.debug()
    dir: (param) => console.dir(param),                                         // console.dir() - non-standard method
    dx: (param) => console.dirxml(param),                                       // console.dirxml() - non-standard method
    e: (text, ...extraParams) => console.error(text, ...extraParams),           // console.error()
    g: () => console.group(),                                                   // console.group()
    gc: () => console.groupCollapsed(),                                         // console.groupCollapsed()
    ge: () => console.groupEnd(),                                               // console.groupEnd()
    i: (text, ...extraParams) => console.info(text, ...extraParams),            // console.info()
    l: (text, ...extraParams) => console.log(text, ...extraParams),             // console.log()
    p: (param) => param ? console.profile(param) : console.profile(),           // console.profile()
    pe: () => console.profileEnd(),                                             // console.profileEnd()
    tb: (param) => console.table(param),                                        // console.table()
    t: (param) => param ? console.time(param) : console.time(),                 // console.time()
    te: (param) => param ? console.timeEnd(param) : console.timeEnd(),          // console.timeEnd()
    ts: (param) => param ? console.timeStamp(param) : console.timeStamp(),      // console.timeStamp() - non-standard method
    tr: () => console.trace(),                                                  // console.trace()
    w: (text, ...extraParams) => console.warn(text, ...extraParams),            // console.warn()
    j: (object, space = 4) => console.log(JSON.stringify(object, null, space)),// console.log() - for logging JSON objects
};

// log() style formatting
for (const [i, e] of Object.entries(styles)) {
    c[`l${i}`] = (text, ...extraParam) => console.log(base + text, e, ...extraParam);
}
// log() colors formatting
for (const [i, e] of Object.entries(colors)) {
    // log() colors
    c[`l${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e, ...extraParam);
    // log() bold + colors
    c[`lb${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e + styles.b, ...extraParam);
    // log() underline + bold + colors
    c[`lu${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e + styles.b + styles.u, ...extraParam);
    // log() line-through + bold + colors
    c[`lt${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e + styles.b + styles.t, ...extraParam);
    // log() italic + bold + colors
    c[`li${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e + styles.b + styles.i, ...extraParam);
    // log() size 200% + bold + colors
    c[`ls${i}`] = (text, ...extraParam) => console.log(base + text, colorStr + e + styles.b + styles.s, ...extraParam);
}
// log() background colors formatting
for (const [i, e] of Object.entries(colors)) {
    let style = bgStr + e + styles.b;
    if (i === "B" || i === "K" || i === "N" || i === "U") {
        style += colorStr + colors.W;
    }
    // log() background colors + bold
    c[`l${i}BG`] = (text, ...extraParam) => console.log(base + text, style, ...extraParam);
    // log() size 200% + background colors + bold
    c[`ls${i}BG`] = (text, ...extraParam) => console.log(base + text, style + styles.s, ...extraParam);
}

// performance object
const p = {
    m: (name) => performance.mark(name),
    n: () => performance.now(),
    t: performance.timing,
};
