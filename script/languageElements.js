"use strict";

export const elements = {
  any: {
    headerNavMenuLinkHome: document.getElementById(
      "header__nav__menu__link-home"
    ),
    headerNavMenuLinkResume: document.getElementById(
      "header__nav__menu__link-resume"
    ),
    headerNavMenuLinkContact: document.getElementById(
      "header__nav__menu__link-contact"
    ),
    footerNavFlag: document.getElementById("footer__nav__flag"),
    footerNavPDF: document.getElementById("footer__nav__pdf"),
  },
  index: {
    h1: document.getElementById("index__main__h1"),
    p1: document.getElementById("index__main__p1"),
    p2: document.getElementById("index__main__p2"),
    p3: document.getElementById("index__main__p3"),
    cardCSS: {
      li1: document.getElementById("css-card__li1"),
      li2: document.getElementById("css-card__li2"),
      li3: document.getElementById("css-card__li3"),
    },
    cardHTML: {
      li1: document.getElementById("html-card__li1"),
      li2: document.getElementById("html-card__li2"),
      li3: document.getElementById("html-card__li3"),
    },
    cardJS: {
      li1: document.getElementById("js-card__li1"),
      li2: document.getElementById("js-card__li2"),
      li3: document.getElementById("js-card__li3"),
    },
    cardReactJS: {
      li1: document.getElementById("reactjs-card__li1"),
      li2: document.getElementById("reactjs-card__li2"),
      li3: document.getElementById("reactjs-card__li3"),
    },
  },
  resume: {
    contact: {
      home: document.getElementById("home"),
      phone: document.getElementById("phone"),
      email: document.getElementById("email"),
      webpage: document.getElementById("webpage"),
      webpageURL: document.getElementById("webpageURL"),
    },
    skills: {
      skills: document.getElementById("skills"),
      ul1: {
        skills__ul1: document.getElementById("skills__ul1"),
        skills__ul1__li1: document.getElementById("skills__ul1__li1"),
        skills__ul1__li2: document.getElementById("skills__ul1__li2"),
        skills__ul1__li3: document.getElementById("skills__ul1__li3"),
      },
      ul2: {
        skills__ul2: document.getElementById("skills__ul2"),
        skills__ul2__li1: document.getElementById("skills__ul2__li1"),
        skills__ul2__li2: document.getElementById("skills__ul2__li2"),
        skills__ul2__li3: document.getElementById("skills__ul2__li3"),
      },
      ul3: {
        skills__ul3: document.getElementById("skills__ul3"),
        skills__ul3__li1: document.getElementById("skills__ul3__li1"),
        skills__ul3__li2: document.getElementById("skills__ul3__li2"),
        skills__ul3__li3: document.getElementById("skills__ul3__li3"),
      },
    },
    education: {
      education: document.getElementById("education"),
      education__ul1: document.getElementById("education__ul1"),
      education__ul1__li1: document.getElementById("education__ul1__li1"),
      education__ul2: document.getElementById("education__ul2"),
      education__ul2__li2: document.getElementById("education__ul2__li2"),
      education__ul2__li3: document.getElementById("education__ul2__li3"),
    },
    projects: {
      projects: document.getElementById("projects"),
    },
    exp: {
      exp: document.getElementById("exp"),
      exp__ul1: document.getElementById("exp__ul1"),
      exp__ul1__period: document.getElementById("exp__ul1__period"),
      exp__ul1__li1: document.getElementById("exp__ul1__li1"),
      exp__ul1__li2: document.getElementById("exp__ul1__li2"),
      exp__ul2: document.getElementById("exp__ul2"),
      exp__ul2__period: document.getElementById("exp__ul2__period"),
      exp__ul2__li1: document.getElementById("exp__ul2__li1"),
      exp__ul2__li2: document.getElementById("exp__ul2__li2"),
      exp__ul2__li3: document.getElementById("exp__ul2__li3"),
      exp__ul2__li4: document.getElementById("exp__ul2__li4"),
      exp__ul2__li5: document.getElementById("exp__ul2__li5"),
      exp__ul2__li6: document.getElementById("exp__ul2__li6"),
      exp__ul3: document.getElementById("exp__ul3"),
      exp__ul3__period: document.getElementById("exp__ul3__period"),
      exp__ul3__li1: document.getElementById("exp__ul3__li1"),
      exp__ul3__li2: document.getElementById("exp__ul3__li2"),
      exp__ul3__li3: document.getElementById("exp__ul3__li3"),
      exp__ul3__li4: document.getElementById("exp__ul3__li4"),
      exp__ul3__li5: document.getElementById("exp__ul3__li5"),
      exp__ul4: document.getElementById("exp__ul4"),
      exp__ul4__period: document.getElementById("exp__ul4__period"),
      exp__ul4__li1: document.getElementById("exp__ul4__li1"),
      exp__ul4__li2: document.getElementById("exp__ul4__li2"),
      exp__ul4__li3: document.getElementById("exp__ul4__li3"),
      exp__ul4__li4: document.getElementById("exp__ul4__li4"),
      exp__ul4__li5: document.getElementById("exp__ul4__li5"),
      exp__ul4__li6: document.getElementById("exp__ul4__li6"),
      exp__ul4__li7: document.getElementById("exp__ul4__li7"),
      exp__ul4__li8: document.getElementById("exp__ul4__li8"),
      exp__ul5: document.getElementById("exp__ul5"),
      exp__ul5__period: document.getElementById("exp__ul5__period"),
      exp__ul5__li1: document.getElementById("exp__ul5__li1"),
      exp__ul5__li2: document.getElementById("exp__ul5__li2"),
      exp__ul5__li3: document.getElementById("exp__ul5__li3"),
      exp__ul5__li4: document.getElementById("exp__ul5__li4"),
    },
  },
  contact: {
    contact: document.getElementById("h1-contact"),
    inputname: document.getElementById("inputname"),
    inputemail: document.getElementById("inputemail"),
    inputmessage: document.getElementById("message"),
    checkbox: document.getElementById("checkbox-label"),
    submit: document.getElementById("submit-button"),
  },
};

export const elementsContent = {
  any: {
    sv: {
      headerNavMenuLinkHome: "Start",
      headerNavMenuLinkResume: "CV",
      headerNavMenuLinkContact: "Kontakt",
      footerNavFlag: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
      footerNavPDF: "files/Pierre-Neveu_resume-sv.pdf",
    },
  },
  index: {
    sv: {
      h1: "Hej och välkommen till min webbsida.",
      p1: "Jag heter Pierre och den här statiska webbsidan är avsedd att visa en del av mina HTML, CSS och JS kunskaper. Jag hoppas att du kommer att finna det vänligt.",
      p2: "Jag har följt en väg med utbildningsmoduler för professionella front-end-utvecklare tillhandahållna av codewithmosh.com inklusive lektioner, tips om bästa praxis och övningar med utmaningar som jag skulle kunna möta i verkliga arbetssituationer.",
      p3: " Du kan komma åt mitt faktiska CV via navigeringsfältet där du hittar min övergripande yrkeserfarenhet. I projektsektionen kan du också hitta en länk till en dynamik React-appen som heter movly som jag utvecklar för att träna det väsentliga i React. Vissa av programmeringsvalen är inte de mest effektiva alternativen tillgängliga men medvetet att experimentera med de olika aspekterna som React måste erbjudande. Till exempel valde jag att använda både klass- och funktionskomponenter för träning eftersom jag troligen skulle behöva underhålla befintliga appar med klasser i framtiden.",
      cardCSS: {
        li1: "Struktur & hud",
        li2: "Lyhördhet",
        li3: "Stilvalidering...",
      },
      cardHTML: {
        li1: "sökmotoroptimering",
        li2: "Tillgänglighet",
        li3: "Markup validering...",
      },
      cardJS: {
        li1: "Notation/konvention",
        li2: "Objektorienterad",
        li3: "Optimering...",
      },
      cardReactJS: {
        li1: "Funktion, klass, HO komponenter",
        li2: "Formulär, validering, filtrering",
        li3: "Hooks...",
      },
    },
  },
  resume: {
    sv: {
      contact: {
        home: "Hemadress",
        phone: "Telefonnummer",
        email: "E-post",
        webpage: "Webbsida",
        webpageURL: "https://pierre-neveu-resume.netlify.app/#sv",
      },
      skills: {
        skills: "Kompetens",
        ul1: {
          skills__ul1: "Programmering",
          skills__ul1__li1: "Programspråk",
          skills__ul1__li2: "Bibliotek",
          skills__ul1__li3: "Ramverk",
        },
        ul2: {
          skills__ul2: "Tjänster",
          skills__ul2__li1: "Teknisksupport, installationer och felsökning",
          skills__ul2__li2: "Kundsupport och försäljning (SAP, SFDC)",
          skills__ul2__li3: "Redovisning (SAP, Visma eAccounting)",
        },
        ul3: {
          skills__ul3: "Språk",
          skills__ul3__li1: "Franska (modersmål)",
          skills__ul3__li2: "Engelska (flytande)",
          skills__ul3__li3: "Svenska (mellanliggande)",
        },
      },
      education: {
        education: "Utbildning",
        education__ul1: "Programmering",
        education__ul1__li1:
          "Onlinekurser och praktik med en professionell utvecklare i",
        education__ul2: "Ekonomi",
        education__ul2__li2: "Magisterexamen",
        education__ul2__li3: "Licence AES (kandidatexamen i ekonomi)",
      },
      projects: {
        projects: "Projekt",
      },
      exp: {
        exp: "Arbetserfarenhet",
        exp__ul1: "Bokhållare och styrelsesuppleant",
        exp__ul1__period:
          "@ Smidig Redovisningsbyrå NN AB / Jan 2021 till Okt 2022",
        exp__ul1__li1: "Bokföring",
        exp__ul1__li2: "Skattedeklaration",
        exp__ul2: "Försäljningsadministratör",
        exp__ul2__period: "@ Tetrapak / Mar 2020 till Jan 2021",
        exp__ul2__li1:
          "Kundsupport och försäljning, agerar huvudkontakt för kunder & marknadsföretag för reservdelsbeställningar och förfrågningar",
        exp__ul2__li2:
          "Svara på inkommande beställningar och frågor per telefon och e-post",
        exp__ul2__li3:
          "Utför säljadministrativa uppgifter i SAP ECC och CRM och andra interna verktyg & system",
        exp__ul2__li4:
          "Uppföljning av beställningar, skills__ul2nivåavtal och andra nyckelmätningar",
        exp__ul2__li5: "Se till att delar levereras i tid och till bästa pris",
        exp__ul2__li6:
          "Insamling av inköpsorder, vilket säkerställer snabb och korrekt kundfakturering",
        exp__ul3: "Kontraktsadministratör",
        exp__ul3__period: "@ SAP / Okt 2018 till Nov 2019",
        exp__ul3__li1:
          "Skapande av installationer, kundinformation, mjukvara och licensleverans",
        exp__ul3__li2:
          "Insamling av inköpsorder, Säkerställande av snabb och korrekt kundfakturering",
        exp__ul3__li3:
          "Intäktsredovisning, bokföring av journalposter, underhåll och avstämning av reskontrakonton",
        exp__ul3__li4:
          "Säkerställa noggrannhet i de finansiella handlingar genom övervakning och rapportering",
        exp__ul3__li5:
          "Skapa, bokföra och stämma av koncerninterna transaktioner samtidigt som man säkerställer överensstämmelse med SAPs redovisningsprinciper",
        exp__ul4: "HR-administratör",
        exp__ul4__period: "@ Johnson&Johnson / Sep 2017 till Aug 2018",
        exp__ul4__li1:
          "Stödja affärsenheter genom att tillhandahålla expertis på Workday",
        exp__ul4__li2:
          "Samordning av program och aktiviteter inom mänskliga resurser",
        exp__ul4__li3:
          "Supporting development and maintenance of human resources policies",
        exp__ul4__li4:
          "Assistera vid uppföljning av personalbudgeten och ge input till avdelningens verksamhet",
        exp__ul4__li5:
          "Uppdatering av medarbetarfiler för att dokumentera personalåtgärder och för att tillhandahålla information för löner och annan användning",
        exp__ul4__li6:
          "Skapa rapporter med sammanställd data från personalregister",
        exp__ul4__li7:
          "Granska anslagstavlor för anställningsannonser för att säkerställa uppdaterade och lagligt överensstämmande meddelanden",
        exp__ul4__li8:
          "Behandling av löneändringsblanketter och sammanställning av nya medarbetares uppgifter",
        exp__ul5: "Reserådgivare",
        exp__ul5__period: "@ TravelBird / maj 2015 till juni 2017",
        exp__ul5__li1: "Kunder och partners stödjer",
        exp__ul5__li2:
          "Långdistansavtal utvecklingsteam projekt och dokument översättning",
        exp__ul5__li3: "Administration av sociala nätverk",
        exp__ul5__li4: "Telefonförsäljning",
      },
    },
  },
  contact: {
    sv: {
      contact: "Hej, du kan skicka ett meddelande till mig här.",
      inputname: "Ditt namn",
      inputemail: "Din epost",
      inputmessage: "Ditt meddelande",
      checkbox: "Godkänner att aktivera",
      submit: "Skicka",
    },
  },
};
