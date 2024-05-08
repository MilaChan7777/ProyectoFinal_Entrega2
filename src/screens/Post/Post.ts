import profileHead, { Attributeposthead } from '../../components/profileHead/profileHead';
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
		if(this.shadowRoot){
		const presentation = document.createElement('profileHead');
		presentation.setAttribute(Attributeposthead.profilepic, 'https://i.pinimg.com/236x/ab/32/31/ab32318e982048561a4b1f0508b265bb.jpg')
		presentation.setAttribute(Attributeposthead.name, 'Santi.gumi')
		}
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Post;
customElements.define('my-post', Post);