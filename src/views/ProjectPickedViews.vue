<template>
    <section class="project">
        <div class="container">
            <div class="project-picked-container">
              <div class="btn-title">
                  <RouterLink to="/projects" class="return">Voltar</RouterLink>
                  <!-- <h2>{{projectName}}</h2> -->
              </div>
              <div class="project-img-section">
                  <ProjectList v-if="!responsive" :projectListProps="arrayImgs"></ProjectList>
                  <div class="project-img-container">
                    <img id="img-project" :src="projectImg" alt="imagem do design do projeto selecionado" @click="zoomToggle">
                  </div>
                  <ProjectListMq v-if="responsive" :projectListProps="arrayImgs"></ProjectListMq>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectList from '../components/ProjectList.vue';
import ProjectListMq from '../components/ProjectListMq.vue';
export default {
    components: {
        ProjectList, ProjectListMq
    },
    head(){
        return {
            title: this.projectName,
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Aqui você descobre mais sobre mim, o compromisso com o Design e o motivo por eu ter escolhido essa área' },

            ],
        }
    },
    data() {
        return {
          arrayCreated: [],
          projectName: decodeURI(this.$route.params.name),
          projectImg: '',
          zoom: true,
          responsive: false,

        };
    },
    beforeMount(){
        this.setResponsive()

    },
    created(){
      let array = this.createArray()
      const srcs =this.makeSrcFromArray(array)
      this.arrayCreated = srcs
    },
    computed: {
        arrayImgs() {
            let firstArray = this.createArray();
            let urls = this.makeSrcFromArray(firstArray);
            return urls;
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
        createArray() {
            let param = this.$route.params.number;
            let projectArray = [];
            switch (this.projectName) {
                case 'cartão de apresentação':
                    projectArray = ['project/1.png', 'project/2.png', 'project/3.png'];
                    this.projectImg = new URL(`../assets/img/project/${param}.png`, import.meta.url).href
                    break;
                case 'chat socket':
                    projectArray = [
                        'project1/1.png', 'project1/2.png', 'project1/3.png', 'project1/4.png',
                        'project1/5.png', 'project1/6.png', 'project1/7.png', 'project1/8.png',
                        'project1/9.png', 'project1/10.png', 'project1/11.png',
                    ];
                    this.projectImg = new URL(`../assets/img/project1/${param}.png`, import.meta.url).href
                    break;
                case 'funil whats':
                    projectArray = ['project3/1.png', 'project3/2.png', 'project3/3.png'];
                    this.projectImg = new URL(`../assets/img/project3/${param}.png`, import.meta.url).href
                    break;
                case 'cardPauloRibas':
                    projectArray = ['project2/1.png', 'project2/2.png'];
                    this.projectImg = new URL(`../assets/img/project2/${param}.png`, import.meta.url).href
                    break;
                case 'musiQo':
                    projectArray = ['project4/1.png']
                    this.projectImg = new URL(`../assets/img/project4/${param}.png`, import.meta.url).href
                    break;
                case 'lanches budega':
                    projectArray = ['project5/1.png']
                    this.projectImg = new URL(`../assets/img/project5/${param}.png`, import.meta.url).href
                    break;
                case 'BarberShop':
                    projectArray = ['project6/1.png', 'project6/2.png', 'project6/3.png', 'project6/4.png', 'project6/5.png']
                    this.projectImg = new URL(`../assets/img/project6/${param}.png`, import.meta.url).href
                    break;
                case 'Beth':
                    projectArray = ['project7/1.png', 'project7/2.png', 'project7/3.png', 'project7/4.png']
                    this.projectImg = new URL(`../assets/img/project7/${param}.png`, import.meta.url).href
                    break;
                case 'Melissa':
                    projectArray = ['project8/1.png', 'project8/2.png', 'project8/3.png']
                    this.projectImg = new URL(`../assets/img/project8/${param}.png`, import.meta.url).href
                    break;
                case 'ryanng':
                    projectArray = ['project9/1.png', 'project9/2.png', 'project9/3.png']
                    this.projectImg = new URL(`../assets/img/project9/${param}.png`, import.meta.url).href
                    break;
                case 'Amigitos':
                    projectArray = ['project10/1.png', 'project10/2.png', 'project10/3.png']
                    this.projectImg = new URL(`../assets/img/project10/${param}.png`, import.meta.url).href
                    break;
                case 'Musicas':
                    projectArray = ['project11/1.png', 'project11/2.png', 'project11/3.png']
                    this.projectImg = new URL(`../assets/img/project11/${param}.png`, import.meta.url).href
                    break;

            }
            return projectArray;
        },
        makeSrcFromArray(array) {
            let newArray = array.map(img => {
                return { src: new URL(`../assets/img/${img}`, import.meta.url).href };
            });
            console.log(newArray,'novo array');
            return newArray;
        },
        zoomToggle(){
            let img = document.getElementById('img-project')
            console.log('me chamaram', img)
            if(this.zoom) {
                img.style.maxHeight = '100%'
                img.style.cursor = 'zoom-in'
                this.zoom = false
            }
            else {
                img.style.maxHeight = 'none'
                img.style.cursor = 'zoom-out'
                this.zoom = true
            }
        }
    },
}
</script>

<style scoped>
    section {
        position: absolute;
        width: 100vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.455);
        backdrop-filter: blur(14px);
        z-index: 10;
        left: 50%;
        transform: translateX(-50%);

    }
    .project-picked-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
    }
    
    .btn-title {
        width: 100%;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
    }

    .btn-title a {
        border-radius: 0rem 1rem 1rem 0rem;
        background: transparent;
        color: white;
        padding: 10.5px 33px;
        font-family: 'Roboto';
        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        width: fit-content;
        font-size: 16px;
        border: 1.6px solid #D9D9D9;
        margin: 13px 0px 7px 0px;
        -webkit-text-stroke: 0.2px #D9D9D9;
        transition: 0.5s;
    
    }
    .btn-title a:hover {
        background: #181818;
    }
    .btn-title h2 {
        color: white;
        font-size: 1.3rem;
        font-family: 'Inknut Antiqua';
        text-transform: uppercase;
        width: calc(100% - 294px);
    }
    .project-img-section {
        width: 100%;
        height: calc(95% - 60px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
    .project-img-container {
        height: 100%;
        flex: 1;
        overflow-y: auto;
        display: flex;
        justify-content: center;
    }
    .project-img-container img {
        height: fit-content;
        width: fit-content;
        max-height: none;
        max-width: 100%;
        cursor: zoom-out;

    }
    .project-img-container::-webkit-scrollbar {
        width: 6px;
    }

    .project-img-container::-webkit-scrollbar-track {
        background: black;
    }
    .project-img-container::-webkit-scrollbar-thumb {
        background-color: white;
        border-radius: 4px;
    }

    @media screen and (max-width: 556px) {

        .project-picked-container {
            justify-content: space-around;
        }
        .project-img-section {
            flex-direction: column;
        }
        .btn-title {
            width: 95%;
            align-self: center;
        }
        .project-img-container {
            flex: none;
            height: 64%;
            align-items: center;
        }
        .project-img-container img {
            max-width: 95%;
        }

    }

</style>