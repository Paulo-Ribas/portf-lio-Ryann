<template>
    <section class="project">
        <div class="container">
            <div class="project-picked-container">
              <div class="btn-title">
                  <RouterLink to="/projects" class="return">Voltar</RouterLink>
                  <h2>{{projectName}}</h2>
              </div>
              <div class="project-img-section">
                  <ProjectChoiced :projectListProps="arrayImgs"></ProjectChoiced>
                  <div class="project-img-container">
                    <img id="img-project" :src="projectImg" alt="imagem do design do projeto selecionado" @click="zoomToggle">
                  </div>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectChoiced from '../components/ProjectChoiced.vue';
export default {
    components: {
        ProjectChoiced
    },
    data() {
        return {
          arrayCreated: [],
          projectName: decodeURI(this.$route.params.name),
          projectImg: '',
          zoom: true,
        };
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
    methods: {
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
                        'project1/home.png', 'project1/0.png', 'project1/1.png', 'project1/2.png',
                        'project1/3.png', 'project1/4.png', 'project1/5.png', 'project1/6.png',
                        'project1/7.png', 'project1/8.png', 'project1/9.png',
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

            }
            console.log(param)
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
        justify-content: space-evenly;
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
        border-radius: 1rem;
        border: 1px solid #000;
        -webkit-text-stroke: 0.2px black;
        background: #D9D9D9;
        color: #000;
        padding: 8.5px 33px;
        font-family: 'Inknut Antiqua';
        text-align: center;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        width: fit-content;
        font-size: 16px;
    
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

</style>