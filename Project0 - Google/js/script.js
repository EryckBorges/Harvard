const lucky = document.querySelectorAll('.lucky');
let pesq = document.querySelector('.search input');

lucky.forEach((btn) => {
    btn.addEventListener('click', () => {
        let definido1 = localStorage.getItem('definido1');
    let definido2 = localStorage.getItem('definido2');
    let definido3 = localStorage.getItem('definido3');
    let definido4 = localStorage.getItem('definido4');

    let search = pesq.value;

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
        
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(search)}&btnI=1`;
    });
})

