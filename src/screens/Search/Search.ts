import Home, { AttributeHome } from '../../components/menu/Home/Home';
import Search, { AttributeSearch } from '../../components/menu/Search/Search';
import Post, { AttributePost } from '../../components/menu/Post/Post';
import Profilebtn, { AttributeProfile } from '../../components/menu/Profile/Profile';
import Searchbar from '../../components/searchinput/search';

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
		const Menu = document.createElement('section');
		Menu.classList.add('menu-bar');
		const Home = document.createElement('home-button') as Home;
		const Search = document.createElement('search-button') as Search;
		const Post = document.createElement('post-button') as Post;
		const Profile = document.createElement('profile-button') as Profilebtn;

		const Logo = document.createElement('img');
		Logo.src = '../icons/VanguardLogo.jpeg';
		Logo.alt = 'Logo';
		Logo.classList.add('logo');
		Menu.appendChild(Logo);

		Home.setAttribute(AttributeHome.image, '../icons/Home.png');
		Search.setAttribute(AttributeSearch.image, '../icons/Search.png');
		Post.setAttribute(AttributePost.image, '../icons/Post.png');
		Profile.setAttribute(AttributeProfile.image, '../icons/Profile.png');

		Menu.appendChild(Home);
		Menu.appendChild(Search);
		Menu.appendChild(Post);
		Menu.appendChild(Profile);
		this.shadowRoot?.appendChild(Menu);

		const container = document.createElement('section')
		const post = document.createElement('section')
		const searchbar = document.createElement('search-bar') as Searchbar;

		post.appendChild(searchbar)
		container.appendChild(post)
		this.shadowRoot?.appendChild(container)
		if (this.shadowRoot) {

			const cssSearch = this.ownerDocument.createElement('style');
			cssSearch.innerHTML = styles;
			this.shadowRoot?.appendChild(cssSearch);
		}
	}
}

export default searchScreen;
customElements.define('app-search', searchScreen);
