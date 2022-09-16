let div=document.createElement("div");
div.setAttribute("id","content");

let container=document.createElement("div")
container.classList.add("class","container")
let row=document.createElement("div")
row.classList.add("class","row")
let col=document.createElement("div")
col.classList.add("class","col-md-3")

let div1=document.createElement("div")
div1.classList.add("class","charecters")
div1.innerHTML=`
   <h2 id="charec">Pokemon Names</h2>

<span id="p1">pikachu,eevee,snorlax<br>garchomp,lucario,charizard<br>gardevoir,ditto,piplup<br></span>
<span id="p2">magikarp,jynx,turtwig<br>dialga,palkia,gyarados<br>bulbasaur,squirtle,mew<br></span>
<span id="p3">lopunny,giratina,sylveon<br>gible,infernape,empoleon<br>tyranitar,togepi,togekiss<br></span>
<span id="p4">psyduck,combee,gastrodon<br>greninja,roserade,heatran<br>typhlosion,jigglypuff,shinx<br></span>
<span id="p5">zubat,raichu,budew<br>unown,oshawott,drapion<br></span>
`  
 col.append(div1);
 row.append(col);


let col1=document.createElement("div")
col1.classList.add("class","col-md-9")
        // creating input field and search button for searching pokemon names by the id attribute;
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","pokemon-charecter-names");
input.setAttribute("placeholder","names of pokemon")

       //creating the button for render the data when its clicked;
let button=document.createElement("button");
button.setAttribute("type","button");

       //adding bootstrap classList for the button;
button.classList.add("button")
button.innerHTML="search";
button.style.color="blue"
button.style.backgroundColor="lightgreen"


       //adding a eventlistener for function of the button;
button.addEventListener("click",foo);

       //appending all elements by parent and child method;
col1.append(input,button);
row.append(col1);
container.append(row);
div.append(container);
document.body.append(div);

       //writing the function (event function for the button) with using Async , Await and fetch;
async function foo(){
    let pokemonname=document.getElementById("pokemon-charecter-names").value;

       //by using template iterals, we can get the data from the userInput by the input field
    let url=`https://pokeapi.co/api/v2/pokemon/${pokemonname}`;
    let res=await fetch(url);
    let res1=await res.json();
    console.log(res1);
    for (var i in res1){
    }

    for (var i=0;i<3;i++){
      console.log(res1.moves[i]);
    }
    var div3=document.createElement("div");
           div3.innerHTML=`
  <div class="card">
  <div class="container">
  <div class="row">
      <div class="col-md-8" id="texts">
      <h4> Id :<span> ${res1.id} </span>  </h4>
      <h4> Name :<span>${res1.name} </span></h4>
      <h4> Weight :<span>${res1.weight}</span> ;   Height :<span>${res1.height} </span> </h4>
      <h4> Abilities :<span>${res1.abilities[0].ability.name}</span>, <span>${res1.abilities[1].ability.name}</span>, </h4>
      <h4>Moves :<span>${res1.moves[0].move.name}</span>, <span>${res1.moves[1].move.name}</span>, <span>${res1.moves[2].move.name}</span>, <span>${res1.moves[3].move.name}</span>, <span>${res1.moves[4].move.name}</span></h4>
      </div>
      <div class="col-md-4" >
      <img src="${res1.sprites.front_shiny}"  style="height:200px"; "width:100px"alt=""> <br>
      </div>
  </div>
</div> 
</div>`
     col1.append(div3);
     row.append(col1);
};
    
   
      
    