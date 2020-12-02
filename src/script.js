
 
 // creare un div per inserire il filmlist
 
 
  let filmList = document.createElement("div");
  filmList.setAttribute("class", "list-film");
  console.log(filmList);

     //css proprietà
  filmList.style.display ="block";
  filmList.style.boxSizing = "border-box"
  filmList.style.width = "100%";
  filmList.style.height = "auto";
  filmList.style.margin = "1px 5px 5px 5px"
  filmList.style.boxShadow = "4px 8px 14px rgba(0,0,0,0.5)";
 
   //append div nel body 
  let addChild = document.body.firstElementChild;
   addChild.insertAdjacentElement("afterend", filmList);

   //append fil-wraper in filmList
   const childWraper = document.querySelector(".film-wraper")
   filmList.append(childWraper);
///////////////////////////////////////////
   let Url = ["https://api.jsonbin.io/b/5fc4ef969abe4f6e7cad6c94/9"];

   fetch(Url)
    .then((res) => res.json())

    .then((result) => {
 let data = result.menu;
 let movieWrapper = document.querySelector(".film-wraper");
let output ="";

//render movie
 data.forEach(menu => {
    //let path = "https://m.media-amazon.com/images/M/MV5BYmJhNWMyOTUtZjgwZS00YzdjLTk1MmMtODJlOTExMDQ3MDU5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    //console.log(path)
    
    let movieUnit = `
    <div class = "movie" id="movie-1">
           <div class = "cover" id ="cover1" style= " background-image: url(${menu.poster});"></div>
           <h5 class="title1">${menu.title}</h5>
       </div>
    `;

   output+= movieUnit;
    
 });
 movieWrapper.innerHTML = output
 console.log(movieWrapper)
    });
 
    //.catch(error => console.log(error))
 
 
 //log in function
 const btn1 = document.querySelector("#button1")
 btn1.addEventListener('click', ()=>{
    const datii = document.querySelector("#log");
     if(datii.style.display=="none"){
         datii.style.display = "block"
     } else{
        datii.style.display = "none"
     }
 });
//sign up function
 const btn2 = document.querySelector("#button2")
 btn2.addEventListener('click', ()=>{
    const datii = document.querySelector("#sign");
     if(datii.style.display=="none"){
         datii.style.display = "block"
     } else{
        datii.style.display = "none"
     }
 });