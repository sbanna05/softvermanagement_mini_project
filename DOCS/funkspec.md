# Funkcionális specifikáció – SupplyMasters Teendőlista alkalmazás

## 1. Jelenlegi helyzet

### 1.1. Teendők nyilvántartása
A SupplyMasters vállalat jelenlegi működésében a dolgozók különböző, személyes megoldásokkal rögzítik a napi **feladataikat** – jellemzően papíralapú jegyzetfüzetekben vagy különféle digitális fájlokban. Ez a **decentralizált**, nem szabványos nyilvántartás azt eredményezi, hogy nincs központi rendszer, amely egységesen támogatná a feladatok kiosztását és kezelését.

A jelenlegi helyzet fő problémái:
- **Manuális** státuszkezelés (kihúzás, megjegyzés) → gyakori félreértés
- **Széttagolt információk**, nincs egységes adatbázis
- A feladatok kiosztása többnyire **személyesen** vagy telefonon történik
- A vezetők nem kapnak **valós idejű** rálátást a munkára

Ennek következtében gyakran fordul elő, hogy bizonyos teendők kimaradnak, vagy többször is rögzítésre kerülnek, ami torzítja az adatokat. A szétszórt információk miatt a csapat tagjai nem mindig ugyanazzal a tudással rendelkeznek, ami akadályozza a gördülékeny együttműködést.

### 1.2. Hibák és régi adatok kezelése
A **hibák** és problémák jelenleg informális módon kerülnek rögzítésre, többnyire szóbeli bejelentések vagy rögtönzött jegyzetek formájában. Ez a módszer nem biztosít rendszerezett nyomonkövetést, így sokszor elveszik a fontos információ, és nem lehet pontosan visszakeresni a feladatok előzményeit. Archiválásra nincs hivatalos eljárás, ezért a régebbi hibák és feladatok gyakran nyomtalanul eltűnnek.

A hiányosságok összefoglalva:
- Nincs **egységes** archiválási folyamat
- Hiányzik az **automatikus naplózás**
- Nem tisztázottak a **felelősségi körök**
- Az **adatkezelés átláthatatlansága** miatt a tapasztalatok nem épülnek be

Ez a helyzet hosszú távon a vállalat működésének hatékonyságát csökkenti, és megnehezíti a minőségbiztosítási folyamatokat.

### 1.3. Ellenőrzés és vezetői rálátás
A munkavállalóknak naponta kézzel kell elkészíteniük az **összesítőket** a saját tevékenységükről, amelyeket a vezetők később manuálisan ellenőriznek. Ez az eljárás időigényes, lassú és nagy hibalehetőséget hordoz.

- A vezetők csak **utólag** értesülnek a munkáról
- Nehéz a feladatok **priorizálása** valós idejű adatok nélkül
- A jelentések **pontossága** nagymértékben függ az alkalmazottak fegyelmétől
- Az automatikus figyelmeztetések és **nyomonkövetés** hiánya miatt a határidők betartása bizonytalan

Amennyiben a vezetők pontosabb képet szeretnének, személyes egyeztetésre kényszerülnek, ami időrabló. A jelenlegi helyzetben a rendszer nem biztosít teljes körű átláthatóságot, így a vezetői döntések sokszor nem kellően megalapozottak.


## 2. Megrendelői vízió (Vágyálom)

### 2.1 Áttekintés
A SupplyMasters vágyálomrendszer központi célja, hogy a mindennapi munkaszervezést
egyetlen egységes, jól kezelhető platformba foglalja. A rendszer biztosítja a folyamatos
hozzáférést mind számítógépen, mind mobil eszközön, reszponzív és modern felhasználói
élményt nyújtva. A megoldás segít abban, hogy a felhasználók átlássák saját és mások
feladatait, ezzel gyorsítva a munkafolyamatokat és csökkentve az átfutási időt.

### 2.2 Megrendelői vágyak
A megrendelő elvárja, hogy minden feladat egy központi rendszerben legyen rögzítve,
amely egyszerűen kereshető és szűrhető. Az új feladatok létrehozása, a meglévők
módosítása és törlése alapfunkciónak számít. A feladatok kategorizálhatók, elláthatók
címkékkel, és rendelhető hozzájuk prioritás, hogy a fontosabb teendők azonnal kiemelkedjenek.
A vizuális megjelenítéshez Kanban tábla szolgál, amely Backlog → In Progress → Done
oszlopokra tagolódik, lehetővé téve a feladatok könnyű mozgatását.

A rendszer támogatja a többfelhasználós működést: a munkatársak, vezetők és
adminisztrátorok eltérő jogosultsági szintekkel férhetnek hozzá a funkciókhoz.
Automatikus értesítések tájékoztatják a résztvevőket a közelgő határidőkről, a
státuszváltozásokról és a felelősök módosulásáról. Emellett fontos igény a riportok
és kimutatások készítése, amelyek exportálhatók különböző formátumokba (pl. CSV, PDF).

A felhasználói műveletek részletes naplózása átláthatóságot és visszakövethetőséget biztosít.

### 2.3 Nem-funkcionális vágyak
A biztonság kiemelt szerepet kap: az adatok titkosítva kerülnek tárolásra, a hozzáférés
pedig szerepkörökhöz kötötten valósul meg. Az alkalmazás felülete letisztult, intuitív,
így a betanulási idő minimális. A teljesítmény elvárt szintje, hogy akár tízezer aktív
feladat is kezelhető legyen késlekedés nélkül.

A rendszer moduláris felépítésű, ezáltal a jövőben könnyen bővíthető további
kiegészítőkkel, például naptárnézettel vagy fejlettebb riportkészítéssel. A megbízhatóság
érdekében rendszeres adatmentés és visszaállítási lehetőség áll rendelkezésre.

### 2.4 Elfogadási kritériumok
A rendszer akkor tekinthető sikeresnek, ha a felhasználó képes új feladatot létrehozni,
azt módosítani és törölni. A feladatok státusza mindig pontosan megjelenik, és az
oszlopok közötti áthelyezés akadálymentesen működik.

Az értesítési funkció időben jelzi a fontos változásokat, míg a riportok exportálása
hibátlanul lefut. Az adatoknak minden futtatás között meg kell őrződniük, és a
teljesítménynek meg kell felelnie az előre rögzített elvárásoknak. Amennyiben ezek a
feltételek teljesülnek, a vágyálomrendszer elfogadottnak tekinthető.

## 3. Igényelt üzleti folyamat

### 3.1. Feladatkezelés ###

- A főmenüben megjelenik a *Napi feladataim* menüpont.
- - Ez a felület **táblázatos** formában jelenik meg.
    - **Főbb menüpontok:** *Cím*, *Leírás*, *Prioritás*, *Határidő*, *Állapot*, *Feladat felelőse*, *További csapattagok*
- A dolgozó a *Backlog*, *Doing*, *Done* gombokkal jelölheti a feladatai állapotát.
- A rendszer automatikusan értesíti a kijelölt felettest a feladat elvégzése esetén.
- A feletteseknek jogosultságuk van a beosztotjaiknak feladatot kiadni a *Feladat kiadása* menüpontban.
    - Itt meg kell adniuk a következő menüpontokat:
        - *Cím*, *Leírás*, *Prioritás*, *Határidő*, *További dolgozók*
- *Drag and drop* módszerrel ki lehet alakítani a feladatok prioritási sorrendjét.
- A közeli lejárattal rendelkező feladatok esetén a rendszer automatikus *Emlékeztető* üzenetet küld.
    - Ennek beállításait az *Emlékeztető beállítása* menüpontban lehet módosítani, mint például:
     - *Mennyi idővel a határidő előtt küldje*
     - *Szundi funkció*

### 3.2. Hibakezelés és archiválás ###
- *Korábbi feladataim* menüpont segítségével a dolgozó könnyen vissza keresheti a már elvégzet feladatait:
    - *Cím* illetve *Dátum* alapján
- A *Done* állapotú feladatok **archiválhatóak** az *Archiválás* gombbal. 
- Az archivált feladatok később visszakereshetőek.
- Mindenki számára elérhető a *Keresés* funkció csak más terjedelemben:
    - a **dolgozók** csak a **saját** elvégzett feladataikat láttják
    - a **vezetők** minden **beosztottét** is.
- Az *Archivált feladatok* menüpontban is lehet **keresni**:
    - *Cím*
    - *Dátum*
    - *Dolgozó*
    - *Kijelölt felettes*
    - *Prioritás* alapján.

### 3.3. Felettesi ellenőrzés ###
- *Napi összesítő generálása* gombbal automatikus riport készíthető az aznapi haladásról.
- A vezetők valós időben követhetik a dolgozók munkáját a *Dolgozói előrehaladás*.
    - Ez a felület táblázatos formában jelenik meg az átláthatóság kedvéért.
    - Kiemelt háttérrel jelennek meg azok a feladatok, amellyek túllépték a megadott *határidőt*.

## Szerepkörök és jogosultságok

A rendszer három felhasználói szerepkört különböztet meg: **CEO, részlegvezető és munkatárs**.

- A **CEO** rendelkezik a legszélesebb jogosultságokkal: minden feladatot láthat, módosíthat, illetve riportokat készíthet az összes részleg teljesítményéről.
- A **részlegvezető** a saját csapata feladatait kezeli, kiosztja a teendőket, és nyomon követi a státuszukat.
- A **munkatárs** kizárólag azokat a feladatokat éri el, amelyeket rábíztak, és lehetősége van ezeket módosítani, leírással ellátni illetve a státuszukat frissíteni.

Minden felhasználói művelet naplózásra kerül, így a menedzsment vissza tudja követni, ki mikor és mit változtatott.

## Feladatkezelés

A rendszer központi eleme a feladatkezelés és a feladatok áttekinthetőségének optimalizása. Új feladat létrehozásakor kötelező megadni a feladat nevét, határidejét és a felelőst. Ezen kívül lehetőség van a feladat típusának (pl. adminisztratív, raktári, értékesítési), valamint a prioritásának (alacsony, közepes, magas) beállítására. Lehetőség arra, hogy ha közeleg a határidő, akkor automatikusan frissül a prioritás.
A feladatokat címkékkel is lehet ellátni, ezzel elősegítve a gyorsabb keresés és szűrés lehetőségét.

A feladatok vizuálisan egy Kanban táblán jelennek meg, amely három fő oszlopból áll:  

- **Backlog**: még nem megkezdett feladatok,  
- **Doing**: éppen folyamatban lévő tevékenységek,  
- **Done**: lezárt, befejezett feladatok.  

Az oszlopok közötti mozgatás történhet drag-and-drop módszerrel, illetve menüből történő választással is.

## Keresés és szűrés

A feladatok között többféle módon lehet keresni. A felhasználó szűrhet címke, határidő, felelős, státusz vagy feladattípus szerint.  
Ezen felül kulcsszavas keresés is támogatott, így a rendszer nagyobb adatmennyiség esetén is gyorsan áttekinthető marad.

## Export és riportok

A feladatok listája és aktuális állapota exportálható lesz Markdown vagy CSV formátumban.  
A CEO számára a rendszer havi szintű összesítéseket is készít, amelyek bemutatják,
hány feladat készült el időben, mely részlegek teljesítettek hatékonyabban,
és mely területeken merültek fel csúszások.

## Nem-funkcionális követelmények megvalósítása

A rendszer tervezése során kiemelt figyelmet kap a biztonság: minden adat titkosítva kerül tárolásra,
és a felhasználók csak saját jogosultságaiknak megfelelően férhetnek hozzá az információkhoz.  
A felület **desktop first** elv mentén készül, de reszponzív kialakításának köszönhetően tableten és mobilon is használható.  
Az adatbázis relációs szerkezetű, rendszeres automatikus mentéssel és visszaállítási lehetőséggel.  
A teljesítmény szempontjából a rendszer úgy készül, hogy akár tízezer aktív feladatot is képes legyen kezelni
jelentősebb lassulás nélkül.  
A jövőben a rendszer könnyen bővíthető új modulokkal, például naptárintegrációval vagy kibővített riportkészítési lehetőségekkel.  
