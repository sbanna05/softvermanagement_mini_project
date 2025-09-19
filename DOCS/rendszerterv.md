# Rendszerterv

## 1. Rendszer célja

A tervezett rendszer fő célja egy központi, online feladatkezelő platform létrehozása, amely hatékonyan támogatja a szervezet mindennapi működését. A rendszer segítségével a dolgozók átlátható módon követhetik saját és mások feladatait, míg a vezetők egyszerűen tudják kiosztani és nyomon követni azokat.

A rendszer kulcsszerepet játszik a munkaszervezés hatékonyságának növelésében. Az eddigi manuális vagy szétszórt megoldások helyett egyetlen központi felület biztosítja a feladatok létrehozását, módosítását, lezárását és archiválását. Ez jelentősen csökkenti az információvesztés kockázatát, valamint gyorsabb döntéshozatalt tesz lehetővé.

A platform célja az is, hogy csökkentse a felettesek adminisztratív terheit. A rendszer automatikus értesítésekkel tájékoztatja őket a feladatok állapotáról, így nem szükséges manuálisan ellenőrizni a dolgozók előrehaladását. Ez időt szabadít fel a vezetők számára, amelyet stratégiai tervezésre fordíthatnak.

A felhasználók számára a rendszer biztosítja a feladatok vizuális nyomon követését Kanban táblán keresztül. Ez elősegíti a munkafolyamatok könnyebb megértését, valamint motiválóan hat, hiszen a felhasználók valós időben láthatják saját előrehaladásukat.

A scope szempontjából a rendszer a következő funkciókra koncentrál: feladatok nyilvántartása, státuszkövetés, határidők kezelése, értesítések küldése, valamint riportok generálása. Ezek képezik a megoldás magját, amelyre a későbbiekben további modulok építhetők.

Nem cél a rendszerrel a teljes HR-folyamat kiváltása, így például a bérszámfejtés, jelenléti ívek vagy szabadságnyilvántartás nem tartozik a megvalósítandó funkciók közé. Szintén nem cél a belső kommunikációs platformok (pl. chat, videóhívás) helyettesítése, hiszen erre már számos bevált megoldás létezik a szervezetben.

Fontos kiemelni, hogy a rendszer nem csak a vezetők, hanem a dolgozók számára is előnyöket biztosít. Az átlátható struktúra és a határidők pontos kezelése elősegíti a munkavállalók önállóságát és felelősségvállalását. A feladatokhoz kapcsolódó priorizálási lehetőség pedig segít abban, hogy mindenki a legfontosabb teendőkre összpontosítson.

A rendszer célja tehát nem csupán technológiai újítás, hanem egy szervezeti kultúrát támogató eszköz megteremtése is. Az átláthatóság, az automatizáció és a feladatok pontos dokumentálása hozzájárul a munkavégzés minőségének növeléséhez, valamint a csapaton belüli együttműködés javításához.

Összességében a rendszer célja egy olyan rugalmas és bővíthető platform biztosítása, amely a jelenlegi igényeket kielégíti, ugyanakkor alapot teremt a jövőbeni fejlesztésekhez és bővítésekhez is.

## 2. Projekt terv

A projekt célja egy központi feladatkezelő rendszer létrehozása, amely támogatja a dolgozók és vezetők közötti feladatkiosztást, a státuszkövetést és az átlátható riportkészítést. A fejlesztés egy nyolc hetes időszakra van ütemezve, és a csapat munkáját a meghatározott szerepkörök és felelősségi körök biztosítják.

### 2.1 Projektszerepkörök és felelősségek

A projektvezető feladata a csapat munkájának koordinálása, a mérföldkövek betartásának ellenőrzése, valamint a kommunikáció fenntartása a megrendelővel. A fejlesztők négy főből álló csoportot alkotnak, akik közösen végzik a rendszer implementálását, tesztelését és a dokumentációt. Minden csapattag egy-egy fő területért felelős, ugyanakkor szükség esetén helyettesíthetik egymást.

### 2.2 Projektmunkások és felelősségeik

A backend fejlesztő felel az adatkezelési logika, az API-k és az üzleti folyamatok megvalósításáért. A frontend fejlesztő a reszponzív webes felület kialakítását végzi, ügyelve az intuitív kezelhetőségre. Az adatbázis-felelős tervezi és optimalizálja a logikai és fizikai adatmodellt, biztosítva a normalizált szerkezetet és a hatékony lekérdezéseket. A dokumentáció-felelős összeállítja a rendszerterv egyes részeit, és gondoskodik arról, hogy a projekt dokumentációja egységes és követhető legyen.

### 2.3 Ütemterv

Az első két hétben a követelmények pontosítása és a funkcionális specifikáció elkészítése zajlik. A harmadik és negyedik héten a csapat a funkcionális tervezésre és az adatbázisterv kialakítására összpontosít. Az ötödik és hatodik héten az implementáció történik, ekkor készülnek el az alapfunkciók: új feladatok létrehozása, módosítása, státuszkövetése. A hetedik héten a tesztelés és hibajavítás kerül előtérbe, majd a nyolcadik hét a dokumentáció véglegesítésével és a beadás előkészítésével zárul.

### 2.4 Mérföldkövek

A projekt kulcsfontosságú mérföldkövei közé tartozik a követelmény specifikáció elkészülte a második hét végére. A negyedik hét végére a rendszerterv készül el, amely megalapozza az implementációt. A hatodik hét végére működő prototípus áll rendelkezésre, amely tartalmazza a rendszer alapvető funkcióit. A nyolcadik hét zárásaként egy tesztelt, beadandó verzió készül el, amely megfelel a megrendelő igényeinek és a beadási követelményeknek.

A projektterv tehát egyértelműen meghatározza a szerepköröket, az ütemezést és a célokat, biztosítva a fejlesztés átlátható és eredményes megvalósítását.

## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők

A rendszerben három fő üzleti szereplőt különböztetünk meg. A dolgozó a feladatok végrehajtásáért felel, nyomon követi azok állapotát, és visszajelzést ad a rendszernek. A felettes a feladatok kiadásáért és ellenőrzéséért felel, valamint riportokat készít az elvégzett munkáról. Az adminisztrátor a rendszer karbantartásáért, a jogosultságok kiosztásáért és a felhasználói fiókok kezeléséért felelős.

### 3.2 Üzleti folyamatok

Az üzleti folyamatok során a felettes létrehozza és kiosztja a feladatot a dolgozónak, megadva annak címét, leírását, határidejét, prioritását és az érintett csapattagokat. A dolgozó megkapja a feladatot, és követi annak állapotát a Backlog → Doing → Done lépések szerint. A rendszer automatikusan értesíti a dolgozót és a felettest a határidők közeledtéről, valamint az állapotváltozásokról. Amikor a dolgozó befejezi a feladatot, a rendszer értesíti a felettest, aki ellenőrizheti a munkát, és szükség esetén riportot generálhat az adott időszak feladatairól.

A kész feladatok automatikusan archiválódnak, így később könnyen visszakereshetők, ami biztosítja a nyomon követhetőséget és az adatok hosszú távú megőrzését.

### 3.3 Üzleti entitások

Az üzleti entitások közé tartozik maga a feladat, amely rendelkezik cím, leírás, határidő, státusz, prioritás, felelős és további csapattag mezőkkel. A felhasználók (dolgozó, felettes, adminisztrátor) a rendszer különböző jogosultsági szintjeivel férnek hozzá a funkciókhoz. A riportok az elvégzett feladatok összesítését tartalmazzák időszak, státusz és felelős szerint. Az archivált feladatok biztosítják a múltbeli tevékenységek visszakereshetőségét és a rendszer átláthatóságát.

## 4. Követelmények

## 5. Funkcionális terv

## 6. Fizikai környezet

### 6.1 Platform

- **Webes alkalmazás**, amely **desktop-first** kialakítással készül.  
- A felület **reszponzív**, így:
  - asztali gépen,
  - tableten,
  - és mobilon is kényelmesen használható.  
- A felhasználók böngészőből (Chrome, Firefox, Edge) érik el → **nem igényel telepítést**.

---

### 6.2 Backend (szerver)

- **Technológia**: Node.js + Express  
- **Feladatai**:
  - REST API biztosítása a frontend és az adatbázis között,
  - feladatok létrehozása, módosítása, törlése, lekérdezése,
  - felhasználók kezelése és jogosultság-ellenőrzés.  
- **Kommunikáció**: HTTP protokollon keresztül, JSON formátumban  
- **Futtatási környezet**:
  - helyi gépen, Linux vagy Windows OS
  - production környezetben VPS / felhő  
- **Portok**:
  - fejlesztés: `3000`
  - production: `80` (HTTP), `443` (HTTPS)

---

### 6.3 Frontend

- **Technológia**: React + Vite + Bootstrap CSS
- **Fejlesztési előnyök**:
  - moduláris komponensrendszer,
  - hot reload → gyors iteráció.  
- **Fő komponensek**:
  - `Dashboard` (áttekintő nézet),
  - `TaskList` (feladatlista),
  - `TaskItem` (feladat részletei),
  - `Archive` (projektek),
  - `UserList` (felhasználók).  
- **API hívások**: Axios könyvtár segítségével → backend REST API-hoz kapcsolódik  
- **Megjelenítés**:
  - HTML + CSS alapú,
  - reszponzív layout,
  - Kanban tábla a feladatok vizualizálására (Backlog / Doing / Done oszlopok).

---

### 6.4 Adatbázis

- **Technológia**: PostgreSQL
- **Tárolt adatok**:
  - `tasks` → (id, name, status, assignee, deadline, priority, tags)
  - `users` → (id, name, role, email, password)
  - `notifications` -> (id, task_id, user_id, timestamp, status)
  - `archives` -> (id, task_id, date)
- **Adatbiztonság**:
  - minden adat titkosított formában érhető el,  
  - jogosultság-alapú hozzáférés.  

---

### 6.5 Fejlesztői eszközök

- **Fejlesztői környezet**: Visual Studio Code  
- **Verziókezelés**: Git + GitHub repository  
- **Függőségkezelő**: Node Package Manager (npm)  
- **Adatbázis-kezelő eszköz**: pgAdmin (PostgreSQL adminisztrációhoz)
- **Opcionális**:
  - Docker → fejlesztési és teszt környezet elkülönítése,
  - ESLint + Prettier → kódminőség biztosítása.

## 7. Absztrakt domain modell

## 8. Architekturális terv

## 9. Adatbázis terv

## 10. Implementációs terv

## 11. Tesztterv

## 12. Telepítési terv

## 13. Karbantartási terv
