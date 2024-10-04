import {createRouter, createWebHistory} from 'vue-router'
import PostsIndex from "@/components/posts/PostsIndex.vue";

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})