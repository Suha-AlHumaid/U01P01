// {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`,disc:},
const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));

function favFunc(index) {

  portfoliWorks[index].fav = !portfoliWorks[index].fav;
console.log(portfoliWorks[index].fav, portfoliWorks[index].client);

  // localStorage.setItem("portfolio", JSON.stringify(portfoliWorks));
  // randerPortfolio();
};



const randerWork= (elem) =>{
    console.log(elem.client);
    $("#home").hide();
    $('#discPage').append(
    `<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${elem.client}</h1>
    <p>${elem.disc}</p>
    <h2 style= "font-size:1rem">Favorit It<i><a class="heart fa fa-heart-o fa-2x" aria-hidden="true" style=" padding-left: 5px;" href=""></a></i></h2></div>
    </div>
    <div class="dImg"> <img src="${elem.imgUrl2}" alt="image" class="singlePageImg"></div>
</div>`
      );
    
    
    };

    //main rander
const randerPortfolio = ()=> {
portfoliWorks.forEach((elem,i)=>{
    $('#show').append(`
    <div class="grid-item" id="portfoliWorks${i}" >
       <img class="portImg" id="work${i}" src="${elem.imgUrl}" alt="">
  
  ${elem.client}
   <i><a id="like${i}" class="myClass heart fa fa-heart"  aria-hidden="true" style=" padding-left: 5px;"></a></i>
    </div> `);
   

    //search
    $("#searchBtn").click(function(){
    const name1 = $("#searchInput").val();
    if (name1.length && name1.trim().length) {
     const name= name1.toLowerCase();
     const nameProject =elem.client.toLowerCase();
     console.log( nameProject.includes(name),elem);
     const obj = portfoliWorks.find(o => ((o.client.toLowerCase()) === name)|| (o.client.toLowerCase().includes(name)));
     $('#show').html(``);
   if (obj){
   
    $('#show').append(`
    <div class="grid-item" id="portfoliWorks${i}" >
    <div  >
       <img id="obj${i}" class="portImg" src="${obj.imgUrl}" alt="">
    </div>
    <div>${obj.client}</div>
    <div class="favorite" id="like${i}" ></div>
    </div> `);
    $(`#obj${i}`).click(()=>randerWork(obj));
   } else {
    $('#show').append(`
  <p>Soory,no result.  <a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p> `);
   }
   
    };
    });
    //end of search
    if (portfoliWorks[i].fav === false) {
      $(`#like${i}`).removeClass("myClass");
    }
    
$(`#work${i}`).click(()=>randerWork(elem));
    $(`#like${i}`).click(() => favFunc(i));
    
    //loop end

  });

};
function search1Func() {
  const name1 = $("#searchInput").val();
  if (name1.length && name1.trim().length) {
   const name= name1.toLowerCase();
  
   let obj = portfoliWorks.find(o => o.client === name1);
 if (obj){
  
 }

  }

}


// portfoliWorks[i].client
randerPortfolio();

// const randerHome = () => {
//   portfoliWorks.forEach((elem, index) => {
//     localStorage.setItem("portfolio", JSON.stringify(portfoliWorks));
//     location.replace("index.html");
//   });
  // $("#homeLink").click(randerHome);

    const searchFunc=(elem,i)=>{
    const name1 = $("#searchInput").val();
    if (name1.length && name1.trim().length) {
     const name= name1.toLowerCase();
     const nameProject =elem.client.toLowerCase();
     console.log( nameProject.includes(name),elem);
     const obj = portfoliWorks.find(o => ((o.client.toLowerCase()) === name)|| (o.client.toLowerCase().includes(name)));
     $('#show').html(``);
   if (obj){
   
    $('#show').append(`
    <div class="grid-item" id="portfoliWorks${i}" >
    <div  >
       <img id="obj${i}" class="portImg" src="${obj.imgUrl}" alt="">
    </div>
    <div>${obj.client}</div>
    <div class="favorite" id="like${i}" ></div>
    </div> `);
    $(`#obj${i}`).click(()=>randerWork(obj));
   } else {
    $('#show').append(`
  <p>Soory,no result.  <a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p> `);
   }
   
    };
  }
  