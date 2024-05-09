import Home, { AttributeHome } from '../../components/menu/Home/Home';
import Search, { AttributeSearch } from '../../components/menu/Search/Search';
import Post, { AttributePost } from '../../components/menu/Post/Post';
import Profile from '../../components/menu/Profile/Profile';

import usersData from '../../components/userPosts/userPosts';
import { Save } from '../../components/indexPadre';
import { Comment } from '../../components/indexPadre';
import { Star } from '../../components/indexPadre';

import stylesApp from './index.css';

class Dashboard extends HTMLElement {
	Feed: HTMLElement[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.Feed = [];

		// const userData = data;

		const container = this.ownerDocument.createElement('section');
		container.setAttribute('id', 'container');

		const Menu = document.createElement('section') as Home;
		Menu.classList.add('menu-bar');
		const Home = document.createElement('home-button') as Search;
		const Search = document.createElement('search-button') as Post;
		const Post = document.createElement('post-button') as Profile;
		const Profile = document.createElement('profile-button');

		const Logo = document.createElement('img');
		Logo.src = '../icons/VanguardLogo.jpeg';
		Logo.alt = 'Logo';
		Logo.classList.add('logo');
		Menu.appendChild(Logo);

		Home.setAttribute(AttributeHome.image, '../icons/Home.png');
		Search.setAttribute(AttributePost.image, '../icons/Search.png');
		Post.setAttribute(AttributePost.image, '../icons/Post.png');
		Profile.setAttribute(AttributeSearch.image, '../icons/Profile.png');

		Menu.appendChild(Home);
		Menu.appendChild(Search);
		Menu.appendChild(Post);
		Menu.appendChild(Profile);

		this.Feed.push(Menu);

		// userData.forEach((user) => {
		// 	const usersDataElement = document.createElement('my-usersdata') as usersData;

		// 	const post = document.createElement('section');
		// 	post.classList.add('post');

		// 	usersDataElement.setAttribute(Attribute4.profilepic, user.profilepic);
		// 	usersDataElement.setAttribute(Attribute4.name, user.name);

		// 	usersDataElement.setAttribute(Attribute4.image, user.image);
		// 	usersDataElement.setAttribute(Attribute4.description, user.description);
		// 	usersDataElement.setAttribute(Attribute4.tag, user.tags.tag);

		// 	const saveButton = document.createElement('save-button') as Save;
		// 	saveButton.setAttribute(Attribute5.image, '../icons/Guardar.png');

		// 	const starButton = document.createElement('start-button') as Star;
		// 	starButton.setAttribute(Attribute6.image, '../icons/Star.png');

		// 	const commentButton = document.createElement('comment-button') as Comment;
		// 	commentButton.setAttribute(Attribute7.image, '../icons/Comentar.png');

		// 	const buttonContainer = document.createElement('div');
		// 	buttonContainer.classList.add('interaction');
		// 	buttonContainer.appendChild(starButton);
		// 	buttonContainer.appendChild(commentButton);
		// 	buttonContainer.appendChild(saveButton);

		// 	post.appendChild(usersDataElement);
		// 	post.appendChild(buttonContainer);

		// 	container.appendChild(post);
		// });
		this.Feed.push(container);
		this.shadowRoot?.appendChild(container);
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.Feed.forEach((element) => this.shadowRoot?.appendChild(element));
		}

		const cssContainer = this.ownerDocument.createElement('style');
		cssContainer.innerHTML = stylesApp;
		this.shadowRoot?.appendChild(cssContainer);
	}
}
export default Dashboard
customElements.define('app-Dashboard', Dashboard);
