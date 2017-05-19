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
    j: (object, space) => console.log(JSON.stringify(object, null, space || 4)),    // console.log() - for logging JSON objects

    // log() style formatting
    lb: (text, ...extraParam) => console.log("%c" + text, "font-weight: bold;", ...extraParam),   // bold
    lu: (text, ...extraParam) => console.log("%c" + text, "text-decoration: underline;", ...extraParam),   // underline
    lt: (text, ...extraParam) => console.log("%c" + text, "text-decoration: line-through;", ...extraParam),   // line-through
    li: (text, ...extraParam) => console.log("%c" + text, "font-style: italic;", ...extraParam),   // italic
    ls: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%;", ...extraParam),   // size 200%
    // log() colors
    lA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700;", ...extraParam),  // amber/gold
    lB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF;", ...extraParam),  // blue
    lC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF;", ...extraParam),  // cyan
    lG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00;", ...extraParam),  // green
    lK: (text, ...extraParam) => console.log("%c" + text, "color: #000000;", ...extraParam),  // black
    lM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF;", ...extraParam),  // magenta
    lN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A;", ...extraParam),  // brown
    lO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500;", ...extraParam),  // orange
    lP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB;", ...extraParam),  // pink
    lR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000;", ...extraParam),  // red
    lU: (text, ...extraParam) => console.log("%c" + text, "color: #800080;", ...extraParam),  // purple
    lW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF;", ...extraParam),  // white
    lY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00;", ...extraParam),  // yellow
    // log() bold + colors
    lbA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700; font-weight: bold;", ...extraParam),  // amber/gold
    lbB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF; font-weight: bold;", ...extraParam),  // blue
    lbC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF; font-weight: bold;", ...extraParam),  // cyan
    lbG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00; font-weight: bold;", ...extraParam),  // green
    lbK: (text, ...extraParam) => console.log("%c" + text, "color: #000000; font-weight: bold;", ...extraParam),  // black
    lbM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF; font-weight: bold;", ...extraParam),  // magenta
    lbN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A; font-weight: bold;", ...extraParam),  // brown
    lbO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500; font-weight: bold;", ...extraParam),  // orange
    lbP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB; font-weight: bold;", ...extraParam),  // pink
    lbR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000; font-weight: bold;", ...extraParam),  // red
    lbU: (text, ...extraParam) => console.log("%c" + text, "color: #800080; font-weight: bold;", ...extraParam),  // purple
    lbW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF; font-weight: bold;", ...extraParam),  // white
    lbY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00; font-weight: bold;", ...extraParam),  // yellow
    // log() underline + bold + colors
    luA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700; font-weight: bold; text-decoration: underline;", ...extraParam),  // amber/gold
    luB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF; font-weight: bold; text-decoration: underline;", ...extraParam),  // blue
    luC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF; font-weight: bold; text-decoration: underline;", ...extraParam),  // cyan
    luG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00; font-weight: bold; text-decoration: underline;", ...extraParam),  // green
    luK: (text, ...extraParam) => console.log("%c" + text, "color: #000000; font-weight: bold; text-decoration: underline;", ...extraParam),  // black
    luM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF; font-weight: bold; text-decoration: underline;", ...extraParam),  // magenta
    luN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A; font-weight: bold; text-decoration: underline;", ...extraParam),  // brown
    luO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500; font-weight: bold; text-decoration: underline;", ...extraParam),  // orange
    luP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB; font-weight: bold; text-decoration: underline;", ...extraParam),  // pink
    luR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000; font-weight: bold; text-decoration: underline;", ...extraParam),  // red
    luU: (text, ...extraParam) => console.log("%c" + text, "color: #800080; font-weight: bold; text-decoration: underline;", ...extraParam),  // purple
    luW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF; font-weight: bold; text-decoration: underline;", ...extraParam),  // white
    luY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00; font-weight: bold; text-decoration: underline;", ...extraParam),  // yellow
    // log() line-through + bold + colors
    ltA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700; font-weight: bold; text-decoration: line-through;", ...extraParam),  // amber/gold
    ltB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF; font-weight: bold; text-decoration: line-through;", ...extraParam),  // blue
    ltC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF; font-weight: bold; text-decoration: line-through;", ...extraParam),  // cyan
    ltG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00; font-weight: bold; text-decoration: line-through;", ...extraParam),  // green
    ltK: (text, ...extraParam) => console.log("%c" + text, "color: #000000; font-weight: bold; text-decoration: line-through;", ...extraParam),  // black
    ltM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF; font-weight: bold; text-decoration: line-through;", ...extraParam),  // magenta
    ltN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A; font-weight: bold; text-decoration: line-through;", ...extraParam),  // brown
    ltO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500; font-weight: bold; text-decoration: line-through;", ...extraParam),  // orange
    ltP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB; font-weight: bold; text-decoration: line-through;", ...extraParam),  // pink
    ltR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000; font-weight: bold; text-decoration: line-through;", ...extraParam),  // red
    ltU: (text, ...extraParam) => console.log("%c" + text, "color: #800080; font-weight: bold; text-decoration: line-through;", ...extraParam),  // purple
    ltW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF; font-weight: bold; text-decoration: line-through;", ...extraParam),  // white
    ltY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00; font-weight: bold; text-decoration: line-through;", ...extraParam),  // yellow
    // log() italic + bold + colors
    liA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700; font-weight: bold; font-style: italic;", ...extraParam),  // amber/gold
    liB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF; font-weight: bold; font-style: italic;", ...extraParam),  // blue
    liC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF; font-weight: bold; font-style: italic;", ...extraParam),  // cyan
    liG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00; font-weight: bold; font-style: italic;", ...extraParam),  // green
    liK: (text, ...extraParam) => console.log("%c" + text, "color: #000000; font-weight: bold; font-style: italic;", ...extraParam),  // black
    liM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF; font-weight: bold; font-style: italic;", ...extraParam),  // magenta
    liN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A; font-weight: bold; font-style: italic;", ...extraParam),  // brown
    liO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500; font-weight: bold; font-style: italic;", ...extraParam),  // orange
    liP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB; font-weight: bold; font-style: italic;", ...extraParam),  // pink
    liR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000; font-weight: bold; font-style: italic;", ...extraParam),  // red
    liU: (text, ...extraParam) => console.log("%c" + text, "color: #800080; font-weight: bold; font-style: italic;", ...extraParam),  // purple
    liW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF; font-weight: bold; font-style: italic;", ...extraParam),  // white
    liY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00; font-weight: bold; font-style: italic;", ...extraParam),  // yellow
    // log() size 200% + bold + colors
    lsA: (text, ...extraParam) => console.log("%c" + text, "color: #FFD700; font-weight: bold; font-size: 200%;", ...extraParam),  // amber/gold
    lsB: (text, ...extraParam) => console.log("%c" + text, "color: #0000FF; font-weight: bold; font-size: 200%;", ...extraParam),  // blue
    lsC: (text, ...extraParam) => console.log("%c" + text, "color: #00FFFF; font-weight: bold; font-size: 200%;", ...extraParam),  // cyan
    lsG: (text, ...extraParam) => console.log("%c" + text, "color: #00FF00; font-weight: bold; font-size: 200%;", ...extraParam),  // green
    lsK: (text, ...extraParam) => console.log("%c" + text, "color: #000000; font-weight: bold; font-size: 200%;", ...extraParam),  // black
    lsM: (text, ...extraParam) => console.log("%c" + text, "color: #FF00FF; font-weight: bold; font-size: 200%;", ...extraParam),  // magenta
    lsN: (text, ...extraParam) => console.log("%c" + text, "color: #A52A2A; font-weight: bold; font-size: 200%;", ...extraParam),  // brown
    lsO: (text, ...extraParam) => console.log("%c" + text, "color: #FFA500; font-weight: bold; font-size: 200%;", ...extraParam),  // orange
    lsP: (text, ...extraParam) => console.log("%c" + text, "color: #FFC0CB; font-weight: bold; font-size: 200%;", ...extraParam),  // pink
    lsR: (text, ...extraParam) => console.log("%c" + text, "color: #FF0000; font-weight: bold; font-size: 200%;", ...extraParam),  // red
    lsU: (text, ...extraParam) => console.log("%c" + text, "color: #800080; font-weight: bold; font-size: 200%;", ...extraParam),  // purple
    lsW: (text, ...extraParam) => console.log("%c" + text, "color: #FFFFFF; font-weight: bold; font-size: 200%;", ...extraParam),  // white
    lsY: (text, ...extraParam) => console.log("%c" + text, "color: #FFFF00; font-weight: bold; font-size: 200%;", ...extraParam),  // yellow
    // log() background colors + bold
    lABG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FFD700; font-weight: bold;", ...extraParam),  // amber/gold
    lBBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #0000FF; font-weight: bold; color: #FFFFFF;", ...extraParam),  // blue
    lCBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #00FFFF; font-weight: bold;", ...extraParam),  // cyan
    lGBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #00FF00; font-weight: bold;", ...extraParam),  // green
    lKBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #000000; font-weight: bold; color: #FFFFFF;", ...extraParam),  // black
    lMBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FF00FF; font-weight: bold;", ...extraParam),  // magenta
    lNBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #A52A2A; font-weight: bold; color: #FFFFFF;", ...extraParam),  // brown
    lOBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FFA500; font-weight: bold;", ...extraParam),  // orange
    lPBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FFC0CB; font-weight: bold;", ...extraParam),  // pink
    lRBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FF0000; font-weight: bold;", ...extraParam),  // red
    lUBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #800080; font-weight: bold; color: #FFFFFF;", ...extraParam),  // purple
    lWBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FFFFFF; font-weight: bold;", ...extraParam),  // white
    lYBG: (text, ...extraParam) => console.log("%c" + text, "background-color: #FFFF00; font-weight: bold;", ...extraParam),  // yellow

    // log() size 200% + background colors + bold
    lsABG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FFD700; font-weight: bold;", ...extraParam),  // amber/gold
    lsBBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #0000FF; font-weight: bold; color: #FFFFFF;", ...extraParam),  // blue
    lsCBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #00FFFF; font-weight: bold;", ...extraParam),  // cyan
    lsGBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #00FF00; font-weight: bold;", ...extraParam),  // green
    lsKBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #000000; font-weight: bold; color: #FFFFFF;", ...extraParam),  // black
    lsMBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FF00FF; font-weight: bold;", ...extraParam),  // magenta
    lsNBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #A52A2A; font-weight: bold; color: #FFFFFF;", ...extraParam),  // brown
    lsOBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FFA500; font-weight: bold;", ...extraParam),  // orange
    lsPBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FFC0CB; font-weight: bold;", ...extraParam),  // pink
    lsRBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FF0000; font-weight: bold;", ...extraParam),  // red
    lsUBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #800080; font-weight: bold; color: #FFFFFF;", ...extraParam),  // purple
    lsWBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FFFFFF; font-weight: bold;", ...extraParam),  // white
    lsYBG: (text, ...extraParam) => console.log("%c" + text, "font-size: 200%; background-color: #FFFF00; font-weight: bold;", ...extraParam),  // yellow
}
