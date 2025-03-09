const swiper = new Swiper('.swiper', {
    // Direção do deslizamento
    direction: 'horizontal',
    
    // Ficar rodando infinitamente
    loop: true,

    // Reprodução automática
    autoplay: {
        // Tempo entre cada transição
        delay: 3000,
        // Continua o fluxo mesmo com o usuário interagindo
        disableOnInteraction: false
    },

    // Define o efeito que o slide assumirá
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: false
    },

    // Configuração da paginação
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Configuração dos botões de navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Velocidade da animação
    speed: 100,

    // Ativar cursor de agarrar 
    grabCursor: true
});
