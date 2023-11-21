<template>
    <main id="home">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="form-container">
                    <!-- <h2 v-if="h2Temp" style="opacity: 0;">Fale Comigo.</h2> -->
                <!-- <Transition name="H2Show">
                    <h2 v-if="loaded">
                        <TransitionGroup name="Opacity">
                            <span v-for="(word, index) in words" :key="index">{{word}}</span>
                        </TransitionGroup>
                    </h2>
                </Transition>   -->   
                    <Transition name="Form">
                        <form v-if="loaded">
                            <div class="name-container">
                                <div class="first-name">
                                    <label>Seu nome*</label>
                                    <input id="name" name="name" type="text" placeholder="Pedro">
                                </div>
                                <div class="second-name">
                                    <label for="secondname">Seu sobrenome*</label>
                                    <input id="secondname" name="secondname" type="text" placeholder="Silva">
                                </div>
                            </div>
                            <div class="email-container">
                                <label for="email">Email*</label>
                                <input id="email" name="email" type="text" placeholder="pedrosilva@gmail.com">
                            </div>
                            <div class="mensagem">
                                <label for="mensagem">Mensagem*</label>
                                <textarea id="mensagem" placeholder="Escreva Aqui Sua Mensagem"></textarea>
                            </div>
                            <input type="submit" id="submit" value="Enviar mensagem">
                        </form>
                    </Transition>
                </div>
                <div class="whats">
                    <Transition name="svgAnimation">
                        <Whats v-if="loaded"></Whats>
                    </Transition>
                    <Transition name="SpanWhats">
                        <a href="https://api.whatsapp.com/send?phone=48999900383" v-if="loaded">(48) 99990-0383</a>
                    </Transition>

                </div>
            </div>
        </div>
                    
    </main>
    
</template>
<script>
import Whats from '../components/icons/Whats.vue'
export default {
    components: {Whats},
    beforeMount(){
        this.setResponsive()
    },
    mounted(){
        setTimeout(this.startSmallTextAnimation, 1050)
        setTimeout(()=> {
            this.verifyIntervals()
        }, (this.timing + 50) * this.fullWords.length)
        
        this.loaded = true
    },
    beforeUnmount(){
        clearInterval(this.intervalAnimation)
    },
    data(){
        return { 
            words: [],
            fullWords: 'Fale Comigo.',
            currentIndex: 0,
            timing: 55,
            intervalAnimation: undefined,
            loaded: false,
            h2Temp: true,
            responsive: false,
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
        startSmallTextAnimation(){
            let interval = setInterval(() => {
                this.smallTextAnimation()
                this.currentIndex++
                return interval
            }, this.timing);
            this.intervalAnimation = interval
        },
        smallTextAnimation(){
            this.h2Temp = false
            let fullWordsSplit = this.fullWords.split('')
            let wordCurrentIndex = this.words[this.currentIndex]
            if(!wordCurrentIndex && fullWordsSplit[this.currentIndex]){
                this.words.push(fullWordsSplit[this.currentIndex])
            }
        },
         verifyIntervals(){
            setTimeout(()=> {
                if(this.fullWords.length === this.words.length){
                    clearInterval(this.intervalAnimation)
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
    background-image: url('../assets/img/Contact.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: calc(100% - 80px);
    position: relative;
}

#home h2 {
    color: #FFF;
    font-size: 2.1rem;
    font-family: Inter;
    font-weight: 800;
    font-style: normal;
    letter-spacing: -0.9px;
    line-height: 155.99%; /* 46.797px */
    
}
#home h2 span {
    font-weight: 800;
}
label {
    color: #FFF;
    font-size: 1.150rem;
    font-style: normal;
    font-weight: 800;
    line-height: 155.99%; /* 23.526px */
    letter-spacing: -0.452px;
    font-family: Inter;
}
.wrapper{
    width: 100%;
    height: 100%;
    padding-top: 3.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-container {
    flex: 1;
    max-width: 500px;
} 
form {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    gap: 15px;
} 
.name-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 33px;
}
.first-name, .second-name {
    width: 50%;
    display: flex;
    flex-direction: column;

}

.email-container {
    display: flex;
    flex-direction: column;
}

.mensagem {
    width: 100%;
    height: 100%;
    max-height: 160px;
    display: flex;
    flex-direction: column;
}

textarea {
    width: 100%;
    height: 90%;
    max-height: 133px;
    resize: none;
    background: none;
    border: 2.32px solid #C5C5C5;
    border-radius: 11.601px;
    color: white;
    font-size: 1.1rem;
    text-align: left;
    outline: none;
    padding: 10px 10px;

}
textarea::placeholder {
    color: #C5C5C5;
}

.whats {
    flex: 0.2;
    max-width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.whats a {
    color: white;
    font-family: Inknut Antiqua;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* PC - Parágrafo 16px */
}
input[type='text'], input[type='email']{
    border-radius: 11.601px;
    border: 2.40px solid #C5C5C5;
    background: none;
    padding: 10px 10px;
    outline: none;
    color: white;
    font-size: 1rem;
}
input[type='submit'] {
    border-radius: 11.601px;
    background: rgba(217, 217, 217, 0.25);
    border: 2.32px solid rgba(197, 197, 197, 0.50);
    width: 70%;
    padding: 13px 8px;
    text-align: center;
    font-size: 0.98rem;
    color: white;
    margin: 0px auto;
    -webkit-text-stroke: 0.3px white;
    letter-spacing: 0.5px;
    cursor: pointer;

}
input[type='text']::placeholder, input[type='email']::placeholder{
    color: #C5C5C5;
    
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

.Form-enter-active {
    transition: 0.9s;
}
.Form-enter-from {
    opacity: 0;
    transform: translateY(-100px);
}
.Form-enter-to {
    opacity: 1;
    transform: translateY(0px);
}

.SpanWhats-enter-active {
    transition: 0.6s;
    transition-delay: 0.4s;
}
.SpanWhats-enter-from {
    opacity: 0;
    transform: translateX(-400px);
}
.SpanWhats-enter-to {
    opacity: 1;
    transform: translateX(0px);
}
.svgAnimation-enter-active {
    transition: 0.7s;
    transition-delay: 0.8s;
}
.svgAnimation-enter-from {
    transform: scale(0);
}
.svgAnimation-enter-to {
    transform: scale(1);
}
.H2Show-enter-active {
    transition: 0.1s;
    transition-delay: 1s;
}
.H2Show-enter-from {
    opacity: 0;
}
.H2Show-enter-to {
    opacity: 1;
}
@media screen and (max-width: 556px) {
    #home h2 {
        font-size: 1.9rem;
    }
    input[type='text'], input[type='email']{
    border-radius: 11.601px;
    border: 2.40px solid #C5C5C5;
    background: none;
    padding: 10px 10px;
    outline: none;
    color: white;
    font-size: 0.9rem;
}
input[type='submit'] {
    border-radius: 11.601px;
    background: rgba(217, 217, 217, 0.25);
    border: 2.32px solid rgba(197, 197, 197, 0.50);
    width: 70%;
    padding: 13px 8px;
    text-align: center;
    font-size: 0.96rem;
    color: white;
    margin: 0px auto;
    -webkit-text-stroke: 0.3px white;
    letter-spacing: 0.5px;
    cursor: pointer;

}
.form-container {
    flex: 1;
    width: 96%;
    max-width: 500px;
    padding-top: 5px;
}
.name-container {
    width: 100%;
    display: flex;
    justify-content: center;
    
}
.first-name, .second-name {
    width: 45%;
    display: flex;
    flex-direction: column;

} 
    
}
</style>