
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
    
        fetch("json/artists-menu.json")
        .then (r => r.json())
        .then (strings => {
            this.movementsData = strings
        })
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
                            if(artist == eval(this.movementsData[movement]["artistMenuOption"])){
                                if(this.heroSectionBg.lastElementChild.classList.contains('bg-active') && this.heroSectionBg.lastElementChild.classList.contains(this.movementsData[movement]["backgroundClass"]) == false){
                                    heroBgDiv.className = ''
                                }
                                this.heroSectionBg.appendChild(heroBgDiv)
                                heroBgDiv.classList.add(this.movementsData[movement]["backgroundClass"])
                                artist.classList.add(movement)
                                heroBgDiv.classList.add('bg-active')
                                this.showChosenArtistInfo(this.movementsData[movement], movement)
                            } else if (artist != eval(this.movementsData[movement]["artistMenuOption"])){
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

        function openArticle(targetArtistHtml, targetArtist){
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
        // Troca a cor do botão "Saiba mais", de acordo com a cor designada ao movimento/artista
        this.changeButtonBgColor(targetArtistMovement)

        // Troca as informações de acordo com o movimento escolhido
        movementName.innerText = targetArtist.movementName
        artistName.innerText = targetArtist.artistName
        artistName.style.color = `var(--${targetArtistMovement}-main-color)`
        artistText1.innerText = targetArtist.informationText1
        artistText2.innerText = targetArtist.informationText2
        articleBtn.onclick = () => openArticle(targetArtist.articleHTML, targetArtist.artistName);

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
            this.background = document.getElementById(`${artist}-first-bg`)
            this.container = document.getElementById(`${artist}-canvas-container`)
            this.information = document.getElementById(`${artist}-first-artinfo`)
            this.moldura1 = document.getElementById(`${artist}-m1`)
            this.moldura2 = document.getElementById(`${artist}-m2`)
            this.moldura3 = document.getElementById(`${artist}-m3`)
            this.moldura4 = document.getElementById(`${artist}-m4`)
            this.canvas = document.getElementById(`canvas-1-${artist}`)
            this.arrayMolduras = [this.moldura1, this.moldura2, this.moldura3, this.moldura4]
        
            fetch("json/artworks-data.json")
            .then(r => r.json())
            .then (data => {
                this.infoArrays = data
            })
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
    
        async framesChange() {
            try {
                const response = await fetch("json/artworks-data.json");
                const data = await response.json();
                this.artworkData = data;

                this.background.style.background = this.infoArrays[this.artist]["firstBg"]
                this.arrayMolduras.forEach((item) => {
                    for (var molduras of Object.entries(this.artworkData[this.artist])) {
                        for (var elementos of molduras) {
                            if (item === eval(elementos["element"])) {
                                item.style.backgroundImage = elementos.imageUrl
                                item.addEventListener('blur', () => {
                                    item.style.border = '2px solid #ffffff'
                                });
                            }
                        }
                    }
                })
            } catch (error) {
                console.error("Erro ao carregar o JSON:", error)
            }
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
                    if (item === eval(elementos["element"])){
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
            btnZoom.classList.add('zoom-art')
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
            var informationCard = this.information
            lgPos.appendChild(informationCard)
            this.background.removeEventListener('mousedown', (e) => {
                this.canvas.classList.remove('card-gap')
                this.information.classList.remove('arte-info-on')
                item.classList.remove('hidden')
                e.stopPropagation()
            })
            this.arrayMolduras.forEach((item) => {
                item.classList.remove('hidden')
            })

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
                    window.onscroll = function(e) {
                        if (item.classList.contains('hidden') == true && focusedFrame.classList.contains('hidden') == false && this.oldScroll > window.scrollY == true ){
                            if (this.scrollY - this.oldScroll < -10){
                                information.classList.remove('arte-info-on')
                            }
                        } else {
                            if (information.classList.contains('arte-info-on') == true){
                                canvas.classList.add('card-gap')
                            } else {
                                switch (this.oldScroll > this.scrollY){
                                    case false:
                                        if (this.scrollY - this.oldScroll > 10){
                                            information.classList.add('arte-info-on')
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
                            item.classList.remove('hidden')
                        }
                    })
                }
            } 
        }
    
        main(){
            this.arrayMolduras.forEach((selectedFrame) => {
                selectedFrame.addEventListener('focus', () => {this.hoverEvent('disable', selectedFrame)})
                selectedFrame.addEventListener('blur', () => {this.hoverEvent('enable', selectedFrame)})
                selectedFrame.addEventListener('focus', () => {this.botaoZoom('add', selectedFrame)})
                selectedFrame.addEventListener('blur', () => {this.botaoZoom('remove', selectedFrame)})
            })
            this.framesChange()
            this.carouselAutoScroll()
        }
    }
    
    const primeiraPaginaVanGogh = new Molduras(1, 'vg')
    const primeiraPaginaGoya = new Molduras(1, 'fg')
    const primeiraPaginaRafael = new Molduras(1, 'rs')
    const primeiraPaginaCaravaggio = new Molduras(1, 'cr')
    const primeiraPaginaJacques = new Molduras(1, 'jd')
    const primeiraPaginaMonet = new Molduras(1, 'cm')
    const primeiraPaginaPicasso = new Molduras(1, 'pp')
    
    switch (targetArtist){
        case 'Vincent Van Gogh':
            createObjects(primeiraPaginaVanGogh)
            break
        case 'Francisco de Goya':
            createObjects(primeiraPaginaGoya)
            break
        case 'Rafael Sanzio':
            createObjects(primeiraPaginaRafael)
            break
        case 'Caravaggio':
            createObjects(primeiraPaginaCaravaggio)
            break
        case 'Jacques-Louis David':
            createObjects(primeiraPaginaJacques)
            break
        case 'Claude Monet':
            createObjects(primeiraPaginaMonet)
            break
        case 'Pablo Picasso':
            createObjects(primeiraPaginaPicasso)
            break
    }

    function createObjects(page){
        page.main()
        page.responsive()
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
            
            fetch("json/article-images-data.json")
            .then( r => r.json())
            .then(strings => {
                this.btnArrays = strings
            })
        }
    
        cardChange(itemClicado){
            for (var botoes of Object.entries(this.btnArrays[this.artist])){
                for (var elementos of botoes){
                    for (var i = 0; i < this.CardChangeBtn.length ; i++){
                        if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card1')){
                            this.imgCard1.src = elementos["paintingUrl"]
                            this.titleCard1.innerHTML = elementos["paintingTitle"]
                            this.legendCard1.innerHTML = elementos["paintingLegend"]
                        } else if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card2')) {
                            this.imgCard2.src = elementos["paintingUrl"]
                            this.titleCard2.innerHTML = elementos["paintingTitle"]
                            this.legendCard2.innerHTML = elementos["paintingLegend"]
                        } else if (itemClicado.id.includes(elementos.painting) && itemClicado.classList.contains('card3')) {
                            this.imgCard3.src = elementos["paintingUrl"]
                            this.titleCard3.innerHTML = elementos["paintingTitle"]
                            this.legendCard3.innerHTML = elementos["paintingLegend"]
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
            this.dividerResponsive()
            
        }
    
        dividerResponsive(){
            var divider = this.artistDivider
            var midDivider = document.querySelector(`.artist-text-${this.artist}`)
            var expandButton = this.expandBtn
            const isSmallScreen = window.matchMedia("(max-width: 1399.98px)")
            switch (isSmallScreen.matches){
                case true:
                    divider.appendChild(expandButton)
                    break
                case false:
                    midDivider.appendChild(expandButton)
                    break
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
    
    
}

