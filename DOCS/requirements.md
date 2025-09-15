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

### 4.2. Hibakezelés és archiválás 

- A kész feladatok archiválása
- A rendszerben könnyen visszakereshető, hogy ki milyen lépésért felel.

### 4.3. Felettesi ellenőrzés

- A nap végén automatikus összesítő generálódik a dolgozók aznapi munkájáról.
- A vezetők valós időben követhetik a feladatok állapotát.

## 5. Követelménylista

### 5.1 Funkcionális követelmények

| ID  | Verzió | Követelmény | Leírás | Prioritás |
|-----|--------|-------------|--------|-----------|
| F1  | v1     | Feladat létrehozása | Új feladat rögzítésekor kötelező megadni a címet, határidőt és felelőst. | Magas |
| F2  | v1     | Feladat módosítása és törlése | A rendszer lehetővé teszi a meglévő feladatok tartalmának frissítését vagy törlését. | Magas |
| F3  | v1     | Feladattípusok kezelése | A felhasználó megadhatja a feladat típusát (adminisztratív, raktári, értékesítési). | Közepes |
| F4  | v1     | Prioritás beállítása | A feladatokhoz hozzárendelhető prioritás (alacsony, közepes, magas). | Magas |
| F5  | v1     | Dinamikus prioritás | Közelgő határidő esetén a rendszer automatikusan magasabb szintre emelheti a prioritást. | Közepes |
| F6  | v1     | Címkézés | A feladatok szabadon címkézhetők a gyorsabb kereshetőség érdekében. | Közepes |
| F7  | v1     | Státuszkezelés | A feladatok Kanban táblán követhetők: Backlog → Doing → Done. | Magas |
| F8  | v1     | Drag & drop mozgatás | A feladatok áthelyezése oszlopok között drag-and-drop módszerrel történhet. | Közepes |
| F9  | v1     | Jogosultságok kezelése | Három szerepkör biztosít eltérő hozzáférést: CEO (teljes), Részlegvezető (csapat szintű), Munkatárs (saját feladatok). | Magas |
| F10 | v1     | Naplózás | A rendszer minden módosítást automatikusan rögzít. | Magas |
| F11 | v1     | Keresési funkció | A felhasználó kulcsszavak alapján kereshet a feladatok között. | Magas |
| F12 | v1     | Szűrési lehetőségek | A feladatok szűrhetők címke, határidő, státusz, felelős és típus szerint. | Magas |
| F13 | v1     | Értesítések | A rendszer automatikus értesítést küld a határidőkről és státuszváltozásokról. | Magas |
| F14 | v1     | Exportálás | A feladatlista exportálható CSV vagy Markdown formátumban. | Közepes |
| F15 | v1     | Riportok | A CEO számára havi összesítések készíthetők a feladatok teljesítéséről. | Közepes |

---

### 5. 2 Nem-funkcionális követelmények

| ID  | Verzió | Követelmény | Leírás | Prioritás |
|-----|--------|-------------|--------|-----------|
| N1  | v1     | Adatbiztonság | Minden érzékeny adat titkosítva kerül tárolásra, a hozzáférés szerepkörökhöz kötött. | Magas |
| N2  | v1     | Adatintegritás | Az adatbázis garantálja a következetes és naprakész adatok meglétét. | Magas |
| N3  | v1     | Mentés és helyreállítás | Rendszeres automatikus adatmentés és gyors visszaállítási lehetőség biztosított. | Magas |
| N4  | v1     | Skálázhatóság | A rendszer modulárisan bővíthető új funkciókkal, pl. naptár integrációval. | Közepes |
| N5  | v1     | Teljesítmény | Legalább 10 000 aktív feladat kezelésére képes észrevehető lassulás nélkül. | Magas |
| N6  | v1     | Felhasználói élmény | Az alkalmazás felülete letisztult, intuitív, rövid betanulási időt igényel. | Magas |
| N7  | v1     | Reszponzivitás | A rendszer **desktop first** elv szerint épül, de mobilon és tableten is teljes funkcionalitással működik. | Magas |
| N8  | v1     | Megbízhatóság | Az alkalmazás folyamatosan rendelkezésre áll, minimális leállással. | Magas |
