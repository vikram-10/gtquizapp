const submitform=()=>{
    event.preventDefault();
    var rates = document.getElementsByName('gender');
    var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
            rate_value = rates[i].value;
    }
}
console.log(rate_value);
}
