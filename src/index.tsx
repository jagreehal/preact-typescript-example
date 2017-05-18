import { h, render } from 'preact';

let root: Element;

function init() {
	let App = require('./components/app').default;
	root = render(<App />, document.body, root);
}

init();

if (process.env.NODE_ENV !== 'production') {
	if (module.hot) {
		module.hot.accept('./components/app', init);
	}
}