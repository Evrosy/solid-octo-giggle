# solid-octo-giggle
Projekt turnieju axelroda z wykorzystaniem reacta 

# Opis Projektu zrealizowanego na Projketowanie aplkacji internetowych

Turniej Axelroda to projekt, który polega na rozegraniu 1000 razy dylematu więźnia. Polega on na tym, że dwójka ludzi jest podejrzana o udział w napadzie.  Każdemu prokurator proponuje umowę „Jeśli przedstawisz nam dowody na tego drugiego to zwolnimy Cię z odbywania kary a ten drugi pójdzie siedzieć na długo”. W zależności od tego co zrobią tyle przesiedzą w więzieniu. Gdy oboje doniosą idą do więzienia na 7 lat. Gdy oboje będą milczeć idą siedzieć na 3 lata.  Kiedy jednak tylko jeden doniesie to osoba, która milczała idzie na 10 lat więzienia a donosiciel zostaje na wolności. Ten problem ma tylko cztery rozwiązania zakładając tylko ta sytuację, gdzie więźniowie nie mają ze sobą kontaktu a co, gdyby musieli podjąć tą decyzję 1000 razy czy ich myślenie by się zmieniło to właśnie w tym turnieju sprawdzimy testując kilka strategii.

Strategie, które zostały przeze mnie zaproponowane to „Zaufanie aż po grób”, „Sparta”, „Oko za oko”, „Rozmyśliłem się”, „Zgadali się” oraz „Losowo”. Staraliśmy się robić na tyle różnorodne strategie z różnorodnymi szansami, aby nie zawsze wyniki były takie same. W turnieju tym uwzględniliśmy dwóch więźniów Arka i Irka którzy są naszymi obiektami testowymi to właśnie oni są uczestnikami turnieju i nie mają ze sobą kontaktu. Przybliżymy teraz szanse i działanie naszych strategii, aby na końcu podsumować która z nich jest najlepsza. Aby bliżej przybliżyć działanie naszych strategii należy wyjaśnić jaki jest zamysł samego algorytmu. Aplikacja, którą stworzyliśmy działa w JavaScript na zasadzie pętli, w której jest losowana liczba z zakresu od 1 do 100. W JS funkcja Math.random nie losuje minimalnej wartości i maksymalnej, dlatego napisaliśmy funkcję getRndInteger który pobiera minimalną wartość losowania i maksymalną. Dzięki tej funkcji min i max może zostać wywołany co jest ważne w tym turnieju, aby zawsze były jakieś szanse. W każdej z strategii nigdy nie ma bazowo 100% szans na milczenie lub doniesienie. W zależności od podanych szans w strategii takie działanie podejmą nasi więźniowie a przez to, że mogą być tylko 4 możliwości pojedynczej sytuacji napisaliśmy funkcję które do nich się odwołują, aby zapisywać dane a na koniec pętli przedstawiać je w tabeli, ile razy coś się stało. 
 
### Proponowane strategie:
1.	Strategia „Zaufanie aż po grób” polega ona na tym, że Irek i Arek mają 97% szans na milczenie, bo tak sobie ufają. 
2.	Strategia „Sparta” polega na ciągłym donoszeniu więźniów, bo się nienawidzą więc na doniesie mają 99% szans.
3.	Strategia „Oko za oko” polega na odwdzięczaniu się donosicielowi. Oznacza to, że podczas pierwszej iteracji maja 50% szans na swoją decyzję. To jest pierwsza tutaj strategia, która sprawdza poprzedni wynik i ze względu na niego zmienia szanse. Gdy oboje doniosą lub oboje będą milczeć ich szanse pozostaną takie same, lecz gdy jeden z nich doniesie pokrzywdzony będzie miał 95% szans donieść a szanse donosiciela będą wynosić tyle samo.   
4.	Strategia „Rozmyśliłem się” polega na poczuciu winy więźnia, który posłał na długi wyrok swego kolegę. Tak jak w poprzedniej strategii pierwsza iteracja ma 50% szans. Tutaj również zostaje zapisany poprzedni wynik. Dlatego gdy doniosą lub będą milczeć szanse, aby zrobić to ponownie wynosi 75% ale gdy tylko jeden doniósł ma on szanse w 98% milczeć a drugi ma 75% donieść.
5.	Strategia „Zgadali się” zakłada ona, że Irek i Arek dochodzą do porozumienia, aby milczeć po pierwszej wizycie u prokuratora. Mają na nią 50% później ich szanse są deklarowane przez swoje decyzję. Gdy po pierwszej iteracji oboje donieśli to ich szanse na milczenie będą wynosić 45%. Za to, gdy oboje będą milczeć ich szanse na milczenie będą wynosić 65%. Sytuacja się zmienia, gdy podczas pierwszej iteracji tylko jeden doniesie w tym przypadku osoba, która milczała będzie miała 40% szans na milczenie a donosiciel będzie tych szans miał 65%. Teraz z każdą iteracją od ich decyzji ich szanse będą maleć lub rosnąć. Gdy oboje będą milczeć ich szanse wzrosną o 5% lecz gdy oboje doniosą ich szanse maleją o 2.5%. W sytuacji, w której tylko jeden doniesie szanse osoby pokrzywdzonej maleją o 5%. System zakłada również skrajne wartości jak 100 i 0 dlatego gdy wartość przekroczy sto ustawiana jest wartość 99% a gdy wartość będzie mniejsza od 2 ustawia ją na 2%. Wartość minimalna 2% została ustawiona przez to, że losowana liczba jest z zakresu od 1 do 100 co daje nam 1% zapasu jak w przypadku 99% aby zawsze obie strony miały jakieś szanse.
6.	Strategia „Losowo” najprostsza z całej reszty. Tutaj więźniowie mogą wylosować tylko 0 lub 1. Gdzie 0 oznacza milczenie a 1 doniesienie. Co daje, że każda ich decyzja to 50%
   
| | Zaufanie aż po grób |	SPARTA	| Oko za oko |	Rozmyśliłem się |	Losowo |
| --- | --- | --- | --- | --- | --- |
| Oboje donieśli |	0-5 | 950-970	| 360-390 |	60-110 |	230-260 |
| Tylko Arek |	25-55 |	15-30 |	235-265 |	275-315 |	230-260 |
| Tylko Irek | 	25-55 |	15-30 |	235-265 |	275-315 |	230-260 |
| Oboje milczeli| 910-940 |	0-2 |	110-150 |	290-335 |	230-260 |

*Tabela przedstawiające średnie wyniki strategii*

W wyżej przedstawionej tabeli nie zostało przedstawiona strategia „Zgadali się” z powodu jej skrajnych wyników przez co zasługuję ona na wyróżnienie i przedstawienie jej wyników osobno. Jej skrajne wyniki wiążą się z zmieniającą szansą, która później ma małe szanse, aby się zmienić.  W większości przypadkach więźniowie będą donosić na siebie nawzajem wtedy ich wyniki wahają się od 940 do 965 wtedy przypadki, gdzie tylko jedna osoba doniosła będą wahać się od 15 do 30, a że oboje będą milczeć będzie wahać się od 0 do 10. Kiedy jednak sytuacja się odwróci otrzymamy wręcz przeciwne wyniki. Szansa na doniesie waha się od 0 do 5 gdzie w większości wyniki będą wynosić 0, a jak nie to nie będą przekraczać 5 wyniki ponad 5 są skrajne i bardzo rzadkie. Szanse, gdzie tylko jedna osoba doniesie w tym przypadku waha się od 5 do 15 a sytuacji, gdzie dwójka milczy wyniki wahają się od 970 do 990. W tej strategii tak naprawdę wyniki są definiowane przy pierwszych 50 iteracjach. 

Poprzez realizację tego turnieju można zauważyć parę ciekawych wniosków i problemów. Jednym z najważniejszym problemów, że jeden wynik takiego turnieju nie daje nam zbyt dużo informacji czasem wyniki mogą być bardzo skrajne, ale nie są wcale uśrednione. Po to zostały tutaj uśrednione wyniki z kilkunastu testów, aby zobaczyć skrajne wyniki tej symulacji. Podczas realizacji tego projektu można zauważyć, że najlepszą decyzją więźniów powinno być dogadanie się ze sobą. W tym projekcie strategia „Zgadali się” właśnie to zakłada, gdzie dwójka więźniów może ze sobą pomówić i ustalić co robić. Ustaliliśmy, że najlepszą decyzją jaką mogą podjąć to milczenie a to tylko przez ilość lat jakie oboje musza przesiedzieć w więzieniu. Jeśli będą oboje zawsze milczeć będą siedzieć tam tylko 3 lata, lecz milczenie jest ryzkiem, że druga osoba doniesie wtedy osoba milcząca by poszła na 10 lat. Dlatego strategia „Zgadali się” zakłada wszelkiego rodzaje zdrady drugiej osoby co zmniejsza ich zaufanie do siebie. Dzięki czemu, jeśli nie będą sobie ufać cały czas będą na siebie donosić i będą siedzieć w więzieniu po 7 lat.  W tym turnieju należy zauważyć, że to zaufanie do drugiej osoby jest najważniejsze. Inne strategie tutaj przedstawione nie zakładają zaufania tylko na podstawie ostatnich decyzji lub wcale jest możliwa inna czynność. Na podstawie ostatnich decyzji podejmują działanie strategie „Oko za oko” oraz „Rozmyśliłem się” które są swoim przeciwieństwem z trochę zmienionymi szansami, aby sprawdzić różne możliwości. Faktycznie średnie wyniki tych strategii się różnią, ale niewiele praktycznie przedstawiają te same działanie. Reszta strategii, które nie patrzą na poprzednie decyzję i nie zmieniają swoich szans mimo swoich warunków dają ciekawe wyniki.  Strategia „Losowo” przedstawia wszystkie wyniki mniej w takim samym zakresie, ponieważ zawsze decyzję mają 50% szans. Strategie „Zaufanie” oraz „SPARTA” mimo swoich skrajności nadal dają możliwość na przeciwne działanie do tej strategii co zostało pokazane wyżej w tabeli. Strategia „SPARTA” ma 99% szans dla więźniów, że doniosą a nadal zdążają się tam sytuację, że oboje milczą. Przez 1000 iteracji może dużo się zadziać i jak widać powyżej nawet kiedy prawie nie ma szans na coś to nadal może się zdarzyć.

# Opis projektu popularne freamworki
Projekt z przedmiotu Projektowanie aplkacji internetowych, który został wykonany w technologi JS został przeze mnie przerobiony z reactem poniżej została przedstawiona struktura plików i instrukcja obslugi a w tym repozytorium zostały przedstawione pliki tego projektu

## Struktura Plików
```
src/
│
├── components/
│   ├── Buttons.js
│   ├── Results.js
│   └── Info.js
│
├── utils/
│   └── scenarioHandlers.js
│
├── App.js
├── App.css
└── index.js
```

- components/: Zawiera komponenty UI (przyciski, wyniki, informacje).
  - Buttons.js: Komponent renderujący przyciski do wyboru scenariuszy.
  - Results.js: Komponent wyświetlający wyniki symulacji.
  - Info.js: Komponent wyświetlający informacje o aktualnie wybranym scenariuszu.
* utils/: Zawiera funkcje pomocnicze do obsługi logiki scenariuszy.
   - scenarioHandlers.js: Zawiera logikę obliczania wyników dla różnych scenariuszy oraz funkcje pomocnicze.
+ App.js: Główny plik aplikacji.
- App.css: Style aplikacji.
* index.js: Punkt wejściowy aplikacji.

## Instalacja
Aby zainstalować projekt lokalnie, wykonaj następujące kroki:

1. Sklonuj repozytorium:
```
git clone <https://github.com/Evrosy/solid-octo-giggle.git>
```
2. Przejdź do katalogu projektu:

```
cd axelrod
```
 3. Zainstaluj zależności:

```
npm install
```
 4. Uruchomienie
```
npm start
```

