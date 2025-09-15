# Követelmény specifikáció - SupplyMasters Teendőlista alkalmazás

## 1. Jelenlegi helyzet

### 1.1. Teendők nyilvántartása

A SupplyMasters munkatársai jelenleg saját maguk rögzítik a napi feladataikat, jellemzően **jegyzetfüzetben vagy különböző fájlokban**.
A feladatok kezelése teljesen decentralizált, **nincs közös rendszer**, amely segítené a koordinációt.
A feladatok állapotát kézzel jelölik meg, például kihúzással vagy szöveges megjegyzésekkel, ami sokszor félreérthető.
Ez a módszer nem biztosít pontos nyilvántartást, mivel könnyen előfordul, hogy egy-egy feladat kimarad, vagy többször is feljegyzésre kerül.
Az adatok széttagoltan léteznek, nincs garancia arra, hogy mindenki ugyanazt az információt használja.
A feladatok kiosztása legtöbbször személyes vagy telefonos egyeztetéssel történik, ami további bizonytalanságot okoz.
Nincs lehetőség központi áttekintésre, így a vezetők nem látják valós időben, hogy melyik dolgozó mivel foglalkozik.
Az egyéni nyilvántartások miatt a munkafolyamatok átláthatósága jelentősen csökken, és **a csapatmunka hatékonysága is gyengül**.

### 1.2. Hibák és régi adatok kezelése

A hibák feljegyzése sokszor informális módon történik, például **szóbeli bejelentés** vagy **rögtönzött jegyzet** formájában.
Ez azt eredményezi, hogy a **problémák nyomonkövetése nehézkes**, **gyakran elvész** az információ.
A feladatok múltbeli állapotának visszakeresése csak akkor lehetséges, ha a dolgozó saját jegyzeteit megőrzi.
Az archiválási folyamat nem szabályozott, így a régebbi feladatok és hibák gyakran végleg eltűnnek.
A felelősségi körök tisztázása emiatt sokszor lehetetlen, mivel nem rögzül, ki mikor és milyen lépést tett.
Nincs olyan naplózás, amely automatikusan dokumentálná a változtatásokat, így a hibák pontos forrása visszamenőleg nem feltárható.
Az adatkezelés nem biztosít átláthatóságot, ami különösen problémás, ha egy projekt több embert érint.
Ez az állapot jelentősen hátráltatja a vállalat hatékonyságát, hiszen a régi tapasztalatokból nem lehet tanulni.

### 1.3. Ellenőrzés és vezetői rálátás

A dolgozóknak minden nap összesítőt kell készíteniük a saját munkájukról, amelyet **kézzel** állítanak össze.
A vezetők ezeket az összesítőket ellenőrzik, de a folyamat lassú és sok hibalehetőséget hordoz.
Nincs lehetőség a feladatok valós idejű követésére, így a vezetők csak utólag értesülnek az elvégzett munkáról.
Ez megnehezíti a feladatok priorizálását, mivel nem áll rendelkezésre naprakész információ a dolgozók terheltségéről.
A jelentések minősége erősen függ az alkalmazottak pontosságától és fegyelmétől.
A vezetők gyakran kénytelenek személyesen egyeztetni, ha pontos adatokat szeretnének kapni.
A határidők betartása emiatt sokszor kérdéses, hiszen nincs automatikus figyelmeztetés vagy nyomonkövetés.
A rendszer nem biztosít átfogó átláthatóságot, így a menedzsment döntései **nem mindig megbízható** adatokra épülnek.

## 2. Megrendelői vízió (Vágyálom) – 20 soros változat

### 2.1 Áttekintés
A SupplyMasters vágyálomrendszer célja, hogy a feladatkezelést hatékonyabbá,
átláthatóbbá és biztonságosabbá tegye. Webes, reszponzív felület, mobilon és
desktopon egyaránt használható.

### 2.2 Megrendelői vágyak
A rendszer központi nyilvántartást biztosít az összes feladatról. Új feladat
létrehozása, módosítása és törlése alapfunkció. Feladatok kategorizálhatók,
címkézhetők, prioritásokkal elláthatók. A Kanban tábla Backlog → Doing → Done
állapotokra tagolódik, lehetővé téve a feladatok könnyű mozgatását.

Többfelhasználós működés biztosított, eltérő jogosultsági szintekkel. Automatikus
értesítések tájékoztatják a résztvevőket a határidőkről és a felelősök változásairól.
Keresés és szűrés lehetséges címke, határidő, státusz és felelős szerint. Riportok
készíthetők és exportálhatók (Markdown, CSV). Minden felhasználói művelet naplózásra
kerül.

### 2.3 Nem-funkcionális vágyak
Adatbiztonság: titkosított tárolás, jogosultság alapú hozzáférés. Az alkalmazás
felülete intuitív és reszponzív, a betanulási idő minimális. Teljesítmény: akár 10.000
aktív feladat kezelhető lassulás nélkül. Moduláris felépítés lehetővé teszi új funkciók
hozzáadását (pl. naptárnézet, fejlettebb riportok). Megbízhatóság érdekében rendszeres
adatmentés és visszaállítás áll rendelkezésre.

### 2.4 Elfogadási kritériumok
A rendszer akkor tekinthető sikeresnek, ha a felhasználó képes új feladatot létrehozni,
módosítani és törölni. A rendszer megjeleníti az összes feladatot és státuszát.
Feladatok áthelyezése az oszlopok között hibamentesen működik. Értesítések és
riportok helyesen működnek, az adatok minden futtatás között megőrződnek, és a
teljesítmény megfelel az előírt elvárásoknak.



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
