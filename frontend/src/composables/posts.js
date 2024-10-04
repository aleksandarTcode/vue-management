import axios from "axios";
import {ref} from "vue";

export default function usePosts() {

    const posts = ref([])
    const getPosts = async () => {

        let res = await axios.get('http://vue-management.test/api/posts')

        posts.value = res.data.data

    }

    return {
        posts,
        getPosts
    }
}