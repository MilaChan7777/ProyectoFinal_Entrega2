// import { Home } from './components/indexPadre';
// import { Search } from './components/indexPadre';
// import { Post } from './components/indexPadre';
// import { Profile } from './components/indexPadre';
import { addObserver, appState } from './store/store';
import './screens/Dashboard/Home'
import './screens/Post/Post'

import usersData, { AttributeUser } from './components/userPosts/userPosts';
import { data } from './services/data';
import stylesApp from './index.css';
import Post from './screens/Post/Post';
import Dashboard from './screens/Dashboard/Home';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)
	}

	connectedCallback(){
	this.render()
	}

	render() {
		console.log(appState.screen);
		
		if (this.shadowRoot){
			this.shadowRoot.innerHTML = ` `
			}
		switch (appState.screen) {
			case 'POST':
			const login = this.ownerDocument.createElement('app-post') as Post
			this.shadowRoot?.appendChild(login)
				break;
	
			case 'DASHBOARD':
			const dashboard = this.ownerDocument.createElement('app-dashboard') as Dashboard
			this.shadowRoot?.appendChild(dashboard)
				break;
		
			default:
				break;
		}
		const cssContainer = this.ownerDocument.createElement('style');
		cssContainer.innerHTML = stylesApp;
		this.shadowRoot?.appendChild(cssContainer);
	}
}

customElements.define('app-container', AppContainer);
