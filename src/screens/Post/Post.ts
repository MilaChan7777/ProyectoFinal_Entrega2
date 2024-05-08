import styles from './Post.css';

class Post extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}


	connectedCallback() {
		this.render();
	}

	render() {

		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Post;
customElements.define('my-post', Post);