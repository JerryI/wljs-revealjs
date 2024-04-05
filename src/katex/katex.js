/**
 * A plugin which enables rendering of math equations inside
 * of reveal.js slides. Essentially a thin wrapper for KaTeX.
 *
 * @author Hakim El Hattab
 * @author Gerhard Burger
 */

let renderMathInElement;

export const KaTeX = () => {
	let deck;

	let defaultOptions = {
		version: 'latest',
		delimiters: [
			{left: '$$', right: '$$', display: true}, // Note: $$ has to come before $
			{left: '$', right: '$', display: false},
			{left: '\\(', right: '\\)', display: false},
			{left: '\\[', right: '\\]', display: true}
		],
		ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre']
	}

	const loadCss = src => {
		let link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = src;
		document.head.appendChild(link);
	};

	/**
	 * Loads a JavaScript file and returns a Promise for when it is loaded
	 * Credits: https://aaronsmith.online/easily-load-an-external-script-using-javascript/
	 */

	return {
		id: 'katex',

		init: function (reveal) {

			deck = reveal;

			let revealOptions = deck.getConfig().katex || {};

			let options = {...defaultOptions, ...revealOptions};
			const {local, version, extensions, ...katexOptions} = options;


			const renderMath = () => {
				renderMathInElement(reveal.getSlidesElement(), katexOptions);
				deck.layout();
			}

			//loadCss(cssUrl);

			// For some reason dynamically loading with defer attribute doesn't result in the expected behavior, the below code does
			if (!renderMathInElement) {
				window.interpretate.shared.katex.load().then(() => {
					renderMathInElement = window.interpretate.shared.katex.autorender;
					console.log(renderMathInElement);

					if( deck.isReady() ) {
						renderMath();
					}
					else {
						deck.on( 'ready', renderMath.bind( this ) );
					}
				})
			} else {
				renderMathInElement = window.interpretate.shared.katex.autorender;
				console.log(renderMathInElement);

				if( deck.isReady() ) {
					renderMath();
				}
				else {
					deck.on( 'ready', renderMath.bind( this ) );
				}
			}
			//if (!d3) d3 = interpretate.shared.d3.d3;

		}
	}

};
