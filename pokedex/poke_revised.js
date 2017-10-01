$(document).ready(function() {
    alert('Welcome Back');
    for (var i =1; i < 11; i ++){
        $(".poke_images").append(`<img id=${i} src="http://pokeapi.co/media/img/${i}.png">`);                   
    }
})
  
$(document).on("click", "img", function(){
        //can define variable for easier use and retrieval
    var id = Number(this.id) //reference click
    $(".pokedex").append(`<img src="http://pokeapi.co/media/img/${id}.png"/>`);
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, 
    function(res){
        console.log(res);
        console.log(res.name);
        console.log(res.height);
        console.log(res.weight);
        console.log(res.abilities[0].ability.name) 
        $('.pokedex').append(`<p>${res.name}</p>`,[`<p>${res.weight}</p>`, `<p>${res.height}</p>`]);
        $('.pokedex').append(`<p>${res.abilities}</p>`);
        $('.pokedex').append("<p>" + res.abilities[0].ability.name + "</p>");
        // `<p>${res.moves[0].move.name}</p>`
        
    },
    "json")
    })


    //Other Version
    //POKEDEX SCRIPTING

// $(document).ready(function(){
//     alert('Welcome Traveler');
//     for (var i =1; i < 151; i ++){
//         $(".poke_images").append(`<img src="http://pokeapi.co/media/img/${i}.png">`);
       
//     }
    
    
//         $(document).on("click", "img", function(){
//             alert('hey');
//             //can define variable for easier use and retrieval
//             var id = Number(this.id) //reference click

//             $(".pokedex").append(`
//             <img src="http://pokeapi.co/media/img/${id}">`);
//             $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(res){
//                 console.log(res);
//                 console.log(res.name);
//                 console.log(res.weight);
//                 var poke_name = res.name;
//                 var poke_weight= res.weight;
//                 var pw = `<p>${poke_weight}</p>`;
//                 $('.pokedex').append("<p>HELLO THERE</p>");
//                 $(".pokedex").append(`
//                <p>${res.name}</p>;
//                <p>${res.weight}</p>;
//                <p>${res.height}</p>`)},
//                  "json")
//            }
//         )
//     })
           
        