"use strict";
const estadoVisual = document.getElementById('estado');
const listaHTML = document.getElementById('lista-usuarios');
async function renderizarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok)
            throw new Error('error en el servidor');
        const usuarios = await response.json();
        estadoVisual.style.display = 'none';
        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.innerText = `${usuario.name} - ${usuario.email}`;
            listaHTML.appendChild(li);
        });
    }
    catch (error) {
        estadoVisual.innerText = 'error al cargar los usuarios.';
        estadoVisual.style.color = 'red';
    }
}
renderizarUsuarios();
