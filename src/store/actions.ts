import { getPosts } from "../utils/firebase"
export const changeScreen = (screen: any) => {
    return {
        action: 'changeScreen',
        payload: screen,
    }
}

export const getPostsAction = async () => {
    const posts  = await getPosts()
    return {
        action: 'GETPOST',
        payload: posts
    }
}