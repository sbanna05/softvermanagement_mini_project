# Követelmény specifikáció - SupplyMasters Teendőlista alkalmazás

## 1. Jelenlegi helyzet

## 2. Megrendelői vízió (Vágyálom)

### Megrendelői cél

## 3. Rendszerre vonatkozó szabályok

## 4. Követelménylista

### 4.1 Funkcionális követelmények

A rendszer legfontosabb funkciója a feladatok kezelése. Minden feladatnak rendelkeznie kell
egyedi azonosítóval, valamint lehetőséget kell adni a feladat létrehozására, szerkesztésére és törlésére.
A feladatokhoz határidő, prioritás és címkék rendelhetők, valamint a felhasználó kiválaszthatja
a feladattípusát is (pl. adminisztratív, raktári, értékesítési).

A feladatok státusza változtatható, és Kanban alapú táblán kell megjelenniük három fő oszlopban:
*Backlog*, *Doing* és *Done*.

A többfelhasználós működés elengedhetetlen, ezért szükséges a jogosultságkezelés.
Három szerepkör kerül kialakításra:

- **CEO**, aki minden feladathoz hozzáfér és riportokat készíthet.
- **Részlegvezető**, aki a saját részlegének feladatait kezeli és kiosztja.  
- **Munkatárs**, aki csak a rábízott feladatokat látja és módosíthatja a státuszukat.  

A rendszer minden módosítást naplóz, hogy a vezetőség visszakövetni tudja a tevékenységeket.  
A feladatok kereshetők és szűrhetők különböző paraméterek alapján, valamint értesítést kell küldeni
a közelgő határidőkről. A menedzsment számára a feladatok állapota exportálható legyen Markdown vagy CSV formátumban.

### 4.2 Nem-funkcionális követelmények

A rendszer működésének minőségi elvárásai közé tartozik, hogy az adatok mindig biztonságosan
és konzisztensen tárolódjanak. Az alkalmazás felületének felhasználóbarátnak kell lennie, és
**desktop first** megközelítéssel készül, mivel az elsődleges használat irodai környezetben történik.  
Emellett a rendszernek támogatnia kell a táblagépes és mobiltelefonos használatot is, hogy
a munkatársak raktári környezetben vagy terepen is hozzáférjenek a feladataikhoz.

Az adatbázisnak naprakésznek kell maradnia, és támogatnia kell az automatikus mentést és visszaállítást.
Az adatok védelme érdekében minden érzékeny információt titkosítva kell tárolni.
A rendszernek skálázhatónak kell lennie, hogy a jövőben új modulokkal bővíthető legyen.
Fontos továbbá, hogy nagy mennyiségű feladat esetén se lassuljon le, a teljesítménynek mindig megfelelőnek kell maradnia.
