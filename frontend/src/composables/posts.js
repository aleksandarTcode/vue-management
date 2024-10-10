import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

export default function usePosts() {

    const posts = ref([])

    const post = ref([])

    const router = useRouter()

    const getPosts = async () => {

        let res = await axios.get('http://vue-management.test/api/posts')

        posts.value = res.data.data

    }

    const getPost = async (id) => {

        let res = await axios.get(`http://vue-management.test/api/posts/${id}`)

        post.value = res.data.data

    }

    const storePost = async(post) => {

        try {
            await axios.post('http://vue-management.test/api/posts', post)
            await router.push({name: 'posts.index'})

        } catch (err){
            console.log(err)
        }

    }

    const updatePost = async(id) => {

        try {
            await axios.patch(`http://vue-management.test/api/posts/${id}`, post.value)
            await router.push({name: 'posts.index'})

        } catch (err){
            console.log(err)
        }

    }



    const deletePost = async (id) => {

        if(!window.confirm("Are you sure you want to delete this post?")){
            return
        }

        await destroyPost(id)
        await getPosts()
    }

    const destroyPost = async(id) => {

        await axios.delete(`http://vue-management.test/api/posts/${id}`)
        posts.value.splice(posts.value.indexOf(id),1)
    }


    return {
        post,
        posts,
        getPosts,
        getPost,
        deletePost,
        storePost,
        updatePost,
    }
}