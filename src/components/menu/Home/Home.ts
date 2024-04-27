import styles from './Home.css';
export enum Attribute {
	'image' = 'image',
}

class Home extends HTMLElement {
	image?: string;
	public index: number= 0

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.onButtonClicked = this.onButtonClicked.bind(this);
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.mount();
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
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
            <button id="homebutton" type="submit"><img src=${this.image}></button>
            </div>
            `;
		}
		const cssMenu = this.ownerDocument.createElement('style');
		cssMenu.innerHTML = styles;
		this.shadowRoot?.appendChild(cssMenu);
	}

	addListeners() {
		this.shadowRoot?.querySelector('#homebutton')?.addEventListener('click', this.onButtonClicked);
	}

	onButtonClicked() {
		// const currentValue = this.getAttribute('image');
		// this.setAttribute('image', '../icons/HomeClicked.png');
		// this.render();

		const currentImage = this.shadowRoot?.querySelector('img')?.getAttribute('src');
			if (this.index === 0) {
			this.setAttribute('image', '../icons/HomeClicked.png');
			this.index ++
			} else {
			this.setAttribute('image', '../icons/Home.png');
			this.index --	
			}
	}
}

export default Home;
customElements.define('home-button', Home);
