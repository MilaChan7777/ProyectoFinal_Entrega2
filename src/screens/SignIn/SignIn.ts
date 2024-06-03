import { changeScreen } from '../../store/actions';
import { addObserver } from '../../store/store';
import { dispatch } from '../../store/store';
import styles from './SignIn.css';
import { createUser  } from '../../utils/firebase';
import { AttributeinputInfo } from '../../components/inputsInfo/inputsInfo';

const formData = {
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
		const logInButton = this.shadowRoot?.querySelector('#loginButton');
		logInButton?.addEventListener('click', () => {
			dispatch(changeScreen('LOGIN'));
		});
	}
		addEmail(e: any){
		formData.email = e.target.value
		} 
	
		addPassword(e: any){
		formData.password = e.target.value	
		}
	
		submitForm(){
		createUser(formData.email, formData.password)
		}

	async render() {
		if (this.shadowRoot) {
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

			const email = document.createElement ('input')
			email.placeholder = 'Email'
			email.addEventListener('input', (e) => this.addEmail(e))
			form.appendChild(email)

			const birthday = document.createElement ('input-info')
			birthday.setAttribute(AttributeinputInfo.titulo, 'Birthday')
			birthday.setAttribute(AttributeinputInfo.placeholder, '')
			birthday.setAttribute(AttributeinputInfo.type, 'date')
			form.appendChild(birthday)

			const password = document.createElement ('input')
			password.placeholder = 'Password'
			password.id = 'password'
			password?.addEventListener('input', (e) => this.addPassword(e))
			form.appendChild(password)

			const signInButton = document.createElement('button');
			signInButton.id = 'signUpButton'
			signInButton.innerText = 'Sign in'
			signInButton.addEventListener('click', this.submitForm)
			form.appendChild(signInButton)
			
			const loginButton = document.createElement('button');
			loginButton.id = 'logInButton'
			loginButton.innerText = 'Already have an account?'
			form.appendChild(loginButton)
		}
	}

}

customElements.define('app-signin', SignIn);
export default SignIn;
