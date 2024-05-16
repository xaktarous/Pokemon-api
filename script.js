const pokId=document.querySelector("#pokemon-id");
const pokName=document.querySelector("#pokemon-name");
const weightt=document.querySelector("#weight");
const heightt=document.querySelector("#height");
const typess=document.querySelector("#types");
const input=document.querySelector("#search-input");
const btn=document.querySelector("#search-button");
const img=document.querySelector("#sprite");
const typee=document.querySelector("#type");
const form=document.querySelector(".form");
let arrUrl=[];
const fetchData=async()=>{
fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input.value.toLowerCase()}`).then(res =>{
  if(res.ok){
    return res.json();
  }else{
    alert("Pokemon not found");
    input.value="";
    return;
  }
 
  }).then(({id,height,name,sprites,stats,types,weight})=>{
  //  if(document.querySelectorAll("#type")!==null){
  //    let typee=Array.from(document.querySelectorAll("#type"))
  //    typee.map((type)=>{
  //      type.remove();
  //    })
  //  } 
   typess.innerHTML="";
    pokName.innerHTML=name.toUpperCase();
    pokId.innerHTML="#"+id;
    weightt.innerHTML= `weight: ${weight}`;
    heightt.innerHTML= `height: ${height}`;
    img.src=sprites.front_default;
    for(let i=0;i<types.length;i++){
     typess.innerHTML+= `<p id="type" class="${types[i].type.name}">${types[i].type.name.toUpperCase()}<p>`;
    }
 
   stats.map((stat)=>{
     
     document.getElementById(stat.stat.name).innerHTML=stat.base_stat;
     
   }) 
  }).catch(err=>console.log(err))

 
}

 
 



btn.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchData();
})


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  fetchData();
})

