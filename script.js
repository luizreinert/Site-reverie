
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
                "informationText2" : "Caravaggio foi um dos maiores expoentes desse movimento, utilizando o chiaroscuro para criar contrastes dramáticos que intensificavam o realismo e o impacto emocional de suas obras. O Barroco, com seu dinamismo e teatralidade, se refletiu perfeitamente na obra de Caravaggio, que dava vida a temas religiosos e cotidianos com um vigor quase cinematográfico."
                
            },
            neoclassicismo: {
                "artistMenuOption" : this.neoclassicismo, 
                "backgroundClass" : "neoclassicismo-hero-section-bg",
                "menuBackground" : "artists-menu-david",
                "mainColor" : "#A1B2C9",
                "movementName" : "Neoclassicismo",
                "artistName" : "Jacques-Louis David",
                "informationText1" : "O Neoclassicismo surgiu como uma reação ao Rococó, buscando uma volta à simplicidade e ao rigor da arte clássica greco-romana.",
                "informationText2" : "Em meio à Revolução Francesa, Jacques-Louis David utilizou esse estilo para expressar ideais de virtude, disciplina e sacrifício pela pátria. Suas obras, caracterizadas pela clareza formal e temas heroicos, não apenas homenageavam a Antiguidade, mas também serviam como um manifesto político e moral em tempos de mudança."
                
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
                "informationText2" : "Claude Monet, como líder do movimento, foi pioneiro em retratar a natureza de forma subjetiva e inovadora. Suas pinceladas rápidas e paisagens vibrantes, ao mesmo tempo que revolucionaram a pintura, refletiram a modernidade e as transformações sociais de seu tempo, encapsulando a sensação de movimento e mudança constante."
                
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
                "informationText2" : " Pablo Picasso foi pioneiro nessa abordagem, transformando a maneira como enxergamos o mundo. Suas obras cubistas, com linhas angulosas e sobreposição de planos, exploram uma visão complexa e multifacetada da realidade. Com sua ousadia criativa, deu ao Cubismo um impacto duradouro, fazendo com que a arte refletisse a fragmentação e a profundidade do mundo moderno."
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
                try{
                    switch(articleContainer.innerHTML.includes('div')){
                        case true:
                            break
                        case false:
                            articleContainer.innerHTML = ''
                    }
                } catch (e){
                    //
                }
            })

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
                    const cururu = document.getElementById('hero-bg-div')
                    cururu.classList.remove('bg-active')      
                    cururu.classList.add('bg-inactive')  
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
                            const cururu = document.getElementById('hero-bg-div')
                            cururu.classList.add('bg-active')  
                            cururu.classList.remove('bg-inactive')
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
                            const cururu = document.getElementById('hero-bg-div')
                            cururu.classList.add('bg-active')  
                            cururu.classList.remove('bg-inactive')
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
                    const cururu = document.getElementById('hero-bg-div')
                    cururu.classList.remove('bg-active')
                    cururu.classList.add('bg-inactive') 
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
        this.scrollToTop()
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
                    firstBg : "url('images/goya/goya-first-bg.jpg') no-repeat fixed center / cover",
    
                    moldura1 : {
                        "element" : this.moldura1,
                        "imageUrl" : "url('images/goya/voo-das-bruxas.jpg')",
                        "bgColor" : "#745516",
                        "title": "O Voo Das Bruxas",
                        "date": "1798",
                        "technique": "Óleo sobre tela",
                        "dimensions": "	43.5 cm x 30.5 cm",
                        "localization": "Museu Nacional do Prado, Madrid, Espanha",
                        "citation": "Parte de uma série de seis quadros sobre bruxaria, encomendada pelo Duque e Duquesa de Osuna",
                        "firstP": "A pintura representa três bruxas seminuas usando sambenitos (um tipo de coroa antigamente usada para penitência na inquisição, uma forma de humilhar o portador durante sua procissão para a condenação), carregando uma figura se contorcendo, com suas bocas próximas a vítima, como se forrem devorá-la ou sugar seu sangue.\n\n Abaixo, duas figuras em trajes de camponeses recuam da cena: uma se jogou no chão cobrindo os ouvidos, a outra tenta escapar cobrindo-se com um cobertor, fazendo o gesto de figa para afastar o mau-olhado",
                        "secondP" : ""
                    },
    
                    moldura2 : {
                        "element" : this.moldura2,
                        "imageUrl" : "url('images/goya/sabá-bruxas.jpg') ",
                        "bgColor" : "#576a52",
                        "title": "Sabá das Bruxas",
                        "date": "1798",
                        "technique": "Óleo sobre tela a partir de um afresco",
                        "dimensions": "43.3 x 30.5 cm",
                        "localization": "Museu Lázaro Galdiano, Madrid, Espanha",
                        "citation": "Parte de uma série de seis quadros sobre bruxaria, encomendada pelo Duque e Duquesa de Osuna",
                        "firstP": "A tela retrata “El Gran Cabrón” (O Grande Bode), uma das formas representadas por Satanás, cercado por um grupo de bruxas jovens e idosas em uma paisagem lunar desolada. O bode possui grandes chifres e é coroado com um ramo de folhas de carvalho. À direita, uma velha segura um bebê extremamente faminto, mas aparentemente ainda vivo, enquanto uma bruxa mais jovem à sua direita faz o mesmo com uma criança mais saudável, implicando que elas seguirão o mesmo destino.",
                        "secondP" : "O Diabo parece atuar como uma espécie de sacerdote em uma cerimônia de iniciação para as crianças. O corpo morto de um bebê é visto à esquerda, e outras bruxas, jovens e idosas, estão presentes na cena. A pintura é repleta de símbolos invertidos, como o bode estendendo seu casco esquerdo em direção à criança e a lua minguante voltada para fora do quadro no canto superior esquerdo. Goya usou a imagem de covens de bruxas em várias obras, incluindo as famosas “Pinturas Negras”. Essas pinturas podem ser vistas como uma crítica às superstições prevalentes na Espanha da época."
        
                    },
    
                    moldura3 : {
                        "element" : this.moldura3,
                        "imageUrl" : "url('images/goya/feitiço.jpg')",
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
                        "imageUrl" : "url('images/goya/saturno.jpg')",
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
                }
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
                        item.style.border = `2px solid ${elementos.bgColor}`
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
    
    // Organiza as páginas de cada artista, criando todas as primeiras páginas ao inicializar e as segundas ao clicar no botão de slide //
    const assetsVanGogh = [primeiraPaginaVanGogh, segundaPaginaVanGogh]
    const assetsGoya = [primeiraPaginaGoya, segundaPaginaGoya]

    switch (targetArtist){
        case 'Vincent Van Gogh':
            createObjects(assetsVanGogh)
            break
        case 'Francisco de Goya':
            createObjects(assetsGoya)
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
    
    var informacoesVanGogh = new ArtistInformations('vg')
    var informacoesGoya = new ArtistInformations('fg')
    var informacoesRafael = new ArtistInformations('rs')
    var informacoesArtists = [informacoesVanGogh, informacoesGoya]
    
    
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

