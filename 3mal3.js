a = Fläche (Ursache)
b = Körper (Wirkung)
c = Continuum (Ergebnis)
BIL = a = src
DU  = b = exe
NG  = c = run
SUM = a + b + c
[a11 a12 a13]
[a21 a22 a23]
[a31 a32 a33]
[b11 b12 b13]
[b21 b22 b23]
[b31 b32 b33]
c = a × b × t
U = a
W = b
E = c
KIpi = a → b → c
TMP.U = [1,2,3]
TMP.W = [4,5,6]
TMP.E = [7,8,9]
Materialstand = a + b
Nutzwert = c
Nutzwert = a × b × t
ICOME.raw = {
  Prefetch: {a:grün, b:gelb, c:rot},
  Bildung:  {BIL:a, DU:b, NG:c},
  Matrix:   {a:3x3, b:3x3, c:a×b×t},
  KIpi:     a → b → c,
  TMP:      [1..9],
  Material: a + b,
  Nutzen:   c,
  SUM:      a + b + c
}
