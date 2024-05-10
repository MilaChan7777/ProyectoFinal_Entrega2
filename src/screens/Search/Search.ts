import styles from './Search.css';

class searchScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const section = document.createElement('section');
			const searchHead = document.createElement('profileHead');
			searchHead.setAttribute('profilepic', 'https://i.pinimg.com/236x/ab/32/31/ab32318e982048561a4b1f0508b265bb.jpg');
			searchHead.setAttribute('name', 'Santi.gumi');
			searchHead.setAttribute('followers', '41');
			section.appendChild(searchHead);

			const searchInput = document.createElement('profileInter');
			searchInput.setAttribute('description', 'Search for users or posts');

			const searchInputElement = document.createElement('input');
			searchInputElement.setAttribute('type', 'text');
			searchInputElement.setAttribute('placeholder', 'Search...');
			searchInputElement.setAttribute('id', 'searchInput');

			const searchButton = document.createElement('button');
			searchButton.setAttribute('id', 'searchButton');
			searchButton.innerHTML = `<i class="material-icons">search</i>`;

			searchInput.appendChild(searchInputElement);
			searchInput.appendChild(searchButton);

			this.shadowRoot?.appendChild(section);
			this.shadowRoot?.appendChild(searchInput);

			const cssUserpost = this.ownerDocument.createElement('style');
			cssUserpost.innerHTML = styles;
			this.shadowRoot?.appendChild(cssUserpost);
		}
	}
}

export default searchScreen;
customElements.define('app-search', searchScreen);
