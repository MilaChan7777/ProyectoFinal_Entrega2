import styles from './userPosts.css';

export enum AttributeprofileInter {
	'description' = 'description',
}

class Profileinter extends HTMLElement {
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeprofileInter, null> = {
			description: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeprofileInter, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <p>${this.description}</p>
            `;
		    }
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Profileinter;
customElements.define('profileInter', Profileinter);