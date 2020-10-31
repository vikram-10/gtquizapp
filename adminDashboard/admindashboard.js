let navbar=document.createElement('nav');
navbar.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light');
navbar.innerHTML=`    <a class="navbar-brand" href="index.html">The Guindy Times</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
  </ul>
</div>`
document.body.append(navbar);

const adminDashboard=async()=>{
    try{
          let fetcher= await fetch('https://gtquizapp.herokuapp.com/getusers', {
            method: 'GET', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
          });
         let fetcherData=await fetcher.json();
         fetcherData.forEach(element => {
            let cards=document.createElement('div');
            cards.setAttribute('class','card');
            cards.setAttribute('id','designCard');
            cards.setAttribute('style','width:18rem;');
            cards.innerHTML=`  <div class="card-body">
            <h5 class="card-title">${element.userName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.userEmail}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Insta Id: @${element.userInstaId}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${element.answers}</h6>
            </div>`
            document.body.append(cards);
         });
        }
    catch(err){
        console.log(err);
    }
}

adminDashboard();
