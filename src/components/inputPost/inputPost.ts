import styles from "./inputPost.css"

export enum AttributeinputPost {
	'image' = 'image',
	'description' = 'description',
}

class Inputpost extends HTMLElement {
	image?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
	        <input class="Image" type="file" placeholder="añade una imagen">
            <input class="Description" type="text" placeholder="Añade una descripción">
            `;
		    }
			const cssInputpost = this.ownerDocument.createElement('style');
			cssInputpost.innerHTML = styles;
			this.shadowRoot?.appendChild(cssInputpost);
	}
}

export default Inputpost;
customElements.define('input-post', Inputpost);