import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { createHashHistory } from 'history';
import AsyncRoute from 'preact-async-route';

import Hello from './hello';

declare global {
	interface System {
		import(request: string): Promise<any>
	}
	var System: System
}


export default class App extends Component<any, any> {
	render() {
		return (
			<div class="app">
				<h1>Hello!</h1>
				<Router history={createHashHistory()}>
					<Hello path="/" />
					<Profile path="/profile/:user?" />
					<AsyncRoute
						path="/foo"
						component={() => System.import('./foo').then(module => module.default)}
					/>
					<AsyncRoute
						path="/bar"
						component={() => System.import('./bar').then(module => module.default)} />
				</Router>
			</div>
		);
	}
}

type ProfileProps = {
	user?: string,
	path: string,
}

const Profile = ({ user }: ProfileProps) => (
	<section class="profile">
		<h2>Profile: {user || 'you'}</h2>
		<p>This is some text about {user || 'you'}.</p>
		<pre>{JSON.stringify({ user })}</pre>
	</section>
);
