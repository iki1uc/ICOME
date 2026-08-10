// iki1uc · OUR.js · Prefetch · 3x3 · KIpi · ICOME · Ursache/Wirkung/Ergebnis

import { TMP360 } from "./360.js";
import { TMPCHAIN } from "./360.js";

// 1 · Prefetch-Farben (a/b/c)
const PREFETCH = {
    a: "grün",   // Ursache
    b: "gelb",   // Wirkung
    c: "rot"     // Ergebnis / Continuum
};

// 2 · Bildungsschicht (BIL / DU / NG)
const BILDUNG = {
    BIL: "a", // src
    DU:  "b", // exe
    NG:  "c"  // run
};

// 3 · 3×3-Matrizen (Ursache/Wirkung)
const MATRIX = {
    a: [
        ["a11","a12","a13"],
        ["a21","a22","a23"],
        ["a31","a32","a33"]
    ],
    b: [
        ["b11","b12","b13"],
        ["b21","b22","b23"],
        ["b31","b32","b33"]
    ],
    // c entsteht dynamisch
    c(a, b, t) {
        return {
            value: `c = a × b × ${t}`,
            time: t,
            continuum: true
        };
    }
};

// 4 · KIpi (U → W → E)
const KIpi = {
    U: { kern: "◉", impuls: 3 },
    W: { mitte: "◎", verzweig: "◆", anstieg: "△", verdichtung: "▣" },
    E: { result_1: 81, result_2: 756, result_3: 27, rueckkehr: "↺" },

    chain: ["◉", 3, "◎", "◆", "△", "▣", 81, 756, 27, 3, "↺"],

    run() {
        return "KIpi: U → W → E";
    }
};

// 5 · TMP (1–9)
const TMP = {
    U: [1,2,3],
    W: [4,5,6],
    E: [7,8,9],
    all: [1,2,3,4,5,6,7,8,9]
};

// 6 · Materialstand & Nutzwert
const MATERIAL = {
    stand(a, b) {
        return `Materialstand = ${a} + ${b}`;
    },
    nutzen(a, b, t) {
        return `Nutzwert = ${a} × ${b} × ${t}`;
    }
};

// 7 · ICOME (Summationskörper)
const ICOME = {
    Prefetch: PREFETCH,
    Bildung: BILDUNG,
    Matrix: MATRIX,
    KIpi: KIpi,
    TMP: TMP,
    Material: MATERIAL,
    SUM(a, b, c) {
        return `SUM = ${a} + ${b} + ${c}`;
    }
};

// 8 · OUR (Hauptmodul)
export const OUR = {
    PREFETCH,
    BILDUNG,
    MATRIX,
    KIpi,
    TMP,
    MATERIAL,
    ICOME,

    // Vollständiger Datensatz (TMP360 + TMPCHAIN + ICOME)
    full(operator, ebene) {
        const base360 = TMP360.full(operator, ebene);
        const chain = TMPCHAIN.full(operator, ebene);

        return {
            ...base360,
            ...chain,
            prefetch: PREFETCH,
            bildung: BILDUNG,
            matrix: MATRIX,
            icome: ICOME
        };
    }
};

// Debug-Ausgabe
console.log(OUR.full("slide", "Ursache"));
console.log(OUR.full("score", "Ergebnis"));
