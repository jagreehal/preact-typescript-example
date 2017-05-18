import { h } from 'preact';
const { Link } = require('preact-router/match');

type Props = {
	path: string
}

export default ({path}: Props) => (
	<p class="hello">
		Well hello there!
		<Link activeClassName="active" href="/foo">Foo</Link>
	</p>
);