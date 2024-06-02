import styles from './inputsInfo.css'

export enum AttributeinputInfo {
	'titulo' = 'titulo',
	'type' = 'type',
    'placeholder' = 'placeholder'
}

class inputsInfo extends HTMLElement {
	titulo?: string;
	type?: string;
    placeholder?: string

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeinputInfo, null> = {
			titulo: null,
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
            <h4>${this.titulo}</h4>
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