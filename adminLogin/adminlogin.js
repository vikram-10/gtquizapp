const adminLogin=async()=>{
    event.preventDefault();
    localStorage.setItem('email',document.getElementById('adminEmail').value);
    try{
        let data={
            "adminEmail":document.getElementById('adminEmail').value,
            "adminPass":document.getElementById('adminPass').value,
        }
        console.log(data);
          let fetcher= await fetch('http://localhost:3000/adminlogin', {
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
             window.location.href='../adminDashboard/admindashboard.html';
         }
        }
    catch(err){
        console.log(err);
    }
}