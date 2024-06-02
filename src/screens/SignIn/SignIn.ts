import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';
import styles from './SignIn.css';
import { createUser  } from '../../utils/firebase';
import { AttributeinputInfo } from '../../components/inputsInfo/inputsInfo';

const FormData = {
	email: '',
	password: ''
}

class SignIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();

		const signInButton = this.shadowRoot?.querySelector('#signinButton');
		signInButton?.addEventListener('click', () => {
			dispatch(changeScreen('DASHBOARD'));
		});

		const logInButton = this.shadowRoot?.querySelector('#loginButton');
		logInButton?.addEventListener('click', () => {
			dispatch(changeScreen('LOGIN'));
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = styles;
			this.shadowRoot?.appendChild(css);

			const main = document.createElement('main')
			this.shadowRoot.appendChild(main)

			const section = document.createElement('section')
			section.className = "form-container"
			main.appendChild(section)

			const vanguardTitle = document.createElement('h1')
			vanguardTitle.className = 'vanguardTitle'
			vanguardTitle.innerText = 'Vanguard'
			section.appendChild(vanguardTitle)

			const slogan = document.createElement('p')
			slogan.className = 'slogan'
			slogan.innerText = 'Create and connect'
			section.appendChild(slogan)

			const form = document.createElement('form')
			section.appendChild(form)

			const email = document.createElement ('input-info')
			email.setAttribute(AttributeinputInfo.titulo, 'Email')
			email.setAttribute(AttributeinputInfo.placeholder, 'Email')
			email.setAttribute(AttributeinputInfo.type, 'email')
			email.addEventListener('change', this.addEmail)
			form.appendChild(email)

			const birthday = document.createElement ('input-info')
			birthday.setAttribute(AttributeinputInfo.titulo, 'Birthday')
			birthday.setAttribute(AttributeinputInfo.placeholder, '')
			birthday.setAttribute(AttributeinputInfo.type, 'date')
			form.appendChild(birthday)

			const password = document.createElement ('input-info')
			password.setAttribute(AttributeinputInfo.titulo, "Password")
			password.setAttribute(AttributeinputInfo.placeholder, 'Password')
			password.setAttribute(AttributeinputInfo.type, 'password')
			password.addEventListener('change', this.addPassword)
			form.appendChild(password)

			const signInButton = document.createElement('button');
			signInButton.id = 'signUpButton'
			signInButton.innerText = 'Sign in'
			form.appendChild(signInButton)
			
			const loginButton = document.createElement('button');
			loginButton.id = 'logInButton'
			loginButton.innerText = 'Already have an account?'
			form.appendChild(loginButton)
		}
	}

	addEmail(e: any){
	FormData.email = e?.target?.Value
	}

	addPassword(e: any){
	FormData.password = e?.target?.Value
	}

	submitForm(){
	createUser(FormData.email, FormData.password)
	}
}

customElements.define('app-signin', SignIn);
export default SignIn;
