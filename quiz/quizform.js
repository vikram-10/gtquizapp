const submitform=async()=>{
    event.preventDefault();
    let userEmail=localStorage.getItem('email');
    let ansArray=[];
    try{
        for(var i=1;i<=30;i++){
            var q = document.getElementsByName(`q${i}`);
            var q_value;
        for(var j = 0; j < q.length; j++){
            if(q[j].checked){
                    q_value = q[j].value;
                    ansArray.push(`q${i}: `+q_value);
            }
        }
        if(i>25){
            let ans=document.getElementById(`q${i}`).value;
            ansArray.push(`q${i}: `+ans);
        }
        }
        console.log(ansArray);
        let fetcher= await fetch('https://gtquizapp.herokuapp.com/submitans', {
              method: 'PUT', 
              mode: 'cors', 
              cache: 'no-cache',
              headers: {
                  'userEmail':userEmail,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(ansArray)
            });
           let fetcherData=await fetcher.json();
           if(fetcherData.status==1){
            alert("Your answers have been submitted sucessfully!");
            window.location.href='../typage/typage.html';
           }
           else{
               alert("Your answers have not been submitted");
           }
    }
    catch(err){
        console.log(err);
    }
}
