// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

        function agregarAmigo() {
            let input = document.getElementById("nombreAmigo");
            let nombre = input.value.trim();
            
            if (nombre === "") {
                alert("Por favor, inserte un nombre.");
                return;
            }
            
            amigos.push(nombre);
            actualizarLista();
            input.value = "";
        }

        function actualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }
