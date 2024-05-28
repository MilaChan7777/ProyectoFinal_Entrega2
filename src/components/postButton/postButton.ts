import styles from './postButton.css'

export enum AttributeinputPost {
	'image' = 'image',
	'description' = 'description',
}

class Postbutton extends HTMLElement {
	image?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeinputPost, null> = {
			image: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeinputPost, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<dialog>
            <input type="text" placeholder="Add a tag"
            </dialog>
	        <button id="Hashtags" type="submit">Add hashtags</button>
			<hr>
            <button id="Post" type="submit">Post</button>
            `;
		    }
		const cssButtonpost = this.ownerDocument.createElement('style');
		cssButtonpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssButtonpost);
	}
}

export default Postbutton;
customElements.define('button-post', Postbutton);