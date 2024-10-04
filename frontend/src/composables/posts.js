import axios from "axios";
import {ref} from "vue";

export default function usePosts() {

    const posts = ref([])
    const getPosts = async () => {

        let res = await axios.get('http://vue-management.test/api/posts')

        posts.value = res.data.data

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
        posts,
        getPosts,
        deletePost
    }
}