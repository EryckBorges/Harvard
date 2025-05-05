//Vamos criar uma váriavel que recebe o valor pesquisado pelo usuário 
let pesquisa = document.querySelector('.search input');

const body = document.querySelector('body');
const btnPesquisar = document.querySelectorAll('.pesquisar');
const apps = document.querySelector('.apps');
const btnApps = document.querySelector('.btn-apps');
const hoverApps = document.querySelector('.hover-apps');
const btnPerfil = document.querySelector('.btn-perfil');
const hoverPerfil = document.querySelector('.hover-perfil');
const settings = document.querySelector('.settings');
const boxSettings = document.querySelector('.box-settings');
const search = document.querySelector('.search');
const recentSearch = document.querySelector('.recent-search');
const buttonsSearch = document.querySelector('.buttons-search');
const image = document.querySelector('.image');

let condition = false;

//Verifica se o usuário clicou fora e fecha se alguma aba estiver aberta
window.addEventListener('click', (event) => {
    //Fecha o menu de apps se ele estiver aberto
    if (event.target !== apps && event.target !== btnApps) {      
        if (apps.classList.contains('open-app')) {
            apps.classList.remove('open-app');
            apps.classList.add('closed-app');
        }
    }
    //Fecha o menu de configurações se ele estiver aberto
    if (event.target !== settings) {      
        if (boxSettings.classList.contains('open-settings')) {
            boxSettings.classList.remove('open-settings');
            boxSettings.classList.add('closed-settings');
        }
    }
    //Fecha a caixa de pesquisas recentes se ela estiver aberta
    if (event.target !== pesquisa) {      
        if (search.classList.contains('open-recent-search')) {
            search.classList.remove('open-recent-search');
            recentSearch.style.display = 'none';
            buttonsSearch.style.display = 'flex';
        }
    }
});

//Função que abre o menu de settings
settings.addEventListener('click', () => {
    if (boxSettings.classList.contains('open-settings')) {
        boxSettings.classList.remove('open-settings');
        boxSettings.classList.add('closed-settings');
    } else if (boxSettings.classList.contains('closed-settings')) {
        boxSettings.classList.remove('closed-settings');
        boxSettings.classList.add('open-settings') ;
    }
});

//Função que abre o menu de apps
btnApps.addEventListener('click', () => {
    if (apps.classList.contains('open-app')) {
        apps.classList.remove('open-app');
        apps.classList.add('closed-app');
    } else if (apps.classList.contains('closed-app')) {
        apps.classList.remove('closed-app');
        apps.classList.add('open-app') ;
    }
});

//Exibe o hover do menu de apps
btnApps.addEventListener('mouseenter', () => {
    setTimeout(() => {
        hoverApps.style.display = 'flex';
    }, 500);
});

//Esconde se o cursor não estiver em cima do botão de apps
btnApps.addEventListener('mouseleave', () => {
    hoverApps.style.display = 'none';
});

//Exibe o hover do menu de perfil
btnPerfil.addEventListener('mouseenter', () => {
    setTimeout(() => {
        hoverPerfil.style.display = 'flex';
    }, 500);
});

//Esconde se o cursor não estiver em cima do botão de perfil
btnPerfil.addEventListener('mouseleave', () => {
    hoverPerfil.style.display = 'none';
});

// Inicializa os valores caso ainda não existam
if (localStorage.getItem('definido1') === null) localStorage.setItem('definido1', 'false');
if (localStorage.getItem('definido2') === null) localStorage.setItem('definido2', 'false');
if (localStorage.getItem('definido3') === null) localStorage.setItem('definido3', 'false');
if (localStorage.getItem('definido4') === null) localStorage.setItem('definido4', 'false');

let recentSearch1 = document.querySelector('.search-1');
let recentSearch2 = document.querySelector('.search-2');
let recentSearch3 = document.querySelector('.search-3');
let recentSearch4 = document.querySelector('.search-4');

//Função que armazena a pesquisa anterior

const searchFunction = () => {
    let definido1 = localStorage.getItem('definido1');
    let definido2 = localStorage.getItem('definido2');
    let definido3 = localStorage.getItem('definido3');
    let definido4 = localStorage.getItem('definido4');

    let search = pesquisa.value;

    if (definido1 === 'false') {
        localStorage.setItem('search1', search);
        localStorage.setItem('definido1', 'true');
    } else if (definido2 === 'false') {
        localStorage.setItem('search2', search);
        localStorage.setItem('definido2', 'true');
    } else if (definido3 === 'false') {
        localStorage.setItem('search3', search);
        localStorage.setItem('definido3', 'true');
    } else if (definido4 === 'false') {
        localStorage.setItem('search4', search);
        localStorage.setItem('definido4', 'true');
    } else if (definido1 === 'true' && definido2 === 'true' && definido3 === 'true' && definido4 === 'true') {
        // Se todos já estiverem preenchidos, faz o shift
        let search1 = localStorage.getItem('search1');
        let search2 = localStorage.getItem('search2');
        let search3 = localStorage.getItem('search3');

        localStorage.setItem('search1', search);
        localStorage.setItem('search2', search1);
        localStorage.setItem('search3', search2);
        localStorage.setItem('search4', search3);
    }
    //Verifica em qual tela estamos para ocorrer a pesquisa desejada

    if(pesquisa.classList.contains('image')) {
        location.href = `https://www.google.com/search?tbm=isch&q=${search}`;
    }else {
        location.href = `https://www.google.com/search?q=${search}`;
    }
}

btnPesquisar.forEach((e) => {
    e.addEventListener('click', () => {
        searchFunction();
    });
})

//Hover para a parte de tema do menu de configurações
const contentTema = document.querySelector('.content-tema');
const situacao = document.querySelector('.situacao');
const iconSituacao = document.querySelector('.icon-situacao');

contentTema.addEventListener('mouseenter', () => {
    if (situacao.classList.contains('actived-tema')) {
        iconSituacao.innerHTML = 'dark_mode';
    }else {
        iconSituacao.innerHTML = 'light_mode';
    }
});

contentTema.addEventListener('mouseleave', () => {
    if (situacao.classList.contains('actived-tema')) {
        iconSituacao.innerHTML = ' ';
    }else {
        iconSituacao.innerHTML = ' ';
    }
});

// Função pra abrir caixa de pesquisas recentes

let recent1 = document.querySelector('.search-1 p');
let recent2 = document.querySelector('.search-2 p');
let recent3 = document.querySelector('.search-3 p');
let recent4 = document.querySelector('.search-4 p');

pesquisa.addEventListener('click', () => {
    //Aqui verificamos qual tecla está sendo digitada e a qualquer momento for prescionado ENTER a pesquisa ocorrerá
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchFunction();
        }
    });
    if (localStorage.getItem('search1') || localStorage.getItem('search2') || localStorage.getItem('search3') || localStorage.getItem('search4')) {
        buttonsSearch.style.display = 'none';
        search.classList.add('open-recent-search'); 
        recentSearch.style.display = "flex";
        if (localStorage.getItem('search1')) {
            recentSearch1.style.display = 'flex';
            recent1.innerHTML = localStorage.getItem('search1');
        } else {
            recentSearch1.style.display = 'none';
        }
        if (localStorage.getItem('search2')) {
            recentSearch2.style.display = 'flex';
            recent2.innerHTML = localStorage.getItem('search2');
        }else {
            recentSearch2.style.display = 'none';
        }
        if (localStorage.getItem('search3')) {
            recentSearch3.style.display = 'flex';
            recent3.innerHTML = localStorage.getItem('search3');
        }else {
            recentSearch3.style.display = 'none';
        }
        if (localStorage.getItem('search4')) {
            recentSearch4.style.display = 'flex';
            recent4.innerHTML = localStorage.getItem('search4');
        }else {
            recentSearch4.style.display = 'none';
        }
    }
});

//Seleciona todos os search e edfinimos uma função para que quando clicado ele pesquise o que tem dentro do seu localstorage e substitua os demais
const btnSearch1 = document.querySelector('.search-1');
const btnSearch2 = document.querySelector('.search-2');
const btnSearch3 = document.querySelector('.search-3');
const btnSearch4 = document.querySelector('.search-4');

btnSearch1.addEventListener('click', () => {
    let value = localStorage.getItem('search1')
    if(pesquisa.classList.contains('image')) {
        location.href = `https://www.google.com/search?tbm=isch&q=${value}`;
    }else {
        location.href = `https://www.google.com/search?q=${value}`;
    }
});

btnSearch2.addEventListener('click', () => {
    let value = localStorage.getItem('search2')
    let search1 = localStorage.getItem('search1');
    
    localStorage.setItem('search2', search1);
    localStorage.setItem('search1', value);
    location.href = `https://www.google.com/search?tbm=isch&q=${value}`;
});

btnSearch3.addEventListener('click', () => {
    let value = localStorage.getItem('search3')
    let search1 = localStorage.getItem('search1');
    let search2 = localStorage.getItem('search2');

    localStorage.setItem('search3', search2);
    localStorage.setItem('search2', search1);
    localStorage.setItem('search1', value);
    
    location.href = `https://www.google.com/search?tbm=isch&q=${value}`;
});

btnSearch4.addEventListener('click', () => {
    let value = localStorage.getItem('search4')
    let search1 = localStorage.getItem('search1');
    let search2 = localStorage.getItem('search2');
    let search3 = localStorage.getItem('search3');

    localStorage.setItem('search4', search3);
    localStorage.setItem('search3', search2);
    localStorage.setItem('search2', search1);
    localStorage.setItem('search1', value);
    
    location.href = `https://www.google.com/search?tbm=isch&q=${value}`;
});

//Funcionalidades de excluir e esconder o elemento que exibe a pesquisa recente

const delete1 = document.querySelector('.delete-1');
const delete2 = document.querySelector('.delete-2');
const delete3 = document.querySelector('.delete-3');
const delete4 = document.querySelector('.delete-4');

const verificaTermos = () => {
    let definido1 = localStorage.getItem('definido1');
    let definido2 = localStorage.getItem('definido2');
    let definido3 = localStorage.getItem('definido3');
    let definido4 = localStorage.getItem('definido4');
    
    if (definido1 === 'false' && definido2 === 'false' && definido3 === 'false' && definido4 === 'false') {
        search.classList.remove('open-recent-search'); 
        recentSearch.style.display = "none";
        buttonsSearch.style.display = 'flex';
    }
}

delete1.addEventListener('click', (e) => {  
    e.stopPropagation();
    localStorage.setItem('definido1', 'false');
    let recentSearch1 = document.querySelector('.search-1');
    recentSearch1.style.display = 'none';
    localStorage.removeItem('search1');
    verificaTermos();
});

delete2.addEventListener('click', (e) => {  
    e.stopPropagation();
    localStorage.setItem('definido2', 'false');
    let recentSearch2 = document.querySelector('.search-2');
    recentSearch2.style.display = 'none';
    localStorage.removeItem('search2');
    verificaTermos();
});

delete3.addEventListener('click', (e) => {  
    e.stopPropagation();
    localStorage.setItem('definido3', 'false');
    let recentSearch3 = document.querySelector('.search-3');
    recentSearch3.style.display = 'none';
    localStorage.removeItem('search3');
    verificaTermos();
});

delete4.addEventListener('click', (e) => {  
    e.stopPropagation();
    localStorage.setItem('definido4', 'false');
    let recentSearch4 = document.querySelector('.search-4');
    recentSearch4.style.display = 'none';
    localStorage.removeItem('search4');
    verificaTermos();
});



