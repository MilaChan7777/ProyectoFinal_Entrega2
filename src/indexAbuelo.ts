import Home, { Attribute } from './components/menu/Home/Home';
import Search, { Attribute1 } from './components/menu/Search/Search';
import Post, { Attribute2 } from './components/menu/Post/Post';
import Profile, { Attribute3 } from './components/menu/Profile/Profile';

import usersData, { Attribute4 } from './components/userPosts/userPosts';
import Save, { Attribute5 } from './components/buttonPosts/Savebtn/save';
import Star, { Attribute6 } from './components/buttonPosts/Starbtn/star';
import Comment, { Attribute7 } from './components/buttonPosts/Commentbtn/comment';

import { data } from './services/data';
import stylesApp from './index.css';

class AppContainer extends HTMLElement {
	Feed: HTMLElement[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.Feed = [];

		const userData = data;

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

		Home.setAttribute(Attribute.image, '../icons/Home.png');
		Search.setAttribute(Attribute1.image, '../icons/Search.png');
		Post.setAttribute(Attribute2.image, '../icons/Post.png');
		Profile.setAttribute(Attribute3.image, '../icons/Profile.png');

		Menu.appendChild(Home);
		Menu.appendChild(Search);
		Menu.appendChild(Post);
		Menu.appendChild(Profile);

		this.Feed.push(Menu);

		userData.forEach((user) => {
			const usersDataElement = document.createElement('my-usersdata') as usersData;

			const post = document.createElement('section');
			post.classList.add('post');

			usersDataElement.setAttribute(Attribute4.profilepic, user.profilepic);
			usersDataElement.setAttribute(Attribute4.name, user.name);

			usersDataElement.setAttribute(Attribute4.image, user.image);
			usersDataElement.setAttribute(Attribute4.description, user.description);
			usersDataElement.setAttribute(Attribute4.tag, user.tags.tag);

			const saveButton = document.createElement('save-button') as Save;
			saveButton.setAttribute(Attribute5.image, '../icons/Guardar.png');

			const starButton = document.createElement('start-button') as Star;
			starButton.setAttribute(Attribute6.image, '../icons/Star.png');

			const commentButton = document.createElement('comment-button') as Comment;
			commentButton.setAttribute(Attribute7.image, '../icons/Comentar.png');

			const buttonContainer = document.createElement('div');
			buttonContainer.classList.add('interaction');
			buttonContainer.appendChild(starButton);
			buttonContainer.appendChild(commentButton);
			buttonContainer.appendChild(saveButton);

			post.appendChild(usersDataElement);
			post.appendChild(buttonContainer);

			container.appendChild(post);
		});
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

customElements.define('app-container', AppContainer);
