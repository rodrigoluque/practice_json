//inicializa una variable 'superheroesCards' con scope al bloque, declaración, o expresión donde se está usando.
let superheroesCards = '';
//busca los datos de nuestro dataset en superheroes.json en nuestro servidor local.
fetch('http://127.0.0.1:5500/superheroes.json')
  .then(response => response.json())
  .then(data =>{ 
      //recorre la colección de objetos y vamos creando un 'div' por cada iteración. 
      for(const superhero of data) { 
          superheroesCards += `<div class="card m-2 bg-warning" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-uppercase">${superhero.name}</h5>
                                    <p class="card-text"><b>Género:</b> ${superhero.gender}</p>
                                    <p class="card-text"><b>Tipo:</b> ${superhero.alignment}</p>
                                    <p class="card-text"><b>Peso:</b> ${superhero.weight} kg</p>
                                    <p class="card-text"><b>Editorial:</b> ${superhero.publisher}</p>
                                </div>
                               </div>`
                        }
        //prueba e imprime en la consola del navegador sí se relleno nuestra variable 'superheroesCards'.
        console.log(superheroesCards);
        //asigna la variable 'superheroesCards' en el div con id 'superheroes-cards'. 
        document.querySelector("#superheroes-cards").innerHTML=superheroesCards;       
});