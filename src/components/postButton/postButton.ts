

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
            <div class="postButton">
	        <button type="submit">Add hashtags</button>
            <button type="submit">Post</button>
            </div>
            `;
		    }
		// const cssUserpost = this.ownerDocument.createElement('style');
		// cssUserpost.innerHTML = styles;
		// this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Postbutton;
customElements.define('button-post', Postbutton);