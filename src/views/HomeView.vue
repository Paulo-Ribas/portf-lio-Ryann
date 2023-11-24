<template>
    <main id="home">
        <div class="shadow" v-if="loaded"></div>
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h1>
                        <strong> 
                            <small v-if="loaded">
                                <TransitionGroup name="Opacity">
                                    <span v-for="(word, index) in words" :key="index">{{word}}</span>
                                </TransitionGroup>
                            </small>
                        </strong>
                        <br>
                        <Transition name="FirstText">
                            <span v-if="loaded" class="name">
                                ryann
                            </span>
                        </Transition>
                        <br v-if="!responsive">
                        <Transition name="SecondText">
                            <span v-if="loaded" class="secondName">
                                ghisi
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
                <div class="img-container" v-if="loaded">
                    <img src="../assets/img/imagepfp.png">
                </div>
            </div>
        </div>
                    
    </main>
    
</template>
<script>
import SetaBottom from '../components/icons/SetaBottom.vue'
import Loanding from '../components/Loanding.vue'
export default {
    components: {
        SetaBottom, Loanding
    },
    beforeMount(){
        this.setResponsive()
    },
    data(){
        return {
            words: [],
            fullWords: 'Web Designer e Designer Gráfico',
            currentIndex: 0,
            intervalAnimation: undefined,
            timing: 55,
            responsive: false,
            loaded: false,
        }
    },
    mounted(){
        this.loaded = true
        this.words = this.fullWords.split('')
        let timeout = setTimeout(() => {
            this.startSmallTextAnimation()
            return timeout
        }, 1400);
        this.tout = timeout
    },
    beforeUnmount(){
        clearInterval(this.intervalAnimation)
        clearTimeout(this.tout)
    },
    watch: {
        '$screen.width'(value){
            this.setResponsive(value)
        }
    },
    methods:{
        setResponsive(value = this.$screen.width){
            if(value <= 556) {
                this.responsive = true
            }
            else {
                this.responsive = false
            }
        },
        startSmallTextAnimation(){
            let interval = setInterval(() => {
                this.smallTextAnimation()
                return interval
            }, this.timing);
            this.intervalAnimation = interval
        },
        smallTextAnimation(){
            try {
                let spans = this.addClassShowUp('small span', this.currentIndex)
                if(spans.length === this.currentIndex) return clearInterval(this.intervalAnimation)
                this.currentIndex++
                
            } catch (error) {
                clearInterval(this.intervalAnimation)
            }
        },
        addClassShowUp(element, index){
            try {
                let spans = Array.from(document.querySelectorAll(element))
                spans[index].classList.add('showUp')
                return spans
            }
            catch(err){
                throw err
            }
        }    
    }

}

</script>

<style scoped>

#home {
    background-image: url('../assets/img/Home.jpg');
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
    font-weight: bold;
    line-height: 5.7rem;
    text-transform: uppercase;
    word-spacing: 6px;
    -webkit-text-stroke: 4px;
    width: 90%;
    max-width: 356px;
}
#home strong small {
    font-family: 'Inknut Antiqua';
    font-size: 1.2rem;
    text-transform: none;
    font-weight: 400;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 2rem;
}
small span {
    opacity: 0;
}
.shadow {
    background-color: #181818;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    width: 100%;
}
.name, .secondName {
    display: inline-block;
}
.container {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 1425px;
    z-index: 2;
    position: relative;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}
.title {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10%;
}
.title svg {
    position: absolute;
    margin: 10px;
}
.img-container {
    padding-top: 9.5%;
    flex: 1;
    display: flex;
    justify-content: center;
}
img {
    height: fit-content;
    max-width: 90%;
}

.Opacity-enter-active {
    transition: 0.1s;
}
.Opacity-enter-from {
    opacity: 0.4;
}
.Opacity-enter-to {
    opacity: 1;
}

.FirstText-enter-active {
    transition: 0.7s;
    transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94)
}
.FirstText-enter-from {
    transform: translateX(-50%);
    opacity: 0.7;
}
.FirstText-enter-to {
    transform: translateX(0%);
    opacity: 1;
}

.SecondText-enter-active {
    transition: 1.2s;
}
.SecondText-enter-from {
    transform: translateX(-70%);
    opacity: 0.7;    
}
.SecondText-enter-to {
    transform: translateX(0%);
    opacity: 1;
}
.svgAnimation-enter-active {
    transition: 0.6s;
    transition-delay: 1.1s;
}
.svgAnimation-enter-from {
    transform: scale(0);
}
.svgAnimation-enter-to {
    transform: scale(1);
}
.shadow {
    background-color: #181818;
    height: 100%;
    opacity: 0.6;
    position: absolute;
    z-index: 0;
    width: 100%;
}
.showUp {
    transition: 0.1s;
    animation: opacity;
    animation-fill-mode: forwards;
}

@keyframes opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    
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
    #home strong small {
        font-size: 1rem;
        text-transform: none;
        font-weight: 400;
        word-spacing: 0px;
        -webkit-text-stroke: 0px;
        line-height: 2rem;
        font-family: 'Inknut Antiqua';
    }
    .title {
        flex-direction: column;
        align-items: center;
        flex: 0.8;
    }
    .img-container {
        flex: 1.2;
        align-items: flex-start;
        justify-content: center;
        padding-top: 8px;
        display: flex;
    }
    .img-container img {
        width: 60%;
    }
    
    .SecondText-enter-active {
    transition: 0.7s;
    }
    
}
@media screen and (max-width: 870px) {
  .title, .img-container {
    padding-top: 0%;
    align-items: center;
  }
  .title h1 {
    text-align: center;
  }
  .img-container img {
    max-height: 90%;
    max-width: 58%;
  }
}
</style>