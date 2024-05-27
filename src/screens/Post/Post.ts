import Inputpost, { AttributeinputPost } from '../../components/inputPost/inputPost';
import profileHead, { Attributeposthead } from '../../components/profileHead/profileHead';
import styles from './Post.css';

import Home, { AttributeHome } from '../../components/menu/Home/Home';
import Post, { AttributePost } from '../../components/menu/Post/Post';
import Profile, { AttributeProfile } from '../../components/menu/Profile/Profile';

import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';
import '../../components/inputPost/inputPost';
import '../../components/postButton/postButton';

class Postinput extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)
	}


	connectedCallback() {
		this.render();
		const Homebutton = this.shadowRoot?.querySelector('#homebutton');
		Homebutton?.addEventListener('click', ()=>{
		dispatch(changeScreen('DASHBOARD'))
		})
	}

	render() {
		if(this.shadowRoot){

		const container = document.createElement('container')
		container.classList.add('container')

		const section = document.createElement('section')
		section.classList.add('post')

		const Menu = document.createElement('section');
		Menu.classList.add('menu-bar');
		const Home = document.createElement('home-button') as Home;
		const Post = document.createElement('post-button') as Post;
		const Profile = document.createElement('profile-button') as Profile;

		const Logo = document.createElement('img');
		Logo.src = '../icons/VanguardLogo.jpeg';
		Logo.alt = 'Logo';
		Logo.classList.add('logo');
		Menu.appendChild(Logo);

		Home.setAttribute(AttributeHome.image, '../icons/Home.png');
		Post.setAttribute(AttributePost.image, '../icons/Post.png');
		Profile.setAttribute(AttributeProfile.image, '../icons/Profile.png');

		Menu.appendChild(Home);
		Menu.appendChild(Post);
		Menu.appendChild(Profile);
		this.shadowRoot.appendChild(Menu);

		const profileHead = document.createElement('app-profilehead');
		profileHead.setAttribute(Attributeposthead.profilepic, 'https://i.pinimg.com/236x/ab/32/31/ab32318e982048561a4b1f0508b265bb.jpg')
		profileHead.setAttribute(Attributeposthead.name, 'Santi.gumi')
		profileHead.setAttribute(Attributeposthead.followers, '41')
		section.appendChild(profileHead)

		const input = document.createElement('input-post')
		section.appendChild(input)

		const button = document.createElement('button-post')
		section.appendChild(button)

		container.appendChild(section)
		this.shadowRoot.appendChild(container)
		
		}
		const cssUserpost = this.ownerDocument.createElement('style');
		cssUserpost.innerHTML = styles;
		this.shadowRoot?.appendChild(cssUserpost);
	}
}

export default Postinput;
customElements.define('app-post', Postinput);