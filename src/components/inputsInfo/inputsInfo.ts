import styles from './inputsInfo.css'

export enum AttributeinputInfo {
	'Title' = 'Title',
	'type' = 'type',
    'placeholder' = 'placeholder'
}

class inputsInfo extends HTMLElement {
	Title?: string;
	type?: string;
    placeholder?: string

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeinputInfo, null> = {
			Title: null,
			type: null,
            placeholder: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeinputInfo, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <h3>${this.Title}</h3>
            <input type="${this.type}" placeholder="${this.placeholder}">
            `;
		    }
			const cssButtonpost = this.ownerDocument.createElement('style');
			cssButtonpost.innerHTML = styles;
			this.shadowRoot?.appendChild(cssButtonpost);
	}
}

export default inputsInfo;
customElements.define('input-info', inputsInfo);