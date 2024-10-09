import {createRouter, createWebHistory} from 'vue-router'
import PostsIndex from "@/components/posts/PostsIndex.vue";
import Example from "@/components/posts/Example.vue";
import PostsCreate from "@/components/posts/PostsCreate.vue";

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component: PostsIndex
    },

    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostsCreate
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