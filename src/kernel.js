import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import KaTeX from 'reveal.js/plugin/math/math.esm.js'

class RevealJSCell {
    ref = []

    dispose() {

      console.warn('slide got disposed!');
      this.ref.forEach((e) => e.dispose());

      this.deck.destroy();
    }
    
    constructor(parent, data) {
      const self = this;
      let deck = new Reveal(parent.element, {
        embedded: true,
        keyboard: true,

        // Optional function that blocks keyboard events when retuning false
        //
        // If you set this to 'focused', we will only capture keyboard events
        // for embedded decks when they are in focus
        keyboardCondition: null,
        slideNumber: true,
        plugins: [ Markdown, KaTeX ]
      } );

      const container = document.createElement('div');
      container.classList.add('reveal');

      const slides = document.createElement('div');
      slides.classList.add('slides');

      container.appendChild(slides);

      parent.element.appendChild(container);

      

      parent.element.classList.add('padding-fix');

      //parent.element.style.height = "500px";

      let string = `
      <section data-markdown>
      <textarea data-template>
          ${data}
      </textarea>
      </section>      
      `;

      const r = {
        scripts: new RegExp(/\<(?:[^:]+:)?script\>.*?\<\/(?:[^:]+:)?script\>/gm),
        events: new RegExp(/RVJSEvent\["([^"]+)"\]/g),
        fe: new RegExp(/FrontEndExecutable\["([^"]+)"\]/g)
      };
      
      const scripts = [];
      
      const replacer = (arr) => {
        return function (match, p1, p2, /* …, */ pN, offset, string, groups) {
        arr.push(match);
        return '';
        }
      }

      const events = {};
      const fe = [];
      //string.match(new RegExp(/---\n/gm)).length
      
      const eventReplacer = (arr) => {
        return function (match, a,b,c) {

  
        let narray = string.slice(0, b).match(new RegExp(/---\n/gm));
          
        if (!Array.isArray(narray)) narray = [];
          
        arr[narray.length] = match.slice(11,-2);
        return '';
        }
      }

      const feReplacer = (fe) => {
        return function (match, index) {
          const uid = match.slice(20,-2);
          fe.push(uid);
          return `<div id="${uid}" class="slide-frontend-object"></div>`;
        }
      }

      string = string.replace('<dummy>', '').replace('</dummy>', '');

      //extract scripts
      string = string.replace(r.scripts, replacer(scripts));

      //extract events
      string = string.replace(r.events, eventReplacer(events));

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));

      deck.on( 'slidechanged', event => {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        const slide = event.indexh;
        console.log(slide);
        if (event.previousSlide == event.currentSlide) return;

          if (slide in events) {
            server.emitt(events[slide], slide);
          }

      } );

      let blocked = false;

      const fragmentFire = (x,y) => {
        if (blocked) return;
        blocked = true;
        setTimeout(()=>{
          blocked = false;
        }, 100);
        server.emitt(events[x]+'-fragment-'+String(y+1), y)
      };

      deck.on( 'fragmentshown', event => {
        const state = deck.getState();
   
        if (state.indexh in events) {
          fragmentFire(state.indexh, state.indexf);
        }
      } );

      
      
      slides.innerHTML = string;

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      

      deck.initialize();

      fe.forEach((obj, i) => {
        setTimeout(async () => {
          const cuid = Date.now() + Math.floor(Math.random() * 10009);
          var global = {call: cuid};
      
          let env = {global: global, element: document.getElementById(obj)}; //Created in CM6
          console.log("CM6: creating an object with key "+this.name);
          const fobj = new ExecutableObject(obj, env);
          fobj.execute()     
      
          self.ref.push(fobj);          
        }, (i+1) * 200)
      });

      this.deck = deck;

      return this;
    }
  }
  
  window.SupportedLanguages.push({
    check: (r) => {return(r[0] === '.slide' || r[0] === '.slides')},
    plugins: [window.markdown()],
    name: window.markdownLanguage.name
  });

  

  window.SupportedCells['slide'] = {
    view: RevealJSCell
  };
