import styles from './tags.css';

class Tags extends HTMLElement {
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
            <dialog open>
            <label for="tags-select">Choose tags:</label>
            <select name="tags" id="tags-select">
            <option value="Ilustration">Ilustration</option>
            <option value="Photo-Edition">Photo Edition</option>
            <option value="3D-art">3D art</option>
            <option value="Typography">Typography</option>
            <option value="Branding">Branding</option>
            <option value="Fan-art">Fan art</option>
            </select>
            </dialog> 
            `;
		    }
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Tags;
customElements.define('app-tags', Tags);