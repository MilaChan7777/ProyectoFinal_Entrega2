import styles from './search.css';

class Searchbar extends HTMLElement {

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
            <p>Hola</p>
            <input type="text">
            <button type="submit"><img src="../icons/Profile.png"}></button>
            `;
		    }
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Searchbar;
customElements.define('search-bar', Searchbar);