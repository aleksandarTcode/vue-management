import {createRouter, createWebHistory} from 'vue-router'
import PostsIndex from "@/components/posts/PostsIndex.vue";
import Example from "@/components/posts/Example.vue";

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex
    },

    // {
    //     path: '/test',
    //     name: 'posts.example',
    //     component: Example
    // }


]

export default createRouter({
    history: createWebHistory(),
    routes
})