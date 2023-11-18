<template>
    <div class="slide-container">
        <div class="slide" >
            <div class="project-box" v-for="(project, index) in projectsTratament" :key="index">
                <img :src="project.img" draggable="false">
                <RouterLink :to="'/projects/' + project.name + '/' + project.number"></RouterLink>
            </div>
        </div>
    </div>
</template>

<script>

import { RouterLink } from 'vue-router';
export default {
    components:{
        RouterLink
    },
    props: {
        projectsProps: Array,
        showRightProps: Boolean,
    },
    data(){
        return {
            projects: this.projectsProps,
            currentTranslate: 0,
            count: 0,
            showRight: this.showRightProps,

        }
    },
    watch: {
        projectsProps(value){
            this.projects = value
        },
        showRightProps(value) {
            console.log('foi?', value)
            if(value){
                this.showRight = value
                console.log(this.showRight)
            }
        }
    },
    computed:{
        projectsTratament(){
            return this.projects.map(project => {
                let newImg = this.getImg(project.img)
                return {name: project.name, img: newImg, number: project.number}
            })
        }
    },
    methods: {
        getImg(img){
            return new URL(img, import.meta.url).href
        }
    }

}
</script>

<style scoped>
    .slide-container {
        width: calc(98% - 25px);
        height: 100%;
        max-height: 400px;
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        max-width: 1280px;
        overflow: hidden;
    }
    .slide {
        width: fit-content;
        height: 100%;
        transform: translateX(0px);
        transition: 0.3s;
        display: flex;
        gap: 3px;

    }
    .project-box {
        width: 330px;
        height: 100%;
        position: relative;
        cursor: pointer;
        transition: 0.1s;
        overflow: hidden;
        user-select: none;
    }
    .project-box a {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    .project-box:hover {
        transform: translateY(-5px);
    }
    .project-box img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        transition: 0.3s;
    }
    .project-box img:hover {
        transform: scale(1.1);
    }

</style>