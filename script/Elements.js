"use strict";

export const elements = {
  any: {
    navLinkHome : document.getElementById("menu__link__home"),
    navLinkResume : document.getElementById("menu__link__resume"),
    navLinkContact : document.getElementById("menu__link__contact"),},
  index: {
    welcome : document.getElementById("index__main__welcome"),
    firstParagraph : document.getElementById("index__main__firstParagraph"),
    secondParagraph : document.getElementById("index__main__secondParagraph"),
    thirdParagraph : document.getElementById("index__main__thirdParagraph"),
    cardUlCSS : document.getElementById("card__ul__CSS"),
    cardUlHTML : document.getElementById("card__ul__html"),
    cardUlJS : document.getElementById("card__ul__JS"),
    cardUlReactJS : document.getElementById("card__ul__ReactJS")},
}

export const ElementsContent = {
  any: { 
      sv: {
      navLinkHome: "Start",
      navLinkResume: "CV",
      navLinkContact: "Kontakt",
  },
},
  index: {
    sv: {
    firstParagraph: "Jag heter Pierre och den här statiska webbsidan är avsedd att visa en del av mina html, css och JS kunskaper. Jag hoppas att du kommer att finna det vänligt.",
    secondParagraph: "Jag har följt en väg med utbildningsmoduler för professionella front-end-utvecklare tillhandahållna av codewithmosh.com inklusive lektioner, tips om bästa praxis och övningar med utmaningar som jag skulle kunna möta i verkliga arbetssituationer.",
    thirdParagraph: " Du kan komma åt mitt faktiska CV via navigeringsfältet där du hittar min övergripande yrkeserfarenhet. Du hittar även en länk till en dynamik React-appen som heter movly som jag utvecklar för att träna det väsentliga i React. Vissa av programmeringsvalen är inte de mest effektiva alternativen tillgängliga men medvetet att experimentera med de olika aspekterna som React måste erbjudande. Till exempel valde jag att använda både klass- och funktionskomponenter för träning eftersom jag troligen skulle behöva underhålla befintliga appar med klasser i framtiden.",
    cardUlCSS: `
    <li class="card__li">Struktur & hud</li>
    <li class="card__li">Lyhördhet</li>
    <li class="card__li">Stilvalidering...</li>`,
    cardUlHTML: `
    <li class="card__li">sökmotoroptimering</li>
    <li class="card__li">Tillgänglighet</li>
    <li class="card__li">Markup validering...</li>`,
    cardUlJS: `
    <li class="card__li">Notation/konvention</li>
    <li class="card__li">Test & Felsökning</li>
    <li class="card__li">Optimering...</li>`,
    cardUlReactJS:`
    <li class="card__li">Funktion/klass komponenter</li>
    <li class="card__li">Formulär, validering, filtrering</li>
    <li class="card__li">HOC, Hooks...</li>`,
  },},
  };
