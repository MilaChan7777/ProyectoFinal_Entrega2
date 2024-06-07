
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { collection, doc, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDblKMSaGR3l3VUP8Gcylpskcio8hM7cdQ",
    authDomain: "vanguard-35d26.firebaseapp.com",
    projectId: "vanguard-35d26",
    storageBucket: "vanguard-35d26.appspot.com",
    messagingSenderId: "187651490470",
    appId: "1:187651490470:web:f995465153247e0d556a67",
    measurementId: "G-Q75K0PGBWK"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
const storage = getStorage()


export const addPost = async (e: any) => {
    try {
      const where = collection(db, "post");
      await addDoc(where, e);
      console.log("se añadió con éxito");
    } catch (error) {
      console.error(error);
    }
  };

export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'vanguardUsersPosts'));
    const arrayPosts: Array<any>= [];

    querySnapshot.forEach((doc) => {
    const data = doc.data() as any;
    arrayPosts.push({id: doc.id, ...data})
    });
    return arrayPosts
}

export const createUser = async (formData: any) => {
    await createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(async(userCredential) =>{
        const user = userCredential.user
        console.log(user);
        try {
            const where = doc(db, 'users', user.uid)
            const data = {
            birthday: formData.date
            };
            await setDoc(where, data);
            alert('Se creo el usuario')
        } catch (error) {
            console.error(error)
        }
        
    })
    .catch((error: any)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage)
    })
}

export const logIn = (formData: any) => {
 signInWithEmailAndPassword(auth, formData.email, formData.password)
 .then(async(userCredential) => {
    const user = userCredential.user;
    console.log(user.uid)
 })
 .catch ((error: any)=>{
    const errorCode = error.code;
    const errorMessage = error.message
    console.log(formData)
    console.error (errorCode, errorMessage)
 })
}


export const uploadFile = async (file: File, id: string) => {
	const storageRef = ref(storage, 'imgsPosts/' + file.name);
	uploadBytes(storageRef, file).then((snapshot) => {
		console.log('Uploaded a blob or file!');
	});
};

export const getFile = async (File: string) => {
	const storageRef = ref(storage, File);
	const urlImg = await getDownloadURL(ref(storageRef))
		.then((url) => {
			return url;
		})
		.catch((error) => {
			console.error(error);
		});
	return urlImg;
};