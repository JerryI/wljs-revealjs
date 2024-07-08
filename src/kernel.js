import Reveal from 'reveal.js';
import Markdown from './markdown/markdown.js';

import {RevealPointer} from './pointer/pointer.js'
import {RevealDrawer} from './drawer/drawer.js'

import {KaTeX} from './katex/katex.js'

const pasteFile = {
  transaction: (ev, view, id, length) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      const channel = view.dom.ocellref.origin.channel;
      server._emitt(channel, `<|"Channel"->"${id}", "Length"->${length}, "CellType"->"md"|>`, 'Forwarded["CM:PasteEvent"]');
    }
  },

  file: (ev, view, id, name, result) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      server.emitt(id, `<|"Data"->"${result}", "Name"->"${name}"|>`, 'File');
    }
  }
}

const pasteDrop = {
  transaction: (ev, view, id, length) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      const channel = view.dom.ocellref.origin.channel;
      server._emitt(channel, `<|"Channel"->"${id}", "Length"->${length}, "CellType"->"md"|>`, 'Forwarded["CM:DropEvent"]');
    }
  },

  file: (ev, view, id, name, result) => {
    console.log(view.dom.ocellref);
    if (view.dom.ocellref) {
      server.emitt(id, `<|"Data"->"${result}", "Name"->"${name}"|>`, 'File');
    }
  }
}


function unicodeToChar(text) {
  return text.replace(/\\:[\da-f]{4}/gi, 
         function (match) {
              return String.fromCharCode(parseInt(match.replace(/\\:/g, ''), 16));
         });
};

const decks = {};

core.SlidesInternalEvent = async (args, env) => {
  console.log('Slide event!');

  const type = await interpretate(args[0], env);
  const data = await interpretate(args[1], env);

  Object.values(decks).forEach((deck) => {
    deck[type](data);
  });
}

let cnt = 0;

class RevealJSCell {
    envs = []
    events
    cnt

    dispose() {


      console.warn('slide got disposed!');

      for (const key of Object.keys(this.events)) {
        server.kernel.emitt(this.events[key][0], 'True', 'Destroy');
      }

      console.warn('WLX cell dispose...');
      for (const env of this.envs) {
        for (const obj of Object.values(env.global.stack))  {
          console.log('dispose');
          obj.dispose();
        }
      }

      delete decks[this.cnt];

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
        plugins: [ Markdown, KaTeX, RevealPointer /*, RevealDrawer(self)*/ ],
        pointer: {
          key: "q", // key to enable pointer, default "q", not case-sensitive
          color: "red", // color of a cursor, default "red" any valid CSS color
          opacity: 0.8, // opacity of cursor, default 0.8
          pointerSize: 12, // pointer size in px, default 12
          alwaysVisible: false, // should pointer mode be always visible? default "false"
          tailLength: 10, // NOT IMPLEMENTED YET!!! how long the "tail" should be? default 10
        }/*,

        drawer: {
          toggleDrawKey: "d", // (optional) key to enable drawing, default "d"
          toggleBoardKey: "t", // (optional) key to show drawing board, default "t"
          colors: ["#fa1e0e", "#8ac926", "#1982c4", "#ffca3a"], // (optional) list of colors avaiable (hex color codes)
          color: "#FF0000", // (optional) color of a cursor, first color from `codes` is a default
          pathSize: 4, // (optional) path size in px, default 4
        }*/
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
        events: new RegExp(/RVJSEvent\["([^"]+)","([^"]+)"\]/g),
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
  
        let narray = string.slice(0, c).match(new RegExp(/---\n/gm));
          
        if (!Array.isArray(narray)) narray = [];
        
        arr[narray.length] = [a,b];
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
      console.log(string);
      string = string.replace(r.events, eventReplacer(events));
      console.log(events);

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));
      string = string.replace(r.feh, feReplacer(fe, 4));

      let previousSlide = false;

      deck.on( 'slidechanged', event => {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        const slide = event.indexh;
        console.log(slide);
        if (event.previousSlide == event.currentSlide) return;

        if (previousSlide !== false) {
          server.kernel.emitt(events[previousSlide][0], slide - previousSlide, 'Left');
          previousSlide = false;
        }

        console.log(Object.keys(events).includes(String(slide)));
          if (Object.keys(events).includes(String(slide))) {
            console.log(events[slide]);
            server.kernel.emitt(events[slide][0], slide, events[slide][1]);
            previousSlide = slide;
          }

      } );

      let blocked = false;

      const fragmentFire = (x,y) => {
        if (blocked) return;
        blocked = true;
        setTimeout(()=>{
          blocked = false;
        }, 100);
        server.kernel.emitt(events[x][0], y, 'fragment-'+String(y+1));
        console.log('fragment fire!');
       
      };



      deck.on( 'fragmentshown', event => {
        const state = deck.getState();
   
        if (Object.keys(events).includes(String(state.indexh))) {
          fragmentFire(state.indexh, state.indexf);
        }
      } );

      
      
      slides.innerHTML = unicodeToChar(string);
  

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      this.deck = deck;

      

      this.cnt = (cnt++);
      decks[this.cnt] = deck;

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

    //sideeffect
      deck.initialize().then(() => {
        runOverFe();
        //when everyhting is mounted. fire an event for the first slide
        //Mouted event
        for (const key of Object.keys(events)) {
          server.kernel.emitt(events[key][0], 'True', 'Mounted');
        }

        self.events = events;

        //for the first slide

        if (Object.keys(events).includes(String(0))) {
          server.kernel.emitt(events[0][0], 0, events[0][1]);
          previousSlide = 0;
        }
        
      });

      return this;
    }
  }
  
  window.SupportedLanguages.push({
    check: (r) => {return(r[0] === '.slide' || r[0] === '.slides')},
    plugins: [window.markdown(), window.DropPasteHandlers(pasteDrop, pasteFile)],
    name: window.markdownLanguage.name
  });

  

  window.SupportedCells['slide'] = {
    view: RevealJSCell
  };


  class RevealJSCellPrinted {
    envs = []
    events
    cnt
    
    constructor(parent, data) {
      const self = this;
      let deck = new Reveal(parent.element, {
        embedded: true,
        keyboard: true,
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: true,
        // Optional function that blocks keyboard events when retuning false
        //
        // If you set this to 'focused', we will only capture keyboard events
        // for embedded decks when they are in focus
        keyboardCondition: null,
        slideNumber: true,
        plugins: [ Markdown, KaTeX /*, RevealDrawer(self)*/ ]
      } );

      const container = document.createElement('div');
      container.classList.add('reveal');

      const slides = document.createElement('div');
      slides.classList.add('slides');

      container.appendChild(slides);

      parent.element.appendChild(container);

      
      //if (!core._isWindow) parent.element.classList.add('reveal-fixed-height');
      //parent.element.classList.add('padding-fix');

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
        events: new RegExp(/RVJSEvent\["([^"]+)","([^"]+)"\]/g),
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
  
        let narray = string.slice(0, c).match(new RegExp(/---\n/gm));
          
        if (!Array.isArray(narray)) narray = [];
        
        arr[narray.length] = [a,b];
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
      console.log(string);
      string = string.replace(r.events, eventReplacer(events));
      console.log(events);

      //extract FE objects
      string = string.replace(r.fe, feReplacer(fe));
      string = string.replace(r.feh, feReplacer(fe, 4));
      
      slides.innerHTML = unicodeToChar(string);
  

      const scriptHolder = document.createElement('div');
      parent.element.appendChild(scriptHolder);

      setInnerHTML(scriptHolder, scripts.join(''));
      
      this.deck = deck;

      

      this.cnt = (cnt++);
      decks[this.cnt] = deck;

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

    //sideeffect
      deck.initialize().then(() => {
        runOverFe();
        self.events = events;
      });

      return this;
    }
  }  

  window.SupportedCells['printslide'] = {
    view: RevealJSCellPrinted
  };  
