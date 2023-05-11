"use strict";

export const getHeaderNavElements = () => {
  const elements = {
    headerNavMenuLinkHome: document.getElementById("header__nav__menu__link-home"),
    headerNavMenuLinkResume: document.getElementById("header__nav__menu__link-resume"),
    headerNavMenuLinkGame: document.getElementById("header__nav__menu__link-game"),
    headerNavMenuLinkContact: document.getElementById("header__nav__menu__link-contact"),
  };

  const headerNavElements = [];

  Object.entries(elements).forEach((el) => {
    headerNavElements.push({ name: `${el[0]}`, value: el[1] });
  });

  return headerNavElements;
};

export const getFooterNavElements = () => {
  const elements = { footerNavFlag: document.getElementById("footer__nav__flag"), footerNavPDF: document.getElementById("footer__nav__pdf") };

  const footerNavElements = [];

  Object.entries(elements).forEach((el) => {
    footerNavElements.push({ name: `${el[0]}`, value: el[1] });
  });
  return footerNavElements;
};

export const getIndexElements = () => {
  const elements = {
    h1: document.getElementById("index__main__h1"),
    p1: document.getElementById("index__main__p1"),
    p2: document.getElementById("index__main__p2"),
    p3: document.getElementById("index__main__p3"),
    p4: document.getElementById("index__main__p4"),
    cardCSSLi1: document.getElementById("css-card__li1"),
    cardCSSLi2: document.getElementById("css-card__li2"),
    cardCSSLi3: document.getElementById("css-card__li3"),
    cardHTMLLi1: document.getElementById("html-card__li1"),
    cardHTMLLi2: document.getElementById("html-card__li2"),
    cardHTMLLi3: document.getElementById("html-card__li3"),
    cardJSLi1: document.getElementById("js-card__li1"),
    cardJSLi2: document.getElementById("js-card__li2"),
    cardJSLi3: document.getElementById("js-card__li3"),
    cardReactJSLi1: document.getElementById("reactjs-card__li1"),
    cardReactJSLi2: document.getElementById("reactjs-card__li2"),
    cardReactJSLi3: document.getElementById("reactjs-card__li3"),
  };

  const indexElements = [];

  Object.entries(elements).forEach((el) => {
    indexElements.push({ name: `${el[0]}`, value: el[1] });
  });

  return indexElements;
};

export const getResumeElements = () => {
  const elements = {
    home: document.getElementById("home"),
    phone: document.getElementById("phone"),
    email: document.getElementById("email"),
    webpage: document.getElementById("webpage"),
    webpageURL: document.getElementById("webpageURL"),
    skills: document.getElementById("skills"),
    skillsUl1: document.getElementById("skills__ul1"),
    skillsUl1Li1: document.getElementById("skills__ul1__li1"),
    skillsUl1Li2: document.getElementById("skills__ul1__li2"),
    skillsUl1Li3: document.getElementById("skills__ul1__li3"),
    skillsUl2: document.getElementById("skills__ul2"),
    skillsUl2Li1: document.getElementById("skills__ul2__li1"),
    skillsUl2Li2: document.getElementById("skills__ul2__li2"),
    skillsUl2Li3: document.getElementById("skills__ul2__li3"),
    skillsUl3: document.getElementById("skills__ul3"),
    skillsUl3Li1: document.getElementById("skills__ul3__li1"),
    skillsUl3Li2: document.getElementById("skills__ul3__li2"),
    skillsUl3Li3: document.getElementById("skills__ul3__li3"),
    education: document.getElementById("education"),
    educationUl1: document.getElementById("education__ul1"),
    educationUl1Li1: document.getElementById("education__ul1__li1"),
    educationUl2: document.getElementById("education__ul2"),
    educationUl2Li2: document.getElementById("education__ul2__li2"),
    educationUl2Li3: document.getElementById("education__ul2__li3"),
    projects: document.getElementById("projects"),
    exp: document.getElementById("exp"),
    expUl1: document.getElementById("exp__ul1"),
    expUl1Period: document.getElementById("exp__ul1__period"),
    expUl1Li1: document.getElementById("exp__ul1__li1"),
    expUl1Li2: document.getElementById("exp__ul1__li2"),
    expUl2: document.getElementById("exp__ul2"),
    expUl2Period: document.getElementById("exp__ul2__period"),
    expUl2Li1: document.getElementById("exp__ul2__li1"),
    expUl2Li2: document.getElementById("exp__ul2__li2"),
    expUl2Li3: document.getElementById("exp__ul2__li3"),
    expUl2Li4: document.getElementById("exp__ul2__li4"),
    expUl2Li5: document.getElementById("exp__ul2__li5"),
    expUl2Li6: document.getElementById("exp__ul2__li6"),
    expUl3: document.getElementById("exp__ul3"),
    expUl3Period: document.getElementById("exp__ul3__period"),
    expUl3Li1: document.getElementById("exp__ul3__li1"),
    expUl3Li2: document.getElementById("exp__ul3__li2"),
    expUl3Li3: document.getElementById("exp__ul3__li3"),
    expUl3Li4: document.getElementById("exp__ul3__li4"),
    expUl3Li5: document.getElementById("exp__ul3__li5"),
    expUl4: document.getElementById("exp__ul4"),
    expUl4Period: document.getElementById("exp__ul4__period"),
    expUl4Li1: document.getElementById("exp__ul4__li1"),
    expUl4Li2: document.getElementById("exp__ul4__li2"),
    expUl4Li3: document.getElementById("exp__ul4__li3"),
    expUl4Li4: document.getElementById("exp__ul4__li4"),
    expUl4Li5: document.getElementById("exp__ul4__li5"),
    expUl4Li6: document.getElementById("exp__ul4__li6"),
    expUl4Li7: document.getElementById("exp__ul4__li7"),
    expUl4Li8: document.getElementById("exp__ul4__li8"),
    expUl5: document.getElementById("exp__ul5"),
    expUl5Period: document.getElementById("exp__ul5__period"),
    expUl5Li1: document.getElementById("exp__ul5__li1"),
    expUl5Li2: document.getElementById("exp__ul5__li2"),
    expUl5Li3: document.getElementById("exp__ul5__li3"),
    expUl5Li4: document.getElementById("exp__ul5__li4"),
  };

  const resumeElements = [];

  Object.entries(elements).forEach((el) => {
    resumeElements.push({ name: `${el[0]}`, value: el[1] });
  });
  return resumeElements;
};

export const getContactElements = () => {
  const elements = {
    contact: document.getElementById("h1-contact"),
    inputname: document.getElementById("inputname"),
    inputemail: document.getElementById("inputemail"),
    inputmessage: document.getElementById("message"),
    checkbox: document.getElementById("checkbox-label"),
    submit: document.getElementById("submit-button"),
  };

  const contactElements = [];

  Object.entries(elements).forEach((el) => {
    contactElements.push({ name: `${el[0]}`, value: el[1] });
  });

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
      p1: "Jag heter Pierre och den här statiska webbsidan är avsedd att visa en del av mina HTML, CSS och JS kunskaper.",
      p2: "Jag har följt en väg med utbildningsmoduler för professionella front-end-utvecklare tillhandahållna av codewithmosh.com inklusive lektioner, tips om bästa praxis och övningar med utmaningar som jag skulle kunna möta i verkliga arbetssituationer. Varje app jag skapar är dator- och mobilvänlig. De är också strukturerade med så många återanvändbara komponenter som möjligt för bättre läsbarhet och underhåll.",
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
