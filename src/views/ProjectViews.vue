<template>
    <main id="home">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="tittle">
                    <h1>
                        <Transition name="Title">
                            <span v-if="loaded">
                                projetos
                            </span>
                        </Transition>

                        <Transition name="svgAnimation">
                            <svg v-if="loaded" xmlns="http://www.w3.org/2000/svg" width="90" height="99" viewBox="0 0 110 119" fill="none">
                                <path d="M106.048 27.1758L57.8841 0.806075C56.9175 0.277199 55.8334 0 54.7316 0C53.6298 0 52.5457 0.277199 51.5791 0.806075L3.41525 27.1758C2.38203 27.7411 1.51983 28.5739 0.918971 29.5868C0.318115 30.5998 0.000708929 31.7557 0 32.9335V85.2788C0.000708929 86.4566 0.318115 87.6125 0.918971 88.6255C1.51983 89.6385 2.38203 90.4713 3.41525 91.0366L51.5791 117.406C52.5449 117.938 53.6293 118.216 54.7316 118.216C55.8339 118.216 56.9183 117.938 57.8841 117.406L106.048 91.0366C107.081 90.4713 107.943 89.6385 108.544 88.6255C109.145 87.6125 109.462 86.4566 109.463 85.2788V32.9335C109.462 31.7557 109.145 30.5998 108.544 29.5868C107.943 28.5739 107.081 27.7411 106.048 27.1758ZM105.085 85.2788C105.084 85.6708 104.978 86.0553 104.777 86.3923C104.577 86.7293 104.29 87.0063 103.946 87.1944L55.7824 113.564C55.4602 113.74 55.0989 113.833 54.7316 113.833C54.3643 113.833 54.003 113.74 53.6808 113.564L5.51695 87.1944C5.17308 87.0063 4.88603 86.7293 4.68578 86.3923C4.48553 86.0553 4.37942 85.6708 4.37853 85.2788V32.9335C4.37942 32.5416 4.48553 32.157 4.68578 31.82C4.88603 31.4831 5.17308 31.2061 5.51695 31.0179L53.6808 4.64823C54.002 4.46897 54.3637 4.37486 54.7316 4.37486C55.0995 4.37486 55.4612 4.46897 55.7824 4.64823L103.946 31.0179C104.29 31.2061 104.577 31.4831 104.777 31.82C104.978 32.157 105.084 32.5416 105.085 32.9335V85.2788Z" fill="white"/>
                                <path d="M72 51.7444L54.5325 69.2119L37.0649 51.7444" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
                            </svg>
                        </Transition>
                    </h1>
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
import SetaLeft from '../components/icons/SetaLeft.vue';
import SetaRight from '../components/icons/SetaRight.vue';

export default {
    components: {ProjectsSlide, SetaLeft, SetaRight},
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
            projects:[{name:'cartão de apresentação', img: '../assets/img/project/1.png', number: '1'}, 
            {name:'chat socket', img: '../assets/img/project1/1.png', number: '1'},
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
    methods: {
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
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    max-height: 700px;
}
.tittle {
    flex: 1;
    display: flex;
    justify-content: center;
}
.tittle svg {
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
</style>