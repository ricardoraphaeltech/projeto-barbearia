/* Lógica de Programação
    [X] Saber quando o usuário clicou no botão
    [X] Mudar o posicionamento do modal
    [X] Fazer a máscara ficar visível
    [X] Quando clicar na máscara, esconder o modal e a máscara
*/

// Procura no HTML o elemento pelo seletor
const modal = document.querySelector('.modal');
const mascaraModal = document.querySelector('.mascara-modal');

function mostrarModal() {
    modal.style.left = '50%'
    mascaraModal.style.visibility = 'visible'
}

function ocultarModal() {
    modal.style.left = '-50%'
    mascaraModal.style.visibility = 'hidden'
}

/* Lógica de Programação - Menu mobile 
    [X] Saber quando o usuário clicou no botão
    [X] Abrir o menu mobile
    [X] Trocar o ícone de barra pelo X
    [X] Fazer a máscara ficar visível
    [X] Quando clicar no X fechar o menu mobile
    [X] Quando clicar na máscara fechar o menu mobile
    [X] Quando clicar nos links do menu, fechar o menu mobile
    [] Quando clicar na logo no header, fechar o menu mobile
*/

// Procura no HTML o elemento pelo seletor
const menuMobile = document.querySelector('.menu-mobile');
const mascaraMenuMobile = document.querySelector('.mascara-menu-mobile');
const linkMenuMobile = document.querySelectorAll('.link-menu-mobile');
const logoImg = document.querySelector('.logo-img');

// Seleciona o botão pelo id
const botaoMenu = document.getElementById('botao-menu');
// Seleciona o ícone dentro do botão pelo id
const icone = document.getElementById('icone');

// Adiciona um evento de click ao botão
botaoMenu.addEventListener('click', function() {
    // Verifica qual ícone está atualmente
    if (icone.classList.contains('fa-bars')) {
        // Remove o ícone fa-bars
        icone.classList.remove('fa-bars')
        // Troca pelo ícone fa-xmark
        icone.classList.add('fa-xmark')
        // Abre o menu mobile
        menuMobile.style.width = '40vw'
        // Torna a máscara visível
        mascaraMenuMobile.style.visibility = 'visible'
    } else {
        // Remove o ícone fa-xmark
        icone.classList.remove('fa-xmark')
        // Troca pelo ícone fa-bars
        icone.classList.add('fa-bars')
        // Fecha o menu
        menuMobile.style.width = '0'
        // Esconde a máscara
        mascaraMenuMobile.style.visibility = 'hidden'
    }
})

// Adiciona um evento de clique na máscara
mascaraMenuMobile.addEventListener('click', function() {
    if(icone.classList.contains('fa-xmark')) {
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
        menuMobile.style.width = '0'
        mascaraMenuMobile.style.visibility = 'hidden'
    }
})

// // Adiciona um evento de clique na lista de itens do menu mobile com forEach
// linkMenuMobile.forEach((linkMenuMobile) => {
//     linkMenuMobile.addEventListener('click', function() {
//         if(icone.classList.contains('fa-xmark')) {
//             icone.classList.remove('fa-xmark')
//             icone.classList.add('fa-bars')
//             menuMobile.style.width = '0'
//             mascaraMenuMobile.style.visibility = 'hidden'
//         }    
//     })
// })

// Adiciona um evento de clique na logo-img
logoImg.addEventListener('click', function() {
    if(icone.classList.contains('fa-xmark')) {
        icone.classList.remove('fa-xmark')
        icone.classList.add('fa-bars')
        menuMobile.style.width = '0'
        mascaraMenuMobile.style.visibility = 'hidden'
    }
})