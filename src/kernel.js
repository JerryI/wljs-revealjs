import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

import {RevealPointer} from './pointer/pointer.js'
import {RevealDrawer} from './drawer/drawer.js'

import KaTeX from 'reveal.js/plugin/math/math.esm.js'

function unicodeToChar(text) {
  return text.replace(/\\:[\da-f]{4}/gi, 
         function (match) {
              return String.fromCharCode(parseInt(match.replace(/\\:/g, ''), 16));
         });
};

class RevealJSCell {
    envs = []

    dispose() {

      console.warn('slide got disposed!');
      console.warn('WLX cell dispose...');
      for (const env of this.envs) {
        for (const obj of Object.values(env.global.stack))  {
          console.log('dispose');
          obj.dispose();
        }
      }

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
        plugins: [ Markdown, KaTeX, RevealPointer, RevealDrawer(self) ],
        pointer: {
          key: "q", // key to enable pointer, default "q", not case-sensitive
          color: "red", // color of a cursor, default "red" any valid CSS color
          opacity: 0.8, // opacity of cursor, default 0.8
          pointerSize: 12, // pointer size in px, default 12
          alwaysVisible: false, // should pointer mode be always visible? default "false"
          tailLength: 10, // NOT IMPLEMENTED YET!!! how long the "tail" should be? default 10
        },

        drawer: {
          toggleDrawKey: "d", // (optional) key to enable drawing, default "d"
          toggleBoardKey: "t", // (optional) key to show drawing board, default "t"
          colors: ["#fa1e0e", "#8ac926", "#1982c4", "#ffca3a"], // (optional) list of colors avaiable (hex color codes)
          color: "#FF0000", // (optional) color of a cursor, first color from `codes` is a default
          pathSize: 4, // (optional) path size in px, default 4
        }
      } );

      const container = document.createElement('div');
      container.classList.add('reveal');

      const slides = document.createElement('div');
      slides.classList.add('slides');

      container.appendChild(slides);

      parent.element.appendChild(container);

      
      if (!core._isWindow) parent.element.classList.add('reveal-fixed-height');
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
        fe: new RegExp(/FrontEndExecutable\[([^\[|\]]+)\]/g),
        feh: new RegExp(/FrontEndExecutableHold\[([^\[|\]]+)\]/g)
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

      const feReplacer = (fe, offset=0) => {
        return function (match, index) {
          const uid = match.slice(19 + offset,-1);
          fe.push(uid);
          return `<div id="slide-${uid}" class="slide-frontend-object"></div>`;
        }
      }
      
    
      string = string.replace('<dummy >', '').replace('</dummy>', '');

      //extract scripts
      string = string.replace(r.scripts, replacer(scripts));

      //extract events
      string = string.replace(r.events, eventReplacer(events));

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));
      string = string.replace(r.feh, feReplacer(fe, 4));

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
        server.kernel.emitt(events[x]+'-fragment-'+String(y+1), y)
      };

      deck.on( 'fragmentshown', event => {
        const state = deck.getState();
   
        if (state.indexh in events) {
          fragmentFire(state.indexh, state.indexf);
        }
      } );

      
      
      slides.innerHTML = unicodeToChar(string);
  

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      this.deck = deck;

      

      const runOverFe = async function () {
        for (const uid of fe) {

          const cuid = Date.now() + Math.floor(Math.random() * 10009);
          var global = {call: cuid};

          console.warn('loading executable on a slide...');
          console.log(uid);
          console.log(document.getElementById(`slide-${uid}`));
          
      
          let env = {global: global, element: document.getElementById(`slide-${uid}`)}; 
          console.log("Slides: creating an object");


          console.log('forntend executable');

          let obj;
          console.log('check cache');
          if (ObjectHashMap[uid]) {
              obj = ObjectHashMap[uid];
          } else {
              obj = new ObjectStorage(uid);
          }
          console.log(obj);
      
          const copy = env;
          const store = await obj.get();
          const instance = new ExecutableObject('slides-stored-'+uuidv4(), copy, store);
          instance.assignScope(copy);
          obj.assign(instance);
      
          instance.execute();          
      
          self.envs.push(env);          
      };
    };

      //FIXME must be an a sideeffect after slide was mounted
      //setTimeout(runOverFe, 300);

      deck.initialize().then(() => runOverFe());

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
