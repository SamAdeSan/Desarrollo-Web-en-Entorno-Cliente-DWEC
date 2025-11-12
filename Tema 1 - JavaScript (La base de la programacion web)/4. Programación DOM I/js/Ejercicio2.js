function accionBotones() {
    let listaElementos = document.getElementById('listaelemen');

    document.getElementById('btnAddElement').onclick = function(){
        let apartado = document.createElement("li");
        apartado.textContent = "Animal nuevo";
        listaElementos.appendChild(apartado);
    }

    document.getElementById('btnInsertElement').onclick = function(){
        let apartado = document.createElement("li");
        apartado.textContent = prompt("Inserta tú un animal nuevo");
        let items = listaElementos.querySelectorAll('li');
        if (items.length === 0){
            listaElementos.appendChild(apartado);
        } else {
            let primero = items[1]
            listaElementos.insertBefore(apartado, primero)
        }
    }

    document.getElementById('btnReplaceElement').onclick = function(){
        let items = listaElementos.querySelectorAll("li");
        if (items.length >= 2){
            items[1].textContent = prompt();
        }
    }

    document.getElementById('btnDeleteElement').onclick = function(){
        let items = listaElementos.querySelectorAll("li");
        if (items.length >= 2){
            listaElementos.removeChild(items[1]);
        }
    }

    document.getElementById('btnCloneCompleteList').onclick = function(){
        document.body.appendChild(listaElementos.cloneNode(true));
    }

    document.getElementById('btnCreateSubDOM').onclick = function(){
        let leon = listaElementos.querySelector("#leon");
        if (!leon) return;
        if (leon.querySelector('ul')) return

        let subL = document.createElement("ul");
        let s1 = document.createElement("li")
        s1.textContent = "cachorro"
        let s2 = document.createElement("li")
        s2.textContent = "adulto"
        subL.appendChild(s1);
        subL.appendChild(s2);
        leon.appendChild(subL);
    }

    document.getElementById('btnCreateSubInnerHTML').onclick = function(){
        let leon = document.querySelector("#leon");
        if (!leon) return;
        if (leon.querySelector('ul')) return
        leon.innerHTML += `
            <ul>
                <li>cachorro</li>
                <li>adulto</li>
            </ul>
        `;
    }

}
window.onload = accionBotones;