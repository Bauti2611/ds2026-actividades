interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const estadoVisual = document.getElementById('estado') as HTMLParagraphElement;
const listaHTML = document.getElementById('lista-usuarios') as HTMLUListElement;

async function renderizarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) throw new Error('error en el servidor');
        
        const usuarios: Usuario[] = await response.json();
        
  
        estadoVisual.style.display = 'none'; 

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.innerText = `${usuario.name} - ${usuario.email}`;
            listaHTML.appendChild(li); 
        });

    } catch (error) {

        estadoVisual.innerText = 'error al cargar los usuarios.';
        estadoVisual.style.color = 'red';
    }
}

renderizarUsuarios();