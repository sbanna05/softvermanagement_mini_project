# Funkcionális specifikáció – SupplyMasters Teendőlista alkalmazás

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
