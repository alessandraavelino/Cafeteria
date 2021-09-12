const itens = [
    {
        "name":"Café",
        "image":"coffee-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        "name":"Chá",
        "image":"cha-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        "name":"Suco",
        "image":"suco-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        "name":"Bolo",
        "image":"bolo-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        "name":"Biscoito",
        "image":"biscoito-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
        "name":"Cupcake",
        "image":"cupcake-menu.png",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
];

for (let item of itens) {
    const view = `<div class="col-sm-4 p-3">
                  <div class="card" style="width: 18rem;">
                    <img src=${item.image} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-dark btn-primary">Comprar</a>
                    </div>
                  </div>  
                </div>`

    let menuItens = document.getElementById("menu-itens")
    menuItens.insertAdjacentHTML("beforeend", view)

}



