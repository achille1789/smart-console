/*!
 * smart-console <https://github.com/achille1789/smart-console>
 *
 * Copyright (c) 2017, Vanni Gallo.
 * Licensed under the MIT License.
 */

'use strict';

const c = {
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

    // Predefined style bold log()
    lB: (text, ...extraParam) => console.log("%c" + text, "font-weight: bold;", ...extraParam),
    // Predefined style color log()
    lS: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d;", ...extraParam),
    lI: (text, ...extraParam) => console.log("%c" + text, "color: #31708f;", ...extraParam),
    lW: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b;", ...extraParam),
    lD: (text, ...extraParam) => console.log("%c" + text, "color: #a94442;", ...extraParam),
    // Predefined style log color + bold log()
    lSB: (text, ...extraParam) => console.log("%c" + text, "color: #3c763d; font-weight: bold;", ...extraParam),
    lIB: (text, ...extraParam) => console.log("%c" + text, "color: #31708f; font-weight: bold;", ...extraParam),
    lWB: (text, ...extraParam) => console.log("%c" + text, "color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDB: (text, ...extraParam) => console.log("%c" + text, "color: #a94442; font-weight: bold;", ...extraParam),
    // Predefined style log background log()
    lSBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #dff0d8; color: #3c763d; font-weight: bold;", ...extraParam),
    lIBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #d9edf7; color: #31708f; font-weight: bold;", ...extraParam),
    lWBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #fcf8e3; color: #8a6d3b; font-weight: bold;", ...extraParam),
    lDBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #f2dede; color: #a94442; font-weight: bold;", ...extraParam),
}
