import { h, render, Component } from 'preact';
//const fetch = require('unfetch');
// import fetch from 'unfetch';
// const fetchPromise = global['fetch']('');

type Props = {
	path: string
}

type State = {
	title: string
}


class Bar extends Component<Props, State> {
	constructor() {
		super();
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json())
			.then(data => {
				this.setState({
					title : data.title
				})
			}).catch(console.error)

	}

	render() {
		return <p class="hello">
			Foo Well hello there!
			{this.state.title}
	</p>
	}
}

export default Bar;
