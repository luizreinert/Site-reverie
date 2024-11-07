
class heroSectionMenu{
    constructor(){
        this.titleContainer = document.getElementById('title-container')
        this.heroSectionBg = document.getElementById('topArt1')
        this.heroSectionInfoContainer = document.getElementById('hero-section-info-container')
        this.renascimento = document.getElementById('menu-option-rafael')
        this.barroco = document.getElementById('menu-option-caravaggio')
        this.neoclassicismo = document.getElementById('menu-option-jacques')
        this.romantismo = document.getElementById('menu-option-goya')
        this.impressionismo = document.getElementById('menu-option-monet')
        this.posImpressionismo = document.getElementById('menu-option-vangogh')
        this.cubismo = document.getElementById('menu-option-picasso')
        this.menuMovements = [this.renascimento, this.barroco, this.neoclassicismo, this.romantismo ,this.impressionismo, this.posImpressionismo, this.cubismo]
    
        this.movementsData = {
            renascimento: {
                "artistMenuOption" : this.renascimento,
                "backgroundClass" : "renascimento-hero-section-bg",
                "menuBackground" : "artists-menu-rafael",
                "mainColor" : "#BFA15F",
                "movementName" : "Renascimento",
                "artistName" : "Rafael Sanzio",
                "informationText1" : "O Renascimento marcou o renascimento da cultura clássica e a valorização do conhecimento humano, centrando-se no humanismo e na redescoberta da arte greco-romana.",
                "informationText2" : "Rafael Sanzio encarnou esses ideais com seu domínio técnico e sua busca pela perfeição harmônica. Suas composições equilibradas e a beleza idealizada de suas figuras simbolizam a visão otimista do Renascimento, que celebrava o potencial humano e o retorno à racionalidade e proporção.",
                "articleHTML" : "rafael-sanzio.html"
                
            },

            barroco: {
                "artistMenuOption" : this.barroco, 
                "backgroundClass" : "barroco-hero-section-bg",
                "menuBackground" : "artists-menu-caravaggio",
                "mainColor" : "#3c332f",
                "movementName" : "Barroco",
                "artistName" : "Caravaggio",
                "informationText1" : "O Barroco, nascido no contexto da Reforma e Contra-Reforma, usou a arte como uma ferramenta poderosa de emoção e espiritualidade.",
                "informationText2" : "Caravaggio foi um dos maiores expoentes desse movimento, utilizando o chiaroscuro para criar contrastes dramáticos que intensificavam o realismo e o impacto emocional de suas obras. O Barroco, com seu dinamismo e teatralidade, se refletiu perfeitamente na obra de Caravaggio, que dava vida a temas religiosos e cotidianos com um vigor quase cinematográfico.",
                "articleHTML" : "caravaggio.html"
            },
            
            neoclassicismo: {
                "artistMenuOption" : this.neoclassicismo, 
                "backgroundClass" : "neoclassicismo-hero-section-bg",
                "menuBackground" : "artists-menu-david",
                "mainColor" : "#A1B2C9",
                "movementName" : "Neoclassicismo",
                "artistName" : "Jacques-Louis David",
                "informationText1" : "O Neoclassicismo surgiu como uma reação ao Rococó, buscando uma volta à simplicidade e ao rigor da arte clássica greco-romana.",
                "informationText2" : "Em meio à Revolução Francesa, Jacques-Louis David utilizou esse estilo para expressar ideais de virtude, disciplina e sacrifício pela pátria. Suas obras, caracterizadas pela clareza formal e temas heroicos, não apenas homenageavam a Antiguidade, mas também serviam como um manifesto político e moral em tempos de mudança.",
                "articleHTML" : "jacques-louis-david.html"
            },
            romantismo: {
                "artistMenuOption" : this.romantismo, 
                "backgroundClass" : "romantismo-hero-section-bg",
                "menuBackground" : "artists-menu-goya",
                "mainColor" : "",
                "movementName" : "Romantismo",
                "artistName" : "Francisco de Goya",
                "informationText1" : "O Romantismo surgiu como uma reação ao Neoclassicismo e à Revolução Industrial, e exaltava a emoção, a subjetividade e o poder do indivíduo em meio à crescente industrialização e turbulência política.",
                "informationText2" : "Francisco de Goya, embora tenha começado sua carreira sob a influência das normas clássicas, tornou-se uma figura central do Romantismo ao explorar temas sombrios e psicológicos em suas obras. Goya foi pioneiro em expressar a fragilidade da vida e a loucura, mostrando a complexidade das emoções humanas em um contexto de guerra e sofrimento.",
                "articleHTML" : "goya.html"
            },
            
            impressionismo: {
                "artistMenuOption" : this.impressionismo, 
                "backgroundClass" : "impressionismo-hero-section-bg",
                "menuBackground" : "artists-menu-monet",
                "mainColor" : "#8DB596",
                "movementName" : "Impressionismo",
                "artistName" : "Claude Monet",
                "informationText1" : "O Impressionismo, surgido na segunda metade do século XIX, representou uma ruptura com a arte acadêmica tradicional, desafiando as convenções com sua ênfase em capturar os efeitos fugazes da luz e da atmosfera. ",
                "informationText2" : "Claude Monet, como líder do movimento, foi pioneiro em retratar a natureza de forma subjetiva e inovadora. Suas pinceladas rápidas e paisagens vibrantes, ao mesmo tempo que revolucionaram a pintura, refletiram a modernidade e as transformações sociais de seu tempo, encapsulando a sensação de movimento e mudança constante.",
                "articleHTML" : "monet.html"
                
            },
            
            posimpressionismo: {
                "artistMenuOption" : this.posImpressionismo, 
                "backgroundClass" : "pos-impressionismo-hero-section-bg",
                "menuBackground" : "artists-menu-vangogh",
                "mainColor" : "",
                "movementName" : "Pós-impressionismo",
                "artistName" : "Vincent Van Gogh",
                "informationText1" : "O Pós-impressionismo nasceu como uma reação ao Impressionismo, buscando formas mais emocionais e simbólicas de expressão. Vincent van Gogh, com suas pinceladas intensas e paleta de cores vibrantes, deu forma a essa nova abordagem, imbuindo suas obras com uma profundidade emocional única.",
                "informationText2" : "O movimento Pós-impressionista explorava não só a percepção visual, mas também a subjetividade interna do artista, e Van Gogh foi um dos maiores expoentes dessa introspecção, influenciando profundamente a arte moderna.",
                "articleHTML" : "van-gogh.html"
            },

            cubismo: {
                "artistMenuOption" : this.cubismo, 
                "backgroundClass" : "cubismo-hero-section-bg",
                "menuBackground" : "artists-menu-picasso",
                "mainColor" : "#FF6F20",
                "movementName" : "Cubismo",
                "artistName" : "Pablo Picasso",
                "informationText1" : "O Cubismo foi uma revolução na forma de representar a realidade, fragmentando objetos e figuras em formas geométricas para mostrar múltiplos ângulos simultaneamente.",
                "informationText2" : "Pablo Picasso foi pioneiro nessa abordagem, transformando a maneira como enxergamos o mundo. Suas obras cubistas, com linhas angulosas e sobreposição de planos, exploram uma visão complexa e multifacetada da realidade. Com sua ousadia criativa, deu ao Cubismo um impacto duradouro, fazendo com que a arte refletisse a fragmentação e a profundidade do mundo moderno.",
                "articleHTML" : "picasso.html"
            },

        }
    }

    menuChangeBg(){
        let eventTypes = ['click']
        let heroBgDiv = document.createElement('div')
        heroBgDiv.id = 'hero-bg-div'
        this.menuMovements.forEach(artist => {
            eventTypes.forEach((event) => {
                artist.addEventListener(event, () => {
                    this.mobileCase() == true ? this.menuSlide(artist, 'slideOff') : '';
                    const mouseEntersButton = setTimeout(() => {
                        for (let movement in this.movementsData){
                            if(artist === this.movementsData[movement]["artistMenuOption"] && artist.classList.contains(movement) == false && this.titleContainer.classList.contains('container-hidden')){
                                if(this.heroSectionBg.lastElementChild.classList.contains('bg-active') && this.heroSectionBg.lastElementChild.classList.contains(this.movementsData[movement]["backgroundClass"]) == false){
                                    heroBgDiv.className = ''
                                }
                                this.heroSectionBg.appendChild(heroBgDiv)
                                heroBgDiv.classList.add(this.movementsData[movement]["backgroundClass"])
                                artist.classList.add(movement)
                                heroBgDiv.classList.add('bg-active')
                                this.showChosenArtistInfo(this.movementsData[movement], movement)
                            } else if (artist != this.movementsData[movement]["artistMenuOption"]){
                                this.menuMovements.forEach((teste) => {
                                    if (teste != artist){
                                        teste.classList.remove(movement)
                                    }
                                })
                            }
                        }    
                    }, 100);
                })
            })
        })
    }

    showChosenArtistInfo(targetArtist, targetArtistMovement){
        this.mobileCase() ? undefined : this.heroSectionInfoContainer.classList.remove('d-none'); this.heroSectionInfoContainer.classList.add('hero-section-info-shown') 
        let movementName = document.getElementById('movement-title-name')
        let artistName = document.getElementById('movement-artist-name')
        let artistText1 = document.getElementById('movement-artist-text-1')
        let artistText2 = document.getElementById('movement-artist-text-2')
        let articleBtn = document.getElementById('open-article-btn')
        let infoContainerElements = [movementName, artistName, artistText1, artistText2, articleBtn]

        // Troca a cor do botão "Saiba mais", de acordo com a cor designada ao movimento/artista
        this.changeButtonBgColor(targetArtistMovement)

        // Troca as informações de acordo com o movimento escolhido
        movementName.innerText = targetArtist.movementName
        artistName.innerText = targetArtist.artistName
        artistName.style.color = `var(--${targetArtistMovement}-main-color)`
        artistText1.innerText = targetArtist.informationText1
        artistText2.innerText = targetArtist.informationText2
        articleBtn.addEventListener('click', () => {
            this.openArticle(targetArtist.articleHTML, targetArtist.artistName)
        })

        // Adiciona as classes de transição para os elementos, removendo-as após 1 segundo
        infoContainerElements.forEach((element) => {
            switch (element){
                case artistText1:
                case artistText2:
                    element.classList.add('hero-section-info-text-shown')
                    break
                case artistName:
                case articleBtn:
                    element.classList.add('article-btn-shown')
                    break
            }
        })
        setTimeout(() => {
            infoContainerElements.forEach((element) => {
                element.classList.remove('hero-section-info-text-shown')
                element.classList.remove('article-btn-shown')
            })
        }, 1000);
    }

    openArticle(targetArtistHtml, targetArtist){
        var articleContainer = document.getElementById('article-container')

        fetch(targetArtistHtml)
            .then(r => r.text())
            .then(html => {
                articleContainer.innerHTML = html
                createTargetArtistObjects(targetArtist)
            })
        setTimeout(() => {
            window.scrollTo(0, 1000)
        }, 200);

    }

    changeButtonBgColor(targetArtistMovement){
        var cssVariables = document.querySelector(':root');
        // Obtém o valor da variável CSS correspondente
        var colorValue = getComputedStyle(cssVariables).getPropertyValue(`--${targetArtistMovement}-main-color`);
        // Define o valor da variável usada para o background
        cssVariables.style.setProperty('--used-color', colorValue);
    }

    mobileCase(){
        const breakpointHandler = window.matchMedia('(max-width: 767.98px')
        return breakpointHandler.matches
    }

    menuSlide(target, option){
        const container = this.heroSectionInfoContainer
        const menuOptionsList = this.menuMovements
        const menuOptionContainer = document.getElementById('artists-menu-container')
        const menuBackBtn = document.getElementById('menu-back-btn-container')
        switch (option){
            case 'slideOff':
            container.classList.remove('d-none')
            const changeOption = setTimeout( function(){
                container.classList.add('hero-section-info-shown')
                menuBackBtn.classList.add('menu-back-btn-shown')
                menuOptionContainer.classList.remove('slide-on')
                menuOptionContainer.classList.add('slide-off')
            }, 100)

            menuBackBtn.addEventListener('click', () => {
                container.classList.remove('hero-section-info-shown')
                menuOptionContainer.classList.remove('slide-off')
                menuOptionContainer.classList.add('slide-on')
                menuBackBtn.classList.remove('menu-back-btn-shown')

            })

        }
    }

    start(){
        this.menuChangeBg()
        this.mobileCase()
    }
}

class heroSectionScrollEvents{
    constructor(){
        this.arte1 = document.getElementById('topArt1')
        this.art1Mask = document.getElementById('first-mask')
        this.title = document.getElementById('main-title')
        this.icon = document.getElementById('brand-icon')
        this.navbar = document.getElementById('navbar')
        this.navHyperlinks = document.getElementById('nav-hyperlinks')
        this.titleContainer = document.getElementById('title-container')
        this.containerText = document.getElementById('container-text')
        this.artistsContainer = document.getElementById('artists-menu-container')
        this.heroSection = document.getElementById('hero-section')

    }

    // Função para não bugar o título, caso o usuário dê refresh no meio da página
    middlePageRefreshFix(){
        window.addEventListener('load', () => {   
            // Efeito do tringulo crescer ao carregar a página
            this.arte1.classList.add('art-clippath-1-grow')
            if(scrollY > 0){
                this.title.classList.add('on-nav-2')
                this.navbar.classList.add('navbar-active')
                this.icon.classList.toggle('brand-img-grown', false)
                this.icon.classList.toggle('brand-img', true)
                this.icon.src = "images/assets/logo-museum-white.png";

                this.containerText.classList.add('container-text-hidden')
                this.titleContainer.classList.add('title-container-active')

                try{
                    const heroBgDiv = document.getElementById('hero-bg-div')
                    heroBgDiv.classList.remove('bg-active')      
                    heroBgDiv.classList.add('bg-inactive')  
                    const heroSectionInfoContainer = document.getElementById('hero-section-info-container')
                    heroSectionInfoContainer.classList.add('hero-section-info-shown')  
                } catch(e){
                    //
                }
            } 
        })
    }


    // Função para que, quando o usuário der o primeiro scroll, ocorra as animações da barra de navegação primeiro.
    firstScrollLock(){
        const mobile = window.matchMedia('(max-width: 767.98px)')
        var scrollUnlocked = false
        var touchStartedPos
        var touchEndedPos
        switch (mobile.matches){
            case true:
                this.heroSection.addEventListener('touchstart', (e) => {
                    touchStartedPos = e.touches[0].pageY
                })
                this.heroSection.addEventListener('touchend', (e) => {
                    touchEndedPos = e.changedTouches[0].pageY
                    if (touchEndedPos - touchStartedPos < -0){
                        this.navbar.classList.add('position-fixed')
                        this.art1Mask.classList.add('art-clippath-1-shown')
                        this.arte1.classList.add('art-clippath-1-active-border')
        
        
                        // título -> barra de navegação aparece -> logo muda
                        this.title.classList.add('on-nav')
                        this.icon.classList.toggle('brand-img-grown', false)
                        this.icon.classList.toggle('brand-img', true)
                        this.navbar.classList.add('navbar-active')
                        this.icon.src = "images/assets/logo-museum-white.png";
        
                        // container que o titulo saiu diminui
        
                        this.titleContainer.classList.remove('container-hidden')
                        this.titleContainer.classList.add('container-shown')
                        this.containerText.classList.add('container-text-hidden')
                        this.containerText.classList.remove('container-text-shown')
                        this.titleContainer.classList.add('container-hidden')
                        this.titleContainer.classList.remove('container-shown')
        
                        this.artistsContainer.classList.add('artists-menu-container-active')
        
                        try{
                            const heroBgDiv = document.getElementById('hero-bg-div')
                            heroBgDiv.classList.add('bg-active')  
                            heroBgDiv.classList.remove('bg-inactive')
                            const heroSectionInfoContainer = document.getElementById('hero-section-info-container')
                            //heroSectionInfoContainer.classList.add('hero-section-info-shown')  
                        } catch(e){
                            //
                        }
                    }
                })

                break
            case false:
                this.heroSection.addEventListener('wheel', (e) => {
                    if (scrollY == 0 && e.deltaY > 0){
                        scrollHandle(e)
                        // animações scroll arte 1
                        this.navbar.classList.add('position-fixed')
                        this.art1Mask.classList.add('art-clippath-1-shown')
                        this.arte1.classList.add('art-clippath-1-active-border')
        
        
                        // título -> barra de navegação aparece -> logo muda
                        this.title.classList.add('on-nav')
                        this.icon.classList.toggle('brand-img-grown', false)
                        this.icon.classList.toggle('brand-img', true)
                        this.navbar.classList.add('navbar-active')
                        this.icon.src = "images/assets/logo-museum-white.png";
        
                        // container que o titulo saiu diminui
        
                        this.titleContainer.classList.remove('container-hidden')
                        this.titleContainer.classList.add('container-shown')
                        this.containerText.classList.add('container-text-hidden')
                        this.containerText.classList.remove('container-text-shown')
                        this.titleContainer.classList.add('container-hidden')
                        this.titleContainer.classList.remove('container-shown')
        
                        this.artistsContainer.classList.add('artists-menu-container-active')
        
                        try{
                            const heroBgDiv = document.getElementById('hero-bg-div')
                            heroBgDiv.classList.add('bg-active')  
                            heroBgDiv.classList.remove('bg-inactive')
                            const heroSectionInfoContainer = document.getElementById('hero-section-info-container')
                            //heroSectionInfoContainer.classList.add('hero-section-info-shown')  
                        } catch(e){
                            //
                        }
                        setTimeout(() => {
                            scrollUnlocked = true
                        }, 2000);
                    } if (scrollY < 112 && e.deltaY < 0){
                        scrollUnlocked = false
                    }
        
                })
                break
        }
        function scrollHandle(evento){
            if (scrollUnlocked == false){
                evento.preventDefault()
            }
        }
    }

    scrollToTop(){
        window.addEventListener('scroll', () => {
            if (scrollY == 0){
                this.title.classList.remove('on-nav')
                this.title.classList.remove('on-nav-2')
                this.navbar.classList.remove('navbar-active')
                this.icon.classList.toggle('brand-img-grown', true)
                this.icon.classList.toggle('brand-img', false)
                this.icon.src = "images/assets/icon-museum.png";

                this.titleContainer.classList.remove('container-hidden')
                this.titleContainer.classList.add('container-shown')

                this.containerText.classList.remove('container-text-hidden')
                this.containerText.classList.add('container-text-shown')

                // animações scroll arte 1
                this.art1Mask.classList.remove('art-clippath-1-shown')
                this.arte1.classList.remove('art-clippath-1-active-border')

                this.artistsContainer.classList.remove('artists-menu-container-active')

                try{
                    const heroBgDiv = document.getElementById('hero-bg-div')
                    heroBgDiv.classList.remove('bg-active')
                    heroBgDiv.classList.add('bg-inactive') 
                    const heroSectionInfoContainer = document.getElementById('hero-section-info-container')
                    heroSectionInfoContainer.classList.remove('hero-section-info-shown')
                } catch(e){
                    //
                }
                
            }
        })
    }

    start(){
        this.middlePageRefreshFix()
        this.firstScrollLock()


    }
}


const heroSectionMenuFunctions = new heroSectionMenu
const heroSectionScrollFunctions = new heroSectionScrollEvents
heroSectionMenuFunctions.start()
heroSectionScrollFunctions.start()


//----------------------------------------------------------------//

function createTargetArtistObjects(targetArtist){
    class Molduras{
        constructor(page, artist){
            this.page = page
            this.artist = artist
            if (page === 1){
                this.background = document.getElementById(`${artist}-first-bg`)
                this.container = document.getElementById(`${artist}-canvas-container`)
                this.information = document.getElementById(`${artist}-first-artinfo`)
                this.moldura1 = document.getElementById(`${artist}-m1`)
                this.moldura2 = document.getElementById(`${artist}-m2`)
                this.moldura3 = document.getElementById(`${artist}-m3`)
                this.moldura4 = document.getElementById(`${artist}-m4`)
                this.canvas = document.getElementById(`canvas-1-${artist}`)
                this.botaoCarousel = document.getElementById(`${artist}-first-arrow`)
                this.arrayMolduras = [this.moldura1, this.moldura2, this.moldura3, this.moldura4]
            } else if (page === 2){
                this.background = document.getElementById(`${artist}-second-bg`)
                this.container = document.getElementById(`${artist}-canvas-container-second`)
                this.information = document.getElementById(`${artist}-second-artinfo`)
                this.moldura5 = document.getElementById(`${artist}-m5`)
                this.moldura6 = document.getElementById(`${artist}-m6`)
                this.moldura7 = document.getElementById(`${artist}-m7`)
                this.moldura8 = document.getElementById(`${artist}-m8`)
                this.canvas = document.getElementById(`canvas-2-${artist}`)
                this.botaoCarousel = document.getElementById(`${artist}-second-arrow`)
                this.arrayMolduras = [this.moldura5, this.moldura6, this.moldura7, this.moldura8]
            }
    
            this.infoArrays = {
                vg : {
                    firstBg : "url('images/van-gogh/van-gogh-first-bg.png') no-repeat fixed center / cover",
                    secondBg : "url('images/van-gogh/van-gogh-second-bg.png') no-repeat fixed center / cover",
    
                    moldura1 : {
                        "element" : this.moldura1,
                        "imageUrl" : "url(images/van-gogh/ródano.jpg)",
                        "bgColor" : '#19566a',
                        "title": "Noite Estrelada Sobre o Ródano",
                        "date": "1888",
                        "technique": "Óleo sobre tela",
                        "dimensions": "72.5 cm x 92 cm",
                        "localization": "Museu de Orsay, Paris, França",
                        "citation": "“Uma vez fui dar um passeio pela praia deserta, à noite. Não foi alegre, nem triste, foi belo.”",
                        "firstP": "A obra é uma representação noturna do rio Ródano em Arles, França. Com pinceladas intensas e uma paleta de cores exuberante, van Gogh retrata o céu estrelado em tons de azul profundo e amarelo vibrante, enquanto as luzes das estrelas e das casas à beira do rio se refletem nas águas serenas.",
                        "secondP": "Uma curiosidade é que van Gogh expressou em cartas a seu irmão, Theo, seu desejo de capturar a “poesia” da noite. Esta obra reflete não apenas a beleza da paisagem noturna, mas também a visão única e emocional do artista sobre o mundo ao seu redor. Com sua magia instantânea, continua a cativar espectadores e a transmitir a intensidade da experiência artística de van Gogh."
                    },
                
                    moldura2 : {
                        "element" : this.moldura2,
                        "imageUrl" : "url('images/van-gogh/igreja.jpg')",
                        "bgColor" : '#77774f',
                        "title": "A Igreja de Auvers",
                        "date": "1890",
                        "technique": "Óleo sobre tela",
                        "dimensions": "74 cm x 94 cm",
                        "localization": "Museu de Orsay, Paris, França",
                        "citation": "“Tenho um quadro maior da igreja, com um efeito em que a construção parece ser violeta, contra um céu azul escuro, cobalto puro; as janelas parecem manchas de azul-marinho, o telhado é violeta e, em uma parte, alaranjado”",
                        "firstP": "A obra é uma paisagem de um vilarejo perto de Paris, chamado Auvers-sur-Oise. Van Gogh viveu no local em seus três últimos meses de vida após ficar internado por um ano em uma instituição em Saint-Rémy.",
                        "secondP": "O pintor se mudou para o vilarejo para ficar mais perto de seu médico, o doutor Paul Gachet. O médico era homeopata e havia sido recomendado por Camille Pissarro. Essa pintura, junto a outras desse período de cerca de dois meses de criação intensa em Auvers-sur-Oise, totalizando 70 obras, ou seja, mais de uma por dia. Podem ser vistos como os últimos esforços expressivos e inconscientes do artista antes de sua morte."
                    },
                
                    moldura3 : {
                        "element" : this.moldura3,
                        "imageUrl" : "url('images/van-gogh/oliveiras.jpg')",
                        "bgColor" : '#175e2b',
                        "title": "As Oliveiras",
                        "date": "1889",
                        "technique": "Óleo sobre tela",
                        "dimensions": "72,6 cm x 91,4 cm",
                        "localization": "Museu de Arte Moderna, Nova Iorque, Estados Unidos",
                        "citation": "“As oliveiras com a nuvem branca e as montanhas ao fundo (...) são exageros do ponto de vista da disposição geral; os contornos são acentuados assim como em algumas xilogravuras antigas.”",
                        "firstP": "Após van Gogh voluntariamente entrar no asilo em Saint-Rémy, no sul da França, na primavera de 1889, ele escreveu para seu irmão Theo: \"Eu fiz uma paisagem com oliveiras e também um novo estudo de um céu estrelado.\" Mais tarde, quando as pinturas tinham secado, ele enviou ambas para Theo em Paris.",
                        "secondP": "Os historiadores da arte acreditam que para Van Gogh a oliveira era algo sagrado, simbolizando tanto o divino quanto o \"o ciclo da vida\". Essa noção foi descrita de maneira primorosa em uma carta que ele escreveu a seu irmão Theo: \"O farfalhar do olival tem algo muito secreto e imensamente antigo. É bonito demais para ousarmos pintá-lo ou poder imaginá-lo.\""
                    },
                
                    moldura4 : {
                        "element" : this.moldura4,
                        "imageUrl" : "url('images/van-gogh/casas-auvers.jpg')",
                        "bgColor" : '#b8aac1',
                        "title": "Casas em Auvers",
                        "date": "1890",
                        "technique": "Óleo sobre tela",
                        "dimensions": "73 cm x 61 cm",
                        "localization": "Museu de Arte de Toledo, Ohio, Estados Unidos",
                        "citation": "“(…) Há muitas vilas e diversas moradias modernas e de classe média, muito animadas, ensolaradas e cobertas de flores.”",
                        "firstP": "Retrata uma cena rural em Auvers-sur-Oise, uma vila nos arredores de Paris, onde Van Gogh passou os últimos meses de sua vida. A obra mostra casas modestas com telhados vermelhos e chaminés fumegantes, cercadas por árvores e vegetação.",
                        "secondP": "A pincelada vigorosa e expressiva característica de Van Gogh é evidente na obra, com uso intenso de cores e texturas para transmitir uma sensação de movimento e vida. A perspectiva distorcida das casas e o céu tumultuado refletem o estado emocional do artista, que lutava contra problemas de saúde mental. A pintura é um testemunho da intensidade de suas emoções e de sua busca por beleza e significado mesmo em meio ao sofrimento."
                    },
    
                    moldura5 : {
                        "element" : this.moldura5,
                        "imageUrl" : "url('images/van-gogh/terraço.jpg')",
                        "bgColor" : "#96AAB8",
                        "title": "Terraço e Deck de Observação no Moulin de Blutefin, Mont",
                        "date": "1887",
                        "technique": "Óleo sobre tela",
                        "dimensions": "43.6 cm x 33 cm",
                        "localization": "Museu de Arte de Chicago, Illinois, Estados Unidos",
                        "citation": "“Eu pintei mais 3 estudos na semana passada; um dos fundos de casas antigas — vistos pela minha janela.”",
                        "firstP": "Esta pintura data do inverno de 1887, cerca de um ano depois que Vincent van Gogh chegou a Paris para se juntar ao seu irmão. Foi pintado por cima de uma obra anterior, na qual Van Gogh retratava casas antigas observadas da janela de seu quarto. É uma das paisagens de um grupo que apresenta a Butte Montmartre, uma subida curta do apartamento na rue Lepic onde Vincent e Theo moravam.",
                        "secondP": "O moinho não funcional havia se tornado uma atração turística, oferecendo vistas panorâmicas espetaculares sobre Paris a partir da torre de observação erguida ao lado dele."
                    },
                
                    moldura6 : {
                        "element" : this.moldura6,
                        "imageUrl" : "url('images/van-gogh/vista-apartamento.jpg')",
                        "bgColor" : "#733E20",
                        "title": "Vista do apartamento de Theo",
                        "date": "1887",
                        "technique": "Óleo sobre tela",
                        "dimensions": "45.9 cm x 38.1 cm",
                        "localization": "Museu de Orsay, Paris, França",
                        "citation": "“Tenho um quadro maior da igreja, com um efeito em que a construção parece ser violeta, contra um céu azul escuro, cobalto puro; as janelas parecem manchas de azul-marinho, o telhado é violeta e, em uma parte, alaranjado”",
                        "firstP": "Quando Van Gogh se mudou para Paris, ele morava com seu irmão Theo. Em junho de 1886, mudaram-se para um apartamento na Rue Lepic. Vincent van Gogh usou a vista deste apartamento como inspiração para esta pintura.",
                        "secondP": "Em parte da tela, Van Gogh utilizou a técnica de pontilhado que aprendeu com os pontilhistas. Em outras partes, ele pintou de maneira solta e livre. Van Gogh provavelmente sentiu que estabelecer os pequenos pontos era muito rígido e demorado. Ele preferia uma forma mais espontânea de pintar."
                    },
                
                    moldura7 : {
                        "element" : this.moldura7,
                        "imageUrl" : "url('images/van-gogh/absinto.jpg')",
                        "bgColor" : "#CDCE9E",
                        "title": "Mesa de Café com Absinto",
                        "date": "1887",
                        "technique": "Óleo sobre tela",
                        "dimensions": "46.3 cm x 33.2 cm",
                        "localization": "Museu Van Gogh, Amsterdã, Países Baixos",
                        "citation": "“Agora você compreende bem que se o álcool foi certamente uma das grandes causas da minha loucura, então veio muito lentamente e iria embora lentamente também, caso fosse embora, é claro.”",
                        "firstP": "Van Gogh pintou esta mesa de café com vista usando tinta a óleo muito diluída com pincéis finos. Essa técnica é chamada de <i>peinture à l'essence</i>. O resultado se assemelha a uma aquarela.",
                        "secondP": "O copo contém absinto, um aperitivo popular. Seu teor alcoólico era de 60 a 70%, e frequentemente era misturado com água. Van Gogh o consumia com frequência. O absinto era muito prejudicial à saúde. Van Gogh consumia álcool em excesso e, em seguida, parava abruptamente. Esses fatos podem ter desempenhado um papel em seus períodos posteriores de doença."
                    },
                
                    moldura8 : {
                        "element" : this.moldura8,
                        "imageUrl" : "url('images/van-gogh/pomar.jpg')",
                        "bgColor" : "#657C2C",
                        "title": "O Pomar Branco",
                        "date": "1888",
                        "technique": "Óleo sobre tela",
                        "dimensions": "60 cm x 81 cm",
                        "localization": "Museu Van Gogh, Amsterdã, Países Baixos",
                        "citation": "“(…) As últimas três telas existem apenas em estado provisório, e deveriam representar um pomar muito grande com uma borda de ciprestes e grandes pereiras e macieiras”",
                        "firstP": "Van Gogh esperava que suas pinturas de pomares em flor vendessem bem porque atrairiam muitas pessoas. Ele experimentou sua técnica de pintura, às vezes usando pinceladas grossas e ásperas, ou mesmo deixando áreas da tela completamente sem pintura.",
                        "secondP": "Van Gogh foi o que mais ficou satisfeito com esta pintura, que junto com O pessegueiro rosa e O pomar rosa formavam um tríptico. Em 13 de abril de 1888, numa carta ao seu irmão Theo, Van Gogh desenhou as três pinturas de árvores floridas, dispostas juntas como um tríptico."
                    }
                },
                
                fg : {
                    firstBg : "url('images/goya/artworks-images/goya-first-bg.jpg') no-repeat fixed center / cover",
    
                    moldura1 : {
                        "element" : this.moldura1,
                        "imageUrl" : "url('images/goya/artworks-images/voo-das-bruxas.jpg')",
                        "bgColor" : "#745516",
                        "title": "O Voo Das Bruxas",
                        "date": "1798",
                        "technique": "Óleo sobre tela",
                        "dimensions": "	43.5 cm x 30.5 cm",
                        "localization": "Museu Nacional do Prado, Madrid, Espanha",
                        "citation": "Parte de uma série de seis quadros sobre bruxaria, encomendada pelo Duque e Duquesa de Osuna",
                        "firstP": "Em 'Voo das Bruxas', Goya mergulha nas profundezas da superstição e do misticismo espanhol do final do século XVIII. A cena apresenta três figuras sombrias e encapuzadas pairando sobre um homem indefeso, que se protege com um gesto de terror enquanto uma bruxa o segura no ar. Os rostos das figuras, com expressões intensas, acrescentam uma aura de mistério e inquietação.",
                        "secondP": "O cenário noturno e os tons escuros reforçam a sensação de medo e opressão. Goya utiliza uma composição que dá dinamismo à cena e insere o observador em um ambiente onde o sobrenatural parece ameaçadoramente próximo. A obra reflete tanto o fascínio quanto o ceticismo de Goya em relação às crenças populares, abordando temas de superstição com uma carga psicológica poderosa.",
                    },
    
                    moldura2 : {
                        "element" : this.moldura2,
                        "imageUrl" : "url('images/goya/artworks-images/sabá-bruxas.jpg') ",
                        "bgColor" : "#576a52",
                        "title": "Sabá das Bruxas",
                        "date": "1798",
                        "technique": "Óleo sobre tela a partir de um afresco",
                        "dimensions": "43.3 x 30.5 cm",
                        "localization": "Museu Lázaro Galdiano, Madrid, Espanha",
                        "citation": "Uma das obras mais icônicas de Goya, representando o medo e a superstição da sociedade espanhola do século XVIII.",
                        "firstP": "A tela retrata “El Gran Cabrón” (O Grande Bode), uma das formas representadas por Satanás, cercado por um grupo de bruxas jovens e idosas em uma paisagem lunar desolada. O bode possui grandes chifres e é coroado com um ramo de folhas de carvalho. À direita, uma velha segura um bebê extremamente faminto, mas aparentemente ainda vivo, enquanto uma bruxa mais jovem à sua direita faz o mesmo com uma criança mais saudável, implicando que elas seguirão o mesmo destino.",
                        "secondP" : "O Diabo parece atuar como uma espécie de sacerdote em uma cerimônia de iniciação para as crianças. O corpo morto de um bebê é visto à esquerda, e outras bruxas, jovens e idosas, estão presentes na cena. A pintura é repleta de símbolos invertidos, como o bode estendendo seu casco esquerdo em direção à criança e a lua minguante voltada para fora do quadro no canto superior esquerdo. Goya usou a imagem de covens de bruxas em várias obras, incluindo as famosas “Pinturas Negras”. Essas pinturas podem ser vistas como uma crítica às superstições prevalentes na Espanha da época."
                    },
    
                    moldura3 : {
                        "element" : this.moldura3,
                        "imageUrl" : "url('images/goya/artworks-images/feitiço.jpg')",
                        "bgColor" : "#3b4851",
                        "title": "O Feitiço",
                        "date": "1798",
                        "technique": "Óleo sobre tela",
                        "dimensions": "	43.5 cm x 30.5 cm",
                        "localization": "Museu Lázaro Galdiano, Madrid, Espanha",
                        "citation": "Parte de uma série de seis quadros sobre bruxaria, encomendada pelo Duque e Duquesa de Osuna",
                        "firstP": "A obra retrata um grupo de bruxas praticando magia em plena noite com um homem aterrorizado com uma veste branco. Enquanto uma bruxa roga um feitiço segurando uma vela, outra carrega um cesto com crianças e com uma coruja pousada em sua cabeça. Do outro lado, uma bruxa está espetando um boneco com uma agulha, enquanto dois morcegos levantam seu manto.",
                        "secondP": "No centro da pintura, uma idosa com uma túnica amarela se aproxima do homem agachado. Na parte superior, há uma figura incompleta, com ossos nas mãos, observando a cena, identificada por alguns como o diabo ou a lider do Sabá. Ao seu redor, morcegos e corujas voam. A composição do quadro é formada por dois triângulos equiláteros entrelaçados com um círculo no centro, criado pelas figuras principais.\n\n\u2000\u2000Essa composição, a mesma que Goya utiliza em outras obras da série das Pinturas Negras, evoca o Selo de Salomão, um símbolo mágico frequentemente usado na bruxaria tanto para invocar o diabo quanto para enfeitiçar um inimigo."
                    },
    
                    moldura4 : {
                        "element" : this.moldura4,
                        "imageUrl" : "url('images/goya/artworks-images/saturno.jpg')",
                        "bgColor" : '#921d00',
                        "title": "Saturno Devorando um Filho",
                        "date": "1820-1823",
                        "technique": "Óleo sobre reboco trasladado a tela",
                        "dimensions": "143.5 cm x 81.4 cm",
                        "localization": "Museu Nacional do Prado, Madrid, Espanha",
                        "citation": "Uma das pinturas mais icônicas de Francisco de Goya, pertencente à série das Pinturas Negras",
                        "firstP": "A composição é centrada na figura grotesca de Saturno, um deus romano, representado como uma figura idosa e monstruosa, devorando um de seus filhos. Na mitologia romana, Saturno (ou Cronos na mitologia grega) devorava seus filhos por medo de ser destronado por eles, conforme a profecia. Goya retrata Saturno não como um deus poderoso e temível, mas como uma figura grotesca e desesperada, refletindo talvez a inevitabilidade do tempo e a futilidade da luta contra ele.",
                        "secondP": "Goya pintou essa obra em um período de sua vida marcado por doenças físicas e mentais, além de uma profunda desilusão com a política e a sociedade da época. A série das Pinturas Negras como um todo revela suas preocupações com a mortalidade, a decadência e a corrupção da humanidade."
                    },
                },

                rs : {
                    firstBg : "url('images/rafael-sanzio/artworks-images/rs-first-bg.jpeg') no-repeat fixed center / cover",
    
                    moldura1: {
                        "element": this.moldura1,
                        "imageUrl": "url('images/rafael-sanzio/artworks-images/madona-sistina.jpg')",
                        "bgColor": "#1e4218",
                        "title": "Madona Sistina",
                        "date": "1512",
                        "technique": "Óleo sobre tela",
                        "dimensions": "265 x 196 cm",
                        "localization": "Pinacoteca dos Mestres Antigos, Dresden, Alemanha",
                        "citation": "Criada para o altar da Igreja de San Sisto, em Piacenza, encomendada pelo Papa Júlio II.",
                        "firstP": "A Madona Sistina é uma das obras mais reverenciadas de Rafael, retratando a Virgem Maria carregando o Menino Jesus em uma postura de serenidade, enquanto olha diretamente para o espectador. Ao seu lado, estão São Sixto e Santa Bárbara, ambos figuras de devoção na Igreja Católica. Rafael consegue capturar a suavidade e compaixão de Maria com um detalhamento meticuloso e uma paleta de cores sublime, que reforça a atmosfera celestial da pintura.",
                        "secondP": "Abaixo da Virgem e do Menino, dois querubins repousam, apoiando-se no parapeito com expressões pensativas, adicionando uma camada de contemplação à cena. Estes anjos, apesar de pequenos, ganharam fama própria e são amplamente reproduzidos na cultura popular. A composição equilibrada de Rafael e o uso magistral do espaço criam um fluxo visual que guia o olhar do observador ao centro da obra, destacando a figura da Madona e o menino Jesus como símbolos de fé e esperança."
                    },
                    
                    moldura2: {
                        "element": this.moldura2,
                        "imageUrl": "url('images/rafael-sanzio/artworks-images/visao-ezequiel.jpg')",
                        "bgColor": "#464d7a",
                        "title": "Visão de Ezequiel",
                        "date": "1518",
                        "technique": "Óleo sobre painel",
                        "dimensions": "40 x 30 cm",
                        "localization": "Palazzo Pitti, Florença, Itália",
                        "citation": "Inspirada pelo Livro de Ezequiel, que descreve a visão de um trono celeste, encomendado pela família Medici.",
                        "firstP": "A obra retrata a grandiosa visão do profeta Ezequiel, uma passagem bíblica onde ele vê a glória de Deus rodeado por querubins e anjos. Deus aparece como uma figura imponente no centro, elevado sobre um carro de fogo. Ao seu redor, criaturas celestiais carregam-no em uma tempestade luminosa, representando a magnitude e o mistério divino.",
                        "secondP": "A técnica de Rafael destaca a luz divina que envolve o grupo central, simbolizando a presença espiritual que transcende o humano. Os detalhes dos rostos, as poses dramáticas e as cores profundas refletem a influência do Renascimento sobre o artista, que enfatiza o poder místico da experiência espiritual de Ezequiel."
                    },
    
                    moldura3: {
                        "element": this.moldura3,
                        "imageUrl": "url('images/rafael-sanzio/artworks-images/sao-jorge.jpg')",
                        "bgColor": "#346b29",
                        "title": "São Jorge e o Dragão",
                        "date": "1505",
                        "technique": "Óleo sobre madeira",
                        "dimensions": "28.5 x 21.5 cm",
                        "localization": "Museu do Louvre, Paris, França",
                        "citation": "Possivelmente uma encomenda da corte de Urbino, simbolizando a luta entre o bem e o mal.",
                        "firstP": "Nesta obra, São Jorge aparece em plena batalha contra o dragão, um símbolo clássico do mal, armado com uma lança e montado em um cavalo branco. O cenário é de grande tensão, com o dragão curvando-se ao chão e São Jorge em um movimento decisivo, prestes a vencê-lo. Rafael aplica detalhes cuidadosos na armadura do santo e nas escamas do dragão, criando um contraste entre o herói e a fera.",
                        "secondP": "O fundo da obra, com tons verdes e azulados, remete a uma paisagem serena, que contrasta com a ação violenta do primeiro plano. Esta composição cria uma narrativa visual que celebra a coragem e a virtude, qualidades personificadas por São Jorge, que, segundo a lenda, salvou uma cidade da ameaça do dragão."
                    },
    
                    moldura4: {
                        "element": this.moldura4,
                        "imageUrl": "url('images/rafael-sanzio/artworks-images/casamento-virgem.jpg')",
                        "bgColor": "#a38d5a",
                        "title": "Casamento da Virgem",
                        "date": "1504",
                        "technique": "Óleo sobre madeira",
                        "dimensions": "170 x 117 cm",
                        "localization": "Pinacoteca de Brera, Milão, Itália",
                        "citation": "Criada para a Igreja de San Francesco em Città di Castello, marcando o estilo clássico e harmonioso de Rafael.",
                        "firstP": "O 'Casamento da Virgem' é uma obra-prima que retrata o momento em que José e Maria se casam, abençoado por um sacerdote ao centro da cena. Atrás do casal, um templo com uma cúpula circular cria profundidade, destacando-se como símbolo de unidade espiritual e terrena. Rafael utiliza a perspectiva de forma exemplar, organizando figuras em camadas que dão à cena uma sensação de harmonia e equilíbrio.",
                        "secondP": "A atenção aos detalhes no vestuário dos personagens e a expressão serena da Virgem revelam a habilidade do artista em transmitir emoções sutis e a importância do momento. A escolha das cores suaves, com tons terrosos e dourados, intensifica a atmosfera sagrada e serena da obra, estabelecendo Rafael como um mestre na fusão entre arquitetura e narrativa visual."
                    },
                },

                cr : {
                    firstBg : "url('images/caravaggio/artworks-images/first-bg-cr.jpg') no-repeat fixed top / cover",
    
                    moldura1: {
                        "element": this.moldura1,
                        "imageUrl": "url('images/caravaggio/artworks-images/conversao-paulo.jpg')",
                        "bgColor": "#2f2b29",
                        "title": "Conversão de São Paulo",
                        "date": "1601",
                        "technique": "Óleo sobre tela",
                        "dimensions": "230 x 175 cm",
                        "localization": "Santa Maria del Popolo, Roma, Itália",
                        "citation": "Pintada para a Capela Cerasi, representa o momento dramático da conversão do apóstolo Paulo.",
                        "firstP": "A obra retrata o instante dramático em que Paulo, caído no chão, é cegado por uma luz divina que o chama à conversão. A pintura capta o santo em sua vulnerabilidade, com as mãos erguidas ao céu, enquanto o cavalo e o serviçal parecem alheios à experiência espiritual. O uso intenso do claro-escuro é um destaque, projetando Paulo em meio à escuridão, simbolizando a passagem da ignorância para a iluminação.",
                        "secondP": "Caravaggio aplica uma composição simples, mas eficaz, com foco na emoção humana e na luz divina. A escolha de representar o santo sem os tradicionais símbolos gloriosos, em uma posição de humildade e rendição, aproxima o espectador do evento milagroso, revelando o poder da fé que transcende a narrativa tradicional."
                    },
                    
                    moldura2: {
                        "element": this.moldura2,
                        "imageUrl": "url('images/caravaggio/artworks-images/pequeno-baco.jpg')",
                        "bgColor": "#6b4b3a",
                        "title": "Pequeno Baco Doente",
                        "date": "1593",
                        "technique": "Óleo sobre tela",
                        "dimensions": "67 x 53 cm",
                        "localization": "Galeria Borghese, Roma, Itália",
                        "citation": "Autorretrato de Caravaggio como Baco, possivelmente pintado durante uma doença.",
                        "firstP": "Em 'Pequeno Baco Doente', Caravaggio se representa como o deus Baco, mas com uma aparência pálida e exausta. Vestido com folhas de videira e uma túnica simples, o jovem segura um cacho de uvas que alude à embriaguez e à decadência. Ao contrário das representações tradicionais, este Baco exibe um rosto doente, transmitindo uma sensação de vulnerabilidade e decadência que espelha o estado físico do próprio artista.",
                        "secondP": "O fundo escuro destaca a figura em primeiro plano, um recurso típico de Caravaggio que adiciona intensidade à cena. Essa abordagem realista e introspectiva é um reflexo da turbulenta vida do artista, que muitas vezes desafiava os padrões idealizados do Renascimento com representações cruas e humanas, enfatizando a fragilidade da existência humana."
                    },
    
                    moldura3: {
                        "element": this.moldura3,
                        "imageUrl": "url('images/caravaggio/artworks-images/garoto-mordido.jpg')",
                        "bgColor": "#334d2c",
                        "title": "Garoto Mordido por um Lagarto",
                        "date": "1595",
                        "technique": "Óleo sobre tela",
                        "dimensions": "66 x 52 cm",
                        "localization": "Fondazione Roberto Longhi, Florença, Itália",
                        "citation": "A pintura captura a reação humana de dor e surpresa, mostrando a habilidade de Caravaggio em capturar emoções fugazes.",
                        "firstP": "Neste quadro, um jovem reage de forma dramática ao ser mordido por um lagarto escondido entre flores. A expressão de dor e surpresa é capturada com grande realismo, representando o momento efêmero da dor física. O uso de luz intensa destaca o rosto e a mão do jovem, enquanto o fundo escuro intensifica a cena e isola o personagem do entorno, enfatizando sua emoção.",
                        "secondP": "A obra reflete a fascinação de Caravaggio com a realidade crua e os detalhes do corpo humano, mostrando sua habilidade em capturar reações genuínas. A simbologia do lagarto escondido e das flores murchas sugere a efemeridade da juventude e da beleza, um tema recorrente na obra do artista."
                    },

                    moldura4: {
                        "element": this.moldura4,
                        "imageUrl": "url('images/caravaggio/artworks-images/sepultamento-cristo.jpg')",
                        "bgColor": "#1d1a18",
                        "title": "O Sepultamento de Cristo",
                        "date": "1603",
                        "technique": "Óleo sobre tela",
                        "dimensions": "300 x 203 cm",
                        "localization": "Pinacoteca Vaticana, Cidade do Vaticano",
                        "citation": "Encomendada para a Capela Santa Maria in Vallicella, representa o momento da deposição de Cristo no túmulo.",
                        "firstP": "A obra ilustra o corpo de Cristo sendo cuidadosamente colocado em seu túmulo. Caravaggio utiliza figuras em tamanho real para envolver o espectador na cena, criando uma sensação de proximidade com o drama. Maria e os discípulos expressam dor e tristeza, enquanto o corpo de Cristo é iluminado por uma luz que contrasta com o fundo sombrio, realçando sua forma física e simbolizando seu sacrifício.",
                        "secondP": "A composição diagonal e o realismo intenso nas expressões e gestos reforçam o impacto emocional. Caravaggio abandona idealizações religiosas e coloca ênfase na humanidade de Cristo e na dor de seus seguidores, evocando empatia do observador. A obra é considerada uma das representações mais comoventes da Paixão de Cristo, por sua profundidade emocional e inovação técnica."
                    },
                },

                jd : {
                    firstBg : "url('images/Jacques-louis-david/artworks-images/first-bg-jd.jpg') no-repeat fixed center / cover",
    
                    moldura1: {
                        "element": this.moldura1,
                        "imageUrl": "url('images/jacques-louis-david/artworks-images/imperador-napoleao.jpg')",
                        "bgColor": "#3a3f48",
                        "title": "O Imperador Napoleão em seu Gabinete de Trabalho",
                        "date": "1812",
                        "technique": "Óleo sobre tela",
                        "dimensions": "203 x 125 cm",
                        "localization": "National Gallery of Art, Washington, D.C., EUA",
                        "citation": "Retrato icônico encomendado por um colaborador próximo de Napoleão, com o intuito de reforçar sua imagem como líder incansável.",
                        "firstP": "Nesta obra, Napoleão é retratado em seu gabinete, vestido com um uniforme militar e segurando uma pena. A cena simboliza sua dedicação incansável ao trabalho em prol da França, evidenciada pelos papéis e documentos espalhados pela mesa. O relógio ao fundo, marcando as quatro da manhã, sugere que o imperador trabalhava longas horas para o bem de seu país.",
                        "secondP": "David utiliza o claro-escuro para destacar a figura de Napoleão, contrastando sua figura com o fundo escuro e criando uma aura de seriedade e poder. A postura resoluta e o olhar determinado do imperador transmitem a força de um líder que governa com disciplina e controle, reforçando sua imagem de estadista firme e dedicado."
                    },
                    
                    moldura2: {
                        "element": this.moldura2,
                        "imageUrl": "url('images/jacques-louis-david/artworks-images/leonidas.jpg')",
                        "bgColor": "#5b463a",
                        "title": "Leônidas em Termópilas",
                        "date": "1814",
                        "technique": "Óleo sobre tela",
                        "dimensions": "395 x 531 cm",
                        "localization": "Museu do Louvre, Paris, França",
                        "citation": "Encomendada pelo rei Luís XVIII, a obra exalta a coragem e o sacrifício dos guerreiros espartanos.",
                        "firstP": "A pintura retrata o momento em que Leônidas, rei de Esparta, lidera seus homens nas Termópilas, em um ato de resistência heroica contra as forças persas. O herói espartano está ao centro, armado e preparado para o combate, cercado por guerreiros prontos para sacrificar suas vidas. David compõe a cena com precisão, criando um ambiente solene que evoca a nobreza do sacrifício e a honra espartana.",
                        "secondP": "A utilização de cores quentes e terrenas reflete a dureza do cenário de batalha. A grandiosidade das figuras e os gestos heroicos revelam a influência clássica na obra de David, que celebra a virtude da bravura e a lealdade, atributos fundamentais dos espartanos e representativos dos valores revolucionários franceses que o artista prezava."
                    },
    
                    moldura3: {
                        "element": this.moldura3,
                        "imageUrl": "url('images/jacques-louis-david/artworks-images/apolo-diana.jpg')",
                        "bgColor": "#8b6e62",
                        "title": "Apolo e Diana Castigam Níobe Matando seus Filhos",
                        "date": "1772",
                        "technique": "Óleo sobre tela",
                        "dimensions": "180 x 220 cm",
                        "localization": "Palácio de Versalhes, Versalhes, França",
                        "citation": "Obra inspirada na mitologia grega, ilustrando o castigo divino imposto a Níobe por sua arrogância.",
                        "firstP": "A cena mitológica ilustra o momento trágico em que Apolo e Diana, em resposta ao orgulho de Níobe, castigam-na matando seus filhos. David capta o horror da mãe enquanto vê seus filhos caindo, atingidos por flechas dos deuses. O desespero e a dor de Níobe são expressos em seu gesto protetor, enquanto seus filhos, em diferentes estágios de agonia, reforçam a intensidade da tragédia.",
                        "secondP": "O contraste entre o corpo divino de Apolo e o caos mortal abaixo representa a separação entre os mundos divino e humano. David usa luz e sombra para acentuar a tensão emocional da cena, explorando temas de orgulho e punição, bem como a impotência humana diante da vontade divina."
                    },
                    
                    moldura4: {
                        "element": this.moldura4,
                        "imageUrl": "url('images/jacques-louis-david/artworks-images/lavoisier.jpg')",
                        "bgColor": "#5d5a56",
                        "title": "Retrato de Antoine Lavoisier e Sua Mulher",
                        "date": "1788",
                        "technique": "Óleo sobre tela",
                        "dimensions": "259 x 194 cm",
                        "localization": "Museu Metropolitano de Arte, Nova Iorque, EUA",
                        "citation": "Pintura que celebra Lavoisier, considerado o pai da química moderna, e sua esposa Marie-Anne, uma mulher culta e sua colaboradora.",
                        "firstP": "Nesta obra, Lavoisier e sua esposa Marie-Anne são retratados em um ambiente de estudo. Lavoisier, rodeado por equipamentos científicos, é representado em um momento de pausa, com sua esposa ao lado, olhando diretamente para o espectador. Marie-Anne, que frequentemente colaborava com seu marido em suas pesquisas, é representada como uma figura importante, ao lado de um homem que revolucionou a ciência.",
                        "secondP": "David utiliza uma composição serena e cores suaves para capturar a intelectualidade e o status social do casal. Os objetos no fundo e a postura dos personagens transmitem o respeito pelo conhecimento científico e a importância do trabalho colaborativo. Este retrato é não só uma representação do casal, mas também um tributo ao avanço da ciência e ao papel das mulheres na esfera intelectual."
                    }
                }, 

                cm : {
                    firstBg : "url('images/monet/artworks-images/first-bg-cm.jpg') no-repeat fixed center / cover",
    
                    moldura1: {
                        "element": this.moldura1,
                        "imageUrl": "url('images/monet/artworks-images/madame-monet.jpg')",
                        "bgColor": "#c25757",
                        "title": "Madame Monet Trajando um Kimono",
                        "date": "1875",
                        "technique": "Óleo sobre tela",
                        "dimensions": "231 x 142 cm",
                        "localization": "Museum of Fine Arts, Boston, EUA",
                        "citation": "Exemplo do fascínio pela cultura oriental que influenciou muitos artistas impressionistas, incluindo Monet.",
                        "firstP": "Nesta obra, Camille Monet, esposa do artista, é representada usando um exuberante quimono japonês. O fundo, coberto por um painel de leques orientais, realça o exotismo e o apelo estético da cultura japonesa que influenciou Monet e muitos de seus contemporâneos. A escolha de cores vivas e o padrão floral do quimono criam uma composição vibrante e rica em detalhes.",
                        "secondP": "A postura de Madame Monet, combinada com o contexto exótico, sugere o interesse do casal pela moda e cultura orientais, que estavam em voga na época. Monet explora aqui um estilo mais detalhado e uma técnica cuidadosa para acentuar a complexidade das texturas, destacando seu talento para representar superfícies delicadas e padrões decorativos."
                    },
                    
                    moldura2: {
                        "element": this.moldura2,
                        "imageUrl": "url('images/monet/artworks-images/pourville.jpg')",
                        "bgColor": "#8bb6e1",
                        "title": "A Caminhada do Penhasco em Pourville",
                        "date": "1882",
                        "technique": "Óleo sobre tela",
                        "dimensions": "65 x 81 cm",
                        "localization": "Museu de Arte de São Paulo, São Paulo, Brasil",
                        "citation": "Pintura realizada durante o verão em Pourville, um dos locais favoritos de Monet para observar a natureza e o mar.",
                        "firstP": "Neste cenário costeiro, Monet retrata o topo de um penhasco em Pourville, com uma jovem caminhando à beira do precipício, em meio à brisa marinha e ao céu claro. A obra capta a serenidade e a vastidão do ambiente, e a técnica de Monet transmite a leveza e a textura do gramado sob a influência do vento.",
                        "secondP": "As pinceladas fluidas e a paleta de cores suaves destacam o movimento das nuvens e do mar, criando um efeito etéreo que evoca o encanto das paisagens costeiras. A simplicidade da composição, com o penhasco e o céu ocupando a maior parte da tela, intensifica o sentimento de liberdade e introspecção que Monet buscava capturar ao pintar ao ar livre."
                    },
    
                    moldura3: {
                        "element": this.moldura3,
                        "imageUrl": "url('images/monet/artworks-images/jardim-sainte.jpg')",
                        "bgColor": "#b3b055",
                        "title": "Jardim em Sainte-Adresse",
                        "date": "1867",
                        "technique": "Óleo sobre tela",
                        "dimensions": "98 x 130 cm",
                        "localization": "Museu Metropolitano de Arte, Nova Iorque, EUA",
                        "citation": "Paisagem inspirada pelo jardim da casa de familiares em Sainte-Adresse, onde Monet passou verões em sua juventude.",
                        "firstP": "A pintura mostra um jardim elegante à beira-mar, com figuras relaxando sob a luz suave do verão. Monet explora aqui o jogo de luz e sombra sobre as flores e folhagens, criando uma sensação de harmonia e tranquilidade. As bandeiras ao fundo, agitadas pela brisa, acrescentam uma leve sensação de movimento à cena serena.",
                        "secondP": "O olhar de Monet para os detalhes florais e a textura das plantas transmite a beleza da vida ao ar livre, enfatizando o prazer da companhia e do ócio. A escolha de uma paleta colorida e brilhante reflete a leveza do momento e é um prenúncio de seu estilo impressionista que se consolidaria nos anos seguintes."
                    },
                    
                    moldura4: {
                        "element": this.moldura4,
                        "imageUrl": "url('images/monet/artworks-images/rua-montorgueil.jpg')",
                        "bgColor": "#9e1b1e",
                        "title": "A rua Montorgueil, Paris, celebração de 30 de junho de 1878",
                        "date": "1878",
                        "technique": "Óleo sobre tela",
                        "dimensions": "81 x 50 cm",
                        "localization": "Museu de Orsay, Paris, França",
                        "citation": "Pintura criada em homenagem às festividades republicanas em Paris, capturando a energia da multidão e do momento histórico.",
                        "firstP": "Nesta vibrante celebração na Rua Montorgueil, Monet pinta uma multidão sob uma profusão de bandeiras tricolores que cobrem o céu, exaltando o patriotismo e a unidade nacional. A rua está repleta de pessoas em festa, enquanto o jogo de cores e luzes cria uma atmosfera de euforia e movimento.",
                        "secondP": "Monet utiliza pinceladas rápidas e uma paleta audaciosa para dar vida à agitação da cena, retratando o dinamismo e a energia das celebrações republicanas. A composição densa e as cores vibrantes destacam o entusiasmo dos parisienses, tornando-se um testemunho pictórico do espírito revolucionário e da força do movimento impressionista."
                    },
                }, 

                pp : {
                    firstBg : "url('images/picasso/heroSectionBg-picasso.jpg') no-repeat fixed center / cover",
    
                    moldura1: {
                        "element": this.moldura1,
                        "imageUrl": "url('images/picasso/artworks-images/primeira-comunhao.jpg')",
                        "bgColor": "#636569",
                        "title": "Primeira Comunhão",
                        "date": "1896",
                        "technique": "Óleo sobre tela",
                        "dimensions": "166 x 118 cm",
                        "localization": "Museu Picasso, Barcelona, Espanha",
                        "citation": "Uma das primeiras obras acadêmicas de Picasso, retratando sua irmã Lola em um momento de devoção religiosa.",
                        "firstP": "Neste retrato de inspiração religiosa, Picasso pinta sua irmã Lola ajoelhada para receber a comunhão, cercada de um cenário clássico e solene. A precisão técnica e os detalhes cuidadosos na vestimenta e nos gestos são um exemplo de sua formação acadêmica na época.",
                        "secondP": "Apesar de jovem, Picasso já demonstra habilidade em capturar a intensidade emocional de momentos significativos. A iluminação suave e o simbolismo cristão refletem o estilo tradicional que ele dominaria antes de abraçar as inovações modernistas que definiriam sua carreira."
                    },
    
                    moldura2: {
                        "element": this.moldura2,
                        "imageUrl": "url('images/picasso/artworks-images/autorretrato.jpg')",
                        "bgColor": "#3a5981",
                        "title": "Autorretrato",
                        "date": "1901",
                        "technique": "Óleo sobre tela",
                        "dimensions": "81 x 60 cm",
                        "localization": "Museu Picasso, Paris, França",
                        "citation": "Uma obra introspectiva, pintada durante o início do Período Azul de Picasso, marcada por tons sombrios e temas melancólicos.",
                        "firstP": "Neste autorretrato de 1901, Picasso se retrata com um semblante melancólico e paleta dominada por tons de azul. Esse uso de cores frias reflete o início de seu Período Azul, marcado por uma fase de tristeza pessoal e introspecção.",
                        "secondP": "O olhar direto e sério do artista, emoldurado por pinceladas densas, expressa uma sensação de solidão e inquietude. Esse autorretrato é um exemplo notável de como Picasso usava a própria imagem para explorar emoções e estados de espírito, destacando seu talento para transmitir profundidade psicológica através de técnicas minimalistas."
                    },

                    moldura3: {
                        "element": this.moldura3,
                        "imageUrl": "url('images/picasso/artworks-images/ator.jpg')",
                        "bgColor": "#b9a1a1",
                        "title": "O Ator",
                        "date": "1904-1905",
                        "technique": "Óleo sobre tela",
                        "dimensions": "196 x 115 cm",
                        "localization": "Museu Metropolitano de Arte, Nova Iorque, EUA",
                        "citation": "Pintado durante o Período Rosa, a obra reflete a fascinação de Picasso pelas artes teatrais e pela vida circense.",
                        "firstP": "Nesta pintura, um jovem ator é retratado em pose dramática, com movimentos que sugerem graça e introspecção. Os tons rosados e terrosos refletem o Período Rosa de Picasso, quando ele se voltou a temas de circo e teatro, representando artistas e acrobatas com uma melancolia delicada.",
                        "secondP": "A leveza na paleta e os traços sutis indicam a empatia de Picasso pelos indivíduos marginalizados e as emoções que permeiam a vida artística. A pose alongada do ator e o pano de fundo sugerem uma performance, enquanto seu olhar distante parece refletir um sentimento de solidão e introspecção."
                    },
                    
                    moldura4: {
                        "element": this.moldura4,
                        "imageUrl": "url('images/picasso/artworks-images/mulher-espelho.jpg')",
                        "bgColor": "#d88589",
                        "title": "Mulher com Espelho",
                        "date": "1932",
                        "technique": "Óleo sobre tela",
                        "dimensions": "162 x 130 cm",
                        "localization": "Museu de Arte Moderna, Nova Iorque, EUA",
                        "citation": "Obra emblemática do Cubismo e da exploração da identidade feminina, inspirada na companheira de Picasso, Marie-Thérèse Walter.",
                        "firstP": "Nesta obra vibrante e complexa, Picasso retrata uma mulher diante de um espelho, simbolizando a dualidade e as facetas da identidade feminina. O uso de formas geométricas e o desdobramento da imagem no espelho refletem o estilo cubista do artista e seu fascínio pela desconstrução da forma humana.",
                        "secondP": "A mulher observa a própria imagem com um olhar inquisitivo, enquanto o espelho reflete uma versão alterada e simbólica de si mesma. A paleta de cores vivas e as linhas sinuosas conferem uma sensualidade e profundidade à composição, ilustrando a complexidade psicológica das figuras femininas de Picasso."
                    }
                }, 
            }    
        }
    
        carouselAutoScroll(){
            const targetCarousel = this.container
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                  const intersecting = entry.isIntersecting
                  if(intersecting == true){
                    const rect = targetCarousel.getBoundingClientRect();
                    const offset = window.scrollY || document.documentElement.scrollTop; // Posição atual da rolagem
                    const targetPosition = rect.top + offset; // Posição do elemento na página
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                  }
                })
            }, { threshold: [0.4] });
            observer.observe(targetCarousel)
        }
    
        backgroundChange(){
                this.page === 1 ? this.background.style.background = this.infoArrays[this.artist].firstBg : this.background.style.background = this.infoArrays[this.artist].secondBg
        }
    
        framesChange(){
            this.arrayMolduras.forEach((item) => {
                for (var molduras of Object.entries(this.infoArrays[this.artist])){
                    for(var elementos of molduras) {
                        if (item === elementos.element){
                            item.style.backgroundImage = elementos.imageUrl
                            item.addEventListener('blur', () => {
                                item.style.border = '2px solid #ffffff'
                            })
                        }
                    }
                }
            })
        }
    
        hoverEvent(condition, molduraClicada){
            if(condition == 'disable'){
                this.arrayMolduras.forEach((item) => {
                    if (item != molduraClicada){
                        item.classList.forEach((index) => {
                            for (let i = 0; i < 9; i++)
                            if (index.includes(`moldura${i}-hover`) == true){
                                item.classList.remove(`moldura${i}-hover`)
                                if (window.innerWidth < 991.98){
                                    this.minSizeUi(item, molduraClicada)
                                    this.informationChange(molduraClicada)
                                    this.information.addEventListener('mousedown', (e) => e.preventDefault())
                                }
                            }
                        })
                    } else if (item == molduraClicada && window.innerWidth > 991.98){
                        this.information.classList.add('arte-info-on')
                        this.informationChange(molduraClicada)
                        this.information.addEventListener('mousedown', (e) => e.preventDefault())
                    }
                })
            } else if (condition == 'enable'){
                this.arrayMolduras.forEach((item) => {
                    if (item != molduraClicada){
                        switch(item){
                            case this.moldura1:
                                this.moldura1.classList.add('moldura1-hover')
                                break
                            case this.moldura2:
                                this.moldura2.classList.add('moldura2-hover')
                                break
                            case this.moldura3:
                                this.moldura3.classList.add('moldura3-hover')
                                break
                            case this.moldura4:
                                this.moldura4.classList.add('moldura4-hover')
                                break
                            case this.moldura5:
                                this.moldura5.classList.add('moldura5-hover')
                                break
                            case this.moldura6:
                                this.moldura6.classList.add('moldura6-hover')
                                break
                            case this.moldura7:
                                this.moldura7.classList.add('moldura7-hover')
                                break
                            case this.moldura8:
                                this.moldura8.classList.add('moldura8-hover')
                                break
                        }
                    } else if (item == molduraClicada){
                        this.information.classList.remove('arte-info-on')
                    }
                })
            }
        }
    
        informationChange(item){
            var titleBackground = document.getElementById(`title-${this.page}-${this.artist}`)
            for (var molduras of Object.entries(this.infoArrays[this.artist])) {
                for(var elementos of molduras){
                    if (item === elementos.element){
                        titleBackground.style.backgroundColor = elementos.bgColor
                        item.style.border = `4px solid ${elementos.bgColor}`
                        document.getElementById(`title-${this.page}-${this.artist}`).innerHTML = elementos.title
                        document.getElementById(`date-${this.page}-${this.artist}`).innerHTML = elementos.date
                        document.getElementById(`technique-${this.page}-${this.artist}`).innerHTML = elementos.technique
                        document.getElementById(`dimensions-${this.page}-${this.artist}`).innerHTML = elementos.dimensions
                        document.getElementById(`localization-${this.page}-${this.artist}`).innerHTML = elementos.localization
                        document.getElementById(`citation-${this.page}-${this.artist}`).innerHTML = elementos.citation
                        document.getElementById(`firstP-${this.page}-${this.artist}`).innerHTML = elementos.firstP
                        document.getElementById(`secondP-${this.page}-${this.artist}`).innerHTML = elementos.secondP
                    }
                }
            }
        }
    
        fullscreen(arte){
            let fullSection = this.background
            let blurDiv = document.createElement('div')
            let imagem = document.createElement('img')
            let closeBtn = document.createElement('button')
            let cssBg = window.getComputedStyle(arte).getPropertyValue('background')
            imagem.src = (cssBg.slice((cssBg.search('images')), (cssBg.search('jpg')+3)))
            imagem.classList.add('img-limit')
            closeBtn.innerHTML = '<ion-icon name="expand-outline"></ion-icon>'
            closeBtn.classList.add('close-btn')
            blurDiv.classList.add('blurdiv')
            fullSection.appendChild(blurDiv)
            blurDiv.appendChild(imagem)
            fullSection.appendChild(closeBtn)
            blurDiv.addEventListener('mousedown', (e) => {e.preventDefault()})
            closeBtn.addEventListener('mousedown', (e) => {blurDiv.remove(); closeBtn.remove(); e.preventDefault()})    
        }
    
        botaoZoom(condition, moldura){
            var btnZoom = document.createElement('button')
            switch (this.page){
                case 1:
                    btnZoom.classList.add('zoom-art')
                    break
                case 2 :
                    btnZoom.classList.add('zoom-art-2')
                    break
            }
            btnZoom.innerHTML ='<ion-icon name="expand-outline"></ion-icon>'
            btnZoom.addEventListener('mousedown', (e) => {
                this.fullscreen(moldura)
                e.preventDefault()
            })
            switch(condition){
                case 'add':
                    if (moldura.hasChildNodes() == false){
                        moldura.appendChild(btnZoom)
                        break
                    }
                case 'remove':
                    if (moldura.hasChildNodes() == true){
                        moldura.lastChild.remove()
                        break
                    }
            }
        }
    
        responsive(){
            var lgPos = this.container
            var smPos = this.canvas
            var carouselSlideBtn = this.botaoCarousel
            var informationCard = this.information
            if (window.innerWidth < 991.98){
                smPos.appendChild(carouselSlideBtn)
                smPos.appendChild(informationCard)
            } else {
                lgPos.appendChild(carouselSlideBtn)
                lgPos.appendChild(informationCard)
                this.background.removeEventListener('mousedown', (e) => {
                    this.canvas.classList.remove('card-gap')
                    this.information.classList.remove('arte-info-on')
                    this.canvas.appendChild(this.botaoCarousel)
                    item.classList.remove('hidden')
                    e.stopPropagation()
                })
                this.arrayMolduras.forEach((item) => {
                    item.classList.remove('hidden')
                })
    
            }
        }
    
        minSizeUi(item, focusedFrame){
            const touch = ['touchstart', 'mousedown']
            if (window.innerWidth < 991.98) {
                item.classList.add('hidden')
                if (focusedFrame.classList.contains('hidden') == false){
                    touch.forEach(evento => {
                        this.information.addEventListener(evento, (e) => {
                            e.stopPropagation()
                        })
                    })
                    var information = this.information
                    var canvas = this.canvas
                    var botaoCarrosel = this.botaoCarousel
                    window.onscroll = function(e) {
                        if (item.classList.contains('hidden') == true && focusedFrame.classList.contains('hidden') == false && this.oldScroll > window.scrollY == true ){
                            if (this.scrollY - this.oldScroll < -10){
                                information.classList.remove('arte-info-on')
                                botaoCarrosel.classList.remove('hidden')
                            }
                        } else if (item.classList.contains('hidden') == false && focusedFrame.classList.contains('hidden') == false) {
                            botaoCarrosel.classList.remove('hidden')
                        } else {
                            if (information.classList.contains('arte-info-on') == true){
                                canvas.classList.add('card-gap')
                            } else {
                                switch (this.oldScroll > this.scrollY){
                                    case false:
                                        if (this.scrollY - this.oldScroll > 10){
                                            information.classList.add('arte-info-on')
                                            botaoCarrosel.classList.add('hidden')
                                            canvas.appendChild(information)
                                        }
                                        break
                                    case true:
                                        break
                                }
                            }
                        }  
                        e.stopImmediatePropagation()
                        this.oldScroll = window.scrollY
                    }
                    this.canvas.addEventListener('mousedown', (e) => {
                        if (window.innerWidth < 991.98){
                            this.canvas.classList.remove('card-gap')
                            this.information.classList.remove('arte-info-on')
                            this.canvas.appendChild(this.botaoCarousel)
                            item.classList.remove('hidden')
                        }
                    })
                }
            } 
        }
    
        main(){
            this.arrayMolduras.forEach((item) => {
                item.addEventListener('focus', () => {this.hoverEvent('disable', item)})
                item.addEventListener('blur', () => {this.hoverEvent('enable', item)})
                item.addEventListener('focus', () => {this.botaoZoom('add', item)})
                item.addEventListener('blur', () => {this.botaoZoom('remove', item)})
            })
            this.backgroundChange()
            this.framesChange()
            this.carouselAutoScroll()
        }
    }
    
    const primeiraPaginaVanGogh = new Molduras(1, 'vg')
    const segundaPaginaVanGogh = new Molduras(2, 'vg')
    const primeiraPaginaGoya = new Molduras(1, 'fg')
    const segundaPaginaGoya = new Molduras(2, 'fg')
    const primeiraPaginaRafael = new Molduras(1, 'rs')
    const segundaPaginaRafael = new Molduras(2, 'rs')
    const primeiraPaginaCaravaggio = new Molduras(1, 'cr')
    const segundaPaginaCaravaggio = new Molduras(2, 'cr')
    const primeiraPaginaJacques = new Molduras(1, 'jd')
    const segundaPaginaJacques = new Molduras(2, 'jd')
    const primeiraPaginaMonet = new Molduras(1, 'cm')
    const segundaPaginaMonet = new Molduras(2, 'cm')
    const primeiraPaginaPicasso = new Molduras(1, 'pp')
    const segundaPaginaPicasso = new Molduras(2, 'pp')
    

    // Organiza as páginas de cada artista, criando todas as primeiras páginas ao inicializar e as segundas ao clicar no botão de slide //
    const assetsVanGogh = [primeiraPaginaVanGogh, segundaPaginaVanGogh]
    const assetsGoya = [primeiraPaginaGoya, segundaPaginaGoya]
    const assetsRafael = [primeiraPaginaRafael, segundaPaginaRafael]
    const assetsCaravaggio = [primeiraPaginaCaravaggio, segundaPaginaCaravaggio]
    const assetsJacques = [primeiraPaginaJacques, segundaPaginaJacques]
    const assetsMonet = [primeiraPaginaMonet, segundaPaginaMonet]
    const assetsPicasso = [primeiraPaginaPicasso, segundaPaginaPicasso]

    switch (targetArtist){
        case 'Vincent Van Gogh':
            createObjects(assetsVanGogh)
            break
        case 'Francisco de Goya':
            createObjects(assetsGoya)
            break
        case 'Rafael Sanzio':
            createObjects(assetsRafael)
            break
        case 'Caravaggio':
            createObjects(assetsCaravaggio)
            break
        case 'Jacques-Louis David':
            createObjects(assetsJacques)
            break
        case 'Claude Monet':
            createObjects(assetsMonet)
            break
        case 'Pablo Picasso':
            createObjects(assetsPicasso)
            break
    }

    function createObjects(artist){
        artist.forEach((carouselPage) => {
            carouselPage.main()
            carouselPage.responsive()
        })
    }
    
    // Botão de voltar ao topo da página //
    const backTopBtn = document.getElementById('back-arrow')
    var divInfo = document.querySelectorAll('.information')
    backTopBtn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
    window.addEventListener('wheel', (e) => { 
        if(e.deltaY < 0 && scrollY > 100){
            backTopBtn.classList.add('shown')
            backTopBtn.classList.toggle('transition')
        } else {
            backTopBtn.classList.remove('shown')
        }
    }) 
    
    window.addEventListener('scrollend', (e) => {
        if (scrollY < 100){
            backTopBtn.classList.remove('shown')
        }
    })
    
    window.onresize = () => {
        allAssets.forEach((artists) => {
            artists.responsive()
        })
    }
    
    class ArtistInformations{
        constructor(artist){
            this.artist = artist
            this.mainPage = document.getElementById(`${artist}-infos-main`)
            this.artistDivider = document.getElementById(`divider-${artist}`)
            this.expandBtn = document.getElementById(`expand-main-${artist}`)
            this.CardChangeBtn = document.querySelectorAll(`.${artist}-card-btn`)
            this.imgCard1 = document.getElementById(`${artist}-card1`)
            this.titleCard1 = document.getElementById(`${artist}-card-title1`)
            this.legendCard1 = document.getElementById(`${artist}-card-legend1`)
            this.imgCard2 = document.getElementById(`${artist}-card2`)
            this.titleCard2 = document.getElementById(`${artist}-card-title2`)
            this.legendCard2 = document.getElementById(`${artist}-card-legend2`)
            this.imgCard3 = document.getElementById(`${artist}-card3`)
            this.titleCard3 = document.getElementById(`${artist}-card-title3`)
            this.legendCard3 = document.getElementById(`${artist}-card-legend3`)
            this.btnArrays = {
                vg : {
                    comedoresBatata : {
                        "painting" : "comedores-batata",
                        "paintingUrl" : "images/van-gogh/comedores-batata.jpg",
                        "paintingTitle" : "Os Comedores de Batatas (1885)",
                        "paintingLegend" : "Vincent van Gogh retrata a vida simples e sofrida dos camponeses, destacando a textura e o peso emocional do cotidiano rural."
    
                    },
    
                    rodano : {
                        "painting" : "rodano",
                        "paintingUrl" : "images/van-gogh/ródano.jpg",
                        "paintingTitle" : "A Noite Estrelada sobre o Ródano (1888)",
                        "paintingLegend" : "Vincent van Gogh captura o céu estrelado refletido no rio, destacando o uso expressivo de cores e luz."
    
                    },
    
                    casaAmarela : {
                        "painting" : "casa-amarela",
                        "paintingUrl" : "images/van-gogh/casa-amarela.jpg",
                        "paintingTitle" : "A Casa Amarela (1888)",
                        "paintingLegend" : "Van Gogh retrata sua casa em Arles, destacando o uso vibrante de cores e a simplicidade da arquitetura no contexto da paisagem ensolarada."
                    },
                
                    girassois : {
                        "painting" : "girassois",
                        "paintingUrl" : "images/van-gogh/girassois.jpg",
                        "paintingTitle" : "Girassóis (1888)",
                        "paintingLegend" : "Vincent van Gogh exibe um buquê de girassóis com pinceladas enérgicas e uma paleta de amarelos radiantes."
                    },
                
                    noiteEstrelada : {
                        "painting" : "noite-estrelada",
                        "paintingUrl" : "images/van-gogh/noite-estrelada.jpg",
                        "paintingTitle" : "A Noite Estrelada (1889)",
                        "paintingLegend" : "Vincent van Gogh ilustra um céu noturno turbulento sobre Saint-Rémy-de-Provence, com um jogo dramático de luz e cor."
                    },
                
                    campoTrigoCorvos : {
                        "painting" : "campo-trigo-corvos",
                        "paintingUrl" : "images/van-gogh/campo-trigo-corvos.jpg",
                        "paintingTitle" : "Campo de Trigo com Corvos (1890)",
                        "paintingLegend" : "Vincent van Gogh captura um campo de trigo sob um céu ameaçador, com corvos sobrevoando, refletindo uma atmosfera de tensão e movimento."
                    },
                
                    retratoDrGachet : {
                        "painting" : "retrato-dr-gachet",
                        "paintingUrl" : "images/van-gogh/retrato-dr-gachet.jpg",
                        "paintingTitle" : "Retrato do Dr. Gachet (1890)",
                        "paintingLegend" : "Vincent van Gogh retrata o Dr. Paul Gachet, seu médico, com uma expressão melancólica e um uso intenso de cor para transmitir profundidade emocional."
                    },
    
                    quarto : {
                        "painting" : "quarto",
                        "paintingUrl" : "images/van-gogh/quarto.jpg",
                        "paintingTitle" : "Quarto em Arles (1888)",
                        "paintingLegend" : "Vincent van Gogh apresenta seu quarto em Arles com uma paleta de cores vibrantes e formas simplificadas, transmitindo uma sensação de conforto e pessoalidade."
                    }
                },

                fg : {
                    parassol : {
                        "painting" : "parassol",
                        "paintingUrl" : "images/goya/article-images/parassol.jpg",
                        "paintingTitle" : "O Parassol (1777)",
                        "paintingLegend" : "Captura um momento de intimidade e lazer entre as classes altas da sociedade espanhola da época. A pintura reflete o gosto por cenas ao ar livre, comuns entre a aristocracia. Foi concebida como uma série de tapeçarias destinadas ao Palácio Real de El Pardo"
                    },

                    familiaCarlosIV : {
                        "painting" : "familia",
                        "paintingUrl" : "images/goya/article-images/familia-carlos.jpg",
                        "paintingTitle" : "A Família de Carlos IV (1800)",
                        "paintingLegend" : "A obra expõe a realeza com uma franqueza inédita, destacando suas imperfeições em vez de idealizar. Goya inclui-se como observador ao fundo, reforçando a distância entre o pintor e a corte, que parece rígida e fria."
                    },

                    colosso : {
                        "painting" : "colosso",
                        "paintingUrl" : "images/goya/article-images/colosso.jpg",
                        "paintingTitle" : "O Colosso (1808-1812)",
                        "paintingLegend" : "Retrata uma figura monumental e sombria sobre uma paisagem em fuga, transmitindo o terror e a impotência diante das forças destrutivas das guerras napoleônicas."
                    },

                    desastresGuerra : {
                        "painting" : "desastres-guerra",
                        "paintingUrl" : "images/goya/article-images/desastres-guerra.jpg",
                        "paintingTitle" : "Os Desastres da Guerra, nº 33 (1808-1812)",
                        "paintingLegend" : "A 33º gravura da série “Os Desastres da Guerra” retrata um esquartejamento, refletindo a brutalidade e a barbárie a que se chegou na Guerra da Independência Espanhola. "

                    },

                    cão : {
                        "painting" : "cão",
                        "paintingUrl" : "images/goya/article-images/cão.jpg",
                        "paintingTitle" : "O Cão (1819-1823)",
                        "paintingLegend" : "A obra, profundamente enigmática e melancólica, mostra apenas a cabeça de um cão parcialmente submersa em um fundo desolado, transmitindo uma sensação de abandono e impotência."

                    }
                },

                rs : {
                    madonna : {
                        "painting" : "madona",
                        "paintingUrl" : "images/rafael-sanzio/article-images/madona.jpg",
                        "paintingTitle" : "Madona com o Menino (1504-1505)",
                        "paintingLegend" : "Uma obra de serenidade e espiritualidade, capturando o laço sagrado entre mãe e filho. As feições delicadas e o uso suave de cores revelam a habilidade de Rafael em humanizar temas sacros."
                    },

                    escolaAtenas : {
                        "painting" : "escola-atenas",
                        "paintingUrl" : "images/rafael-sanzio/article-images/escola-atenas.jpg",
                        "paintingTitle" : "Escola de Atenas (1510-1511)",
                        "paintingLegend" : "Tributo aos pensadores da Grécia Antiga, onde Rafael harmoniza filosofia e arquitetura. Neste afresco monumental, as figuras simbolizam a busca pelo conhecimento e a perfeição do pensamento clássico."
                    },

                    disputa : {
                        "painting" : "disputa",
                        "paintingUrl" : "images/rafael-sanzio/article-images/disputa.jpg",
                        "paintingTitle" : "A Disputa do Santíssimo Sacramento (1509-1510)",
                        "paintingLegend" : "Uma composição que une o celestial e o terreno. Rafael representa santos, teólogos e Cristo em uma disposição hierárquica, elevando a experiência espiritual."
                    },

                    retratoBaldassere : {
                        "painting" : "retrato-baldassere",
                        "paintingUrl" : "images/rafael-sanzio/article-images/retrato-baldassere.jpg",
                        "paintingTitle" : "Retrato de Baldassare Castiglione (1514-1515)",
                        "paintingLegend" : "Neste retrato, Rafael transmite a dignidade e introspecção do intelectual renascentista, equilibrando vivacidade e idealização."
                    },

                    retratoPapa : {
                        "painting" : "retrato-papa",
                        "paintingUrl" : "images/rafael-sanzio/article-images/retrato-papa.jpg",
                        "paintingTitle" : "Retrato do Papa Leão X com Dois Cardeais (1518-1519)",
                        "paintingLegend" : "Rafael capta a autoridade e a opulência papal com detalhes ricos. O Papa e seus cardeais, em trajes requintados, refletem a complexidade do poder eclesiástico."
                    },

                    transfiguração : {
                        "painting" : "transfiguração",
                        "paintingUrl" : "images/rafael-sanzio/article-images/transfiguração.jpg",
                        "paintingTitle" : "A Transfiguração (1517-1520)",
                        "paintingLegend" : "Última obra-prima de Rafael, que explora o divino com intensidade espiritual. Luz e sombra contrastam para expressar o encontro entre o celestial e o terreno."
                    },
                },

                cr : {
                    rapazCesto : {
                        "painting" : "rapaz-cesto",
                        "paintingUrl" : "images/caravaggio/article-images/rapaz-cesto.jpg",
                        "paintingTitle" : "Rapaz com Cesto de Frutas (1593)",
                        "paintingLegend" : "Retrata um jovem segurando frutas maduras com precisão realista, destacando o domínio de Caravaggio na representação de texturas e detalhes."
                    },

                    trapaceiros : {
                        "painting" : "trapaceiros",
                        "paintingUrl" : "images/caravaggio/article-images/trapaceiros.jpg",
                        "paintingTitle" : "Os Trapaceiros (1595)",
                        "paintingLegend" : "Retrata uma cena de trapaça e engano entre jogadores de cartas, capturando com precisão as expressões e gestos dos personagens."
                    },

                    medusa : {
                        "painting" : "medusa",
                        "paintingUrl" : "images/caravaggio/article-images/medusa.jpg",
                        "paintingTitle" : "Medusa (1597-1598)",
                        "paintingLegend" : "O momento aterrador da decapitação de Medusa, capturando seu olhar de horror e dor enquanto o sangue escorre de sua cabeça. A obra explora o terror e a intensidade das emoções humanas através do uso dramático de luz e sombra."
                    },

                    juditeHolofernes : {
                        "painting" : "judite-holofernes",
                        "paintingUrl" : "images/caravaggio/article-images/judite-holofernes.jpg",
                        "paintingTitle" : "Judite e Holofernes (1598-1599)",
                        "paintingLegend" : "Judite, com expressão de determinação e horror, enquanto decapita Holofernes em uma cena de tensão brutal, onde luz e sombra intensificam o drama e o impacto emocional do momento."
                    },

                    vocacaoMateus : {
                        "painting" : "vocacao-mateus",
                        "paintingUrl" : "images/caravaggio/article-images/vocacao-mateus.jpg",
                        "paintingTitle" : "A Vocação de São Mateus (1599-1600)",
                        "paintingLegend" : "Ilumina São Mateus em meio à escuridão, capturando o momento em que ele é chamado por Cristo, com um uso dramático da luz e da sombra."
                    },

                    daviGolias : {
                        "painting" : "davi-golias",
                        "paintingUrl" : "images/caravaggio/article-images/davi-golias.jpg",
                        "paintingTitle" : "Davi com a Cabeça de Golias (1610)",
                        "paintingLegend" : "Davi segura a cabeça de Golias com uma expressão de pesar, enquanto o rosto de Golias, possivelmente um autorretrato de Caravaggio, reflete derrota e arrependimento, trazendo um tom sombrio e introspectivo à obra."
                    },

                    salome : {
                        "painting" : "salome",
                        "paintingUrl" : "images/caravaggio/article-images/salome.jpg",
                        "paintingTitle" : "Salomé com a Cabeça de João Batista (1609) ",
                        "paintingLegend" : "Com uma expressão de frieza e desolação, Salomé segura a cabeça de João Batista, enquanto o jogo de luz e sombra acentua o peso sombrio do momento, refletindo a crueldade e a resignação presentes na cena."
                    },

                    decapitacao : {
                        "painting" : "decapitacao",
                        "paintingUrl" : "images/caravaggio/article-images/decapitacao.jpg",
                        "paintingTitle" : "A Decapitação de São João Batista (1608)",
                        "paintingLegend" : "Captura o momento sombrio do martírio de São João, evidenciando a brutalidade do ato com um jogo intenso de luz e sombra, que ressalta o drama e a fragilidade da vida humana."
                    }
                },

                jd : {
                    belisario : {
                        "painting" : "belisario",
                        "paintingUrl" : "images/Jacques-louis-david/article-images/belisario.jpg",
                        "paintingTitle" : "Belisário Pedindo Esmola (1781)",
                        "paintingLegend" : "O general Belisário, agora cego e desamparado, implora por ajuda. David expressa a tragédia da queda e a compaixão em um cenário austero."
                    },

                    andromaca : {
                        "painting": "andromaca",
                        "paintingUrl": "images/Jacques-louis-david/article-images/andromaca.jpg",
                        "paintingTitle": "Andrômaca Chorando sobre o Corpo de Heitor (1783)",
                        "paintingLegend": "Andrômaca lamenta a morte de Heitor, em uma cena onde o luto e a perda são representados com dignidade e emoção contida."
                    },

                    juramentoHoracios: {
                        "painting": "juramento-horacios",
                        "paintingUrl": "images/Jacques-louis-david/article-images/juramento-horacios.jpg",
                        "paintingTitle": "Juramento dos Horácios (1784)",
                        "paintingLegend": "Três irmãos juram lutar por Roma, em uma cena que exalta a lealdade e o dever cívico com uma composição simétrica e solene."
                    },

                    brutus: {
                        "painting": "brutus",
                        "paintingUrl": "images/Jacques-louis-david/article-images/brutus.jpg",
                        "paintingTitle": "Brutus Recebendo os Corpos de Seus Filhos (1789)",
                        "paintingLegend": "Brutus encara o sacrifício ao receber os corpos dos filhos traidores, representando o conflito entre o dever e o afeto."
                    },

                    marat: {
                        "painting": "marat",
                        "paintingUrl": "images/Jacques-louis-david/article-images/marat.jpg",
                        "paintingTitle": "A Morte de Marat (1793)",
                        "paintingLegend": "Marat, assassinado em sua banheira, é retratado como mártir revolucionário, em uma cena de serenidade trágica e simbólica."
                    },
                    napoleaoAlpes : {
                        "painting": "napoleao-alpes",
                        "paintingUrl": "images/Jacques-louis-david/article-images/napoleao-alpes.jpg",
                        "paintingTitle": "Napoleão Cruzando os Alpes (1801)",
                        "paintingLegend": "Napoleão é representado como um líder heroico e determinado, desafiando os Alpes em um gesto de coragem e força."
                    },

                    napoleaoCoroacao: {
                        "painting": "napoleao-coroacao",
                        "paintingUrl": "images/Jacques-louis-david/article-images/napoleao-coroacao.jpg",
                        "paintingTitle": "A Coroação de Napoleão (1807)",
                        "paintingLegend": "A obra retrata o momento da coroação de Napoleão Bonaparte como Imperador da França na Catedral de Notre-Dame de Paris, onde David captura o esplendor e a formalidade do Império."
                    },

                    amorPsique: {
                        "painting": "amor-psique",
                        "paintingUrl": "images/Jacques-louis-david/article-images/amor-psique.jpg",
                        "paintingTitle": "Amor e Psiquê (1817)",
                        "paintingLegend": "David representa a cena com uma beleza idealizada, ressaltando a inocência e a pureza desse amor mitológico."
                    },

                    marteVenus : {
                        "painting": "marte-venus",
                        "paintingUrl": "images/Jacques-louis-david/article-images/marte-venus.jpg",
                        "paintingTitle": "Marte Desarmado por Vênus(1824)",
                        "paintingLegend": "Marte rende-se à paz e ao amor, desarmado por Vênus, em uma obra final que exalta a harmonia e serenidade."
                    }
                },

                cm : {
                    nenufares : {
                        "painting": "nenufares",
                        "paintingUrl": "images/monet/article-images/nenufares.jpg",
                        "paintingTitle": "Nenúfares com reflexos de um salgueiro (1916-1919)",
                        "paintingLegend": "Nenúfares flutuam sobre a água em um momento sereno, destacando a habilidade de Monet em capturar reflexos e tranquilidade na natureza."
                    },

                    estacaoTrem: {
                        "painting": "estacao-trem",
                        "paintingUrl": "images/monet/article-images/estacao-trem.jpg",
                        "paintingTitle": "A Estação de Trem de Saint-Lazare (1877)",
                        "paintingLegend": "A movimentação dos trens e a atmosfera vaporosa envolvem a cena, capturando a energia e a modernidade da vida urbana do século XIX."
                    },

                    jardimArtista: {
                        "painting": "jardim-artista",
                        "paintingUrl": "images/monet/article-images/jardim-artista.jpg",
                        "paintingTitle": "O Jardim do Artista em Giverny (1900)",
                        "paintingLegend": "Uma representação vibrante do jardim de Claude Monet em Giverny, onde as cores e as formas dançam em harmonia sob a luz do sol."
                    },

                    mulherGuardaSol: {
                        "painting": "mulher-guarda-sol",
                        "paintingUrl": "images/monet/article-images/mulher-guarda-sol.jpg",
                        "paintingTitle": "A Mulher com Guarda-Sol (1875)",
                        "paintingLegend": "Uma mulher caminha sob a luz do sol, segurando um guarda-sol, enquanto a luz e a sombra dançam sobre sua figura, capturando um instante efêmero de graça."
                    },

                    nascerSol: {
                        "painting": "nascer-sol",
                        "paintingUrl": "images/monet/article-images/nascer-sol.jpg",
                        "paintingTitle": "Impressão, Nascer do Sol (1872)",
                        "paintingLegend": "Uma cena matinal no porto de Le Havre, onde a luz e a atmosfera se entrelaçam, dando nome ao movimento Impressionista."
                    },

                    catedralRouen: {
                        "painting": "catedral-rouen",
                        "paintingUrl": "images/monet/article-images/catedral-rouen.jpg",
                        "paintingTitle": "A Catedral de Rouen (1893)",
                        "paintingLegend": "A fachada da catedral é revelada em uma variedade de luzes e sombras, mostrando a habilidade de Monet em capturar a mudança de atmosfera em diferentes momentos do dia."
                    }
                },

                pp : {
                    laVie: {
                        "painting": "la-vie",
                        "paintingUrl": "images/picasso/article-images/la-vie.jpg",
                        "paintingTitle": "La Vie (1903)",
                        "paintingLegend": "Uma obra profunda que simboliza a tristeza e complexidade da existência humana, marcando o ápice do Período Azul."
                    },
                
                    velhoGuitarrista: {
                        "painting": "velho-guitarrista",
                        "paintingUrl": "images/picasso/article-images/velho-guitarrista.jpg",
                        "paintingTitle": "Velho Guitarrista Cego (1903-1904)",
                        "paintingLegend": "Em tons de azul melancólicos, um homem frágil toca sua guitarra, evocando solidão. Essa obra reflete o sentimento de desolação do Período Azul de Picasso."
                    },
                
                    acrobata: {
                        "painting": "acrobata",
                        "paintingUrl": "images/picasso/article-images/acrobata.jpg",
                        "paintingTitle": "Acrobata e Jovem Arlequim (1905)",
                        "paintingLegend": "Esta pintura explora a vulnerabilidade e fragilidade das figuras circenses, características do Período Rosa de Picasso."
                    },
                
                    lesDemoiselles: {
                        "painting": "les-demoiselles",
                        "paintingUrl": "images/picasso/article-images/les-demoiselles.jpg",
                        "paintingTitle": "Les Demoiselles d'Avignon (1907)",
                        "paintingLegend": "Com traços angulares e olhares penetrantes, cinco figuras femininas se fragmentam em formas ousadas. Picasso rompe a tradição, inaugurando o Cubismo e desafiando a representação clássica do corpo humano."
                    },
                
                    doraMaar: {
                        "painting": "dora-maar",
                        "paintingUrl": "images/picasso/article-images/dora-maar.jpg",
                        "paintingTitle": "Cabeça de Mulher - Dora Maar (1941)",
                        "paintingLegend": "Picasso usa planos assimétricos e cores vibrantes para retratar sua musa, Dora Maar, misturando intensidade e mistério em uma imagem de tristeza e contemplação."
                    },
                
                    mulherChorando: {
                        "painting": "mulher-chorando",
                        "paintingUrl": "images/picasso/article-images/mulher-chorando.jpg",
                        "paintingTitle": "A Mulher que Chora (1937)",
                        "paintingLegend": "O rosto anguloso e as lágrimas cristalizadas expressam uma dor profunda. Picasso captura o luto em linhas fraturadas, simbolizando o impacto emocional da guerra civil."
                    },
                
                    retratoAmbroise: {
                        "painting": "retrato-ambroise",
                        "paintingUrl": "images/picasso/article-images/retrato-ambroise.jpg",
                        "paintingTitle": "Retrato de Ambroise Vollard (1910)",
                        "paintingLegend": "Uma obra cubista que desconstrói a figura de Vollard, influente marchand de Picasso, em fragmentos geométricos complexos."
                    },
                
                    violino: {
                        "painting": "violino",
                        "paintingUrl": "images/picasso/article-images/violino.jpg",
                        "paintingTitle": "Violino e Uvas (1912)",
                        "paintingLegend": "Pintura cubista que decompõe o violino em formas abstratas, explorando a geometria e perspectiva fragmentada."
                    },

                    guernica : {
                        "painting": "guernica",
                        "paintingUrl": "images/picasso/article-images/guernica.jpg",
                        "paintingTitle": "Guernica (1937)",
                        "paintingLegend": "Em tons de preto, branco e cinza, Guernica expressa o horror da guerra e a angústia do bombardeio sobre a cidade basca. As figuras distorcidas e as expressões de desespero denunciam a violência e a opressão.<"

                    }
                }
                
            }
        }
    
        cardChange(itemClicado){
            for (var botoes of Object.entries(this.btnArrays[this.artist])){
                for (var elementos of botoes){
                    for (var i = 0; i < this.CardChangeBtn.length ; i++){
                        if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card1')){
                            this.imgCard1.src = elementos.paintingUrl
                            this.titleCard1.innerHTML = elementos.paintingTitle
                            this.legendCard1.innerHTML = elementos.paintingLegend
                        } else if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card2')) {
                            this.imgCard2.src = elementos.paintingUrl
                            this.titleCard2.innerHTML = elementos.paintingTitle
                            this.legendCard2.innerHTML = elementos.paintingLegend
                        } else if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card3')) {
                            this.imgCard3.src = elementos.paintingUrl
                            this.titleCard3.innerHTML = elementos.paintingTitle
                            this.legendCard3.innerHTML = elementos.paintingLegend
                        }
                    }
                }
            }
        }
    
        main(){
            this.CardChangeBtn.forEach((btn) => {
                btn.addEventListener("click", () => {
                    this.cardChange(btn)
                })
            })
            this.expandBtn.addEventListener('click', () => {
                switch (this.mainPage.classList.contains("artist-section-enable")){
                    case false:
                        this.mainPage.classList.add("artist-section-enable")
                        this.mainPage.classList.remove("artist-section-disable")
                        this.expandBtn.classList.add('expand-active')
                        this.expandBtn.classList.remove('expand-disabled')
                        break
                    case true:
                        this.mainPage.classList.add("artist-section-disable")
                        this.mainPage.classList.remove("artist-section-enable")
                        this.expandBtn.classList.add('expand-disabled')
                        this.expandBtn.classList.remove('expand-active')
                }
            })
        }
    
        dividerResponsive(){
            var divider = this.artistDivider
            var midDivider = document.querySelector(`.artist-text-${this.artist}`)
            var expandButton = this.expandBtn
            if (window.innerWidth < 1399.98){
                divider.appendChild(expandButton)
            } else if (window.innerWidth > 1399.98){
                midDivider.appendChild(expandButton)
            }
            
        }
    }
    
    const informacoesVanGogh = new ArtistInformations('vg')
    const informacoesGoya = new ArtistInformations('fg')
    const informacoesRafael = new ArtistInformations('rs')
    const informacoesCaravaggio = new ArtistInformations('cr')
    const informacoesJacquesDavid = new ArtistInformations('jd')
    const informacoesMonet = new ArtistInformations('cm')
    const informacoesPicasso = new ArtistInformations('pp')
    
    
    switch (targetArtist){
        case 'Vincent Van Gogh':
            informacoesVanGogh.main()
            break
        case 'Francisco de Goya':
            informacoesGoya.main()
            break
        case 'Rafael Sanzio':
            informacoesRafael.main()
            break
        case 'Caravaggio':
            informacoesCaravaggio.main()
            break
        case 'Jacques-Louis David':
            informacoesJacquesDavid.main()
            break
        case 'Claude Monet':
            informacoesMonet.main()
            break
        case 'Pablo Picasso':
            informacoesPicasso.main()
            break
    }
    
    window.addEventListener("resize", () => {
        informacoesArtists.forEach((artist) => {
            artist.dividerResponsive()
        })
    })
    
    window.addEventListener("load", () => {
        informacoesArtists.forEach((artist) => {
            artist.dividerResponsive()
        })
    })
    
}

