"use strict";

export const languages = {
    en: {
      menuLinkHome: "Home",
      menuLinkResume: "Resume",
      menuLinkContact: "Contact",
      welcome: "Hi and welcome on my resume.",
      firstTextBlock: `
      <p>
      My name is Pierre and this static web page is intended to demonstrate some 
      of my html, css and JS knowledge. I hope you will find it friendly.
      </p>
      <p>
      I have followed a path of training modules for professional front-end
      developers provided by codewithmosh.com including lessons, best practice
      tips and exercices with challenges that I could face in real work
      situation.
      </p>
      <p>
      You can access my actual resume via the navigation bar where you will find
      my overall professional experience. You will also find a link to a dynamic
      React app called movly that I develop for practicing the essentials of
      React. Some of the programming choices are not the most efficient options
      available but deliberate to experiment the different aspects React has to
      offer. For instance, I chose to use both class and functional components
      for training since I would likely have to maintain existing apps with
      classes in the future.
      </p>`,
      cardUlCSS: `
      <li class="card__li">Structure & Skin</li>
      <li class="card__li">Responsiveness</li>
      <li class="card__li">Style Validation...</li>`,
      cardUlHTML: `
      <li class="card__li">Search engine optimization</li>
			<li class="card__li">Accessibility</li>
			<li class="card__li">Markup Validation...</li>`,
      cardUlJS: `
      <li class="card__li">Notation/Convention</li>
      <li class="card__li">Testing & Troubleshooting</li>
      <li class="card__li">Optimization...</li>`,
      cardUlReactJS:`
      <li class="card__li">Function/Class components</li>
      <li class="card__li">Forms, Validation, Filtering</li>
      <li class="card__li">HOCs, Hooks...</li>`,
    },
    sv: {
      menuLinkHome: "Start",
      menuLinkResume: "CV",
      menuLinkContact: "Kontakt",
      welcome: "Hej och välkommen till mitt CV.",
      firstTextBlock: `
      <p>
      Jag heter Pierre och den här statiska webbsidan är avsedd att visa en del av 
      mina html, css och JS kunskaper. Jag hoppas att du kommer att finna det vänligt.
      </p>
      <p>
      Jag har följt en väg med utbildningsmoduler för professionella front-end-utvecklare 
      tillhandahållna av codewithmosh.com inklusive lektioner, tips om bästa praxis och övningar 
      med utmaningar som jag skulle kunna möta i verkliga arbetssituationer.
      </p>
      <p>
      Du kan komma åt mitt faktiska CV via navigeringsfältet där du hittar
      min övergripande yrkeserfarenhet. Du hittar även en länk till en dynamik
      React-appen som heter movly som jag utvecklar för att träna det väsentliga i
      React. Vissa av programmeringsvalen är inte de mest effektiva alternativen
      tillgängliga men medvetet att experimentera med de olika aspekterna som React måste
      erbjudande. Till exempel valde jag att använda både klass- och funktionskomponenter
      för träning eftersom jag troligen skulle behöva underhålla befintliga appar med
      klasser i framtiden.
      </p>`,
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
    },
  };

export const elements = {
menuLinkHome : document.getElementById("menu__link__home"),
menuLinkResume : document.getElementById("menu__link__resume"),
menuLinkContact : document.getElementById("menu__link__contact"),
welcome : document.getElementById("index__main__welcome"),
firstTextBlock : document.getElementById("index__main__first-text-Block"),
cardUlCSS : document.getElementById("card__ul__CSS"),
cardUlHTML : document.getElementById("card__ul__html"),
cardUlJS : document.getElementById("card__ul__JS"),
cardUlReactJS : document.getElementById("card__ul__ReactJS")
}