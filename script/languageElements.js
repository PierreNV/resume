"use strict";

export const getHeaderNavElements = () => {
  const headerNavElements = [
    { name: "headerNavMenuLinkHome", value: document.getElementById("header__nav__menu__link-home") },
    { name: "headerNavMenuLinkResume", value: document.getElementById("header__nav__menu__link-resume") },
    { name: "headerNavMenuLinkGame", value: document.getElementById("header__nav__menu__link-game") },
    { name: "headerNavMenuLinkContact", value: document.getElementById("header__nav__menu__link-contact") },
  ];

  return headerNavElements;
};

export const getFooterNavElements = () => {
  const footerNavElements = [
    { name: "footerNavFlag", value: document.getElementById("footer__nav__flag") },
    { name: "footerNavPDF", value: document.getElementById("footer__nav__pdf") },
  ];

  return footerNavElements;
};

export const getIndexElements = () => {
  const indexElements = [
    { name: "h1", value: document.getElementById("index__main__h1") },
    { name: "p1", value: document.getElementById("index__main__p1") },
    { name: "p2", value: document.getElementById("index__main__p2") },
    { name: "p3", value: document.getElementById("index__main__p3") },
    { name: "p4", value: document.getElementById("index__main__p4") },
    { name: "cardCSSLi1", value: document.getElementById("css-card__li1") },
    { name: "cardCSSLi2", value: document.getElementById("css-card__li2") },
    { name: "cardCSSLi3", value: document.getElementById("css-card__li3") },
    { name: "cardHTMLLi1", value: document.getElementById("html-card__li1") },
    { name: "cardHTMLLi2", value: document.getElementById("html-card__li2") },
    { name: "cardHTMLLi3", value: document.getElementById("html-card__li3") },
    { name: "cardJSLi1", value: document.getElementById("js-card__li1") },
    { name: "cardJSLi2", value: document.getElementById("js-card__li2") },
    { name: "cardJSLi3", value: document.getElementById("js-card__li3") },
    { name: "cardReactJSLi1", value: document.getElementById("reactjs-card__li1") },
    { name: "cardReactJSLi2", value: document.getElementById("reactjs-card__li2") },
    { name: "cardReactJSLi3", value: document.getElementById("reactjs-card__li3") },
  ];

  return indexElements;
};

export const getResumeElements = () => {
  const resumeElements = [
    { name: "home", value: document.getElementById("home") },
    { name: "phone", value: document.getElementById("phone") },
    { name: "email", value: document.getElementById("email") },
    { name: "webpage", value: document.getElementById("webpage") },
    { name: "webpageURL", value: document.getElementById("webpageURL") },
    { name: "skills", value: document.getElementById("skills") },
    { name: "skillsUl1", value: document.getElementById("skills__ul1") },
    { name: "skillsUl1Li1", value: document.getElementById("skills__ul1__li1") },
    { name: "skillsUl1Li2", value: document.getElementById("skills__ul1__li2") },
    { name: "skillsUl1Li3", value: document.getElementById("skills__ul1__li3") },
    { name: "skillsUl2", value: document.getElementById("skills__ul2") },
    { name: "skillsUl2Li1", value: document.getElementById("skills__ul2__li1") },
    { name: "skillsUl2Li2", value: document.getElementById("skills__ul2__li2") },
    { name: "skillsUl2Li3", value: document.getElementById("skills__ul2__li3") },
    { name: "skillsUl3", value: document.getElementById("skills__ul3") },
    { name: "skillsUl3Li1", value: document.getElementById("skills__ul3__li1") },
    { name: "skillsUl3Li2", value: document.getElementById("skills__ul3__li2") },
    { name: "skillsUl3Li3", value: document.getElementById("skills__ul3__li3") },
    { name: "education", value: document.getElementById("education") },
    { name: "educationUl1", value: document.getElementById("education__ul1") },
    { name: "educationUl1Li1", value: document.getElementById("education__ul1__li1") },
    { name: "educationUl2", value: document.getElementById("education__ul2") },
    { name: "educationUl2Li2", value: document.getElementById("education__ul2__li2") },
    { name: "educationUl2Li3", value: document.getElementById("education__ul2__li3") },
    { name: "projects", value: document.getElementById("projects") },
    { name: "exp", value: document.getElementById("exp") },
    { name: "expUl1", value: document.getElementById("exp__ul1") },
    { name: "expUl1Period", value: document.getElementById("exp__ul1__period") },
    { name: "expUl1Li1", value: document.getElementById("exp__ul1__li1") },
    { name: "expUl1Li2", value: document.getElementById("exp__ul1__li2") },
    { name: "expUl2", value: document.getElementById("exp__ul2") },
    { name: "expUl2Period", value: document.getElementById("exp__ul2__period") },
    { name: "expUl2Li1", value: document.getElementById("exp__ul2__li1") },
    { name: "expUl2Li2", value: document.getElementById("exp__ul2__li2") },
    { name: "expUl2Li3", value: document.getElementById("exp__ul2__li3") },
    { name: "expUl2Li4", value: document.getElementById("exp__ul2__li4") },
    { name: "expUl2Li5", value: document.getElementById("exp__ul2__li5") },
    { name: "expUl2Li6", value: document.getElementById("exp__ul2__li6") },
    { name: "expUl3", value: document.getElementById("exp__ul3") },
    { name: "expUl3Period", value: document.getElementById("exp__ul3__period") },
    { name: "expUl3Li1", value: document.getElementById("exp__ul3__li1") },
    { name: "expUl3Li2", value: document.getElementById("exp__ul3__li2") },
    { name: "expUl3Li3", value: document.getElementById("exp__ul3__li3") },
    { name: "expUl3Li4", value: document.getElementById("exp__ul3__li4") },
    { name: "expUl3Li5", value: document.getElementById("exp__ul3__li5") },
    { name: "expUl4", value: document.getElementById("exp__ul4") },
    { name: "expUl4Period", value: document.getElementById("exp__ul4__period") },
    { name: "expUl4Li1", value: document.getElementById("exp__ul4__li1") },
    { name: "expUl4Li2", value: document.getElementById("exp__ul4__li2") },
    { name: "expUl4Li3", value: document.getElementById("exp__ul4__li3") },
    { name: "expUl4Li4", value: document.getElementById("exp__ul4__li4") },
    { name: "expUl4Li5", value: document.getElementById("exp__ul4__li5") },
    { name: "expUl4Li6", value: document.getElementById("exp__ul4__li6") },
    { name: "expUl4Li7", value: document.getElementById("exp__ul4__li7") },
    { name: "expUl4Li8", value: document.getElementById("exp__ul4__li8") },
    { name: "expUl5", value: document.getElementById("exp__ul5") },
    { name: "expUl5Period", value: document.getElementById("exp__ul5__period") },
    { name: "expUl5Li1", value: document.getElementById("exp__ul5__li1") },
    { name: "expUl5Li2", value: document.getElementById("exp__ul5__li2") },
    { name: "expUl5Li3", value: document.getElementById("exp__ul5__li3") },
    { name: "expUl5Li4", value: document.getElementById("exp__ul5__li4") },
  ];

  return resumeElements;
};

export const getContactElements = () => {
  const contactElements = [
    { name: "contact", value: document.getElementById("h1-contact") },
    { name: "inputname", value: document.getElementById("inputname") },
    { name: "inputemail", value: document.getElementById("inputemail") },
    { name: "inputmessage", value: document.getElementById("message") },
    { name: "checkbox", value: document.getElementById("checkbox-label") },
    { name: "submit", value: document.getElementById("submit-button") },
  ];

  return contactElements;
};

export const elementsContent = {
  headerNav: {
    sv: {
      headerNavMenuLinkHome: "Start",
      headerNavMenuLinkResume: "CV",
      headerNavMenuLinkContact: "Kontakt",
      headerNavMenuLinkGame: "Spel",
    },
  },
  footerNav: {
    sv: {
      footerNavFlag: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
      footerNavPDF: "files/Report-sv.pdf",
    },
  },
  index: {
    sv: {
      h1: "Hej och välkommen till min webbsida.",
      p1: "Jag heter Pierre och den här webbsidan är min lekplats för att öva på min HTML, CSS och JS.",
      p2: "Jag har följt en väg av utbildningsmoduler för professionella frontend-utvecklare inklusive lektioner, tips om bästa praxis och övningar med utmaningar som jag skulle kunna möta i verklig arbetssituation. Varje app jag skapar är responsive, dator- och mobilvänlig, strukturerad med tydlighet för att göra underhållet enkelt.",
      p3: "Du kan komma åt mitt CV via navigeringsfältet där du hittar min övergripande yrkeserfarenhet. I projektsektionen kan du också hitta en länk till en dynamik React-appen som heter movly som jag utvecklar för att träna det väsentliga i React.",
      p4: "Du kan testa demospelet Scary Things som jag utvecklar för att träna JS. Som du märker om du går igenom arkivet, är jag uppmärksam på att ge en tydlig struktur till projektet, skriva läsbara skript och skapa återanvändbara komponenter. Jag implementerade virtuella pilar för pekskärmar så det går att spela det på mobilen också. du kan komma åt det via navigeringsfältet, ha kul!",
      cardCSSLi1: "Struktur & hud",
      cardCSSLi2: "Lyhördhet",
      cardCSSLi3: "Stilvalidering...",
      cardHTMLLi1: "sökmotoroptimering",
      cardHTMLLi2: "Tillgänglighet",
      cardHTMLLi3: "Markup validering...",
      cardJSLi1: "Notation/konvention",
      cardJSLi2: "Objektorienterad",
      cardJSLi3: "Optimering...",
      cardReactJSLi1: "Funktion, klass, HO komponenter",
      cardReactJSLi2: "Formulär, validering, filtrering",
      cardReactJSLi3: "Hooks...",
    },
  },
  resume: {
    sv: {
      home: "Hemadress",
      phone: "Telefonnummer",
      email: "E-post",
      webpage: "Webbsida",
      webpageURL: "https://pierre-neveu-resume.netlify.app/#sv",
      skills: "Kompetens",
      skillsUl1: "Programmering",
      skillsUl1Li1: "Programspråk",
      skillsUl1Li2: "Bibliotek",
      skillsUl1Li3: "Ramverk",
      skillsUl2: "Övriga kunskaper",
      skillsUl2Li1: "Teknisksupport, installationer och felsökning",
      skillsUl2Li2: "Kundsupport och försäljning (SAP, SFDC)",
      skillsUl2Li3: "Redovisning (SAP, Visma eAccounting)",
      skillsUl3: "Språk",
      skillsUl3Li1: "Franska (modersmål)",
      skillsUl3Li2: "Engelska (flytande)",
      skillsUl3Li3: "Svenska (mellanliggande)",
      education: "Utbildning",
      educationUl1: "Programmering",
      educationUl1Li1: "Onlinekurser och praktik med en professionell utvecklare i",
      educationUl2: "Ekonomi",
      educationUl2Li2: "Magisterexamen",
      educationUl2Li3: "Licence AES (kandidatexamen i ekonomi)",
      projects: "Projekt",
      exp: "Övriga Arbetslivserfarenheter",
      expUl1: "Bokhållare och styrelsesuppleant",
      expUl1Period: "@ Smidig Redovisningsbyrå NN AB / Jan 2021 till Okt 2022",
      expUl1Li1: "Bokföring",
      expUl1Li2: "Skattedeklaration",
      expUl2: "Försäljningsadministratör",
      expUl2Period: "@ Tetrapak / Mar 2020 till Jan 2021",
      expUl2Li1: "Kundsupport och försäljning, agerar huvudkontakt för kunder & marknadsföretag för reservdelsbeställningar och förfrågningar",
      expUl2Li2: "Svara på inkommande beställningar och frågor per telefon och e-post",
      expUl2Li3: "Utför säljadministrativa uppgifter i SAP ECC och CRM och andra interna verktyg & system",
      expUl2Li4: "Uppföljning av beställningar, skills__ul2nivåavtal och andra nyckelmätningar",
      expUl2Li5: "Se till att delar levereras i tid och till bästa pris",
      expUl2Li6: "Insamling av inköpsorder, vilket säkerställer snabb och korrekt kundfakturering",
      expUl3: "Kontraktsadministratör",
      expUl3Period: "@ SAP / Okt 2018 till Nov 2019",
      expUl3Li1: "Skapande av installationer, kundinformation, mjukvara och licensleverans",
      expUl3Li2: "Insamling av inköpsorder, Säkerställande av snabb och korrekt kundfakturering",
      expUl3Li3: "Intäktsredovisning, bokföring av journalposter, underhåll och avstämning av reskontrakonton",
      expUl3Li4: "Säkerställa noggrannhet i de finansiella handlingar genom övervakning och rapportering",
      expUl3Li5: "Skapa, bokföra och stämma av koncerninterna transaktioner samtidigt som man säkerställer överensstämmelse med SAPs redovisningsprinciper",
      expUl4: "HR-administratör",
      expUl4Period: "@ Johnson&Johnson / Sep 2017 till Aug 2018",
      expUl4Li1: "Stödja affärsenheter genom att tillhandahålla expertis på Workday",
      expUl4Li2: "Samordning av program och aktiviteter inom mänskliga resurser",
      expUl4Li3: "Supporting development and maintenance of human resources policies",
      expUl4Li4: "Assistera vid uppföljning av personalbudgeten och ge input till avdelningens verksamhet",
      expUl4Li5: "Uppdatering av medarbetarfiler för att dokumentera personalåtgärder och för att tillhandahålla information för löner och annan användning",
      expUl4Li6: "Skapa rapporter med sammanställd data från personalregister",
      expUl4Li7: "Granska anslagstavlor för anställningsannonser för att säkerställa uppdaterade och lagligt överensstämmande meddelanden",
      expUl4Li8: "Behandling av löneändringsblanketter och sammanställning av nya medarbetares uppgifter",
      expUl5: "Reserådgivare",
      expUl5Period: "@ TravelBird / maj 2015 till juni 2017",
      expUl5Li1: "Kunder och partners stödjer",
      expUl5Li2: "Långdistansavtal utvecklingsteam projekt och dokument översättning",
      expUl5Li3: "Administration av sociala nätverk",
      expUl5Li4: "Telefonförsäljning",
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
