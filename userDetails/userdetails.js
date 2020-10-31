const submitForm=async()=>{
    event.preventDefault();
    let userEmail=document.getElementById('userEmail').value
    localStorage.setItem('email',userEmail);
      try{
          let data={
              "userName":document.getElementById('userName').value,
              "userEmail":document.getElementById('userEmail').value,
              "userInstaId":document.getElementById('userInstaId').value,
              "userContactNum":document.getElementById('userContactNum').value
          }
          console.log(data);
            let fetcher= await fetch('https://gtquizapp.herokuapp.com/userlogin', {
              method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache',
              credentials: 'same-origin', 
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow', 
              referrerPolicy: 'no-referrer', 
              body: JSON.stringify(data) 
            });
           let fetcherData=await fetcher.json();
           if(fetcherData.status==1){
               window.location.href='../quiz/quizform.html';
           }
          }
      catch(err){
          console.log(err);
      }
}   