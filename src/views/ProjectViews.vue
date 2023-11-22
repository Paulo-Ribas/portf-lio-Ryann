<template>
    <main id="home">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h1>
                        <Transition name="Title">
                            <span v-if="loaded">
                                projetos
                            </span>
                        </Transition>
                        <Transition name="svgAnimation">
                            <svg v-if="loaded && !responsive" xmlns="http://www.w3.org/2000/svg" width="6.250rem" height="6.813rem" viewBox="0 0 110 119" fill="none">
                                <path d="M106.048 27.4961L57.8841 1.12639C56.9175 0.597512 55.8334 0.320313 54.7316 0.320312C53.6298 0.320312 52.5457 0.597512 51.5791 1.12639L3.41525 27.4961C2.38203 28.0614 1.51983 28.8942 0.918971 29.9072C0.318115 30.9201 0.000708929 32.0761 0 33.2538V85.5991C0.000708929 86.7769 0.318115 87.9328 0.918971 88.9458C1.51983 89.9588 2.38203 90.7916 3.41525 91.3569L51.5791 117.727C52.5449 118.258 53.6293 118.537 54.7316 118.537C55.8339 118.537 56.9183 118.258 57.8841 117.727L106.048 91.3569C107.081 90.7916 107.943 89.9588 108.544 88.9458C109.145 87.9328 109.462 86.7769 109.463 85.5991V33.2538C109.462 32.0761 109.145 30.9201 108.544 29.9072C107.943 28.8942 107.081 28.0614 106.048 27.4961ZM105.085 85.5991C105.084 85.9911 104.978 86.3757 104.777 86.7126C104.577 87.0496 104.29 87.3266 103.946 87.5148L55.7824 113.884C55.4602 114.061 55.0989 114.153 54.7316 114.153C54.3643 114.153 54.003 114.061 53.6808 113.884L5.51695 87.5148C5.17308 87.3266 4.88603 87.0496 4.68578 86.7126C4.48553 86.3757 4.37942 85.9911 4.37853 85.5991V33.2538C4.37942 32.8619 4.48553 32.4773 4.68578 32.1404C4.88603 31.8034 5.17308 31.5264 5.51695 31.3382L53.6808 4.96855C54.002 4.78928 54.3637 4.69517 54.7316 4.69517C55.0995 4.69517 55.4612 4.78928 55.7824 4.96855L103.946 31.3382C104.29 31.5264 104.577 31.8034 104.777 32.1404C104.978 32.4773 105.084 32.8619 105.085 33.2538V85.5991Z" fill="white"/>
                                <path d="M47.7453 42.2422L65.2129 59.7097L47.7453 77.1773" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
                            </svg>
                        </Transition>
                    </h1>
                    <Transition name="svgAnimation">
                        <SetaBottom v-if="loaded && responsive"></SetaBottom>
                    </Transition>
                </div>
                <RouterView></RouterView>
                <div class="projects-container">
                    <SetaLeft class="seta-left" @clicked="translateToLeft()" />
                    <Transition name="TesteAnimation">
                        <ProjectsSlide :projectsProps="projects" :showRightProps="showRight" :showLeftProps="false" v-if="loaded"></ProjectsSlide>
                    </Transition>
                        <SetaRight class="seta-right" @clicked="translateToRight()" />
                    </div>
            </div>
        </div><!--fim container-->
    </main>
    
</template>
<script>
import ProjectsSlide from '../components/ProjectsSlide.vue';
import SetaBottom from '../components/icons/SetaBottom.vue';
import SetaLeft from '../components/icons/SetaLeft.vue';
import SetaRight from '../components/icons/SetaRight.vue';


export default {
    components: {ProjectsSlide, SetaLeft, SetaRight, SetaBottom},
    beforeMount(){
        this.setResponsive()
    },
    mounted(){
        this.loaded = true
    },
    data(){
        return {
            currentTranslate: 0,
            showRight: false,
            count: 0,
            doubled: false,
            isDragging: false,
            prevTranslate: 0,
            startMousePosition: 0,
            loaded: false,
            responsive: false,
            projects:[{name:'cartão de apresentação', img: '../assets/img/project/1.png', number: '1'}, 
            {name:'chat socket', img: new URL('../assets/img/project1/1.png', import.meta.url).href, number: '1'},
            {name:'funil whats', img: '../assets/img/project3/2.png', number: '2'},
            {name:'cardPauloRibas', img: '../assets/img/project2/2.png', number: '2'},
            {name: 'musiQo', img: '../assets/img/project4/1.png', number: '1'},
            {name: 'lanches budega', img: '../assets/img/project5/1.png', number: '1'},  
            {name: 'BarberShop', img: '../assets/img/project6/1.png', number: '1'},
            {name: 'Beth', img: '../assets/img/project7/1.png', number: '1'},
            {name: 'Melissa', img: '../assets/img/project8/1.png', number: '1'},
            {name: 'ryanng', img: '../assets/img/project9/1.png', number: '1'},
            {name: 'Amigitos', img: '../assets/img/project10/3.png', number: '3'},
            {name: 'Musicas', img: '../assets/img/project11/3.png', number: '3'},            
            
        ],
        
        }
    },
    watch:{
        '$screen.width'(value){
            this.setResponsive(value)
        }
    },
    methods: {
        setResponsive(value = this.$screen.width){
            if(value <= 556) {
                this.responsive = true
            }
            else {
                this.responsive = false
            }
        },
        translateToLeft(){
            let slide = document.querySelector('.slide')
            console.log('clickei left', slide)
            this.currentTranslate += 333
            slide.style.transform = `translateX(${this.currentTranslate}px)`
            this.count--
            let left = slide.getBoundingClientRect().left
                this.verifyCurrentCountPosition()
           
            
        },
        translateToRight(){
            console.log('lado')
            let slide = document.querySelector('.slide')
            this.currentTranslate -= 333
            slide.style.transform = `translateX(${this.currentTranslate}px)`
            let left = slide.getBoundingClientRect().left
            this.count++
            this.verifyCurrentCountPosition()
  

        },
        doubleArray(){
            let newArray = this.projects
            this.projects.forEach(project => {
                newArray.push(project)
            });
            this.projects = newArray
        this.doubled = true
        },
        verifyCurrentTranslate(left){
            let slide = document.querySelector('.slide')
            let amount = this.projects.length

            console.log(left, amount)

            if(left <= 197) {
                this.currentTranslate = this.currentTranslate - (333 * amount / 2)
                slide.style.transform =  `translateX(${this.currentTranslate})`
            }
        },
        verifyCurrentCountPosition(){
            let slide = document.querySelector('.slide')
            let amount = this.projects.length
            console.log(this.count)
            if(!this.doubled) amount *= 2
            if(this.count <= 0) {
                this.currentTranslate = 0
                slide.style.transition = '0s'
                slide.style.transitionDuraction = '0s'
                console.log("funcionou?", slide.style.transition)
                this.doubleArray()
                this.currentTranslate = this.currentTranslate -= (333 * amount / 2)
                slide.style.transform =  `translateX(${this.currentTranslate}px)`
                this.currentTranslate += 333
                setTimeout(() => {
                    slide.style.transition = '0.3s'
                    slide.style.transform =  `translateX(${this.currentTranslate}px)`
                }, 1);
                this.count = (amount / 2)
                console.log(this.count, amount)
                return
            }
            if(this.count >= (this.projects.length - 3)){
                console.log((333 * amount / 2) - 499.5)
                this.currentTranslate = 0 - ((333 * amount / 2) - (333* 4))
                slide.style.transition = '0s'
                slide.style.transitionDuraction = '0s'
                console.log("funcionou?", slide.style.transition)
                this.doubleArray()
                //this.currentTranslate = this.currentTranslate -= (333 * amount / 2)
                slide.style.transform =  `translateX(${this.currentTranslate}px)`
                this.currentTranslate -= 333
                setTimeout(() => {
                    slide.style.transition = '0.3s'
                    slide.style.transform =  `translateX(${this.currentTranslate}px)`
                }, 1);
                this.count = (amount / 2) - 3
                console.log(this.count, amount)
                return
            }
        },
    }
}

</script>

<style scoped>

#home {
    background-image: url('../assets/img/Projects.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: calc(100% - 80px);
    position: relative;
}

#home h1 {
    color: white;
    color: #FFF;
    font-family: Inter;
    font-size: 6rem;
    font-style: normal;
    line-height: 5.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
}
#home h1 span {
    -webkit-text-stroke: 4px;
    font-weight: bold;


}
#home strong small {
    font-family: 'Inknut Antiqua';
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 400;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 2rem;
    display: flex;
}
.container {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1425px;
    z-index: 2;
    position: relative;
}
.shadow {
    background-color: #181818;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    width: 100%;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 700px;
}
.title {
    flex: 1;
    display: flex;
    justify-content: center;
}
.title svg {
    margin-top: 20px;
}
.projects-container {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    max-height: 400px;
}

.seta-left {
    position: absolute;
    left:  0;
    top: 50%;
    
}
.seta-right {
    position: absolute;
    right: 0;
    top: 50%;
}
.svgAnimation-enter-active {
    transition: 0.6s;
    transition-delay: 0.7s;
}
.svgAnimation-enter-from {
    transform: scale(0);
}
.svgAnimation-enter-to {
    transform: scale(1);
}
.Title-enter-active {
    transition: 0.7s;
}
.Title-enter-from {
    transform: translateY(100px);
    opacity: 0.7;
}
.Title-enter-to {
    transform: translateY(0px);
    opacity: 1;
}
.TesteAnimation-enter-active {
    transition: 0.8s;
    transition-delay: 1.1s;
}
.TesteAnimation-enter-from {
    width: 0%;
}
.TesteAnimation-enter-to {
    width: 100%;
}
.setaLeft-enter-active {
    transition: 0.2s;
    transition-delay: 0.1s;
}
.setaLeft-enter-from {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
}
.setaLeft-enter-to {
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translateX(0%);
}
.setaRight-enter-active {
    
}
.setaRight-enter-from {
    position: absolute;
    right: 50%;
    top: 50%;

}
.setaRight-enter-to {
    position: absolute;
    right: 0%;
    top: 50%;
}
@media screen and (max-width: 556px) {
    .wrapper {
        flex-direction: column;
    }
    #home h1 {
        color: white;
        font-family: Inter;
        font-size: 4rem;
        font-style: normal;
        font-weight: bold;
        line-height: 5.7rem;
        text-transform: uppercase;
        word-spacing: 6px;
        -webkit-text-stroke: 4px;
        padding-top: 0%;
        width: fit-content;
        max-width: 99%;
        color: #FFF;
        text-align: center;
    }
    .title {
        flex-direction: column;
        align-items: center;
        flex: 1;
    }
    .projects-container {
        flex: 1;
    }

    .SecondText-enter-active {
    transition: 0.7s;
    }
    
}
</style>