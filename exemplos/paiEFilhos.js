const pai = document.getElementById('pai');
const filho = pai.childNodes[3];

console.log('Elemento pai:', pai);
console.log('Lista dos nós filhos:', pai.childNodes);
console.log('Lista dos elementos HTML filhos', pai.children);
console.log('Primeiro nó filho:', pai.firstChild);
console.log('Ultimo nó filho:', pai.lastChild);
console.log('Primeiro elemento HTML filho:', pai.firstElementChild);
console.log('Ultimo elemento HTML filho:', pai.lastElementChild);
console.log('Nó irmão anterior', filho.previousSibling);
console.log('Próximo nós irmão', filho.nextSibling);
console.log('Elemento HTML irmão anterior', filho.previousElementSibling);
console.log('Próximo Elemento HTML irmão', filho.nextElementSibling);
