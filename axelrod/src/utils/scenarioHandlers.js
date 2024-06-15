export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const handleScenario = (scenario) => {
  let Oboje = 0, DonioslA = 0, DonioslI = 0, Milczeli = 0;
  let SiedzialA = 0, SiedzialI = 0, SumaA = 0, SumaI = 0;
  let losowanaLiczbaA = 0, losowanaLiczbaI = 0;
  let OstatniA, OstatniI;
  let szanseA, szanseI;

  for (let i = 0; i < 1000; i++) {
    losowanaLiczbaA = getRndInteger(1, 100);
    losowanaLiczbaI = getRndInteger(1, 100);

    const Kapusie = () => { Oboje++; SiedzialA += 7; SiedzialI += 7; SumaA++; SumaI++; OstatniA = 1; OstatniI = 1 };
    const Milcza = () => { Milczeli++; SiedzialA += 3; SiedzialI += 3; SumaA++; SumaI++; OstatniA = 0; OstatniI = 0 };
    const Arek = () => { DonioslA++; SiedzialI += 10; SumaI++; OstatniA = 1; OstatniI = 0 };
    const Irek = () => { DonioslI++; SiedzialA += 10; SumaA++; OstatniA = 0; OstatniI = 1 };

    let temp;

    if (scenario === 'Zaufanie') {
        if (losowanaLiczbaA < 97 && losowanaLiczbaI < 97) Milcza();
        else if (losowanaLiczbaA >= 97 && losowanaLiczbaI >= 97) Kapusie();
        else if (losowanaLiczbaI >= 97) Irek();
        else Arek();
    } else if (scenario === 'Walka') {
        if (losowanaLiczbaA < 99 && losowanaLiczbaI < 99) Kapusie();
        else if (losowanaLiczbaA >= 99 && losowanaLiczbaI >= 99) Milcza();
        else if (losowanaLiczbaI < 99) Irek();
        else Arek();
    } else if (scenario === 'Wzajemnie') {
        if (i=== 0) { 
          temp = 0;
        } else if (OstatniA === 1 && OstatniI === 0){ //Arek Doniósł
          temp = 1;
        } else if (OstatniA === 0 && OstatniI === 1){ //Irek Doniósł
          temp = 2;
        } else if (OstatniA === 1 && OstatniI === 1) { //Oboje donieśli
          temp = 3;
        } else if (OstatniA === 0 && OstatniI === 0) { //oboje Milczą
          temp = 4;
        } else {
          temp = 5;
        }
        switch (temp) {
          case 0:
            if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) Kapusie ();
            else if (losowanaLiczbaA <50 && losowanaLiczbaI <50) Milcza ();
            else if (losowanaLiczbaI >= 50) Irek ();
            else Arek ();
            break
          case 1: 
            if (losowanaLiczbaA >= 50 && losowanaLiczbaI <= 95) Kapusie();
            else if (losowanaLiczbaA <50 && losowanaLiczbaI >95) Milcza();
            else if (losowanaLiczbaI <= 95) Irek();
            else Arek();
            break
          case 2:
            if (losowanaLiczbaA <= 95 && losowanaLiczbaI >=50) Kapusie();
            else if (losowanaLiczbaA >95 && losowanaLiczbaI <50) Milcza();
            else if (losowanaLiczbaA <=95) Arek();
            else Irek();
            break
          default:
            if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) Kapusie ();
            else if (losowanaLiczbaA <50 && losowanaLiczbaI <50) Milcza ();
            else if (losowanaLiczbaI >= 50) Irek ();
            else Arek ();
        }
    } else if (scenario === 'Zmiana') { //MUSISZ NAPRAWIĆ ZMIANA I ZGODA OGARNĄĆ 
      if (i=== 0) { 
        temp = 0;
      } else if (OstatniA === 1 && OstatniI === 0){ // Arek Doniósł
        temp = 1;
      } else if (OstatniA === 0 && OstatniI === 1){ //Irek Doniósł
        temp = 2;
      } else if (OstatniA === 1 && OstatniI === 1) { //Doniesli oboje
        temp = 3;
      } else if (OstatniA === 0 && OstatniI === 0) { //Milczeli oboje
        temp = 4;
      } else {
        temp = 5;
      }
      switch (temp) {
        case 0:
          if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) Kapusie ();
          else if (losowanaLiczbaA <50 && losowanaLiczbaI <50) Milcza ();
          else if (losowanaLiczbaI >= 50) Irek ();
          else Arek ();
          break
        case 1: 
          if (losowanaLiczbaA >= 98 && losowanaLiczbaI <= 75) Kapusie();
          else if (losowanaLiczbaA < 98 && losowanaLiczbaI > 75) Milcza();
          else if (losowanaLiczbaI <= 75) Irek();
          else Arek();
          break
        case 2:
          if (losowanaLiczbaA <= 75 && losowanaLiczbaI >= 98) Kapusie();
          else if (losowanaLiczbaA > 75 && losowanaLiczbaI < 98)  Milcza();
          else if (losowanaLiczbaA <= 75) Arek();
          else Irek();
          break
        case 3: 
          if (losowanaLiczbaA <= 75 && losowanaLiczbaI <= 75) Kapusie();
          else if (losowanaLiczbaA > 75 && losowanaLiczbaI > 75)  Milcza();
          else if (losowanaLiczbaA >= 75) Arek();
          else Irek();
          break
        case 4:
          if (losowanaLiczbaA >= 75 && losowanaLiczbaI >= 75) Kapusie();
          else if (losowanaLiczbaA < 75 && losowanaLiczbaI < 75) Milcza();
          else if (losowanaLiczbaA >= 75) Arek();
          else Irek();
          break
        default:
          if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) Kapusie ();
          else if (losowanaLiczbaA <50 && losowanaLiczbaI <50) Milcza ();
          else if (losowanaLiczbaI >= 50) Irek ();
          else Arek ();
      };
    } else if (scenario === 'Zgoda') {
      if (i=== 0) {
        temp = 0;
      } else if (OstatniA === 1 && OstatniI === 1) { //Oboje donieśli
        temp = 1;
        if (szanseA <=99 && szanseA > 2) {
          szanseA -=2.5;
        } else if (szanseA > 99 ) {
          szanseA = 99;
          szanseA -=2.5;
        } else if ( szanseA <= 2) {
          szanseA = 2;
        }
    
        if (szanseI <=99 && szanseI > 2) {
          szanseI -=2.5;
        } else if (szanseI > 99) {
          szanseI = 99;
          szanseA -=2.5;
        } else if ( szanseI <= 2) {
          szanseI = 2;
        } 
      } else if (OstatniA === 0 && OstatniI === 0) { //oboje Milczą
        temp = 2;
    
        if (szanseA <=99 && szanseA > 2) {
          szanseA +=5;
        } else if (szanseA > 99 ){
          szanseA = 99;
        } else if ( szanseA <= 2) {
          szanseA = 2;
          szanseA += 5;
        } 
    
        if (szanseI <=99 && szanseI > 2) {
          szanseI +=5;
        } else if (szanseI > 99){
          szanseI = 99;
        } else if ( szanseI <= 2) {
          szanseI = 2;
          szanseI += 5;
        } 
      } else if (OstatniA === 1 && OstatniI === 0){ //Arek Doniósł
        temp =3;
    
        if (szanseI <=99 && szanseI > 2) {
          szanseI -=5;
        } else if (szanseI > 99) {
          szanseI = 99;
          szanseI -=5;
        } else if ( szanseI <= 2) {
          szanseI = 2;
        } 
    
      } else if (OstatniA === 0 && OstatniI === 1){ //Irek Doniósł
        temp = 4;
    
        if (szanseA <=99 && szanseA > 2) {
          szanseA -=5;
        } else if (szanseA > 99 ) {
          szanseA = 99;
          szanseA -=5;
        } else if ( szanseA <= 2) {
          szanseA = 2;
    
        } 
      } else {
        temp =5;
      }
    
    switch (temp) {
      case 0:
        if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) {
          Kapusie ();
          szanseA = 45;
          szanseI = 45;
        } else if (losowanaLiczbaA < 50 && losowanaLiczbaI < 50) {
          Milcza ();
          szanseA = 65;
          szanseI = 65;
        } else if (losowanaLiczbaI >= 50) {
          Irek ();
          szanseA = 40;
          szanseI = 65;
        } else if (losowanaLiczbaA >= 50){
          Arek ();
          szanseA = 65;
          szanseI = 40;
        } 
        break
      default: 
        if (losowanaLiczbaA > szanseA && losowanaLiczbaI > szanseI) {
          Kapusie ();
        } else if (losowanaLiczbaA <= szanseA && losowanaLiczbaI <= szanseI) {
          Milcza ();
        } else if (losowanaLiczbaI > szanseI) {
          Irek ();
        } else {
          Arek ();
        }
      }
    } else if (scenario === "Losowo") {
        if (losowanaLiczbaA < 50 && losowanaLiczbaI < 50) Milcza();
        else if (losowanaLiczbaA >= 50 && losowanaLiczbaI >= 50) Kapusie();
        else if (losowanaLiczbaI >= 50) Irek();
        else Arek();
    }

  }

  return {
    Oboje, DonioslA, DonioslI, Milczeli,
    SiedzialA, SiedzialI, SumaA, SumaI
  };
};

export const getInfoText = (scenario) => {
  if (scenario === 'Zaufanie') {
    return 'Oboje ufają sobie bardzo mocno, ciężko ich przekupić<br>Oboje mają <b>97%</b> szans, że bedą milczeć<br>Tylko dobre pieniądze ich przekupią';
  } else if (scenario === 'Walka') {
    return "Oboje nienawidzą się i zawsze chcą donieść na swojego kolegę<br>Oboje mają <b>99%</b> szans, że doniosą<br>To cud kiedy postanowią milczeć";
  } else if (scenario === 'Wzajemnie') {
    return "Arek i Irek nie dają drugiemu za wygraną muszą donieść jeśli któryś zdradził<br><b>Szanse</b><br> Jeśli Arek doniósł a Irek milczał szanse" +
    "że Irek doniesie to <b>95%</b> i odwrotnie<br>Wszystkie inne szanse to <b>50%</b>";
  } else if (scenario === 'Zmiana') {
    return "<b>Szanse</b><br>Kiedy oboje ostatnio donieśli na siebie mają <b>75%</b> szans zrobić to ponownie<br>Kiedy tylko Arek doniósł" + 
    "ostatnio ma on <b>98%</b> szans milczeć tym razem i odwrotnie<br>Kiedy oboje milczeli mają <b>75%</b> szans zrobić to ponownie";
  } else if (scenario === 'Zgoda') {
    return "Arek i Irek dogadują się w więzieniu co dalej zrobić<br><b>Szanse</b><br>Ich szanse są początkowo ustawiane pierwszy raz po" + 
    "wizycie u prokuratora<br>Kiedy oboje wtedy na siebie doniosą mają <b>45%</b> szans milczeć kolejnym razem<br>Kiedy oboje będą wtedy" +
     "milczeć: ich szanse będą wynosić <b>65%</b><br>Kiedy jeden z nich wtedy doniesie osoba która milczała będzie miała <b>40%</b>" +
     "szans a donosiciel <b>65%</b><br>Za każdym kolejnym razem ich szanse będą rosnąć lub maleć w zależności od popełnianych decyzji"+
     "<br>Gdy oboje będą milczeć: ich szanse na milczenie <b>wzrosną o 5%</b><br>Gdy oboje doniosą: ich szanse <b>maleją o 2.5%</b><br>"+
     "Kiedy tylko jeden doniesie: Szanse osoby która nie doniosła <b>maleją o 5%</b> a szanse donosiciela zostają takie same";
  } else if (scenario === 'Losowo') {
    return "Arek i Irek nie wiedzą co robią podejmują decyzje chaotycznie<br>Oboje mają <b>50%</b> szans aby donieść lub nie";
  }
};