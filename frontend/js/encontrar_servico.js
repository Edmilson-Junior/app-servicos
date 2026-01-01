// codigo javaScript para carregar os servicos dinamicamente, mas de acordo com a pesquisa feita no index.html

const params = new URLSearchParams(window.location.search);

const texto = params.get("input_pesquisa")?.toLowerCase().trim();



const usuarios = [
    {
        nome: "Carlos Mendes",
        servicos: ["limpeza geral", "engomação", "organização"],
        desc: "Profissional dedicado com 5 anos de experiência em serviços domésticos.",
        avaliacaEstrela: "⭐⭐⭐⭐",
        quantAvaliacao: 223,
        img: "../css/perfil.jpg"
    },
    {
        nome: "Ana Silva",
        servicos: ["cuidado de crianças", "cozinha"],
        desc: "Profissional dedicado com 5 anos de experiência em serviços domésticos.",
        avaliacaEstrela: "⭐⭐⭐⭐",
        quantAvaliacao: 281,
        img: "../css/perfil.jpg"
    },
    {
        nome: "João Mateus",
        servicos: ["jardinagem", "manutenção"],
        desc: "Profissional dedicado com 5 anos de experiência em serviços domésticos.",
        avaliacaEstrela: "⭐⭐",
        quantAvaliacao: 153,
        img: "../css/perfil.jpg"
    },
    {
        nome: "Paula Rocha",
        servicos: ["limpeza profunda", "lavagem de tapetes"],
        desc: "Profissional dedicado com 5 anos de experiência em serviços domésticos.",
        avaliacaEstrela: "⭐⭐⭐",
        quantAvaliacao: 127,
        img: "../css/perfil.jpg"
    }
];

// const resultados = usuarios.filter(usuario =>
//     usuario.servicos.some(servico =>
//         servico.toLowerCase().includes(texto)
//     )
// );

const resultadosServico = document.getElementById("servicos");

resultadosServico.innerHTML = `<h2>Resultados da pesquisa para "${texto}"</h2>`;

const resu = [];

for (let index = 0; index < usuarios.length; index++) {
    for (let c = 0; c < usuarios[index].servicos.length; c++) {
        if (usuarios[index].servicos[c].includes(texto)) {
            resu.push({
                nome: usuarios[index].nome,
                servico: usuarios[index].servicos[c],
                desc: usuarios[index].desc,
                avaliacaoEstrela: usuarios[index].avaliacaEstrela,
                quantAvaliacao: usuarios[index].quantAvaliacao,
                img: usuarios[index].img
            });
        }
    }
}

for (let i = 0; i < resu.length; i++) {
    const div = document.createElement("div");
    div.className = "card_usuario";

    div.innerHTML = `
            
            <div class="resu_servico" id="resu_servico">
                <div class="perfil">
                    <img src="${resu[i].img}" alt="${resu[i].nome}">
                    <h3 class="nome">${resu[i].nome}</h3>
                </div>

                <strong>
                    Serviços: ${resu[i].servico}
                </strong>
                
                <p class="descricao">${resu[i].desc}</p             
                <button class="contratar" id="contratar">Contratar</button>

                <div class="avaliacao">
                    <span>${resu[i].avaliacaoEstrela}</span>
                    <span class="num_avaliacao">(${resu[i].quantAvaliacao} avaliações)</span>
                </div>
            </div>`;

    resultadosServico.innerHTML += div.outerHTML;
}


// if (resultados.length === 0) {
//     resultadosServico.innerHTML = "<p>Nenhum serviço encontrado.</p>";
// } else {
//     resultados.forEach(usuario => {
//         const div = document.createElement("div");
//         div.className = "card_usuario";

//         div.innerHTML = `
//             <h2>Resultados da pesquisa para "${texto}"</h2>
//             <div class="resu_servico" id="resu_servico">
//                 <div class="perfil">
//                     <img src="" alt="Foto de perfil">
//                     <h3 class="nome">${usuario.nome}</h3>
//                 </div>

//                 <strong>
//                     Serviços: ${usuario.servicos.join(", ").includes(texto)}
//                 </strong>
                
//                 <p class="descricao">${usuario.desc}</p>
                
//                 <button class="contratar" id="contratar">Contratar</button>

//                 <div class="avaliacao">
//                     <span>${usuario.avaliacaEstrela}</span>
//                     <span class="num_avaliacao">(${usuario.quantAvaliacao} avaliações)</span>
//                 </div>
//             </div>
//         `;

//         resultadosServico.innerHTML += div;
//     });
// }









