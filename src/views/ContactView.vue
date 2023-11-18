<template>
    <main id="home">
        <div class="shadow"></div>
        <div class="container">
            <div class="wrapper">
                <div class="form-container">
                    <h2>Fale Comigo.</h2>
                    <form>
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
                </div>
                <div class="whats">
                    <Whats></Whats>
                    <a href="https://api.whatsapp.com/send?phone=48999900383">(48) 99990-0383</a>

                </div>
            </div>
        </div>
                    
    </main>
    
</template>
<script>
import Whats from '../components/icons/Whats.vue'
export default {
    components: {Whats}


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
    height: 100%;
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
    max-height: 260px;
    display: flex;
    flex-direction: column;
}

textarea {
    width: 100%;
    height: 90%;
    max-height: 233px;
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
    flex: 0.5;
    max-width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.whats a {
    color: white;
    font-family: Inknut Antiqua;
    font-size: 16px;
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

</style>