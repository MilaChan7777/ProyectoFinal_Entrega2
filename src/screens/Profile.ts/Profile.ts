
import profileHead, { Attributeposthead } from '../../components/profileHead/profileHead';
import styles from './Post.css';

class Profile extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}


	connectedCallback() {
		this.render();
	}

	render() {
		if(this.shadowRoot){
		const section = document.createElement('section')
		const profileHead = document.createElement('profileHead');
		profileHead.setAttribute(Attributeposthead.profilepic, 'https://i.pinimg.com/236x/ab/32/31/ab32318e982048561a4b1f0508b265bb.jpg')
		profileHead.setAttribute(Attributeposthead.name, 'Santi.gumi')
        profileHead.setAttribute(Attributeposthead.followers, '41')
		section.appendChild(profileHead)

		const inputPost = document.createElement('inputPost')
		section.appendChild(inputPost)
		
		}
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Profile;
customElements.define('profile', Profile);