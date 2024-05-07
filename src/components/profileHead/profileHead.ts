import styles from './userPosts.css';

export enum Attribute4 {
	'profilepic' = 'profilepic',
	'name' = 'name',
}

class profileHead extends HTMLElement {
	profilepic?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute4, null> = {
			profilepic: null,
			name: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute4, oldValue: string | undefined, newValue: string | undefined) {
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
            `;
		    }
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default profileHead;
customElements.define('profileHead', profileHead);