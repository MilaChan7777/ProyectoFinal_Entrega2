import styles from './Post.css';

export enum Attribute4 {
	'profilepic' = 'profilepic',
	'name' = 'name',
}

class Post extends HTMLElement {
	profilepic?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute4, null> = {
			profilepic: null,
			name: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute4, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section>
            <img src="${this.profilepic}">
            <p>${this.name}</p>

            <input type="file">
            <input type="text">

            <button type="submit">Add hashtags</button>
            <button type="submit">Post</button>
			</section>
      `;
		}
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Post;
customElements.define('my-post', Post);