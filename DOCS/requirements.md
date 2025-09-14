# Követelmény specifikáció - SupplyMasters Teendőlista alkalmazás

## 1. Jelenlegi helyzet

## 2. Megrendelői vízió (Vágyálom)

### 2.1 Áttekintés

A SupplyMasters vágyálomrendszer célja, hogy a feladatkezelést hatékonyabbá, átláthatóbbá és biztonságosabbá tegye.
Webes, reszponzív felület, mobilon és desktopon is használható.

### 2.2 Megrendelői vágyak

Központi nyilvántartás az összes feladatról.
Új feladat létrehozása, módosítása, törlése.
Feladatok kategorizálása, címkézése és prioritások kezelése.
Kanban tábla: Backlog → Doing → Done állapotok.
Több felhasználó kezelése, jogosultságokkal.
Automatikus értesítések határidőkről és felelős változásokról.
Keresés és szűrés címke, határidő, státusz, felelős szerint.
Riportok és exportálás (Markdown, CSV).
Naplózás minden felhasználói műveletről.

### 2.3 Nem-funkcionális vágyak

Adatbiztonság: titkosított tárolás, jogosultság alapú hozzáférés.
Intuitív, reszponzív felület, minimális betanulási idővel.
Teljesítmény: akár 10.000 aktív feladat kezelése lassulás nélkül.
Moduláris felépítés: könnyen bővíthető új funkciókkal (pl. naptár, riportok).
Megbízhatóság: adatok mentése és visszaállítás lehetősége.

### 2.4 Elfogadási kritériumok

Felhasználó képes új feladatot létrehozni, módosítani és törölni.
Rendszer megjeleníti az összes feladatot és státuszát.
Feladatok áthelyezése oszlopok között működik.
Értesítések és riportok helyesen működnek.
Adatok futások között megőrződnek, teljesítmény megfelel az elvárásoknak.


## 3. Jelenlegi üzleti folyamat

### 3.1. Feladatkezelés ###
- Dolgozó saját maga írja fel a feladatait.
- Kézzel kell megjelölni a *kész* feladatokat.
- Jelenlegi helyzetben nincs lehetőség a feladatok állapotának automatikus ellenőrzésére.

### 3.2. Hibakezelés és archiválás ###
- Jelenlegi rendszerben nehéz vissza keresni a hibákat.
- Archiválás esetén a régebbi feladatok elvesznek.
- Bonyolult az egyes lépések nyomonkövetése.

### 3.3. Felettesi ellenőrzés ###
- A dolgozóknak kézzel kell elkészíteni a napi összesítőt.
- Adminisztráció során a vezetők kézzel ellenőrzik a teendőket.

## 4. Igényelt üzleti folyamat

### 4.1. Feladatkezelés ###
- A felettesek adják ki a feladatokat.
- Belépéskor a dolgozónak automatikusan megjelennek a napi feladatai.
- Prioritási sorrend létrehozható.
- Határidő és emlékeztetők beállítása, hogy minden feladat időben *kész* legyen.

### 4.2. Hibakezelés és archiválás ###
- A kész feladatok archiválása
- A rendszerben könnyen visszakereshető, hogy ki milyen lépésért felel.

### 4.3. Felettesi ellenőrzés ###
- A nap végén automatikus összesítő generálódik a dolgozók aznapi munkájáról.
- A vezetők valós időben követhetik a feladatok állapotát.

## 5. Követelménylista

### 5.1 Funkcionális követelmények

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

### 5.2 Nem-funkcionális követelmények

A rendszer működésének minőségi elvárásai közé tartozik, hogy az adatok mindig biztonságosan
és konzisztensen tárolódjanak. Az alkalmazás felületének felhasználóbarátnak kell lennie, és
**desktop first** megközelítéssel készül, mivel az elsődleges használat irodai környezetben történik.  
Emellett a rendszernek támogatnia kell a táblagépes és mobiltelefonos használatot is, hogy
a munkatársak raktári környezetben vagy terepen is hozzáférjenek a feladataikhoz.

Az adatbázisnak naprakésznek kell maradnia, és támogatnia kell az automatikus mentést és visszaállítást.
Az adatok védelme érdekében minden érzékeny információt titkosítva kell tárolni.
A rendszernek skálázhatónak kell lennie, hogy a jövőben új modulokkal bővíthető legyen.
Fontos továbbá, hogy nagy mennyiségű feladat esetén se lassuljon le, a teljesítménynek mindig megfelelőnek kell maradnia.
