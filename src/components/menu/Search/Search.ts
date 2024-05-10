import styles from './search.css';
import { dispatch } from '../../../store/store';
import { addObserver } from '../../../store/store';
import { changeScreen } from '../../../store/actions';

export enum AttributeSearch {
	'image' = 'image',
}

class Search extends HTMLElement {
	image?: string;
	public index: number = 0;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.onButtonClicked = this.onButtonClicked.bind(this);
		addObserver(this);
	}

	static get observedAttributes() {
		const attrs: Record<AttributeSearch, null> = {
			image: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.mount();
	}

	attributeChangedCallback(propName: AttributeSearch, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.mount();
	}

	mount() {
		this.render();
		this.addListeners();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <div class="navBar">
            <button id="searchbutton" type="submit"><img src=${this.image}></button>
            </div>
            `;
		}
		const cssMenu = this.ownerDocument.createElement('style');
		cssMenu.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMenu);
	}

	addListeners() {
		this.shadowRoot?.querySelector('#searchbutton')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		dispatch(changeScreen('SEARCH'));
	}
}

export default Search;
customElements.define('search-button', Search);
