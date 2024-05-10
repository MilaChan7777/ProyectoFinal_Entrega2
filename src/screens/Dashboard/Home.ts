import Home, { AttributeHome } from '../../components/menu/Home/Home';
import Search, { AttributeSearch } from '../../components/menu/Search/Search';
import Post, { AttributePost } from '../../components/menu/Post/Post';
import Profile, { AttributeProfile } from '../../components/menu/Profile/Profile';

import usersData, { AttributeUser } from '../../components/userPosts/userPosts';
import { Save } from '../../components/indexPadre';
import { Comment } from '../../components/indexPadre';
import { Star } from '../../components/indexPadre';

import { data } from '../../services/data';

import { dispatch, addObserver } from '../../store/store';
import { changeScreen } from '../../store/actions';

import stylesApp from './Home.css';
import { AttributeComment } from '../../components/buttonPosts/Commentbtn/comment';
import { AttributeSave } from '../../components/buttonPosts/Savebtn/save';
import { AttributeStar } from '../../components/buttonPosts/Starbtn/star';

class Dashboard extends HTMLElement {
	Feed: HTMLElement[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		const Homebutton = this.shadowRoot?.querySelector('#homebutton');
		Homebutton?.addEventListener('click', () => {
			dispatch(changeScreen('LOGIN'));
		});
	}

	render() {
		this.Feed = [];
		const container = this.ownerDocument.createElement('section');
		container.setAttribute('id', 'container');
		const userData = data;
		userData.forEach((user) => {
			const usersDataElement = document.createElement('my-usersdata') as usersData;

			const post = document.createElement('section');
			post.classList.add('post');

			usersDataElement.setAttribute(AttributeUser.profilepic, user.profilepic);
			usersDataElement.setAttribute(AttributeUser.name, user.name);

			usersDataElement.setAttribute(AttributeUser.image, user.image);
			usersDataElement.setAttribute(AttributeUser.description, user.description);
			usersDataElement.setAttribute(AttributeUser.tag, user.tags.tag);

			const saveButton = document.createElement('save-button') as Save;
			saveButton.setAttribute(AttributeSave.image, '../icons/Guardar.png');

			const starButton = document.createElement('start-button') as Star;
			starButton.setAttribute(AttributeStar.image, '../icons/Star.png');

			const commentButton = document.createElement('comment-button') as Comment;
			commentButton.setAttribute(AttributeComment.image, '../icons/Comentar.png');

			const buttonContainer = document.createElement('div');
			buttonContainer.classList.add('interaction');
			buttonContainer.appendChild(starButton);
			buttonContainer.appendChild(commentButton);
			buttonContainer.appendChild(saveButton);

			post.appendChild(usersDataElement);
			post.appendChild(buttonContainer);

			container.appendChild(post);
		});

		const Menu = document.createElement('section');
		Menu.classList.add('menu-bar');
		const Home = document.createElement('home-button') as Home;
		const Search = document.createElement('search-button') as Search;
		const Post = document.createElement('post-button') as Post;
		const Profile = document.createElement('profile-button') as Profile;

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

		this.Feed.push(Menu);
		this.Feed.push(container);
		this.shadowRoot?.appendChild(container);

		if (this.shadowRoot) {
			this.Feed.forEach((element) => this.shadowRoot?.appendChild(element));
		}

		const cssContainer = this.ownerDocument.createElement('style');
		cssContainer.innerHTML = stylesApp;
		this.shadowRoot?.appendChild(cssContainer);
	}
}
export default Dashboard;
customElements.define('app-dashboard', Dashboard);
