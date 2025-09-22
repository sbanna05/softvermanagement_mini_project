# Rendszerterv

## 1. Rendszer célja

A tervezett rendszer fő célja egy **központi, online feladatkezelő platform** létrehozása, amely hatékonyan támogatja a **szervezet mindennapi működését**. A rendszer segítségével a dolgozók átlátható módon követhetik **saját és mások feladatait**, míg a vezetők egyszerűen tudják **kiosztani és nyomon követni** azokat.

### 1.1 Hatékonyság növelése

A rendszer kulcsszerepet játszik a **munkaszervezés hatékonyságának növelésében**. Az eddigi **manuális vagy szétszórt megoldások** helyett egyetlen **központi felület** biztosítja a feladatok **létrehozását, módosítását, lezárását és archiválását**. Ez jelentősen csökkenti az **információvesztés kockázatát**, valamint **gyorsabb döntéshozatalt** tesz lehetővé.

### 1.2 Adminisztratív terhek csökkentése

A platform célja az is, hogy csökkentse a felettesek **adminisztratív terheit**. A rendszer **automatikus értesítésekkel** tájékoztatja őket a feladatok állapotáról, így nem szükséges manuálisan ellenőrizni a dolgozók előrehaladását. Ez időt szabadít fel a vezetők számára, amelyet **stratégiai tervezésre** fordíthatnak.

### 1.3 Felhasználói élmény

A felhasználók számára a rendszer biztosítja a feladatok **vizuális nyomon követését Kanban táblán** keresztül. Ez elősegíti a **munkafolyamatok könnyebb megértését**, valamint motiválóan hat, hiszen a felhasználók **valós időben láthatják saját előrehaladásukat**.

### 1.4 Funkcionális scope

A rendszer a következő **funkciókra** koncentrál:
- **feladatok nyilvántartása**
- **státuszkövetés**
- **határidők kezelése**
- **értesítések küldése**
- **riportok generálása**

### 1.5 Nem célok

Nem cél a rendszerrel a **teljes HR-folyamat kiváltása**, így például a bérszámfejtés, jelenléti ívek vagy szabadságnyilvántartás nem tartozik a megvalósítandó funkciók közé. Szintén nem cél a **belső kommunikációs platformok** (pl. chat, videóhívás) helyettesítése.

### 1.6 Előnyök a dolgozók számára
- Átlátható struktúra
- Pontos **határidók kezelése**
- **Önállóság és felelősségvállalás**
- **Prioritások** beállítása, a legfontosabb teendőkre fókuszálás

  ![szereplok_funkciok](https://github.com/user-attachments/assets/7a09164d-5137-402f-aa0d-577fb76daf67)


### 1.7 Szervezeti előnyök

A rendszer célja nem csupán **technológiai újítás**, hanem **szervezeti kultúrát támogató eszköz** is.
- **Átláthatóság**
- **Automatizáció**
- **Pontosan dokumentált feladatok**
→ javítja a munkavégzés minőségét és a **csapaton belüli együttműködést**.

## 2. Projekt terv

A projekt célja egy **központi feladatkezelő rendszer** létrehozása, amely támogatja a **dolgozók** és **vezetők** közötti feladatkiosztást, a státuszkövetést és az átlátható riportkészítést. A fejlesztés egy **négy hetes időszakra** van ütemezve, és a csapat munkáját a meghatározott **szerepkörök** és **felelősségi körök** biztosítják.

### 2.1 Projektszerepkörök és felelősségek

A **projektvezető** feladata a csapat munkájának koordinálása, a **mérföldkövek** betartásának ellenőrzése, valamint a kommunikáció fenntartása a **megrendelővel**. A **fejlesztők** négy főből álló csoportot alkotnak, akik közösen végzik a rendszer **implementálását**, **tesztelését** és a **dokumentációt**.

### 2.2 Projektmunkások és felelősségeik

A **backend** fejlesztő felel az adatkezelési logika, az API-k és az üzleti folyamatok megvalósításáért. A **frontend** fejlesztő a reszponzív webes felület kialakítását végzi, ügyelve az intuitív kezelhetőségre. Az **adatbázis-felelős** tervezi és optimalizálja a logikai és fizikai adatmodellt, biztosítva a normalizált szerkezetet és a hatékony lekérdezéseket. A **dokumentáció-felelős** összeállítja a rendszerterv egyes részeit, és gondoskodik arról, hogy a projekt dokumentációja egységes és követhető legyen.

### 2.3 Ütemterv

Az **első héten** a követelmény specifikáció és a funkcionális specifikáció elkészítése zajlik. A **második héten** a csapat a rendszerterv elkészítésére összpontosít. Az **harmadik héten** az implementáció történik, ekkor készülnek el az alapfunkciók: új feladatok létrehozása, módosítása, státuszkövetése, a tesztelés és hibajavítás kerül előtérbe, majd a **negyedik hét** a projekt beadásával és értékelésével zárul.

### 2.4 Mérföldkövek

A projekt kulcsfontosságú **mérföldkövei** közé tartozik a **követelmény és funkcionális specifikációk** elkészülte az első hét végére. A második hét végére a **rendszerterv** készül el, amely megalapozza az implementációt. A harmadik hét végére **működő prototípus** áll rendelkezésre, amely tartalmazza a rendszer alapvető funkcióit. A negyedik hét zárásaként egy tesztelt, **beadandó verzió** készül el, amely megfelel a megrendelő igényeinek és a beadási követelményeknek.

## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők

A rendszerben három fő üzleti szereplőt különböztetünk meg. A **dolgozó** a feladatok végrehajtásáért felel, nyomon követi azok állapotát, és visszajelzést ad a rendszernek. A **felettes** a feladatok kiadásáért és ellenőrzéséért felel, valamint riportokat készít az elvégzett munkáról. Az **adminisztrátor** a rendszer karbantartásáért, a jogosultságok kiosztásáért és a felhasználói fiókok kezeléséért felelős.

### 3.2 Üzleti folyamatok

Az üzleti folyamatok során a felettes létrehozza és kiosztja a feladatot a dolgozónak, megadva annak címét, leírását, határidejét, prioritását és az érintett csapattagokat. A dolgozó megkapja a feladatot, és követi annak állapotát a **Backlog → Doing → Done** lépések szerint. A rendszer automatikusan értesíti a dolgozót és a felettest a határidők közeledtéről, valamint az állapotváltozásokról. Amikor a dolgozó befejezi a feladatot, a rendszer értesíti a felettest, aki ellenőrizheti a munkát, és szükség esetén riportot generálhat az adott időszak feladatairól.

A kész feladatok automatikusan archiválódnak, így később könnyen visszakereshetők, ami biztosítja a nyomon követhetőséget és az adatok hosszú távú megőrzését.

### 3.3 Üzleti entitások

Az üzleti entitások közé tartozik maga a **feladat**, amely rendelkezik cím, leírás, határidő, státusz, prioritás, felelős és további csapattag mezőkkel. A **felhasználók** (dolgozó, felettes, adminisztrátor) a rendszer különböző jogosultsági szintjeivel férnek hozzá a funkciókhoz. A **riportok** az elvégzett feladatok összesítését tartalmazzák időszak, státusz és felelős szerint. Az **archivált feladatok** biztosítják a múltbeli tevékenységek visszakereshetőségét és a rendszer átláthatóságát.

![uzleti_folyamat](https://github.com/user-attachments/assets/7ea547cb-798e-449c-ada0-4cb8b585c279)

## 4. Követelmények

### 4.1 Funkcionális követelmények

A rendszernek az alábbi alapfunkciókat kell biztosítania:

- **Feladatkezelés**:

  - Új feladat létrehozása (cím, leírás, határidő, prioritás, felelős).
  - Feladatok státuszának kezelése (Backlog → Doing → Done).
  - Feladat módosítása és archiválása.

- **Felhasználókezelés**:

  - Regisztráció és bejelentkezés.
  - Jogosultsági szintek:
    - CEO
    - részlegvezető
    - munkatárs.
  - Minden felhasználó csak a saját feladatait láthassa/módosíthassa.

- **Értesítések**:
  - Határidő közeledtének automatikus jelzése.
  - Feladat státuszváltozásról értesítés a felettesnek.

- **Riportok**:

  - CEO számára havi riport a feladatok teljesítéséről.
  - Export lehetőség:
    - CSV
    - Markdown formátumban.

- **Keresés és szűrés**:
  - Kulcsszó alapú keresés.
  - Szűrés:
    - határidő
    - státusz
    - prioritás
    - címke alapján.

### 4.2 Nem-funkcionális követelmények

- **Teljesítmény**: a rendszer legalább 10 000 aktív feladatot tudjon kezelni lassulás nélkül.
- **Biztonság**: jelszavak titkosított (bcrypt) tárolása, HTTPS protokoll használata.

- **Elérhetőség**: a rendszer 24/7 elérhető legyen, minimális karbantartási leállásokkal.

- **Használhatóság**: reszponzív design → asztali, mobil és tablet támogatás.

- **Bővíthetőség**: új modulok (pl. naptár, e-mail értesítések) könnyen integrálhatók legyenek.

- **Naplózás**: minden felhasználói művelet rögzítve legyen, visszakövethetőséget biztosítva.

## 5. Funkcionális terv

<img width="1280" height="832" alt="SupplyMaster to-do list képernyőkép" src="https://github.com/user-attachments/assets/d685de69-38e0-4ef0-986b-b7c58b4faa4e" />

### 5.1 Alapfunkciók
- ***Feladat kiosztása***: új feladatok kiosztása a *Cím*, *Határidő*, *Felelős* adatok megadásával.
- ***Feladatlista nézet***: a feladatok táblázatos formában jelennek meg.
- ***Státusz kezelés***: Egy feladat állapota megváltoztatható melyik fázisban van. (*Backlog*, *Doing*, *Done*)
- ***Prioritás kezelés***: Egy feladat prioritása megváltoztatható *alacsony*, *közepes*, *magas* értékekre.
  
### 5.2 Támogató funkciók
- ***Határidő követése***: Lejárt illetve közelgő lejáratú feladatok jelzése.
- ***Értesítések***: A feladat felelősnek automatikus üzenet érkezik, ha egy feladat *Done* állapotba kerül.
- ***Feladat szerkesztése***: Egy már kiadott feladat adatainak szerkesztése.
- ***Archiválás***: A már *Done* állapotban lévő feladatok archiválása a visszakereshetőségért.
- ***Riport készítés***: Egy kattintással összegzi az aznap elvégzett és még hátralévő feladatokat.
- ***Exportálás***: Riportok, napi teendők exportálása.
- ***Keresés***: Archivált feladatok visszakereshetőek *Cím*, *Dátum*, *Dolgozó*, *Kijelölt felelős* alapján.

### 5.3 Felhasználói élményt támogató funkciók
- ***Értesítések***: A felhasználó értesítést kap, ha egy feladatát módosítják.
- ***Interaktív vezérlés***: Feladatok prioritásának és státuszának módosítása *drag and drop* módszerrel.
- ***Reszponzív design***: A felület mint asztali gépen, mint tableten vagy telefonon megfelelően működik.
  
### 5.4 Felhasználói szerepkörök kezelése
- ***Szerepkörök***:
  - Adminisztrátor
  - CEO
  - részlegvezető
  - dolgozó
- Magasabb beosztással több funkció elérhető a *Keresés* menüpontban.
- ***Előrehaladás***: A felettesek láttják az általuk kiosztott feladatok állapotát. 

## 6. Fizikai környezet

<img width="1536" height="1024" alt="fiz" src="https://github.com/user-attachments/assets/3c378b1b-180a-444f-bcb3-fafd867439a8" />

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

### 7.1. Domainspecifikáció és fogalmak
A rendszer központi fogalmai a **Felhasználó**, a **Projekt** és a **Feladat**.  
- **Felhasználó**: az alkalmazás regisztrált tagja, aki projekteket hozhat létre, feladatokat kezelhet, valamint jogosultságokkal rendelkezik.  
- **Projekt**: egy összefüggő munkafolyamat vagy cél, amelyhez több feladat és több felhasználó kapcsolódhat.  
- **Feladat (Task)**: egy konkrét teendő, amely státuszt, határidőt, prioritást és felelőst tartalmaz.  

Kiegészítő fogalmak:  
- **Komment**: a feladatokhoz fűzött rövid szöveges visszajelzés.  
- **Jogosultság**: a felhasználókhoz rendelt hozzáférési szintek (admin, tag, vendég).  

### 7.2. Absztrakt komponensek és kapcsolataik
A rendszer fő komponensei a következők:  
- **Frontend komponens**: a React alapú felhasználói felület, amely biztosítja a vizuális interakciót.  
- **Backend komponens**: az Express API, amely összekapcsolja a frontend kéréseit az adatbázissal.  
- **Adatkezelő komponens**: a PostgreSQL adatbázis, amely a felhasználókat, projekteket és feladatokat tárolja.  

Kapcsolatok:  
- Egy **Felhasználó** több **Projektben** részt vehet.  
- Egy **Projekt** több **Feladatot** tartalmaz.  
- Egy **Feladat** egy **Felelőshöz (Felhasználóhoz)** kapcsolódik.  
- Egy **Felhasználó** több **Kommentet** írhat, amelyek feladatokhoz kötődnek.  

### 7.3. Példa
Például: a “SupplyMasters” projektben három felhasználó dolgozik. Az egyik felhasználó (projektvezető) létrehoz egy új feladatot “Funkcionális specifikáció kidolgozása” néven, és hozzárendeli egy másik felhasználóhoz. A feladathoz határidő és kommentek is tartoznak.

<img width="1249" height="648" alt="felhasznasznaloijogkor" src="https://github.com/user-attachments/assets/7b85c792-42f2-4de5-bdce-2e8e37dc6f6c" />

## 8. Architekturális terv

### 8.1 Tervezési minta
A rendszer **háromrétegű architektúrára** épül: prezentációs réteg (frontend), alkalmazáslogika réteg (backend), és adatkezelési réteg (adatbázis). A rétegek közötti kommunikáció szigorúan definiált interfészeken keresztül zajlik (REST API).

### 8.2 Frontend (React + Vite)
- A felhasználói felületet **React** keretrendszer és **Vite** build tool biztosítja.  
- A frontend kizárólag a REST API-n keresztül éri el az adatokat.  
- Reszponzív kialakítás: desktop, tablet és mobil támogatás.  
- Az autentikációs tokenek (JWT) biztonságos tárolása böngészőben (HttpOnly cookie).  
- Feladatok és projektek vizuális kezelése Kanban táblán keresztül.

### 8.3 Backend (Node.js + Express)
- A szerveroldali logika **Node.js** környezetben, **Express** keretrendszerrel valósul meg.  
- A REST API JSON formátumban kommunikál a klienssel.  
- Middleware réteg biztosítja a hitelesítést, jogosultságkezelést, naplózást.  
- Az üzleti logika réteg külön modulokban valósul meg (feladat, felhasználó, riport).  
- Hibakezelés központosítva történik, szabványos HTTP státuszkódokkal.

### 8.4 Adatbázis (PostgreSQL)
- Relációs szerkezet: **feladatok**, **projektek**, **felhasználók** táblák.  
- Egy feladat kapcsolódik egy projekthez és egy felelős felhasználóhoz.  
- Indexek a határidő, státusz és prioritás oszlopokra a gyors szűrés érdekében.  
- Adatkonzisztencia biztosítása tranzakciókkal.  
- Rendszeres automatikus mentés VPS szinten (cron job + dump).

### 8.5 Biztonsági funkciók
- Autentikáció: **JWT alapú bejelentkezés**, refresh token mechanizmussal.  
- Jogosultságkezelés: szerepkör alapú (CEO, vezető, munkatárs).  
- HTTPS kötelező a kliens és szerver közötti kommunikációban.  
- Adatok titkosítása adatbázisban (pl. jelszavak bcrypt-tel).  
- API rate limiting a brute-force támadások ellen.

### 8.6 Rendszer bővíthetősége
- Moduláris API felépítés: új végpontok különálló modulokként integrálhatók.  
- Konfigurációs fájlok (pl. `.env`) segítségével az alkalmazás környezettől független.  
- Naptárintegráció vagy további riport modul később egyszerűen hozzáadható.  
- Verziózott API (pl. `/api/v1/`), amely lehetővé teszi a kompatibilitás megőrzését.  

### 8.7 Deploy és skálázás

- Az alkalmazás egy **VPS**-en futtatva, **Docker konténerekben** van elkülönítve.  
- Egy konténer kezeli a frontend buildet (statikus fájlok Nginx-en), egy a backendet, és egy a PostgreSQL adatbázist.  
- Skálázás kezdetben vertikálisan (erősebb VPS), később horizontálisan (több backend konténer load balancerrel).  
- Monitoring: alap szinten loggyűjtés (pl. PM2, Docker logs), később Prometheus integráció.

### 8.8 Változások kezelése

- Verziókezelés: Git + GitHub.  
- Minden új funkció külön branchben fejlesztve, code review után merge.  
- CI/CD pipeline beállítható a jövőben (pl. GitHub Actions), automatikus teszteléssel és deployjal.

Ez az architekturális terv biztosítja a **rugalmasságot, bővíthetőséget és biztonságot**, valamint megfelel a nem-funkcionális követelményeknek.

## 9. Adatbázis terv

<img width="719" height="551" alt="database drawio" src="https://github.com/user-attachments/assets/650554db-bc20-45f4-a8ce-b95576d784d0" />

### 9.1 Users
- A rendszer felhasználóinak adatait tartalmazza.
- ***Mezők***: 
  - user_id **int, elsődleges kulcs**
  - name    **string**
  - email   **string, egyedi**
  - role    **enum osztály: CEO, részlegvezető, dolgozó**
- ***Kapcsolatok***:
  - Egy felhasználónak több feladata is lehet. **1:N**
  - Egy felhasználó több feladat felelőse is lehet. **1:N**
  - Egy felhasználó több értesítést is kaphat. **1:N**

### 9.2 Tasks
- A rendszerben folyamatban lévő feladatokat tárolja.
- ***Mezők***: 
  - task_id         **int, elsődleges kulcs**
  - title           **string**
  - description     **string**
  - priority        **enum osztály: alacsony, közepes, magas**
  - deadline        **dátum**
  - status          **enum osztály: backlog, doing, done**
  - task_owner_id   **int, külső kulcs**
- ***Kapcsolatok***:
  - Egy feladat archiválódik. **1:1**
  - Egy feladathoz több felhasználó is hozzárendelhető. **1:N**
  - Egy feladathoz egy értesítés tartozik. **1:1**

### 9.3 Assignees
- Kapcsolótábla, amely átláthatóbbá teszi a *users*-*tasks* táblák kapcsolatát.
- ***Mezők***: 
  - (task_id,user_id)   **int, összetett elsődleges kulcs**
  - task_id             **int, külső kulcs**
  - user_id             **int, külső kulcs**
  - assigned_at         **dátum**
- ***Kapcsolatok***:
  - Több rekord tartozhat több felhasználóhoz. **N:1**
  - Több rekord tartozhat több feladathoz. **N:1**

### 9.4 Archives
- Az archivált feladatokat és annak időpontját tárolja.
- ***Mezők***: 
  - archive_id   **int, elsődleges kulcs**
  - task_id      **int, külső kulcs**
  - archived_at  **dátum**
- ***Kapcsolatok***:
  - Egy archív egy feladathoz tartozik. **1:1**

### 9.4 Notifications
- Az adott feladatokhoz tartozó értesítéseket tárolja.
- ***Mezők***: 
  - notification_id   **int, elsődleges kulcs**
  - task_id           **int, külső kulcs**
  - user_id           **int, külső kulcs**
  - timestamp         **dátum**
  - type            **enum osztály: emlékeztető, figyelmeztető, lejárt**
- ***Kapcsolatok***:
  - Egy értesítéshez több felhasználó tartozhat. **N:1**
  - Egy feladathoz egy értesítés tartozik. **1:1**

## 10. Implementációs terv

### 10.1 Cél

Moduláris, tesztelt és könnyen üzemeltethető megvalósítás.
Későbbi bővíthetőség.

#### 10.2 Minta ábra a file implementációról (nem feltétlenül végleges)
<img width="492" height="714" alt="model" src="https://github.com/user-attachments/assets/e171d8a5-999c-4de1-b259-58ce38931216" />

### 10.3 Backend: részletek

#### **Technológiák**

- Node.js (LTS), Express
- PostgreSQL (`pg` csomag)
- Környezeti változók: `.env` (DB_URI, JWT_SECRET, PORT, NODE_ENV)

#### **Fő modulok**

- `routes/*` – végpontok és beviteli (request) validációk.
- `controllers/*` – kérés feldolgozás, hibakezelés.
- `services/*` – üzleti logika (TaskService, UserService, NotificationService).
- `models/*` – DB műveletek (SQL lekérdezések).
- `middlewares/auth.js` – JWT ellenőrzés, role-check middleware.
- `middlewares/errorHandler.js` – központi hiba formázás.

#### **Példa REST végpontok**

- `GET /api/v1/tasks` — lista (query param: status, assignee, dueDate, tags)
- `POST /api/v1/tasks` — új feladat (body validáció)
- `GET /api/v1/tasks/:id`
- `PUT /api/v1/tasks/:id` — módosítás (csak jogosult user)
- `DELETE /api/v1/tasks/:id` — admin művelet
- `POST /api/v1/users/login` — token kiadás
- `GET /api/v1/notifications` — felhasználói értesítések

#### **Validáció** és **Loggin**

---

### 10.4 Adatbázis

#### **Táblák (alap)**

- `users` (id, name, email, password_hash, rolet)
- `tasks` (id, title, description, priority, due_date, status, task_owner_id (FK users.id), created_at, updated_at)
- `notifications` (id, task_id FK, user_id FK, timestamp, status)
- `archives` (id, task_id FK, archived_at)

#### **Adatbiztonság**

- jelszavak `bcrypt`-tel hashelve
- DB connection string titkos `.env`-ben
- szükség esetén DB-level encryption, backups (cron dump)

---

### 10.5 Frontend: részletek

#### **Technológiák**

- React + Vite
- Axios az API hívásokhoz
- Styling: Bootstrap CSS
- State: lokálisan `useState` / `useReducer`, globálisan `useContext` az Auth és user state-hez

#### **Fő komponensek**

- `KanbanBoard` – három oszlop (Backlog, Doing, Done) + drag-and-drop (react-beautiful-dnd)
- `TaskCard` – egy feladat megjelenítése
- `TaskForm` – létrehozás / szerkesztés modal
- `Dashboard` – statisztikák, rövid listák
- `AuthContext` – token tárolás, automatikus axios interceptor a token küldéséhez

#### **Fejlesztési javaslat**

- API wrapper fájl (`src/api/tasks.js`) → minden fetch/logika itt
- Form validation: `react-hook-form` + `yup` a validációhoz

---

### 10.6 Tesztelés

#### **Unit tesztek**

- Backend: Jest + Supertest (service és controller unit + API integration)
- Frontend: Jest + React Testing Library (komponensek, formok)

#### **Integráció**

- Kisebb integrációs tesztek: endpointok működése mockolt DB-vel vagy teszt DB-vel.

#### **E2E (opcionális)**

- Cypress: kritikus user flow-k (login, task create → move → complete → report)

#### **Teszt coverage**

- Minimum: fontos service függvényekre 70%

---

### 10.7 CI / CD javaslat

#### **CI (GitHub Actions)**

- On push/pull_request to `main` vagy `develop`:
  - install dependencies
  - lint (ESLint)
  - run unit tests (backend + frontend)
  - build frontend
- PR esetén automata tesztek futtatása + status check

#### **CD**

- Prod deploy: manual approval + GitHub Action build → push docker image registry-be (Docker Hub / GHCR) → VPS-en pull & restart vagy Kubernetes (ha később)

---

### 10.8 Telepítés (deployment)

#### **Fejlesztési környezet**

- Lokálisan `npm run dev` (backend port 3000, frontend port 5173)
- Docker-compose fájl fejlesztéshez: backend, frontend (build), db

#### **Backup / Restore**

- napi DB dump (cron job) → tárolás SFTP / felhő
- heti restore teszt

---

### 10.9 Biztonság & jogosultságok (implementációs részletek)

- **Auth**:
  - bejelentkezés JWT tokennel (short lived access token + refresh token)
  - token store: httpOnly cookie a XSS elkerülésére
- **Role based access**:
  - middleware `checkRole(role)` a route-ok védelmére
  - minden write műveletnél (PUT/DELETE) ellenőrizni az owner/role jogosultságot
- **Rate limit**: `express-rate-limit` alapvédelem
- **Input sanitization**: `helmet`, `xss-clean`, `express-validator`

---

### 10.10 Kockázatok és enyhítésük

- **Időzítés csúszása** → MVP funkcionalitás priorizálása (core: task CRUD + auth)
- **Adatvesztés** → rendszeres backup + restore tesztek
- **Biztonsági rések** → dependency audit (npm audit), havi security scan

---

### 10.12 Példák / snippet-ek (gyors referencia)

#### **pool.js (db kapcsolat)**

```javascript
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
module.exports = pool;
```

#### **express route**

```js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
router.get('/', taskController.list);
router.post('/', taskController.create);
module.exports = router;
```

## 11. Tesztterv
### 11.1 Funkcionális tesztek
- Feladat létrehozása, szerkesztése, törlése.
- Feladat állapotának változtatása.
- Keresés megfelelő működése.
- Értesítések időben jelezzenek.
- Felhasználói szerepkörök a megfelelő hatáskörön belül működnek.

### 11.2 UI/UX tesztek
- Könnyen használható különféle képernyő méret esetén is.
- Láthatóak-e a beosztottak interakciói.
- Könnyen kezelhető-e a felület, megfelelő ellrendezés biztosítása.

### 11.3 Biztonsági tesztek
- Jogosultság megfelelő kezelése.
- Rosszindulatú SQL inputok kezelése.

### 11.4 Terheléses tesztek
- Hány felhasználót bír el egyszerre a rendszer.
- Lassul-e, ha túl sok feladat van folyamatban.
- Mennyire gyors a keresés.

## 12. Karbantartási terv

A rendszer karbantartási terve biztosítja, hogy a React + Vite frontend, a Node.js + Express backend és a PostgreSQL adatbázis hosszú távon megbízhatóan működjön a VPS környezetben. A karbantartás célja a stabilitás, a teljesítmény és a biztonság fenntartása, valamint a felhasználói igényekhez való folyamatos alkalmazkodás.

### 12.1. Folyamatos üzemeltetés

A szerver folyamatos monitorozása alapvető feladat. Ide tartozik a CPU, memória és hálózati terhelés figyelése, valamint az adatbázis teljesítményének követése. A logok rendszeres elemzése segít a potenciális hibák korai felismerésében.

### 12.2. Hibajavítás (Corrective Maintenance)

A felhasználók által jelzett hibák priorizálása és kijavítása elsődleges szempont. A javításokat először tesztkörnyezetben végezzük el, ahol automata unit- és integrációs tesztek futnak. Csak sikeres validáció után történhet az éles rendszer frissítése.

### 12.3. Technológiai frissítések (Adaptive Maintenance)

A frontend (React, Vite) és a backend (Node.js, Express) keretrendszerek, valamint a PostgreSQL adatbázis rendszeres frissítése szükséges a kompatibilitás és biztonság fenntartásához. A függőségeket (npm csomagok) havi szinten auditáljuk és szükség esetén frissítjük.

### 12.4. Funkcióbővítés (Perfective Maintenance)

A karbantartás része az új funkciók bevezetése és a meglévők optimalizálása. Példák: új riportkészítő modul, naptár nézet, felhasználói jogosultságkezelés finomítása. A fejlesztéseket iteratív módon, felhasználói visszajelzések alapján vezetjük be.

### 12.5. Megelőző intézkedések (Preventive Maintenance)

A lehetséges biztonsági rések feltárása és zárása kiemelt szempont. Rendszeresen futtatunk sérülékenység-vizsgálatokat, és naprakészen tartjuk a TLS tanúsítványokat. Az adatbázisról automatikus biztonsági mentések készülnek, amelyeket heti szinten tesztelünk visszaállítással.

### 12.6. Dokumentáció és verziókezelés

Minden módosítást verziószámmal és rövid changeloggal dokumentálunk. A fejlesztői csapat Git alapú workflow-t használ, amely biztosítja az átláthatóságot és a rollback lehetőségét. Az üzemeltetési lépések külön karbantartási naplóban kerülnek rögzítésre.

### 12.7. Ütemezett karbantartás

A karbantartási műveleteket előre ütemezetten végezzük, a felhasználók számára kommunikált időpontban. Cél, hogy a szolgáltatás-kiesés minimális legyen, és az éles frissítések mindig tesztelt, stabil verziók alapján történjenek.

<img width="1028" height="760" alt="Screenshot 2025-09-22 142449" src="https://github.com/user-attachments/assets/9d7f35cf-a691-4194-bb3c-e8856b742e83" />
