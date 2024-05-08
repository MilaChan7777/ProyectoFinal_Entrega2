import styles from './userPosts.css';

export enum Attributeposthead {
	'profilepic' = 'profilepic',
	'name' = 'name',
	'followers' = 'followers'
}

class profileHead extends HTMLElement {
	profilepic?: string;
	name?: string;
	followers?: string

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attributeposthead, null> = {
			profilepic: null,
			name: null,
			followers: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attributeposthead, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section>
	        <div class="user">
	        <img src=${this.profilepic}></img>
            <p class="username">${this.name}</p>
			<p>${this.followers} seguidores</p>
            `;
		    }
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default profileHead;
customElements.define('profileHead', profileHead);