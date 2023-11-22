<template>
    <main id="home">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <br>
                    <h1>
                        <Transition name="FirstText">
                            <span class="about" v-if="loaded">sobre</span>
                        </Transition>
                        <br>
                        <Transition name="SecondText">
                            <span class="me" v-if="loaded">mim</span>
                        </Transition>
                        <transition name="svgAnimation">
                            <svg v-if="loaded && !responsive" xmlns="http://www.w3.org/2000/svg" width="6.250rem" height="6.813rem" viewBox="0 0 110 119" fill="none">
                                <path d="M106.048 27.4961L57.8841 1.12639C56.9175 0.597512 55.8334 0.320313 54.7316 0.320312C53.6298 0.320312 52.5457 0.597512 51.5791 1.12639L3.41525 27.4961C2.38203 28.0614 1.51983 28.8942 0.918971 29.9072C0.318115 30.9201 0.000708929 32.0761 0 33.2538V85.5991C0.000708929 86.7769 0.318115 87.9328 0.918971 88.9458C1.51983 89.9588 2.38203 90.7916 3.41525 91.3569L51.5791 117.727C52.5449 118.258 53.6293 118.537 54.7316 118.537C55.8339 118.537 56.9183 118.258 57.8841 117.727L106.048 91.3569C107.081 90.7916 107.943 89.9588 108.544 88.9458C109.145 87.9328 109.462 86.7769 109.463 85.5991V33.2538C109.462 32.0761 109.145 30.9201 108.544 29.9072C107.943 28.8942 107.081 28.0614 106.048 27.4961ZM105.085 85.5991C105.084 85.9911 104.978 86.3757 104.777 86.7126C104.577 87.0496 104.29 87.3266 103.946 87.5148L55.7824 113.884C55.4602 114.061 55.0989 114.153 54.7316 114.153C54.3643 114.153 54.003 114.061 53.6808 113.884L5.51695 87.5148C5.17308 87.3266 4.88603 87.0496 4.68578 86.7126C4.48553 86.3757 4.37942 85.9911 4.37853 85.5991V33.2538C4.37942 32.8619 4.48553 32.4773 4.68578 32.1404C4.88603 31.8034 5.17308 31.5264 5.51695 31.3382L53.6808 4.96855C54.002 4.78928 54.3637 4.69517 54.7316 4.69517C55.0995 4.69517 55.4612 4.78928 55.7824 4.96855L103.946 31.3382C104.29 31.5264 104.577 31.8034 104.777 32.1404C104.978 32.4773 105.084 32.8619 105.085 33.2538V85.5991Z" fill="white"/>
                                <path d="M47.7453 42.2422L65.2129 59.7097L47.7453 77.1773" stroke="white" stroke-width="4.65801" stroke-linecap="round"/>
                            </svg>
                        </transition>
                    </h1>
                    <Transition name="svgAnimation">
                        <SetaBottom v-if="loaded && responsive"></SetaBottom>
                    </Transition>
                </div>
                <div class="description-container">
                    <p>
                        <TransitionGroup name="Opacity">
                            <span v-for="(text, index) in text1" :key="index">{{text}}</span>
                            <span v-for="(text, index) in text2" :key="index">{{text}}</span>
                            <RouterLink v-if="showContact" key="33" to="/contact">
                                <TransitionGroup name="Opacity">
                                    <span v-for="(text, index) in linkRouter" :key="index">{{text}}</span>
                                </TransitionGroup>
                            </RouterLink>
                        </TransitionGroup>
                    </p>
                </div>
            </div>
        </div>
                    
    </main>
    
</template>
<script>
import SetaBottom from '../components/icons/SetaBottom.vue'

export default {
    components:{SetaBottom},
    beforeMount(){
        this.setResponsive()
    },
    data(){
        return {
            text1: [],
            text2:[],
            linkRouter: [],
            text1FullWords: 'Meu nome é Ryann Ghisi, tenho 17 anos e sou um Web Designer e Designer Gráfico.',
            text2FullWords: ' Ingressei na área de design com o objetivo de aprimorar minhas habilidades empreendedoras e adquirir competências técnicas sólidas. Ao longo do tempo, desenvolvi experiência em design gráfico e web design, tornando-me capaz de criar designs funcionais e estéticamente agradáveis. Meu foco principal é atender às necessidades práticas dos meus clientes. Estou à disposição para auxiliá-lo na criação de designs para aplicativos, websites, logos e outros projetos relacionados ao design. Se precisar dos meus serviços ou quiser discutir colaborações, sinta-se à vontade para entrar em ',
            linkRouterFullWords: 'contato.',
            currentIndexText1: 0,
            currentIndexText2: 0,
            currentIndexText3: 0,
            intervalAnimation1: undefined,
            intervalAnimation2: undefined,
            intervalAnimation3: undefined,
            timing: 30,
            loaded: false,
            showContact: false,
            responsive: false,
            tout1: undefined,
            tout2: undefined,
            tout3: undefined
        }
    },
    watch:{
        '$screen.width'(value){
            this.setResponsive()
        }
    },
    mounted(){
        this.loaded = true
        let tout1
        let tout2
        tout1 = setTimeout(()=> {
            this.startSmallTextAnimation(1)
            return tout1
        }, 1500)
        tout2 = setTimeout(() => {
            this.startSmallTextAnimation(2)
            return tout2
        }, (this.timing + 2) * this.text1FullWords.length * 1.5);
        this.tout1 = tout1
        this.tout2 = tout2
        this.verifyIntervals()
    },
    beforeUnmount(){
        clearInterval(this.intervalAnimation1)
        clearInterval(this.intervalAnimation2)
        clearInterval(this.intervalAnimation3)
        clearTimeout(this.tout1)
        clearTimeout(this.tout2)
        clearTimeout(this.tout3)
        console.log(this.tout1, this.tout2)
        
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
        startSmallTextAnimation(animation){
            if(animation === 1) {
                let interval = setInterval(() => {
                    this.smallTextAnimation1()
                    this.currentIndexText1++
                    return interval
                }, this.timing);
                this.intervalAnimation1 = interval
            }
            if(animation === 2) {
                let interval = setInterval(() => {
                    this.smallTextAnimation2()
                    this.currentIndexText2++
                    return interval
                }, this.timing);
                this.intervalAnimation2 = interval
            }
            if(animation === 3) {
                let interval = setInterval(() => {
                    this.smallTextAnimation3()
                    this.currentIndexText3++
                    return interval
                }, this.timing);
                this.intervalAnimation3 = interval
            }
        },
        smallTextAnimation1(){
            let fullWordsSplit = this.text1FullWords.split('')
            let wordCurrentIndex = this.text1[this.currentIndexText1]
            console.log('a')
            if(!wordCurrentIndex && fullWordsSplit[this.currentIndexText1]){
                this.text1.push(fullWordsSplit[this.currentIndexText1])
                if(fullWordsSplit.length === this.text1.length) return clearInterval(this.intervalAnimation1)
            }
    },
    smallTextAnimation2(){
        let fullWordsSplit = this.text2FullWords.split('')
        let wordCurrentIndex = this.text2[this.currentIndexText2]
        if(!wordCurrentIndex && fullWordsSplit[this.currentIndexText2]){
            this.text2.push(fullWordsSplit[this.currentIndexText2])
            if(fullWordsSplit.length === this.text2.length) clearInterval(this.intervalAnimation2)
            console.log('q')
            }
            if(this.currentIndexText2 + 1  === fullWordsSplit.length){
                this.showContact = true
                let tout3 = setInterval(() => {
                    this.startSmallTextAnimation(3)
                    return
                }, this.timing);
                this.tout3 = tout3
            }
        },
        smallTextAnimation3(){
            let fullWordsSplit = this.linkRouterFullWords.split('')
            let wordCurrentIndex = this.linkRouter[this.currentIndexText3]
            if(!wordCurrentIndex && fullWordsSplit[this.currentIndexText3]){
                this.linkRouter.push(fullWordsSplit[this.currentIndexText3])
                if(fullWordsSplit.length === this.linkRouter.length) return clearInterval(this.intervalAnimation3)

            }
        },
        verifyIntervals(){
            setTimeout(()=> {
                if(this.text2FullWords.length === this.words.length){
                    clearInterval(this.intervalAnimation2)
                    return
                }   
                this.verifyIntervals()
            }, 5500)
        },
    }

}

</script>

<style scoped>

#home {
    background-image: url('../assets/img/AboutMe.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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
    letter-spacing: 3px;
    -webkit-text-stroke: 4px;
}
#home strong small {
    font-family: 'Inknut Antiqua';
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 400;
    word-spacing: 0px;
    -webkit-text-stroke: 0px;
    line-height: 2rem;
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
}
.title {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10%;

}
.about, .me {
    display: inline-block;
}
.title svg {
    position: absolute;
    margin: 10px;
}
.description-container {
    flex: 1;
    height: 100%;
    display: flex;
    padding-top: 10%;
    justify-content: center;
}
.description-container p {
    font-family: 'Inknut Antiqua';
    color: white;
    background-color: #181818;
    border: 1px solid white;
    border-radius: 15px;
    padding: 20px;
    font-size: 1rem;
    overflow-y: auto;
    height: fit-content;
    max-width: 520px;
}
.description-container p a {
    color: white;
    text-decoration: underline;
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
@media screen and (max-width: 780px) {
    .description-container {
        padding-top: 0%;
        align-items: center;
    }
    .title {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 0%;
        align-items: center;

    }
  .description-container p {
    padding: 10px 10px;
    font-size: 1.5rem;
    max-width: 300px;
    max-height: 240px;
    overflow-y: auto;
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
    .description-container {
        flex: 1.2;
        align-items: flex-start;
        justify-content: center;
        display: flex;
        padding-top: 5px;
    }
    .SecondText-enter-active {
    transition: 0.7s;
    }
    .description-container p {
    font-family: 'Inknut Antiqua';
    color: white;
    background-color: #181818;
    border: 1px solid white;
    border-radius: 15px;
    padding: 15px;
    height: fit-content;
    max-width: 95%;
    font-size: 1rem;
    max-height: 316px;
    overflow-y: auto;
}
    
}
</style>